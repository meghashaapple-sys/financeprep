import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { CHAPTERS } from '../data/subject';
import { getReadChapters } from '../lib/storage';

export default function ChapterList() {
  const read = new Set(getReadChapters());

  return (
    <Layout title="Study Chapters" backTo="/">
      <p className="text-slate-400 mb-4">Tap a chapter to start learning. Weightage shows its share of the 100-mark exam.</p>
      <div className="flex flex-col gap-3">
        {CHAPTERS.map((ch) => (
          <Link
            key={ch.id}
            to={`/study/${ch.id}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex items-center gap-4 active:scale-[0.99]"
          >
            <div
              className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-extrabold ${
                read.has(ch.id) ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {read.has(ch.id) ? '✓' : ch.id}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-slate-50 text-[1.05em] truncate">{ch.title}</div>
              <div className="text-slate-400 text-[0.88em]">{ch.learningObjectives.length} learning objectives</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-sky-400 font-extrabold">{ch.weight}%</div>
              <div className="text-slate-500 text-[0.75em]">weight</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
