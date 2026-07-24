import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { TESTS, CHAPTERS } from '../data/subject';
import { getTestQuestions } from '../data/questions';
import { saveInProgress, loadInProgress, clearInProgress, saveResult } from '../lib/storage';
import type { TestResult } from '../types';

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h > 0 ? h + ':' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function TestRunner() {
  const { testId } = useParams();
  const id = Number(testId);
  const test = TESTS.find((t) => t.id === id);
  const nav = useNavigate();

  const questions = useMemo(() => getTestQuestions(id), [id]);

  const saved = useMemo(() => loadInProgress(id), [id]);
  const [answers, setAnswers] = useState<Record<string, number | null>>(
    () => saved?.answers ?? Object.fromEntries(questions.map((q) => [q.id, null]))
  );
  const [flagged, setFlagged] = useState<Set<string>>(() => new Set(saved?.flagged ?? []));
  const [current, setCurrent] = useState(0);
  const [remaining, setRemaining] = useState(saved?.remainingSeconds ?? (test ? test.durationMinutes * 60 : 0));
  const [showPalette, setShowPalette] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const startedAtRef = useRef(saved?.startedAt ?? new Date().toISOString());
  const submittedRef = useRef(false);

  useEffect(() => {
    if (!test) return;
    const timer = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(timer);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [test]);

  useEffect(() => {
    if (!test || submittedRef.current) return;
    saveInProgress({
      testId: id,
      answers,
      flagged: Array.from(flagged),
      startedAt: startedAtRef.current,
      remainingSeconds: remaining,
    });
  }, [answers, flagged, remaining, id, test]);

  const submit = useMemo(
    () => () => {
      if (!test || submittedRef.current) return;
      submittedRef.current = true;

      let correct = 0;
      let incorrect = 0;
      let unanswered = 0;
      const chapterMap = new Map<number, { correct: number; total: number }>();
      CHAPTERS.forEach((c) => chapterMap.set(c.id, { correct: 0, total: 0 }));

      for (const q of questions) {
        const entry = chapterMap.get(q.chapterId)!;
        entry.total += 1;
        const sel = answers[q.id];
        if (sel === null || sel === undefined) {
          unanswered += 1;
        } else if (sel === q.correctIndex) {
          correct += 1;
          entry.correct += 1;
        } else {
          incorrect += 1;
        }
      }

      const negPerWrong = test.negativeMarkingPct / 100;
      const rawScore = correct * 1 - incorrect * negPerWrong;
      const score = Math.max(0, +rawScore.toFixed(2));
      const maxScore = test.totalMarks;
      const percentage = +((score / maxScore) * 100).toFixed(2);
      const passed = percentage >= test.passPct;

      const result: TestResult = {
        testId: id,
        attemptedAt: new Date().toISOString(),
        correct,
        incorrect,
        unanswered,
        score,
        maxScore,
        percentage,
        passed,
        chapterBreakdown: Array.from(chapterMap.entries()).map(([chapterId, v]) => ({ chapterId, ...v })),
        answers: questions.map((q) => ({ questionId: q.id, selectedIndex: answers[q.id] ?? null })),
      };

      saveResult(result);
      clearInProgress(id);
      nav(`/tests/${id}/results`, { state: { result, questions } });
    },
    [test, questions, answers, id, nav]
  );

  useEffect(() => {
    if (test && remaining === 0 && !submittedRef.current) {
      submit();
    }
  }, [remaining, test, submit]);

  if (!test) {
    return (
      <Layout title="Test not found" backTo="/tests">
        <p>That test doesn't exist.</p>
      </Layout>
    );
  }

  if (questions.length < test.totalQuestions) {
    return (
      <Layout title={test.title} backTo="/tests">
        <div className="rounded-xl border border-amber-800/50 bg-amber-950/30 p-4 text-amber-200">
          This test's question bank is still being generated ({questions.length}/{test.totalQuestions} ready). Please
          check back soon.
        </div>
      </Layout>
    );
  }

  const q = questions[current];
  const answeredCount = Object.values(answers).filter((v) => v !== null && v !== undefined).length;
  const low = remaining <= 300;

  return (
    <Layout title={test.title} backTo="/tests">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className={`rounded-xl border px-3 py-2 font-mono font-extrabold text-[1.1em] ${low ? 'border-rose-700 bg-rose-950/50 text-rose-300' : 'border-slate-700 bg-slate-900 text-slate-200'}`}>
          ⏱ {formatTime(remaining)}
        </div>
        <button
          onClick={() => setShowPalette((s) => !s)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 font-bold"
        >
          {current + 1} / {questions.length} · Grid
        </button>
      </div>

      {showPalette && (
        <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-3 grid grid-cols-8 gap-2">
          {questions.map((qq, i) => {
            const isAnswered = answers[qq.id] !== null && answers[qq.id] !== undefined;
            const isFlagged = flagged.has(qq.id);
            return (
              <button
                key={qq.id}
                onClick={() => {
                  setCurrent(i);
                  setShowPalette(false);
                }}
                className={`aspect-square rounded-lg text-[0.85em] font-bold flex items-center justify-center border relative ${
                  i === current
                    ? 'border-sky-400 bg-sky-500/30 text-sky-100'
                    : isAnswered
                    ? 'border-emerald-700 bg-emerald-950/50 text-emerald-300'
                    : 'border-slate-700 bg-slate-900 text-slate-400'
                }`}
              >
                {i + 1}
                {isFlagged && <span className="absolute -top-1 -right-1 text-amber-400 text-[0.9em]">🚩</span>}
              </button>
            );
          })}
        </div>
      )}

      <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sky-400 text-[0.85em] font-bold uppercase tracking-wide">
            Q{current + 1} · Ch {q.chapterId}
          </span>
          <button
            onClick={() =>
              setFlagged((f) => {
                const next = new Set(f);
                next.has(q.id) ? next.delete(q.id) : next.add(q.id);
                return next;
              })
            }
            className={`text-[0.85em] font-bold px-2 py-1 rounded-lg ${flagged.has(q.id) ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}`}
          >
            🚩 {flagged.has(q.id) ? 'Flagged' : 'Flag'}
          </button>
        </div>
        <p className="text-[1.1em] text-slate-50 font-semibold leading-snug mb-4">{q.text}</p>
        <div className="flex flex-col gap-2.5">
          {q.options.map((opt, i) => {
            const selected = answers[q.id] === i;
            return (
              <button
                key={i}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                className={`text-left rounded-xl border p-3.5 flex items-start gap-3 ${
                  selected ? 'border-sky-400 bg-sky-500/15 text-sky-100' : 'border-slate-700 bg-slate-950/50 text-slate-200'
                }`}
              >
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center font-bold text-[0.85em] ${
                    selected ? 'border-sky-300 bg-sky-400 text-slate-900' : 'border-slate-600 text-slate-400'
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-200 font-bold disabled:opacity-40"
        >
          ← Previous
        </button>
        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
            className="flex-1 rounded-xl border border-sky-700 bg-sky-950 p-3 text-sky-200 font-bold"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setConfirmSubmit(true)}
            className="flex-1 rounded-xl border border-emerald-700 bg-emerald-950 p-3 text-emerald-200 font-bold"
          >
            Submit Test
          </button>
        )}
      </div>

      <button
        onClick={() => setConfirmSubmit(true)}
        className="w-full text-center text-slate-500 underline text-[0.9em] mb-8"
      >
        Submit anytime ({answeredCount}/{questions.length} answered)
      </button>

      {confirmSubmit && (
        <div className="fixed inset-0 z-30 bg-black/70 flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="font-extrabold text-slate-50 text-[1.15em] mb-2">Submit test?</h3>
            <p className="text-slate-300 mb-4">
              You've answered {answeredCount} of {questions.length} questions.
              {answeredCount < questions.length && ' Unanswered questions score zero (no negative marking).'}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmSubmit(false)}
                className="flex-1 rounded-xl border border-slate-700 p-3 text-slate-200 font-bold"
              >
                Keep going
              </button>
              <button
                onClick={submit}
                className="flex-1 rounded-xl border border-emerald-700 bg-emerald-950 p-3 text-emerald-200 font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
