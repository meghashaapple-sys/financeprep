import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SUBJECT, EXAM_CONFIG, CHAPTERS, TESTS } from '../data/subject';
import { getReadChapters, getAllResults } from '../lib/storage';

export default function Home() {
  const readCount = getReadChapters().length;
  const results = getAllResults();
  const testsTaken = new Set(results.map((r) => r.testId)).size;
  const bestPct = results.length ? Math.max(...results.map((r) => r.percentage)) : null;

  return (
    <Layout title={SUBJECT.name}>
      <div className="mb-6">
        <h1 className="text-[1.6em] font-extrabold text-slate-50 leading-tight">{SUBJECT.fullTitle}</h1>
        <p className="text-slate-400 mt-1">Workbook version: {SUBJECT.workbookVersion}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatCard label="Chapters read" value={`${readCount} / ${CHAPTERS.length}`} />
        <StatCard label="Tests taken" value={`${testsTaken} / ${TESTS.length}`} />
        <StatCard label="Best score" value={bestPct !== null ? `${bestPct.toFixed(0)}%` : '—'} />
        <StatCard label="Pass mark" value={`${EXAM_CONFIG.passPct}%`} />
      </div>

      <nav className="flex flex-col gap-4">
        <Link
          to="/study"
          className="rounded-2xl border border-sky-800 bg-gradient-to-br from-sky-950 to-slate-900 p-5 flex items-center gap-4 active:scale-[0.99]"
        >
          <div className="text-4xl">📖</div>
          <div>
            <div className="font-extrabold text-[1.15em] text-slate-50">Study Chapters</div>
            <div className="text-slate-400">{CHAPTERS.length} chapters, visual explanations & memory aids</div>
          </div>
        </Link>
        <Link
          to="/tests"
          className="rounded-2xl border border-amber-800 bg-gradient-to-br from-amber-950 to-slate-900 p-5 flex items-center gap-4 active:scale-[0.99]"
        >
          <div className="text-4xl">📝</div>
          <div>
            <div className="font-extrabold text-[1.15em] text-slate-50">Practice Tests</div>
            <div className="text-slate-400">
              {TESTS.length} full-length mock exams · {EXAM_CONFIG.totalQuestions} Qs · {EXAM_CONFIG.durationMinutes} min · {EXAM_CONFIG.negativeMarkingPct}% negative marking
            </div>
          </div>
        </Link>
      </nav>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-400 text-[0.92em]">
        Practice questions in this app are original and written to follow the official NISM-Series-VIII exam pattern and
        syllabus weightage. They are exam-prep material, not reproductions of any actual NISM examination paper.
      </div>
    </Layout>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
      <div className="text-slate-400 text-[0.85em]">{label}</div>
      <div className="text-slate-50 font-extrabold text-[1.3em]">{value}</div>
    </div>
  );
}
