import type { PayoffChartBlock, PayoffPoint } from '../types';

const W = 400;
const H = 240;
const PAD = { top: 18, right: 16, bottom: 34, left: 46 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

const PROFIT = '#10b981'; // emerald — reuses the app's existing "correct/good" status color
const LOSS = '#f43f5e'; // rose — reuses the app's existing "incorrect/bad" status color
const INK_PRIMARY = '#f1f5f9'; // slate-100
const INK_MUTED = '#7c8aa5'; // slate-400/500-ish
const AXIS = '#334155'; // slate-700
const RING = '#0f172a'; // matches the card surface, used as the marker's separating ring
const LEG_COLORS = ['#38bdf8', '#c084fc']; // sky, violet — categorical, only for reference legs

/** Split a piecewise-linear series into contiguous same-sign runs, inserting exact zero-crossing points. */
function splitAtZero(points: PayoffPoint[]): { sign: 1 | -1; pts: PayoffPoint[] }[] {
  if (points.length === 0) return [];
  const segments: { sign: 1 | -1; pts: PayoffPoint[] }[] = [];
  let current: PayoffPoint[] = [points[0]];
  let sign: 1 | -1 = points[0].y >= 0 ? 1 : -1;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const pt = points[i];
    const prevSign: 1 | -1 = prev.y >= 0 ? 1 : -1;
    const ptSign: 1 | -1 = pt.y >= 0 ? 1 : -1;

    if (prevSign !== ptSign && prev.y !== 0 && pt.y !== 0) {
      const zeroX = prev.x + ((pt.x - prev.x) * (0 - prev.y)) / (pt.y - prev.y);
      const zeroPt = { x: zeroX, y: 0 };
      current.push(zeroPt);
      segments.push({ sign, pts: current });
      current = [zeroPt, pt];
      sign = ptSign;
    } else {
      current.push(pt);
    }
  }
  segments.push({ sign, pts: current });
  return segments;
}

export function PayoffChart({ block }: { block: PayoffChartBlock }) {
  const allPoints = [...block.points, ...(block.legs?.flatMap((l) => l.points) ?? [])];
  const xs = allPoints.map((p) => p.x);
  const ys = [...allPoints.map((p) => p.y), 0];

  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMinRaw = Math.min(...ys);
  const yMaxRaw = Math.max(...ys);
  const yPad = Math.max((yMaxRaw - yMinRaw) * 0.15, 1);
  const yMin = yMinRaw - yPad;
  const yMax = yMaxRaw + yPad;

  const sx = (x: number) => PAD.left + ((x - xMin) / (xMax - xMin || 1)) * PLOT_W;
  const sy = (y: number) => PAD.top + ((yMax - y) / (yMax - yMin || 1)) * PLOT_H;

  const zeroY = sy(0);
  const segments = splitAtZero(block.points);
  const toPath = (pts: PayoffPoint[]) => pts.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' ');

  const hasLegend = (block.legs?.length ?? 0) > 0;
  // Place breakeven labels on the opposite side of the zero line from the chart's vertical center of mass,
  // so they don't collide with a steeply rising/falling segment.
  const labelAbove = zeroY > PAD.top + PLOT_H * 0.55;

  return (
    <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
      <div className="mb-2">
        <div className="font-bold text-slate-50">{block.title}</div>
        {block.subtitle && <div className="text-slate-400 text-[0.85em] mt-0.5">{block.subtitle}</div>}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={block.title}>
        {/* zero baseline */}
        <line x1={PAD.left} y1={zeroY} x2={W - PAD.right} y2={zeroY} stroke={AXIS} strokeWidth={1} />
        <text x={PAD.left - 8} y={zeroY} textAnchor="end" dominantBaseline="middle" fontSize={10} fill={INK_MUTED}>
          0
        </text>

        {/* reference legs (thin dashed, neutral categorical colors) */}
        {block.legs?.map((leg, i) => (
          <polyline
            key={leg.name}
            points={toPath(leg.points)}
            fill="none"
            stroke={LEG_COLORS[i % LEG_COLORS.length]}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            opacity={0.75}
          />
        ))}

        {/* combined payoff line, colored by sign, with a soft fill down to the zero line */}
        {segments.map((seg, i) => {
          const color = seg.sign === 1 ? PROFIT : LOSS;
          const areaPts = `${sx(seg.pts[0].x)},${zeroY} ${toPath(seg.pts)} ${sx(seg.pts[seg.pts.length - 1].x)},${zeroY}`;
          return (
            <g key={i}>
              <polygon points={areaPts} fill={color} opacity={0.1} />
              <polyline points={toPath(seg.pts)} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            </g>
          );
        })}

        {/* breakeven markers */}
        {block.breakevens?.map((bx) => (
          <g key={bx}>
            <circle cx={sx(bx)} cy={zeroY} r={5} fill={INK_PRIMARY} stroke={RING} strokeWidth={3} />
            <text
              x={sx(bx)}
              y={labelAbove ? zeroY - 12 : zeroY + 16}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              fill={INK_MUTED}
            >
              BEP {bx.toLocaleString('en-IN')}
            </text>
          </g>
        ))}

        {/* x-axis label */}
        <text x={PAD.left + PLOT_W / 2} y={H - 6} textAnchor="middle" fontSize={10} fill={INK_MUTED}>
          {block.xLabel}
        </text>
      </svg>

      {hasLegend && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[0.8em]">
          {block.legs?.map((leg, i) => (
            <span key={leg.name} className="flex items-center gap-1.5 text-slate-400">
              <span className="inline-block w-3 h-0.5" style={{ backgroundColor: LEG_COLORS[i % LEG_COLORS.length] }} />
              {leg.name}
            </span>
          ))}
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="inline-block w-3 h-0.5" style={{ backgroundColor: PROFIT }} />
            Combined payoff
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-[0.85em]">
        {block.maxProfit && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: PROFIT }} />
            <span className="text-slate-300">
              Max profit: <span className="font-bold text-emerald-300">{typeof block.maxProfit.value === 'number' ? `₹${block.maxProfit.value.toLocaleString('en-IN')}` : block.maxProfit.value}</span>
              {block.maxProfit.atLabel && <span className="text-slate-500"> ({block.maxProfit.atLabel})</span>}
            </span>
          </span>
        )}
        {block.maxLoss && (
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: LOSS }} />
            <span className="text-slate-300">
              Max loss: <span className="font-bold text-rose-300">{typeof block.maxLoss.value === 'number' ? `₹${block.maxLoss.value.toLocaleString('en-IN')}` : block.maxLoss.value}</span>
              {block.maxLoss.atLabel && <span className="text-slate-500"> ({block.maxLoss.atLabel})</span>}
            </span>
          </span>
        )}
      </div>

      {block.note && <div className="text-slate-400 text-[0.85em] mt-2">{block.note}</div>}
    </div>
  );
}
