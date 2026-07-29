import type { OptionPositionCard, OptionQuadrantBlock, StrategyLeg, StrategyLegsBlock } from '../types';

function ActionBadge({ action }: { action: 'Buy' | 'Sell' }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[0.78em] font-extrabold tracking-wide ${
        action === 'Buy' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
      }`}
    >
      {action.toUpperCase()}
    </span>
  );
}

function RightBadge({ right }: { right: 'Right' | 'Obligation' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.78em] font-bold ${
        right === 'Right' ? 'bg-sky-500/15 text-sky-300' : 'bg-rose-500/15 text-rose-300'
      }`}
    >
      {right === 'Right' ? '🔓 Right — may walk away' : '🔒 Obligation — must perform'}
    </span>
  );
}

/**
 * The badge that actually answers "what happens to the STOCK". Deliberately separate from
 * optionAction: MAY/MUST encodes Right vs Obligation, BUY/SELL STOCK encodes the true
 * underlying consequence — for a short put this correctly reads "MUST BUY STOCK", even
 * though the option itself was sold.
 */
function StockConsequenceBadge({ right, stockAction }: { right: 'Right' | 'Obligation'; stockAction: 'Buy' | 'Sell' }) {
  const verb = right === 'Right' ? 'MAY' : 'MUST';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.82em] font-extrabold ${
        right === 'Right' ? 'bg-sky-500/15 text-sky-300' : 'bg-rose-500/15 text-rose-300'
      }`}
    >
      {right === 'Right' ? '🔓' : '🔒'} {verb} {stockAction.toUpperCase()} STOCK
    </span>
  );
}

function PositionCard({ card }: { card: OptionPositionCard }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="font-extrabold text-slate-50 text-[0.95em]">{card.name}</span>
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-md text-[0.72em] font-bold tracking-wide ${
            card.optionAction === 'Buy' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'
          }`}
        >
          {card.optionAction === 'Buy' ? 'BUY OPTION' : 'SELL OPTION'}
        </span>
      </div>
      <p className="text-slate-300 text-[0.82em] leading-snug italic">"{card.explainer}"</p>
      <StockConsequenceBadge right={card.right} stockAction={card.stockAction} />
      <div className="flex items-center gap-1.5 text-[0.85em]">
        <span className={card.view === 'Bullish' ? 'text-emerald-400' : 'text-rose-400'}>
          {card.view === 'Bullish' ? '↑' : '↓'}
        </span>
        <span className="text-slate-300">
          Expects price to {card.view === 'Bullish' ? 'RISE' : 'FALL'}
        </span>
      </div>
      <div className="text-slate-400 text-[0.8em]">💰 {card.premium}</div>
      <div className="border-t border-slate-800 pt-1.5 text-[0.78em] space-y-0.5">
        <div className="text-rose-300/90">Risk: {card.risk}</div>
        <div className="text-emerald-300/90">Reward: {card.reward}</div>
      </div>
    </div>
  );
}

export function OptionQuadrant({ block }: { block: OptionQuadrantBlock }) {
  return (
    <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900/40 p-4">
      <div className="font-bold text-slate-50 mb-3">{block.title}</div>
      <div className="grid grid-cols-2 gap-3">
        {block.cards.map((card) => (
          <PositionCard key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}

function LegRow({ leg, isLast }: { leg: StrategyLeg; isLast: boolean }) {
  return (
    <div className="relative pl-6">
      {!isLast && <span className="absolute left-[9px] top-7 bottom-[-14px] w-px bg-slate-700" />}
      <span
        className={`absolute left-0 top-1 w-[19px] h-[19px] rounded-full flex items-center justify-center text-[0.7em] font-extrabold ${
          leg.action === 'Buy' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
        }`}
      >
        {leg.action === 'Buy' ? '+' : '−'}
      </span>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pb-3.5">
        <ActionBadge action={leg.action} />
        <span className="font-bold text-slate-100 text-[0.92em]">{leg.instrument}</span>
        <RightBadge right={leg.right} />
        {leg.premium && <span className="text-slate-400 text-[0.8em] ml-auto">{leg.premium}</span>}
      </div>
    </div>
  );
}

export function StrategyLegsView({ block }: { block: StrategyLegsBlock }) {
  return (
    <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900/40 p-4">
      <div className="font-bold text-slate-50 mb-1">{block.title}</div>
      {block.view && (
        <div className="text-sky-300 text-[0.85em] font-semibold mb-3">🎯 {block.view}</div>
      )}
      <div className="mt-2">
        {block.legs.map((leg, i) => (
          <LegRow key={i} leg={leg} isLast={i === block.legs.length - 1} />
        ))}
      </div>
      {block.netCost && (
        <div className="border-t border-slate-800 pt-2 mt-1 text-[0.88em] font-bold text-slate-200">
          {block.netCost}
        </div>
      )}
    </div>
  );
}
