import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import { CHAPTERS, TESTS } from '../data/subject';
import { getTestQuestions } from '../data/questions';
import { getLatestResultForTest } from '../lib/storage';
import type { Question, TestResult } from '../types';

export default function TestResults() {
  const { testId } = useParams();
  const id = Number(testId);
  const test = TESTS.find((t) => t.id === id);
  const location = useLocation();
  const nav = useNavigate();
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'unanswered'>('all');

  const state = location.state as { result?: TestResult; questions?: Question[] } | null;
  const result = state?.result ?? getLatestResultForTest(id);
  const questions = state?.questions ?? getTestQuestions(id);

  if (!test || !result) {
    return (
      <Layout title="No result" backTo="/tests">
        <p className="text-slate-300 mb-4">You haven't attempted this test yet.</p>
        <button onClick={() => nav(`/tests/${id}`)} className="rounded-xl border border-sky-700 bg-sky-950 p-3 text-sky-200 font-bold w-full">
          Start test
        </button>
      </Layout>
    );
  }

  const answerMap = new Map(result.answers.map((a) => [a.questionId, a.selectedIndex]));
  const filteredQuestions = questions.filter((q) => {
    const sel = answerMap.get(q.id);
    if (reviewFilter === 'wrong') return sel !== null && sel !== undefined && sel !== q.correctIndex;
    if (reviewFilter === 'unanswered') return sel === null || sel === undefined;
    return true;
  });

  return (
    <Layout title={`${test.title} — Result`} backTo="/tests">
      <div className={`mb-6 rounded-2xl border p-5 text-center ${result.passed ? 'border-emerald-700 bg-emerald-950/40' : 'border-rose-700 bg-rose-950/40'}`}>
        <div className="text-6xl mb-2">{result.passed ? '🎉' : '📚'}</div>
        <div className={`text-[2em] font-extrabold ${result.passed ? 'text-emerald-300' : 'text-rose-300'}`}>
          {result.percentage.toFixed(1)}%
        </div>
        <div className="text-slate-300 font-bold mt-1">{result.passed ? 'PASSED' : 'NOT PASSED'} · Pass mark {test.passPct}%</div>
        <div className="text-slate-400 mt-1">
          Score {result.score.toFixed(2)} / {result.maxScore}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <SummaryCard label="Correct" value={result.correct} tone="emerald" />
        <SummaryCard label="Incorrect" value={result.incorrect} tone="rose" />
        <SummaryCard label="Unanswered" value={result.unanswered} tone="slate" />
      </div>

      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="font-bold text-slate-200 mb-3">Chapter-wise performance</div>
        <div className="flex flex-col gap-2.5">
          {result.chapterBreakdown.map((cb) => {
            const meta = CHAPTERS.find((c) => c.id === cb.chapterId);
            const pct = cb.total ? (cb.correct / cb.total) * 100 : 0;
            return (
              <div key={cb.chapterId}>
                <div className="flex justify-between text-[0.9em] mb-1">
                  <span className="text-slate-300 truncate pr-2">{meta?.title}</span>
                  <span className="text-slate-400 shrink-0">
                    {cb.correct}/{cb.total}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full ${pct >= 60 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2">
        {(['all', 'wrong', 'unanswered'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setReviewFilter(f)}
            className={`px-3 py-2 rounded-xl border text-[0.9em] font-bold capitalize ${
              reviewFilter === f ? 'border-sky-400 bg-sky-500/20 text-sky-200' : 'border-slate-700 text-slate-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {filteredQuestions.map((q) => {
          const sel = answerMap.get(q.id);
          const isCorrect = sel === q.correctIndex;
          const isUnanswered = sel === null || sel === undefined;
          return (
            <div key={q.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 text-[0.85em] font-bold">
                  Q{questions.indexOf(q) + 1} · Ch {q.chapterId}
                </span>
                <span
                  className={`text-[0.8em] font-bold px-2 py-0.5 rounded-full ${
                    isUnanswered ? 'bg-slate-700 text-slate-300' : isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                  }`}
                >
                  {isUnanswered ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect'}
                </span>
              </div>
              <p className="text-slate-50 font-semibold mb-3">{q.text}</p>
              <div className="flex flex-col gap-2 mb-3">
                {q.options.map((opt, oi) => {
                  const isThisCorrect = oi === q.correctIndex;
                  const isThisSelected = oi === sel;
                  return (
                    <div
                      key={oi}
                      className={`rounded-lg border p-2.5 text-[0.95em] flex items-center gap-2 ${
                        isThisCorrect
                          ? 'border-emerald-700 bg-emerald-950/40 text-emerald-200'
                          : isThisSelected
                          ? 'border-rose-700 bg-rose-950/40 text-rose-200'
                          : 'border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="font-bold">{String.fromCharCode(65 + oi)}.</span>
                      <span>{opt}</span>
                      {isThisCorrect && <span className="ml-auto">✓</span>}
                      {isThisSelected && !isThisCorrect && <span className="ml-auto">✗</span>}
                    </div>
                  );
                })}
              </div>
              <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3 text-slate-300 text-[0.92em]">
                <span className="font-bold text-sky-400">Why: </span>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mb-6">
        <Link to="/tests" className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-200 font-bold text-center">
          All tests
        </Link>
        {id < TESTS.length && (
          <Link to={`/tests/${id + 1}`} className="flex-1 rounded-xl border border-sky-700 bg-sky-950 p-3 text-sky-200 font-bold text-center">
            Next test →
          </Link>
        )}
      </div>
    </Layout>
  );
}

function SummaryCard({ label, value, tone }: { label: string; value: number; tone: 'emerald' | 'rose' | 'slate' }) {
  const styles = {
    emerald: 'border-emerald-800 bg-emerald-950/30 text-emerald-300',
    rose: 'border-rose-800 bg-rose-950/30 text-rose-300',
    slate: 'border-slate-700 bg-slate-900 text-slate-300',
  }[tone];
  return (
    <div className={`rounded-xl border p-3 text-center ${styles}`}>
      <div className="text-[1.6em] font-extrabold">{value}</div>
      <div className="text-[0.8em] opacity-80">{label}</div>
    </div>
  );
}
