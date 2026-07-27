import type { Question } from '../../types';

// Bank size target: 15 tests x 5 Q (chapter weight = 5) = 75 unique questions.
// id convention: ch9-001 .. ch9-075, sliced sequentially into tests (test N gets ch9-{(N-1)*5+1}..{N*5}).
const bank: Question[] = [
  // ---- Test 1 (001-005) ----
  {
    id: 'ch9-001',
    chapterId: 9,
    text: "At the inception of an equity index/stock futures contract, which accounting entry is passed in the client's books?",
    options: [
      'The full notional contract value is recorded as an asset',
      'No entry is passed for the contract itself — only the initial margin paid is debited to the Initial Margin Account',
      'The contract is recorded as a contingent liability equal to the lot size',
      'The premium is capitalized to the cost of investments',
    ],
    correctIndex: 1,
    explanation:
      "No entry is passed for the futures contract itself at inception since no payment is made except margin; only the initial margin paid is debited to the 'Initial Margin – Equity Index/Equity Stock Futures Account'.",
  },
  {
    id: 'ch9-002',
    chapterId: 9,
    text: 'In the books of the buyer/holder of an equity option, the premium paid at inception is:',
    options: [
      'Credited to an Income account immediately',
      'Debited to the Equity Index/Stock Option Premium Account',
      'Capitalized as a long-term investment',
      'Ignored until the option is exercised or expires',
    ],
    correctIndex: 1,
    explanation:
      "The buyer/holder debits the premium paid to the 'Equity Index/Stock Option Premium Account'; the seller/writer credits the premium received to the same-named account in their own books.",
  },
  {
    id: 'ch9-003',
    chapterId: 9,
    text: 'Gains or losses from exchange-traded derivatives transactions in securities, for a resident (non-FPI) trader, are taxed under the head:',
    options: [
      'Income from Other Sources',
      'Capital Gains',
      'Profits and Gains from Business or Profession',
      'Salary',
    ],
    correctIndex: 2,
    explanation:
      "F&O gains/losses on a recognized exchange are taxed under 'Profits and Gains from Business or Profession', further classified as speculative or non-speculative income.",
  },
  {
    id: 'ch9-004',
    chapterId: 9,
    text: 'Under the presumptive taxation scheme of Section 44AD, income from F&O trading may be declared at:',
    options: [
      '8% of turnover with expense deductions allowed',
      '6% of turnover, without any separate deduction for expenses',
      '6% of net profit only',
      'A flat amount irrespective of turnover',
    ],
    correctIndex: 1,
    explanation:
      'Under the presumptive scheme (available if turnover does not exceed ₹2 crore), gains from F&O trading are assessed at 6% of turnover with no separate deduction allowed for expenses.',
  },
  {
    id: 'ch9-005',
    chapterId: 9,
    text: 'The STT rate applicable on the sale of an option in securities (payable by the seller) is:',
    options: [
      '0.05%, on the traded price',
      '0.25%, on the strike price',
      '0.15%, on the option premium',
      '0.1%, on the settlement price',
    ],
    correctIndex: 2,
    explanation: 'STT on sale of an option in securities is 0.15%, computed on the option premium, and is payable by the seller.',
  },

  // ---- Test 2 (006-010) ----
  {
    id: 'ch9-006',
    chapterId: 9,
    text: 'Under AS-11, when a forward contract is taken for the purpose of hedging an existing exposure, the premium or discount on the contract is:',
    options: [
      'Recognized fully in the Profit & Loss account at inception',
      'Amortized over the life of the contract',
      'Permanently ignored for accounting purposes',
      "Adjusted directly against the client's capital account",
    ],
    correctIndex: 1,
    explanation:
      'For a hedging forward contract, AS-11 requires the premium/discount (difference between the spot rate and forward rate) to be amortized as expense/income over the life of the contract.',
  },
  {
    id: 'ch9-007',
    chapterId: 9,
    text: 'In the books of the seller/writer of an equity option, the premium received at inception is:',
    options: [
      'Credited to the Equity Index/Stock Option Premium Account',
      'Debited as an immediate expense',
      'Held in a suspense account until the financial year-end',
      'Recognized fully as income only on the date of sale',
    ],
    correctIndex: 0,
    explanation:
      "The seller/writer credits the premium received to the 'Equity Index/Stock Option Premium Account'; it is recognized as income only at final settlement, not immediately.",
  },
  {
    id: 'ch9-008',
    chapterId: 9,
    text: 'Prior to Financial Year 2005-06, transactions in derivatives were generally treated, for income-tax purposes, as:',
    options: [
      'Non-speculative business income',
      'Speculative transactions under Section 43(5)',
      'Exempt income',
      'Capital gains',
    ],
    correctIndex: 1,
    explanation:
      'Before the Finance Act 2005 amendment, Section 43(5) treated derivative transactions (settled otherwise than by delivery) as speculative, restricting loss set-off to speculative income only.',
  },
  {
    id: 'ch9-009',
    chapterId: 9,
    text: 'The presumptive taxation scheme under Section 44AD for F&O trading is available only if:',
    options: [
      'The trader is a Foreign Portfolio Investor',
      'Total turnover does not exceed ₹2 crore',
      'No Securities Transaction Tax has been paid',
      'Turnover exceeds ₹10 crore',
    ],
    correctIndex: 1,
    explanation: 'The presumptive scheme under Section 44AD can be opted for only if the total F&O turnover for the year does not exceed ₹2 crore.',
  },
  {
    id: 'ch9-010',
    chapterId: 9,
    text: 'Where an option in securities is exercised, Securities Transaction Tax is payable by the:',
    options: [
      'Seller, at 0.15% of the premium',
      'Purchaser, at 0.15% of the settlement price',
      'Purchaser, at 0.05% of the strike price',
      'Both seller and purchaser equally, at 0.1% each',
    ],
    correctIndex: 1,
    explanation: 'Where an option is exercised, STT of 0.15% is levied on the settlement price and is payable by the purchaser.',
  },

  // ---- Test 3 (011-015) ----
  {
    id: 'ch9-011',
    chapterId: 9,
    text: 'For a forward contract entered into purely for trading/speculation, AS-11 requires that the premium or discount be treated as follows:',
    options: [
      'Amortized evenly over the tenure of the contract',
      'Capitalized as part of the cost of the underlying asset',
      'No premium or discount is separately recognized',
      'Recognized as a contingent asset',
    ],
    correctIndex: 2,
    explanation:
      'For speculative forward contracts, no premium or discount is separately recognized; instead, the year-end gain/loss versus the current forward rate for the remaining maturity is taken to P&L.',
  },
  {
    id: 'ch9-012',
    chapterId: 9,
    text: 'In the balance sheet of a client with an open equity futures position, the Initial Margin – Equity Index/Stock Futures Account is shown under the head:',
    options: ['Current Liabilities', 'Fixed Assets', 'Current Assets', 'Contingent Liabilities'],
    correctIndex: 2,
    explanation: "The balance in the Initial Margin account is shown separately under 'Current Assets' at the balance sheet date.",
  },
  {
    id: 'ch9-013',
    chapterId: 9,
    text: 'The Finance Act, 2005 amended Section 43(5) of the Income-tax Act to:',
    options: [
      'Treat all derivative transactions as speculative regardless of the exchange used',
      'Exclude derivative transactions carried out on a recognized stock exchange from the definition of a speculative transaction',
      'Abolish Securities Transaction Tax',
      'Introduce the presumptive taxation scheme for the first time',
    ],
    correctIndex: 1,
    explanation:
      "The 2005 amendment to Section 43(5) excluded exchange-traded derivative transactions from the definition of 'speculative transaction', making F&O gains/losses non-speculative business income.",
  },
  {
    id: 'ch9-014',
    chapterId: 9,
    text: 'A tax audit under Section 44AB is mandatory for an F&O trader, regardless of profit or loss, once turnover exceeds:',
    options: ['₹1 crore', '₹2 crore', '₹5 crore', '₹10 crore'],
    correctIndex: 3,
    explanation: 'If F&O turnover exceeds ₹10 crore, a tax audit under Section 44AB(a) is mandatory irrespective of profit or loss.',
  },
  {
    id: 'ch9-015',
    chapterId: 9,
    text: 'The STT rate applicable on the sale of a futures contract in securities (payable by the seller) is:',
    options: ['0.15%, on the traded price', '0.1%, on the notional value', '0.05%, on the traded price', '0.025%, on the premium'],
    correctIndex: 2,
    explanation: 'STT on the sale of a futures contract in securities is 0.05% of the actual traded price, payable by the seller.',
  },

  // ---- Test 4 (016-020) ----
  {
    id: 'ch9-016',
    chapterId: 9,
    text: 'Under AS-11, for a forward contract taken for hedging, the exchange difference between the value on the reporting date and the value on the previous reporting date/inception is:',
    options: [
      "Deferred until the contract's maturity date",
      'Recognized in the Profit & Loss statement of the year in which it arises',
      'Adjusted directly against the general reserve',
      'Ignored on grounds of prudence',
    ],
    correctIndex: 1,
    explanation: 'The exchange difference on a hedging forward contract is recognized in the P&L statement of the year in which it arises, per AS-11.',
  },
  {
    id: 'ch9-017',
    chapterId: 9,
    text: 'Payments or receipts on account of daily (mark-to-market) settlement of an equity futures contract are debited or credited to:',
    options: [
      'The Initial Margin Account',
      'The Provision for Loss on Options Account',
      'The Mark-to-Market Margin Account',
      'The Contract Note Register',
    ],
    correctIndex: 2,
    explanation:
      "Daily settlement payments/receipts on futures are debited/credited to the 'Mark-to-Market Margin – Equity Index/Equity Stock Futures Account'.",
  },
  {
    id: 'ch9-018',
    chapterId: 9,
    text: 'At the balance sheet date, a buyer/holder of an open equity option position should create a provision when:',
    options: [
      'The prevailing premium exceeds the premium originally paid',
      'The premium paid exceeds the premium prevailing on the balance sheet date',
      'The option is deep in-the-money',
      'In all cases, irrespective of price movement',
    ],
    correctIndex: 1,
    explanation:
      'Under the prudence concept, the buyer/holder provides for the excess of the premium paid over the premium prevailing on the balance sheet date; an unrealized gain (opposite case) is ignored.',
  },
  {
    id: 'ch9-019',
    chapterId: 9,
    text: 'If F&O turnover is between ₹2 crore and ₹10 crore and the trader has NOT opted for the presumptive scheme under Section 44AD, a tax audit is required if:',
    options: [
      'Profits exceed 6% of turnover',
      'The trader has filed the return after the due date',
      'Profits are less than 6% of turnover',
      'The turnover is entirely through digital transactions',
    ],
    correctIndex: 2,
    explanation: 'In the ₹2–10 crore turnover band, without opting for the presumptive scheme, a tax audit is required if profits are below 6% of turnover.',
  },
  {
    id: 'ch9-020',
    chapterId: 9,
    text: 'Where a derivative contract in securities is settled by physical delivery of shares, STT is charged:',
    options: [
      'At the option rate of 0.15%, payable by the seller only',
      'At the rate applicable to delivery-based equity transactions (0.1%), payable by both buyer and seller',
      'STT is not applicable to physically settled derivative contracts',
      'At the futures rate of 0.05%, payable by the seller only',
    ],
    correctIndex: 1,
    explanation:
      'Where settlement is by actual delivery of shares, the transaction is treated like a delivery-based equity trade — STT of 0.1% applies, payable by both the seller and the purchaser.',
  },

  // ---- Test 5 (021-025) ----
  {
    id: 'ch9-021',
    chapterId: 9,
    text: 'For a forward contract held for trading/speculation, the year-end gain or loss under AS-11 is computed as the difference between:',
    options: [
      'The spot rate at inception and the spot rate at year-end',
      'The contracted rate (or last valuation rate) and the forward rate now available for the remaining maturity',
      'The strike price and the market price',
      'The premium paid and the premium prevailing',
    ],
    correctIndex: 1,
    explanation:
      'For speculative forwards, the gain/loss is the difference between the contract rate (or prior year-end valuation rate) and the forward rate currently available for the remaining maturity period.',
  },
  {
    id: 'ch9-022',
    chapterId: 9,
    text: 'On final settlement or squaring-up of an equity index futures contract, the resulting profit or loss is recognized by a corresponding debit/credit to:',
    options: [
      'The Mark-to-Market Margin Account',
      'The Bank Account directly, bypassing any margin account',
      'The Provision for Loss on Options Account',
      'The Deposit for Initial Margin Account only',
    ],
    correctIndex: 0,
    explanation: 'Profit/loss on final settlement or squaring-up is recognized in P&L via a corresponding debit/credit to the Mark-to-Market Margin Account.',
  },
  {
    id: 'ch9-023',
    chapterId: 9,
    text: 'At the balance sheet date, a seller/writer of an open equity option position should create a provision when:',
    options: [
      'The premium received exceeds the premium prevailing on the balance sheet date',
      'The premium prevailing on the balance sheet date exceeds the premium received',
      'The option is out-of-the-money',
      'Never, since the writer has already received the premium',
    ],
    correctIndex: 1,
    explanation:
      'The writer provides for the excess of the prevailing premium over the premium received (an anticipated loss); an unrealized gain to the writer is not recognized, per prudence.',
  },
  {
    id: 'ch9-024',
    chapterId: 9,
    text: 'A loss from a non-speculative F&O trading business can be set off, in the same year, against:',
    options: [
      'Only speculative business income',
      'No other income under any circumstances',
      'Any other head of income except salary income',
      'Only long-term capital gains',
    ],
    correctIndex: 2,
    explanation: 'Since Finance Act 2005, non-speculative F&O losses can be set off against any other income of the year, except salary income.',
  },
  {
    id: 'ch9-025',
    chapterId: 9,
    text: 'For the purpose of STT computation, a futures trade (other than on physical settlement) is valued at:',
    options: ['The strike price', 'The notional lot value', 'The option premium', 'The actual traded price'],
    correctIndex: 3,
    explanation: 'For STT purposes, each futures trade is valued at the actual traded price, and the applicable STT rate is applied to that value.',
  },

  // ---- Test 6 (026-030) ----
  {
    id: 'ch9-026',
    chapterId: 9,
    text: 'Profit or loss arising on cancellation or renewal of a forward contract is, under AS-11:',
    options: [
      'Recognized in the Profit & Loss account of the year in which it arises, whether the contract is for hedging or speculation',
      'Recognized only if the contract was for hedging',
      'Deferred and amortized over the remaining original tenure',
      'Never recognized in the Profit & Loss account',
    ],
    correctIndex: 0,
    explanation: 'Whether a forward contract is for hedging or trading/speculation, profit or loss on its cancellation or renewal is recognized in the P&L of the year it arises.',
  },
  {
    id: 'ch9-027',
    chapterId: 9,
    text: 'Where a client has provided a bank guarantee, instead of paying initial margin in cash, for an equity futures contract, the correct accounting treatment is:',
    options: [
      'Debit Initial Margin Account and credit Bank Guarantee Payable Account',
      'Record it as a contingent asset in the books',
      'No accounting entry is passed; a disclosure is made in the notes to the financial statements',
      'Capitalize the guarantee amount as an investment',
    ],
    correctIndex: 2,
    explanation: 'Where initial margin is met via bank guarantee or lodged securities rather than cash, no accounting entry is required — only a disclosure in the notes to accounts.',
  },
  {
    id: 'ch9-028',
    chapterId: 9,
    text: 'On exercise of a cash-settled equity index option, the buyer/holder recognizes as income:',
    options: [
      'The full strike price',
      'The premium paid, in full',
      'The favourable difference between the final settlement price and the strike price',
      'No income is ever recognized by the buyer',
    ],
    correctIndex: 2,
    explanation:
      'On exercise, the buyer/holder of a cash-settled option recognizes the favourable difference between the final settlement price and the strike price as income; the premium paid is separately expensed.',
  },
  {
    id: 'ch9-029',
    chapterId: 9,
    text: 'Unabsorbed non-speculative F&O business losses can be carried forward for a maximum of:',
    options: ['2 assessment years', '4 assessment years', '8 assessment years', 'Indefinitely, with no time limit'],
    correctIndex: 2,
    explanation: 'Non-speculative business losses (including from F&O trading) can be carried forward for 8 assessment years and set off against non-speculative business income of those years.',
  },
  {
    id: 'ch9-030',
    chapterId: 9,
    text: 'For tax-audit purposes, F&O turnover is computed as:',
    options: [
      'The gross notional value of all contracts bought and sold during the year',
      'The absolute value of profit/loss on each settled trade, plus premium received on options sold, plus the differential on exercised options',
      'Only the net profit or loss for the entire year',
      'Only the total brokerage and STT paid during the year',
    ],
    correctIndex: 1,
    explanation: 'F&O turnover for tax-audit thresholds is computed on an absolute profit/loss basis (plus option premiums received and differentials on exercise), not on notional contract value.',
  },

  // ---- Test 7 (031-035) ----
  {
    id: 'ch9-031',
    chapterId: 9,
    text: 'When more than one open futures contract in the same series is squared up together, the contract price used to compute profit/loss on the squared-up position is determined using:',
    options: [
      'The First-In-First-Out (FIFO) method',
      'The weighted average method',
      'The highest contract price among the open positions',
      'The Last-In-First-Out (LIFO) method',
    ],
    correctIndex: 1,
    explanation: 'Where multiple contracts of the same series are outstanding at the time of squaring up, the weighted average method is used to determine the contract price for computing profit/loss.',
  },
  {
    id: 'ch9-032',
    chapterId: 9,
    text: 'On exercise of a cash-settled equity index option, the seller/writer recognizes:',
    options: [
      'The adverse difference between the final settlement price and the strike price, as a loss',
      'No entry, since options are executory until exercised',
      'The premium received, as a loss',
      'The strike price, as a liability',
    ],
    correctIndex: 0,
    explanation: 'On exercise, the seller/writer recognizes the adverse difference between the final settlement price and the strike price as a loss (the premium received was already recognized as income).',
  },
  {
    id: 'ch9-033',
    chapterId: 9,
    text: 'For a Foreign Portfolio Investor (FPI), gains or losses on derivative transactions carried out on a recognized stock exchange are taxable under the head:',
    options: ['Profits and Gains from Business or Profession', 'Capital Gains', 'Income from Other Sources', 'Exempt income'],
    correctIndex: 1,
    explanation: "Unlike resident traders, FPIs' gains/losses from exchange-traded derivatives are taxed under 'Capital Gains', not as business income.",
  },
  {
    id: 'ch9-034',
    chapterId: 9,
    text: 'If F&O turnover is between ₹2 crore and ₹10 crore, a tax audit is NOT required, regardless of profit or loss, when:',
    options: [
      'Less than 50% of transactions are digital',
      'The trader is registered as a company',
      'More than 95% of the transactions are carried out digitally',
      'STT has not been paid on any transaction',
    ],
    correctIndex: 2,
    explanation: 'In the ₹2–10 crore turnover band, if more than 95% of transactions are digital, a tax audit is not required regardless of profit or loss.',
  },
  {
    id: 'ch9-035',
    chapterId: 9,
    text: 'STT payable by a clearing member on derivatives transactions is computed as:',
    options: [
      'A fixed annual fee set by the exchange',
      'The sum total of STT payable by all trading members clearing under that clearing member',
      "A flat percentage of the clearing member's net worth",
      "Only the STT on the clearing member's own proprietary trades",
    ],
    correctIndex: 1,
    explanation: "The clearing member's STT liability aggregates the STT payable by all trading members clearing under it, each of whose liability in turn aggregates their clients' STT.",
  },

  // ---- Test 8 (036-040) ----
  {
    id: 'ch9-036',
    chapterId: 9,
    text: 'A company holding a foreign-currency export receivable enters into a forward contract to lock in the exchange rate on that receivable. Under AS-11, this forward contract is classified as one for:',
    options: ['Arbitrage', 'Trading', 'Speculation', 'Hedging'],
    correctIndex: 3,
    explanation: "Since the forward contract offsets an existing underlying exposure (the export receivable), it is a hedging contract — its premium/discount is amortized over the contract's life.",
  },
  {
    id: 'ch9-037',
    chapterId: 9,
    text: 'On exercise of a delivery-settled call option, the buyer/holder of the shares records the transaction by:',
    options: [
      'Crediting the Equity Shares Account and debiting Bank, at market price',
      'Debiting the Equity Shares Account and crediting Bank, at the strike price',
      'Debiting Bank and crediting the Option Premium Account only',
      'No entry, since delivery settlement bypasses accounting',
    ],
    correctIndex: 1,
    explanation: 'On exercise of a delivery-settled call, the buyer receives shares — debiting the Equity Shares Account and crediting Bank at the strike price.',
  },
  {
    id: 'ch9-038',
    chapterId: 9,
    text: 'Which of the following statements about the taxation of F&O transactions is FALSE?',
    options: [
      'Since the Finance Act 2005 amendment, F&O losses on a recognized exchange can only be set off against speculative income',
      'STT paid on derivative transactions is allowed as a deduction under the Income-tax Act',
      'F&O losses can be carried forward for 8 assessment years if the return is filed on time',
      "FPIs' derivative gains/losses on a recognized exchange are taxed as capital gains",
    ],
    correctIndex: 0,
    explanation:
      'This statement is false — after the 2005 amendment to Section 43(5), F&O transactions on a recognized exchange are non-speculative, so their losses can be set off against any income except salary, not just speculative income.',
  },
  {
    id: 'ch9-039',
    chapterId: 9,
    text: "A trader's F&O turnover for the year is ₹1.5 crore and she has not opted for the presumptive scheme under Section 44AD. Is a tax audit mandatory solely on account of turnover?",
    options: [
      'Yes, a tax audit is always mandatory above ₹1 crore turnover',
      'No — turnover is below the ₹2 crore threshold, so a turnover-based audit trigger under Section 44AB does not apply on this ground alone',
      'Yes, because she has not opted for the presumptive scheme',
      'Only if she is a Foreign Portfolio Investor',
    ],
    correctIndex: 1,
    explanation:
      'Tax-audit triggers apply once turnover crosses ₹2 crore (subject to the profit/digital-transaction conditions) or ₹10 crore outright. Below ₹2 crore, this ground for a mandatory audit does not arise.',
  },
  {
    id: 'ch9-040',
    chapterId: 9,
    text: 'Which of the following statements about STT on derivatives is FALSE?',
    options: [
      'STT is applicable on all sell transactions for both futures and option contracts',
      'STT on the sale of a futures contract is charged at the same rate as on the sale of an option',
      'The exchange collects and remits STT to the Government',
      'STT on an exercised option is levied on the settlement price',
    ],
    correctIndex: 1,
    explanation: 'This is false — futures sale attracts STT of 0.05%, while option sale (and exercise) attracts STT of 0.15%; the rates are not the same.',
  },

  // ---- Test 9 (041-045) ----
  {
    id: 'ch9-041',
    chapterId: 9,
    text: 'Which of the following statements about AS-11 accounting for forward contracts is FALSE?',
    options: [
      'The premium/discount on a speculative forward contract is amortized over its life',
      "The exchange difference on a hedging forward contract is recognized in that year's P&L",
      'Profit/loss on cancellation or renewal is recognized in the P&L of the year it arises',
      'For a speculative forward, the year-end gain/loss reflects the differential over the remaining maturity',
    ],
    correctIndex: 0,
    explanation: 'This statement is false — amortization of premium/discount over the contract\'s life applies to hedging forward contracts, not speculative ones.',
  },
  {
    id: 'ch9-042',
    chapterId: 9,
    text: 'A client fails to pay the amount due on daily settlement of a futures position and the broker closes out the position. The unpaid shortfall is:',
    options: [
      'Written off entirely by the broker as a bad debt',
      "Charged to the exchange's Settlement Guarantee Fund with no client liability",
      "Adjusted against the client's initial margin, with any remaining shortfall payable by the client",
      'Carried forward indefinitely without adjustment',
    ],
    correctIndex: 2,
    explanation: "On default, the unpaid amount is first adjusted against the client's initial margin; any excess shortfall beyond the margin remains payable by the client.",
  },
  {
    id: 'ch9-043',
    chapterId: 9,
    text: "Section 43(5), as it stood before the 2005 amendment, defined a 'speculative transaction' as one:",
    options: [
      'Exceeding ₹1 crore in contract value',
      'Executed on an unrecognized stock exchange only',
      'Periodically or ultimately settled otherwise than by actual delivery or transfer of the commodity or stock',
      'That resulted in a loss to the assessee',
    ],
    correctIndex: 2,
    explanation: 'The pre-2005 definition under Section 43(5) covered any contract settled otherwise than by actual delivery — which captured most F&O trades, as they are typically cash-settled.',
  },
  {
    id: 'ch9-044',
    chapterId: 9,
    text: "A trader's F&O turnover is ₹12 crore for the year, and he made a profit equal to 10% of turnover. Is a tax audit required?",
    options: [
      'No, since his profit exceeds 6% of turnover',
      'No, since he can opt for the presumptive taxation scheme',
      'Yes — turnover exceeding ₹10 crore mandates a tax audit regardless of profit or loss',
      'Only if he is registered as a company',
    ],
    correctIndex: 2,
    explanation:
      'Once turnover exceeds ₹10 crore, a tax audit under Section 44AB(a) is mandatory irrespective of the profit percentage or presumptive-scheme eligibility (which in any case is capped at ₹2 crore turnover).',
  },
  {
    id: 'ch9-045',
    chapterId: 9,
    text: 'A trader sells one lot of a stock option with total premium value of ₹2,00,000, and the option is not exercised. What STT is payable on this sale?',
    options: ['₹100', '₹200', '₹300', '₹500'],
    correctIndex: 2,
    explanation: 'STT on sale of an option is 0.15% of the premium: 0.15% × ₹2,00,000 = ₹300.',
  },

  // ---- Test 10 (046-050) ----
  {
    id: 'ch9-046',
    chapterId: 9,
    text: 'AS-11 primarily prescribes the accounting treatment for:',
    options: [
      "Equity index futures margin accounting in the client's books",
      'Securities Transaction Tax computation',
      'Foreign exchange forward contracts, distinguishing hedging from trading/speculative use',
      'Presumptive taxation of derivative income',
    ],
    correctIndex: 2,
    explanation: 'AS-11 deals with the effects of changes in foreign exchange rates, including the accounting for forward exchange contracts, split between hedging and speculative use.',
  },
  {
    id: 'ch9-047',
    chapterId: 9,
    text: 'The number of open futures contracts (open interest) not settled as of the balance sheet date must be disclosed:',
    options: [
      'Only in aggregate, without distinguishing long and short positions',
      'Separately for long and short positions, index/stock-wise',
      'Only if the client is a corporate entity',
      'Only if the position resulted in a loss',
    ],
    correctIndex: 1,
    explanation: 'Disclosure requirements call for open interest (contracts and units) to be shown separately for long and short positions, for each equity index/stock futures contract.',
  },
  {
    id: 'ch9-048',
    chapterId: 9,
    text: "When a client holds multiple open options on the same stock at different strike prices, the provision for loss in the writer's/buyer's books is computed by:",
    options: [
      'Netting profit/loss on bought and sold positions of that stock together, and providing only if the net result is a loss',
      'Making a separate, un-netted provision for every individual strike price',
      'Providing only for the single largest open position',
      'Never netting positions across strike prices',
    ],
    correctIndex: 0,
    explanation: 'Profit/loss on bought and sold positions of each stock/index are netted; a provision is created only where the net result is a loss, and a net gain is ignored under prudence.',
  },
  {
    id: 'ch9-049',
    chapterId: 9,
    text: 'A trader has F&O turnover of ₹4 crore, has not opted for presumptive taxation, reports profit equal to 4% of turnover, and has 60% of transactions in digital mode. Is a tax audit required?',
    options: [
      'No audit is needed under any circumstance',
      'Yes — turnover is in the ₹2–10 crore band, profit is below 6%, and digital transactions are below the 95% threshold',
      'Audit is required only because turnover exceeds ₹10 crore',
      "Audit is entirely optional at the trader's discretion",
    ],
    correctIndex: 1,
    explanation: 'In the ₹2–10 crore band, without the presumptive scheme, a tax audit is triggered when profit is below 6% of turnover and digital transactions do not exceed 95%.',
  },
  {
    id: 'ch9-050',
    chapterId: 9,
    text: 'A trader sells a futures contract with a traded value of ₹10,00,000. What STT is payable on this sale?',
    options: ['₹100', '₹500', '₹1,000', '₹1,500'],
    correctIndex: 1,
    explanation: 'STT on sale of a futures contract is 0.05% of the traded value: 0.05% × ₹10,00,000 = ₹500.',
  },

  // ---- Test 11 (051-055) ----
  {
    id: 'ch9-051',
    chapterId: 9,
    text: 'A treasury desk, with no underlying currency exposure, enters into a forward contract purely to profit from an anticipated exchange rate move. Under AS-11, this contract is treated as one for:',
    options: ['Hedging', 'Trading/speculation', 'Arbitrage settlement', 'Investment'],
    correctIndex: 1,
    explanation: 'In the absence of an underlying exposure being offset, the forward contract is a trading/speculative contract — no premium/discount amortization; the full year-end differential hits P&L.',
  },
  {
    id: 'ch9-052',
    chapterId: 9,
    text: 'On settlement of an equity index futures contract, the release of the initial margin previously paid is recorded by:',
    options: [
      'Debiting the Mark-to-Market Margin Account and crediting Bank',
      'Debiting Bank/Deposit Account and crediting the Initial Margin Account',
      'Debiting Profit & Loss Account and crediting Bank',
      'No entry is passed on release of margin',
    ],
    correctIndex: 1,
    explanation: 'On settlement, the initial margin is released — Bank/Deposit Account is debited and the Initial Margin Account is credited to close it out.',
  },
  {
    id: 'ch9-053',
    chapterId: 9,
    text: 'The accounting treatment for equity stock options at inception, on daily margin movements, and at the balance sheet date, compared with cash-settled equity index options, is:',
    options: [
      'Completely different from the outset',
      'Identical — the treatments diverge only at final settlement/exercise',
      'Applicable only where the option is cash-settled',
      'Not codified under any guidance note',
    ],
    correctIndex: 1,
    explanation:
      'ICAI guidance treats equity stock options the same as equity index options at inception, margin accounting, and the balance sheet date; the treatment differs only at final settlement if physical delivery occurs.',
  },
  {
    id: 'ch9-054',
    chapterId: 9,
    text: 'An individual trades F&O on a recognized stock exchange and incurs a loss for the year. He also has salary income and interest income in the same year. Against which of these can the F&O loss be set off in that year?',
    options: [
      'Salary income only',
      'Both salary and interest income',
      'Interest income only, not salary income',
      'Neither — F&O losses cannot be set off in the same year',
    ],
    correctIndex: 2,
    explanation:
      'Non-speculative F&O business losses can be set off against any other head of income in the same year, except salary income — so here, only the interest income qualifies.',
  },
  {
    id: 'ch9-055',
    chapterId: 9,
    text: 'Which of the following is TRUE about the applicability of Securities Transaction Tax on F&O trades?',
    options: [
      'STT is applicable only on buy transactions',
      'STT is applicable on all sell transactions for both futures and option contracts',
      'STT applies equally to both buy and sell sides for futures contracts',
      'STT does not apply to index derivatives',
    ],
    correctIndex: 1,
    explanation: 'As per exchange procedure, STT is applicable on all sell transactions for both futures and options contracts (with the additional exercise-day levy on purchasers of exercised options).',
  },

  // ---- Test 12 (056-060) ----
  {
    id: 'ch9-056',
    chapterId: 9,
    text: 'Which of the following is common to BOTH hedging and trading/speculative forward contracts under AS-11?',
    options: [
      'The premium/discount is always amortized over the contract\'s life',
      'Profit or loss on cancellation or renewal of the contract is recognized in the P&L of the year it arises',
      'No exchange difference is ever recognized',
      'Neither type of contract requires any year-end valuation',
    ],
    correctIndex: 1,
    explanation: 'Regardless of classification, profit/loss on cancellation or renewal of a forward contract is recognized in the P&L of the year in which it arises.',
  },
  {
    id: 'ch9-057',
    chapterId: 9,
    text: 'A client pays ₹40,000 as initial margin on a stock futures contract. The exchange subsequently calls additional margin of ₹6,000 due to higher volatility. The correct entry for the additional margin is:',
    options: [
      'Debit Bank ₹6,000, Credit Initial Margin Account ₹6,000',
      'Debit Initial Margin Account ₹6,000, Credit Bank ₹6,000',
      'Debit Profit & Loss Account ₹6,000, Credit Bank ₹6,000',
      'No entry, since additional margin is disclosed only in notes',
    ],
    correctIndex: 1,
    explanation: 'Additional margin paid is accounted for the same way as initial margin: debit the Initial Margin Account and credit Bank (or the margin deposit account).',
  },
  {
    id: 'ch9-058',
    chapterId: 9,
    text: 'A trader writes (sells) a call option and receives a premium of ₹5,000. On the balance sheet date, the prevailing premium for an identical option is ₹7,000. What provision should be made in the writer\'s books?',
    options: [
      'No provision is needed',
      'A provision of ₹5,000',
      'A provision of ₹2,000, being the excess of the prevailing premium over the premium received',
      'A provision of ₹7,000',
    ],
    correctIndex: 2,
    explanation: 'The writer provides for the excess of the prevailing premium (₹7,000) over the premium received (₹5,000) — i.e., ₹2,000 — as an anticipated loss, per the prudence concept.',
  },
  {
    id: 'ch9-059',
    chapterId: 9,
    text: "STT paid on derivative transactions is, for an assessee taxed under 'business income':",
    options: [
      'Not deductible at all while computing taxable profit',
      'Allowed as a deduction under the Income-tax Act, 1961',
      'Refundable in cash directly from the exchange',
      'Available only as a rebate against final tax payable',
    ],
    correctIndex: 1,
    explanation: 'STT paid on derivative transactions is allowed as a deduction under the Income-tax Act while computing business income, since F&O gains are now taxed as business income.',
  },
  {
    id: 'ch9-060',
    chapterId: 9,
    text: 'The presumptive taxation scheme under Section 44AD, once opted for, does NOT allow:',
    options: [
      'Filing of the income tax return',
      'Any separate deduction for business expenses against the presumptive income',
      'Carrying forward unabsorbed losses of prior years for adjustment against other business income',
      'STT paid to be considered at all',
    ],
    correctIndex: 1,
    explanation: 'Under the presumptive scheme, income is assessed at a flat 6% of turnover, and no separate deduction for actual business expenses is permitted against that presumptive figure.',
  },

  // ---- Test 13 (061-065) ----
  {
    id: 'ch9-061',
    chapterId: 9,
    text: "Where a client's Mark-to-Market Margin Account shows a credit balance (net amount received) at the balance sheet date, apart from showing it as a current liability, the correct treatment for the Profit & Loss account is to:",
    options: [
      'Credit the full amount as realized trading income',
      'Take no credit for the amount in the Profit & Loss account',
      'Credit half the amount and defer the balance',
      'Transfer it directly to the general reserve',
    ],
    correctIndex: 1,
    explanation: 'A credit balance represents an anticipated profit; on grounds of prudence, no credit is taken in the P&L for it — it is shown only as a current liability.',
  },
  {
    id: 'ch9-062',
    chapterId: 9,
    text: "Which of the following is FALSE regarding accounting for equity options in a client's books?",
    options: [
      'The buyer/holder debits premium paid to the Option Premium Account',
      'An unrealized gain on an open option position is recognized as income at the balance sheet date',
      'The seller/writer credits premium received to the Option Premium Account',
      'A provision is created for an anticipated loss on an open option position',
    ],
    correctIndex: 1,
    explanation: 'This is false — under the prudence concept, an unrealized/anticipated gain on an open option position is NOT recognized as income; only anticipated losses are provided for.',
  },
  {
    id: 'ch9-063',
    chapterId: 9,
    text: 'Which of the following statements correctly describes the current (post-2005) tax treatment of F&O trading income for a resident individual trader?',
    options: [
      'It is treated as speculative income under Section 43(5)',
      'It is treated as non-speculative business income eligible for normal set-off and carry-forward rules',
      'It is exempt from income tax altogether',
      'It is taxed only as short-term capital gains',
    ],
    correctIndex: 1,
    explanation: 'Since the Finance Act 2005 amendment to Section 43(5), F&O income/loss on a recognized exchange is non-speculative business income for resident traders.',
  },
  {
    id: 'ch9-064',
    chapterId: 9,
    text: "Which section of the Income-tax Act governs the mandatory tax audit requirement relevant to F&O traders' turnover thresholds?",
    options: ['Section 44AD', 'Section 43(5)', 'Section 44AB', 'Section 10(38)'],
    correctIndex: 2,
    explanation: 'Section 44AB prescribes the mandatory tax audit requirements based on turnover and profit thresholds, including for F&O traders.',
  },
  {
    id: 'ch9-065',
    chapterId: 9,
    text: 'STT is levied on transactions involving:',
    options: [
      'Only equity shares',
      'Only commodity derivatives',
      'Equity shares, derivatives, and equity-oriented mutual funds listed on Indian exchanges',
      'Only currency derivatives',
    ],
    correctIndex: 2,
    explanation: 'STT applies to purchase/sale of securities listed on Indian stock exchanges, covering equity, derivatives, and equity-oriented mutual fund transactions.',
  },

  // ---- Test 14 (066-070) ----
  {
    id: 'ch9-066',
    chapterId: 9,
    text: "Under AS-11, the term 'exchange difference' refers to:",
    options: [
      'The difference between the spot rate and the forward rate at the inception of the contract',
      "The difference between the contract's value at the settlement/reporting date and its value at the previous reporting date or inception",
      'The STT differential between futures and options',
      'The shortfall between initial margin and additional margin called',
    ],
    correctIndex: 1,
    explanation:
      'Exchange difference is the movement in the contract\'s value between the previous reporting date/inception and the current settlement/reporting date; it is distinct from the premium/discount, which is the spot-forward differential at inception.',
  },
  {
    id: 'ch9-067',
    chapterId: 9,
    text: 'For working out profit or loss on multiple outstanding options of the same stock/index, with the same strike price and expiry date, that are squared off before expiry, the method to be followed is:',
    options: ['First-In-First-Out (FIFO)', 'Last-In-First-Out (LIFO)', 'Weighted average method', 'Highest-price-first method'],
    correctIndex: 2,
    explanation: 'Where multiple identical open options (same strike and expiry) are squared off, the weighted average method is used to compute profit or loss, consistent with the treatment for futures.',
  },
  {
    id: 'ch9-068',
    chapterId: 9,
    text: 'Since most F&O contracts traded on Indian exchanges mature within about three months, gains or losses for Foreign Portfolio Investors on such contracts are generally classified as:',
    options: ['Long-term capital gains/losses', 'Short-term capital gains/losses', 'Speculative business gains/losses', 'Exempt capital receipts'],
    correctIndex: 1,
    explanation: 'Because FPI derivative income is taxed as capital gains and most F&O contracts have short maturities (up to about 3 months), such gains/losses are typically classified as short-term.',
  },
  {
    id: 'ch9-069',
    chapterId: 9,
    text: "The main reason F&O 'turnover' for tax-audit thresholds is usually much smaller than the total value of contracts traded during the year is that:",
    options: [
      'STT paid is subtracted from the notional contract value',
      'Turnover is based on absolute profit/loss and option premiums, not on the notional value of contracts',
      'Only profitable trades are counted towards turnover',
      'Losses are excluded entirely from the turnover computation',
    ],
    correctIndex: 1,
    explanation: 'Because turnover is computed using the absolute profit/loss method (plus option premiums and exercise differentials) rather than gross notional contract value, it is typically a small fraction of total trading volume.',
  },
  {
    id: 'ch9-070',
    chapterId: 9,
    text: 'For the purpose of STT computation, an options trade (other than on exercise) is valued at:',
    options: ['The strike price', 'The settlement price', 'The notional contract value', 'The option premium'],
    correctIndex: 3,
    explanation: 'For STT purposes, an options trade is valued at the premium, on which the prescribed STT rate is applied — except on exercise, when the settlement price is used instead.',
  },

  // ---- Test 15 (071-075) ----
  {
    id: 'ch9-071',
    chapterId: 9,
    text: 'An investor enters a forward contract to hedge a payable. At the first reporting date, a proportionate part of the total premium is charged to P&L based on time elapsed, and the exchange rate movement since inception is also charged to P&L. This treatment is consistent with a forward contract held for:',
    options: ['Trading/speculation', 'Hedging', 'Arbitrage', 'Delivery-based investment'],
    correctIndex: 1,
    explanation: 'Amortizing the premium proportionately over time while separately recognizing the exchange difference each period is the AS-11 treatment prescribed specifically for hedging forward contracts.',
  },
  {
    id: 'ch9-072',
    chapterId: 9,
    text: 'For computing the provision for loss on open equity index/stock futures at the balance sheet date, the provision should be calculated:',
    options: [
      'Contract-wise, treating every individual contract in isolation',
      'Index-wise/stock-wise, combining all series of that stock/index together',
      'Brokerage-wise, based on which broker executed the trade',
      'Only for the single largest open contract',
    ],
    correctIndex: 1,
    explanation: 'Provisions for loss on open futures are computed index-wise/stock-wise, combining all series of that particular stock or index together, not contract by contract.',
  },
  {
    id: 'ch9-073',
    chapterId: 9,
    text: 'A resident trader (not an FPI) earns profit from trading equity index futures on a recognized stock exchange during the year. This profit is taxable as:',
    options: ['Speculative business income', 'Non-speculative business income', 'Short-term capital gains', 'Exempt income'],
    correctIndex: 1,
    explanation: 'Post the 2005 amendment to Section 43(5), profits from exchange-traded F&O transactions by resident traders are taxed as non-speculative business income.',
  },
  {
    id: 'ch9-074',
    chapterId: 9,
    text: 'Which of the following statements about F&O turnover computation is FALSE?',
    options: [
      'F&O turnover equals the total value of all contracts bought and sold during the year',
      'Turnover includes the absolute value of profit or loss on each settled trade',
      'Turnover includes the premium received on options sold',
      'Turnover includes the differential on reverse trades where an option is exercised',
    ],
    correctIndex: 0,
    explanation: 'This statement is false — turnover is NOT the gross notional value of contracts traded; it is computed using the absolute profit/loss method described in the other options.',
  },
  {
    id: 'ch9-075',
    chapterId: 9,
    text: 'STT collected on exchange-traded derivative transactions is ultimately:',
    options: [
      'Retained by the stock exchange as revenue',
      'Refunded to the trader at year-end',
      'Remitted by the exchange to the Government',
      'Credited to the Settlement Guarantee Fund',
    ],
    correctIndex: 2,
    explanation: 'The exchange on which the transaction takes place is required to collect (deduct) STT and remit it to the Government.',
  },
];

export default bank;
