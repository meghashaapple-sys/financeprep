import type { Question } from '../../types';
import { CHAPTERS } from '../subject';
import ch1 from './ch1';
import ch2 from './ch2';
import ch3 from './ch3';
import ch4 from './ch4';
import ch5 from './ch5';
import ch6 from './ch6';
import ch7 from './ch7';
import ch8 from './ch8';
import ch9 from './ch9';
import ch10 from './ch10';

const BANKS: Record<number, Question[]> = { 1: ch1, 2: ch2, 3: ch3, 4: ch4, 5: ch5, 6: ch6, 7: ch7, 8: ch8, 9: ch9, 10: ch10 };

const TOTAL_TESTS = 15;

/**
 * Test N draws a fixed, non-overlapping slice per chapter: questions
 * [(N-1)*weight, N*weight) from that chapter's bank, sized 15*weight so
 * every test gets a full, non-repeating set matching the syllabus weightage.
 */
export function getTestQuestions(testId: number): Question[] {
  const questions: Question[] = [];
  for (const ch of CHAPTERS) {
    const bank = BANKS[ch.id] ?? [];
    const start = (testId - 1) * ch.weight;
    const end = testId * ch.weight;
    const slice = bank.slice(start, end);
    questions.push(...slice);
  }
  return questions;
}

export function getBankStatus() {
  return CHAPTERS.map((ch) => {
    const bank = BANKS[ch.id] ?? [];
    const required = ch.weight * TOTAL_TESTS;
    return { chapterId: ch.id, title: ch.title, have: bank.length, required };
  });
}

export function getChapterBank(chapterId: number): Question[] {
  return BANKS[chapterId] ?? [];
}
