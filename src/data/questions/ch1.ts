import type { Question } from '../../types';

// Bank size target: 15 tests x 10 Q (chapter weight = 10) = 150 unique questions.
// id convention: ch1-001 .. ch1-150, sliced sequentially into tests (test N gets ch1-{(N-1)*10+1}..{N*10}).
const bank: Question[] = [
  {
    id: 'ch1-001',
    chapterId: 1,
    text: 'A derivative contract derives its value from:',
    options: ['Government regulation', 'The value of an underlying asset', 'The broker who sells it', 'The exchange listing fee'],
    correctIndex: 1,
    explanation: 'A derivative has no independent value — its value is derived from the value of an underlying asset such as a share, index, currency or commodity.',
  },
  {
    id: 'ch1-002',
    chapterId: 1,
    text: 'Which committee recommended that derivatives be declared as "securities" so that the existing securities regulatory framework would apply to them?',
    options: ['J.R. Varma Committee', 'L.C. Gupta Committee', 'Narasimham Committee', 'Bimal Jalan Committee'],
    correctIndex: 1,
    explanation: 'The L.C. Gupta Committee (set up Nov 18, 1996) submitted its report on March 17, 1998 recommending derivatives be declared "securities".',
  },
  {
    id: 'ch1-003',
    chapterId: 1,
    text: 'The J.R. Varma Committee was primarily set up to work out:',
    options: ['Listing requirements for new exchanges', 'The operational details of the margining and risk containment system', 'Tax treatment of derivative gains', 'The design of stock indices'],
    correctIndex: 1,
    explanation: 'The J.R. Varma Committee (June 1998) worked out margining methodology, membership net-worth criteria, and real-time position monitoring requirements.',
  },
  {
    id: 'ch1-004',
    chapterId: 1,
    text: 'Exchange-traded equity derivatives commenced trading in India in:',
    options: ['January 1999', 'June 2000', 'July 2001', 'November 2001'],
    correctIndex: 1,
    explanation: 'SEBI permitted BSE and NSE to introduce the equity derivatives segment; index futures on Nifty and Sensex commenced trading in June 2000.',
  },
  {
    id: 'ch1-005',
    chapterId: 1,
    text: 'Arrange in the correct chronological order of launch in the Indian derivatives market: (i) Stock options (ii) Index futures (iii) Stock futures (iv) Index options',
    options: ['ii, iv, i, iii', 'i, ii, iii, iv', 'ii, i, iv, iii', 'iv, ii, i, iii'],
    correctIndex: 0,
    explanation: 'Order was: Index futures (Jun 2000) → Index options (Jun 2001) → Stock options (Jul 2001) → Stock futures (Nov 2001).',
  },
  {
    id: 'ch1-006',
    chapterId: 1,
    text: 'A market participant who takes a position in derivatives purely to profit from an anticipated price movement, accepting risk in the process, is called a:',
    options: ['Hedger', 'Arbitrageur', 'Speculator', 'Clearing member'],
    correctIndex: 2,
    explanation: 'Speculators/traders take a view on future price movement and accept risk in pursuit of profit, unlike hedgers who seek to reduce existing risk.',
  },
  {
    id: 'ch1-007',
    chapterId: 1,
    text: 'Which of the following best describes an arbitrageur?',
    options: [
      'Someone who reduces an existing risk exposure using derivatives',
      'Someone who buys an asset cheap in one market and simultaneously sells it at a higher price in another market for a riskless profit',
      'Someone who provides margin financing to brokers',
      'Someone who only trades in the cash market',
    ],
    correctIndex: 1,
    explanation: 'Arbitrage is the simultaneous purchase and sale of an asset in different markets to profit from a price differential, without taking on net risk.',
  },
  {
    id: 'ch1-008',
    chapterId: 1,
    text: 'Compared to over-the-counter (OTC) derivatives, exchange-traded derivatives are:',
    options: [
      'Customized to each counterparty\'s requirement',
      'Standardized, with performance guaranteed by a Clearing Corporation',
      'Not subject to any margining requirement',
      'Traded without price transparency',
    ],
    correctIndex: 1,
    explanation: 'Exchange-traded contracts are standardized and their settlement is guaranteed by a Clearing Corporation, unlike private, customized OTC contracts.',
  },
  {
    id: 'ch1-009',
    chapterId: 1,
    text: 'A swap can best be described as:',
    options: ['A single forward contract on gold', 'A series of forward contracts to exchange cash flows between two parties', 'An exchange-traded option', 'A margin call mechanism'],
    correctIndex: 1,
    explanation: 'A swap is an agreement to exchange cash flows in future according to a prearranged formula — effectively a series of forward contracts.',
  },
  {
    id: 'ch1-010',
    chapterId: 1,
    text: 'Losses arising from inadequate disaster planning, fraud, or improper execution of a trade fall under which risk category?',
    options: ['Price risk', 'Liquidity risk', 'Operational risk', 'Legal risk'],
    correctIndex: 2,
    explanation: 'Operational risk covers losses from fraud, inadequate documentation, improper execution, and inadequate systems/disaster planning.',
  },
];

export default bank;
