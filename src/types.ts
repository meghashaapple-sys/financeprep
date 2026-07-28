export interface ChapterMeta {
  id: number;
  slug: string;
  title: string;
  weight: number; // official syllabus weightage (%)
  learningObjectives: string[];
}

export type BlockType =
  | 'para'
  | 'keyterm'
  | 'callout'
  | 'formula'
  | 'example'
  | 'table'
  | 'mnemonic'
  | 'warning'
  | 'timeline'
  | 'list'
  | 'payoffChart';

export interface ParaBlock { type: 'para'; text: string }
export interface KeyTermBlock { type: 'keyterm'; term: string; definition: string }
export interface CalloutBlock { type: 'callout'; title: string; text: string; tone?: 'info' | 'success' | 'exam' }
export interface FormulaBlock { type: 'formula'; label: string; formula: string; note?: string }
export interface ExampleBlock { type: 'example'; title: string; text: string }
export interface TableBlock { type: 'table'; headers: string[]; rows: string[][] }
export interface MnemonicBlock { type: 'mnemonic'; title: string; text: string }
export interface WarningBlock { type: 'warning'; title: string; text: string }
export interface TimelineBlock { type: 'timeline'; items: { year: string; text: string }[] }
export interface ListBlock { type: 'list'; ordered?: boolean; items: string[] }

export interface PayoffPoint {
  x: number;
  y: number;
}

export interface PayoffLeg {
  name: string;
  points: PayoffPoint[];
}

/** A real profit/loss-at-expiry chart (the "hockey stick" diagram), not a text description. */
export interface PayoffChartBlock {
  type: 'payoffChart';
  title: string;
  subtitle?: string;
  xLabel: string;
  /** The main/combined payoff line, piecewise-linear, sorted by x. */
  points: PayoffPoint[];
  /** Optional thin reference lines for individual legs of a multi-leg strategy. */
  legs?: PayoffLeg[];
  /** X-values where the combined line crosses zero, marked and labeled "BEP". */
  breakevens?: number[];
  maxProfit?: { value: number | 'Unlimited'; atLabel?: string };
  maxLoss?: { value: number | 'Unlimited'; atLabel?: string };
  note?: string;
}

export type ContentBlock =
  | ParaBlock
  | KeyTermBlock
  | CalloutBlock
  | FormulaBlock
  | ExampleBlock
  | TableBlock
  | MnemonicBlock
  | WarningBlock
  | TimelineBlock
  | ListBlock
  | PayoffChartBlock;

export interface Section {
  id: string;
  heading: string;
  blocks: ContentBlock[];
}

export interface Chapter extends ChapterMeta {
  sections: Section[];
  quickRecap: string[];
}

export interface Question {
  id: string;
  chapterId: number;
  text: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface TestMeta {
  id: number;
  title: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  negativeMarkingPct: number;
  passPct: number;
}

export interface TestAnswer {
  questionId: string;
  selectedIndex: number | null;
}

export interface TestResult {
  testId: number;
  attemptedAt: string;
  correct: number;
  incorrect: number;
  unanswered: number;
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  chapterBreakdown: { chapterId: number; correct: number; total: number }[];
  answers: TestAnswer[];
}
