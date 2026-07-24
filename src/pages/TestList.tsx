import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { EXAM_CONFIG, TESTS } from '../data/subject';
import { getTestQuestions } from '../data/questions';
import { getBestResultForTest } from '../lib/storage';

export default function TestList() {
  return (
    <Layout title="Practice Tests" backTo="/">
      <div className="mb-5 rounded-2xl border border-amber-800/50 bg-amber-950/30 p-4">
        <div className="font-bold text-amber-300 mb-1">Real exam pattern</div>
        <div className="text-slate-200 text-[0.95em]">
          {EXAM_CONFIG.totalQuestions} questions · {EXAM_CONFIG.totalMarks} marks · {EXAM_CONFIG.durationMinutes} minutes ·{' '}
          {EXAM_CONFIG.negativeMarkingPct}% negative marking per wrong answer · {EXAM_CONFIG.passPct}% to pass
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {TESTS.map((t) => {
          const available = getTestQuestions(t.id).length;
          const ready = available >= t.totalQuestions;
          const best = getBestResultForTest(t.id);
          return (
            <Link
              key={t.id}
              to={ready ? `/tests/${t.id}` : '#'}
              onClick={(e) => !ready && e.preventDefault()}
              className={`rounded-2xl border p-4 flex items-center gap-4 ${
                ready ? 'border-slate-800 bg-slate-900/60 active:scale-[0.99]' : 'border-slate-800/50 bg-slate-900/20 opacity-60'
              }`}
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-slate-800 text-slate-200 font-extrabold flex items-center justify-center">
                {t.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-50 text-[1.05em]">{t.title}</div>
                <div className="text-slate-400 text-[0.85em]">
                  {ready ? `${t.totalQuestions} questions · ${t.durationMinutes} min` : `Coming soon (${available}/${t.totalQuestions} ready)`}
                </div>
              </div>
              {best && (
                <div className="shrink-0 text-right">
                  <div className={`font-extrabold ${best.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {best.percentage.toFixed(0)}%
                  </div>
                  <div className="text-slate-500 text-[0.75em]">{best.passed ? 'Passed' : 'Best'}</div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
