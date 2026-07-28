import type { ContentBlock } from '../types';
import { PayoffChart } from './PayoffChart';
import { OptionQuadrant, StrategyLegsView } from './StrategyVisuals';

function Para({ text }: { text: string }) {
  return <p className="text-[1.05em] leading-relaxed text-slate-200 mb-4">{text}</p>;
}

function KeyTerm({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="flex gap-3 items-start mb-4 rounded-xl border border-sky-800/50 bg-sky-950/40 p-4">
      <span className="mt-1 shrink-0 rounded-full bg-sky-500/20 text-sky-300 text-sm font-bold w-8 h-8 flex items-center justify-center">
        Aa
      </span>
      <div>
        <div className="font-bold text-sky-300 text-[1.05em]">{term}</div>
        <div className="text-slate-200">{definition}</div>
      </div>
    </div>
  );
}

function Callout({ title, text, tone = 'info' }: { title: string; text: string; tone?: 'info' | 'success' | 'exam' }) {
  const styles = {
    info: 'border-indigo-700/50 bg-indigo-950/40 text-indigo-200',
    success: 'border-emerald-700/50 bg-emerald-950/40 text-emerald-200',
    exam: 'border-amber-700/50 bg-amber-950/40 text-amber-200',
  }[tone];
  const icon = { info: '💡', success: '✅', exam: '🎯' }[tone];
  return (
    <div className={`mb-4 rounded-xl border p-4 ${styles}`}>
      <div className="font-bold mb-1 flex items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="text-slate-100/90">{text}</div>
    </div>
  );
}

function Formula({ label, formula, note }: { label: string; formula: string; note?: string }) {
  return (
    <div className="mb-4 rounded-xl border border-fuchsia-800/50 bg-fuchsia-950/30 p-4">
      <div className="font-bold text-fuchsia-300 mb-2 flex items-center gap-2">
        <span>🧮</span>
        <span>{label}</span>
      </div>
      <div className="font-mono text-[1.1em] bg-black/30 rounded-lg px-4 py-3 text-fuchsia-100 overflow-x-auto whitespace-pre">
        {formula}
      </div>
      {note && <div className="text-slate-300 text-[0.92em] mt-2">{note}</div>}
    </div>
  );
}

function Example({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-4 rounded-xl border border-teal-800/50 bg-teal-950/30 p-4">
      <div className="font-bold text-teal-300 mb-1 flex items-center gap-2">
        <span>📘</span>
        <span>{title}</span>
      </div>
      <div className="text-slate-100/90 whitespace-pre-line">{text}</div>
    </div>
  );
}

function TableBlock({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-slate-700">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800">
            {headers.map((h, i) => (
              <th key={i} className="p-3 font-bold text-slate-100 border-b border-slate-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-slate-900' : 'bg-slate-900/50'}>
              {row.map((cell, ci) => (
                <td key={ci} className="p-3 text-slate-200 border-b border-slate-800">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Mnemonic({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-4 rounded-xl border border-violet-700/50 bg-violet-950/40 p-4">
      <div className="font-bold text-violet-300 mb-1 flex items-center gap-2">
        <span>🧠</span>
        <span>Memory aid — {title}</span>
      </div>
      <div className="text-slate-100/90">{text}</div>
    </div>
  );
}

function Warning({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-4 rounded-xl border border-rose-700/50 bg-rose-950/40 p-4">
      <div className="font-bold text-rose-300 mb-1 flex items-center gap-2">
        <span>⚠️</span>
        <span>{title}</span>
      </div>
      <div className="text-slate-100/90">{text}</div>
    </div>
  );
}

function Timeline({ items }: { items: { year: string; text: string }[] }) {
  return (
    <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
      <ol className="relative border-l-2 border-slate-700 ml-2">
        {items.map((it, i) => (
          <li key={i} className="mb-4 ml-4 last:mb-0">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-sky-400" />
            <div className="text-sky-300 font-bold text-sm">{it.year}</div>
            <div className="text-slate-200">{it.text}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ListBlock({ ordered, items }: { ordered?: boolean; items: string[] }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`mb-4 pl-6 space-y-1.5 text-slate-200 ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </Tag>
  );
}

export function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'para':
      return <Para text={block.text} />;
    case 'keyterm':
      return <KeyTerm term={block.term} definition={block.definition} />;
    case 'callout':
      return <Callout title={block.title} text={block.text} tone={block.tone} />;
    case 'formula':
      return <Formula label={block.label} formula={block.formula} note={block.note} />;
    case 'example':
      return <Example title={block.title} text={block.text} />;
    case 'table':
      return <TableBlock headers={block.headers} rows={block.rows} />;
    case 'mnemonic':
      return <Mnemonic title={block.title} text={block.text} />;
    case 'warning':
      return <Warning title={block.title} text={block.text} />;
    case 'timeline':
      return <Timeline items={block.items} />;
    case 'list':
      return <ListBlock ordered={block.ordered} items={block.items} />;
    case 'payoffChart':
      return <PayoffChart block={block} />;
    case 'optionQuadrant':
      return <OptionQuadrant block={block} />;
    case 'strategyLegs':
      return <StrategyLegsView block={block} />;
    default:
      return null;
  }
}
