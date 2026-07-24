import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useSettings } from '../context/SettingsContext';
import { SUBJECT } from '../data/subject';

export function Layout({ children, title, backTo }: { children: ReactNode; title?: string; backTo?: string }) {
  const { fontScale, increase, decrease, reset } = useSettings();
  const nav = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1220]">
      <header className="no-print sticky top-0 z-20 border-b border-slate-800 bg-[#0b1220]/95 backdrop-blur px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => (backTo ? nav(backTo) : nav(-1))}
              aria-label="Back"
              className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-slate-200 text-xl active:scale-95"
            >
              ←
            </button>
          )}
          <div className="flex-1 min-w-0">
            <Link to="/" className="block">
              <div className="text-[0.8em] uppercase tracking-wide text-sky-400 font-bold truncate">
                {SUBJECT.code}
              </div>
              <div className="text-[1.05em] font-bold text-slate-50 truncate">{title ?? SUBJECT.name}</div>
            </Link>
          </div>
          <div className="flex items-center gap-1 shrink-0" role="group" aria-label="Text size">
            <button
              onClick={decrease}
              aria-label="Decrease text size"
              className="w-10 h-10 rounded-full bg-slate-800 text-slate-200 font-bold active:scale-95"
            >
              A-
            </button>
            <button
              onClick={reset}
              aria-label="Reset text size"
              title={`Font scale ${fontScale.toFixed(1)}x`}
              className="w-10 h-10 rounded-full bg-slate-800 text-slate-200 text-xs font-bold active:scale-95"
            >
              A
            </button>
            <button
              onClick={increase}
              aria-label="Increase text size"
              className="w-10 h-10 rounded-full bg-slate-800 text-slate-200 font-bold active:scale-95"
            >
              A+
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-5">{children}</main>
    </div>
  );
}
