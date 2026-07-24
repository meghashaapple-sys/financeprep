import type { ChapterMeta, TestMeta } from '../types';

export const SUBJECT = {
  code: 'NISM-Series-VIII',
  name: 'Equity Derivatives',
  fullTitle: 'NISM-Series-VIII: Equity Derivatives Certification Examination',
  workbookVersion: 'March 2026',
};

export const EXAM_CONFIG = {
  totalQuestions: 100,
  totalMarks: 100,
  durationMinutes: 120,
  negativeMarkingPct: 25,
  passPct: 60,
};

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 1,
    slug: 'basics-of-derivatives',
    title: 'Basics of Derivatives',
    weight: 10,
    learningObjectives: [
      'Meaning of derivatives and types of derivatives products',
      'History of derivatives market',
      'Significance of derivative markets',
      'Risks in derivatives trading',
    ],
  },
  {
    id: 2,
    slug: 'understanding-the-index',
    title: 'Understanding the Index',
    weight: 5,
    learningObjectives: [
      'The Index and its significance',
      'Different types of stock market indices',
      'Index management and maintenance',
      'Applications of indices',
    ],
  },
  {
    id: 3,
    slug: 'forwards-and-futures',
    title: 'Introduction to Forwards and Futures',
    weight: 20,
    learningObjectives: [
      'Meaning of forward and futures contracts',
      'Terminology related to futures contracts',
      'Payoff for a futures contract',
      'Pricing of a futures contract',
      'Applications by speculators, hedgers and arbitrageurs',
    ],
  },
  {
    id: 4,
    slug: 'introduction-to-options',
    title: 'Introduction to Options',
    weight: 20,
    learningObjectives: [
      'Concept of Options',
      'Payoffs in case of option contracts',
      'Difference between futures and options',
      'Fundamentals relating to option pricing',
      'Option Greeks and Implied volatility',
      'Analysis of options from the perspective of buyers and sellers',
    ],
  },
  {
    id: 5,
    slug: 'strategies-using-futures-and-options',
    title: 'Strategies using Equity Futures and Equity Options',
    weight: 10,
    learningObjectives: [
      'Hedging, speculation and arbitrage using futures',
      'Cash-carry and reverse cash-and-carry arbitrage',
      'Calendar spreads using futures',
      'Spread strategies, straddles and strangles',
      'Collar, butterfly spread, covered calls, protective puts',
      'Arbitrage using options (put-call parity)',
      'Delta-hedging using options',
      'Interpreting open interest and put-call ratio',
    ],
  },
  {
    id: 6,
    slug: 'trading-mechanism',
    title: 'Trading Mechanism',
    weight: 10,
    learningObjectives: [
      'Trading mechanism for futures and options',
      'Entities involved in trading',
      'Types of orders and order matching rules',
      'Selection criteria of stocks and index for F&O trading',
      'Adjustment for corporate actions',
      'Trading costs and algorithmic trading',
      'Tracking futures and options data',
    ],
  },
  {
    id: 7,
    slug: 'clearing-settlement-risk-management',
    title: 'Clearing, Settlement and Risk Management',
    weight: 10,
    learningObjectives: [
      'Types of clearing members',
      'Interoperability of clearing corporations',
      'Clearing and settlement mechanism',
      'Risk management and margining under SPAN',
      'Position limits',
      'Settlement Guarantee Fund and Investor Protection Fund',
    ],
  },
  {
    id: 8,
    slug: 'legal-and-regulatory-environment',
    title: 'Legal and Regulatory Environment',
    weight: 5,
    learningObjectives: [
      'Definitions under the Securities Contracts (Regulation) Act, 1956',
      'Functions of SEBI',
      'Regulatory framework for trading, clearing, settlement and risk management',
      'Eligibility criteria for membership on the derivatives segment',
    ],
  },
  {
    id: 9,
    slug: 'accounting-and-taxation',
    title: 'Accounting and Taxation',
    weight: 5,
    learningObjectives: [
      'Accounting treatment for derivatives contracts',
      'Taxation of derivatives transactions in securities',
    ],
  },
  {
    id: 10,
    slug: 'sales-practices-investor-protection',
    title: 'Sales Practices and Investor Protection Measures',
    weight: 5,
    learningObjectives: [
      'Understanding client risk profile and the Risk Disclosure Document',
      'Client identification and due diligence (KYC)',
      'Suspicious transaction reporting (AML/CFT)',
      'Investor grievance redressal mechanism and SCORES',
    ],
  },
];

export function buildTests(): TestMeta[] {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Practice Test ${i + 1}`,
    totalQuestions: EXAM_CONFIG.totalQuestions,
    totalMarks: EXAM_CONFIG.totalMarks,
    durationMinutes: EXAM_CONFIG.durationMinutes,
    negativeMarkingPct: EXAM_CONFIG.negativeMarkingPct,
    passPct: EXAM_CONFIG.passPct,
  }));
}

export const TESTS: TestMeta[] = buildTests();
