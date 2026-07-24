import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ContentBlockRenderer } from '../components/ContentBlocks';
import { CHAPTERS } from '../data/subject';
import { getChapter } from '../data/chapters';
import { markChapterRead } from '../lib/storage';

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const id = Number(chapterId);
  const meta = CHAPTERS.find((c) => c.id === id);
  const chapter = getChapter(id);
  const nav = useNavigate();

  useEffect(() => {
    if (id) markChapterRead(id);
  }, [id]);

  if (!meta || !chapter) {
    return (
      <Layout title="Chapter not found" backTo="/study">
        <p>That chapter doesn't exist.</p>
      </Layout>
    );
  }

  const prev = CHAPTERS.find((c) => c.id === id - 1);
  const next = CHAPTERS.find((c) => c.id === id + 1);

  return (
    <Layout title={`Ch ${meta.id} · ${meta.title}`} backTo="/study">
      <div className="mb-5">
        <div className="text-sky-400 font-bold text-[0.85em] uppercase tracking-wide">
          Chapter {meta.id} of {CHAPTERS.length} · {meta.weight}% weight
        </div>
        <h1 className="text-[1.5em] font-extrabold text-slate-50 leading-tight mt-1">{meta.title}</h1>
      </div>

      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="font-bold text-slate-200 mb-2 flex items-center gap-2">
          <span>🎯</span>
          <span>Learning objectives</span>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-slate-300">
          {meta.learningObjectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>

      {chapter.sections.map((section) => (
        <section key={section.id} className="mb-7">
          <h2 className="text-[1.2em] font-extrabold text-slate-50 mb-3 pb-2 border-b border-slate-800">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <ContentBlockRenderer key={i} block={block} />
          ))}
        </section>
      ))}

      <div className="mb-8 rounded-2xl border border-emerald-800/50 bg-emerald-950/30 p-4">
        <div className="font-extrabold text-emerald-300 mb-2 flex items-center gap-2">
          <span>⚡</span>
          <span>Quick recap</span>
        </div>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-200">
          {chapter.quickRecap.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        {prev ? (
          <Link to={`/study/${prev.id}`} className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300">
            ← Ch {prev.id}: {prev.title}
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/study/${next.id}`}
            className="flex-1 rounded-xl border border-sky-700 bg-sky-950 p-3 text-sky-200 text-right"
          >
            Ch {next.id}: {next.title} →
          </Link>
        ) : (
          <button
            onClick={() => nav('/study')}
            className="flex-1 rounded-xl border border-emerald-700 bg-emerald-950 p-3 text-emerald-200"
          >
            Finish → All chapters
          </button>
        )}
      </div>
    </Layout>
  );
}
