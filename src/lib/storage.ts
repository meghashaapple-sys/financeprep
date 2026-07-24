import type { TestResult } from '../types';

const RESULTS_KEY = 'nism-study-test-results';

export function getAllResults(): TestResult[] {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? (JSON.parse(raw) as TestResult[]) : [];
  } catch {
    return [];
  }
}

export function getBestResultForTest(testId: number): TestResult | null {
  const results = getAllResults().filter((r) => r.testId === testId);
  if (results.length === 0) return null;
  return results.reduce((best, r) => (r.percentage > best.percentage ? r : best));
}

export function getLatestResultForTest(testId: number): TestResult | null {
  const results = getAllResults()
    .filter((r) => r.testId === testId)
    .sort((a, b) => new Date(b.attemptedAt).getTime() - new Date(a.attemptedAt).getTime());
  return results[0] ?? null;
}

export function saveResult(result: TestResult) {
  const results = getAllResults();
  results.push(result);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
}

const PROGRESS_KEY = 'nism-study-chapter-progress';

export function getReadChapters(): number[] {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

export function markChapterRead(chapterId: number) {
  const read = new Set(getReadChapters());
  read.add(chapterId);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array.from(read)));
}

const INPROGRESS_KEY = 'nism-study-test-inprogress-';

export interface InProgressAttempt {
  testId: number;
  answers: Record<string, number | null>;
  flagged: string[];
  startedAt: string;
  remainingSeconds: number;
}

export function saveInProgress(attempt: InProgressAttempt) {
  localStorage.setItem(INPROGRESS_KEY + attempt.testId, JSON.stringify(attempt));
}

export function loadInProgress(testId: number): InProgressAttempt | null {
  try {
    const raw = localStorage.getItem(INPROGRESS_KEY + testId);
    return raw ? (JSON.parse(raw) as InProgressAttempt) : null;
  } catch {
    return null;
  }
}

export function clearInProgress(testId: number) {
  localStorage.removeItem(INPROGRESS_KEY + testId);
}
