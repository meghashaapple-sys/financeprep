import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[8],
  quickRecap: [
    'AS-11 hedging forwards: premium/discount is amortized over the contract life; exchange differences go to P&L each year.',
    'AS-11 speculative forwards: no premium/discount amortization — the full gain/loss versus the year-end forward rate for the remaining tenor hits P&L.',
    'Initial margin paid on futures is a balance-sheet item (Current Assets) — no entry is passed for the contract itself, only for the margin.',
    'Prudence rule for open MTM positions: provide for an anticipated LOSS (debit balance) in P&L, but ignore an anticipated PROFIT (credit balance) — never recognize unrealized gains.',
    'Option buyer: premium is an expense; favourable exercise difference is income. Option seller/writer: premium is income; adverse exercise difference is a loss.',
    'Finance Act 2005 amended Section 43(5) — F&O trades on a recognized stock exchange are no longer "speculative"; they are non-speculative business income.',
    'Non-speculative F&O losses can be set off against any income except salary, and carried forward 8 assessment years — but only if the return is filed by the due date.',
    'Presumptive taxation (Sec 44AD): if F&O turnover does not exceed ₹2 crore, income can be declared at a flat 6% of turnover, with no separate expense deduction.',
    'Tax audit is mandatory if turnover exceeds ₹10 crore (always), or is ₹2–10 crore with profit below 6% and presumptive scheme not opted (unless over 95% of transactions are digital).',
    'STT: 0.15% on sale of an option (on premium) and on an exercised option (on settlement price); 0.05% on sale of a future — STT paid is an allowable deduction, not a rebate.',
  ],
  sections: [
    {
      id: 'as11-forwards',
      heading: '9.1 Accounting for Forward Contracts — AS-11',
      blocks: [
        {
          type: 'keyterm',
          term: 'Accounting Standard 11 (AS-11)',
          definition:
            'The ICAI standard that prescribes how forward exchange contracts are accounted for, distinguishing between contracts entered into for hedging an existing exposure and those entered into for trading/speculation.',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Forward contract for hedging', 'Forward contract for trading/speculation'],
          rows: [
            [
              'Premium or discount (difference between spot rate and forward rate)',
              'Amortized as expense/income over the life of the contract',
              'Not separately recognized',
            ],
            [
              'Exchange difference (movement between reporting dates)',
              'Recognized in the P&L of the year in which it arises',
              "Gain/loss = difference between the contracted/last year-end rate and the year-end rate for the remaining maturity, recognized in that period's P&L",
            ],
            [
              'Profit/loss on cancellation or renewal',
              'Recognized in the P&L of the year',
              'Recognized in the P&L of the year',
            ],
          ],
        },
        {
          type: 'example',
          title: 'Hedging forward — amortizing the premium',
          text: 'An importer books a 6-month forward contract to hedge a payable, buying dollars at a forward rate of ₹84 against a spot rate of ₹83. The ₹1 premium is amortized evenly as an expense over 6 months (about ₹0.167 per dollar per month), while any movement in the exchange rate between reporting dates is taken straight to P&L as an exchange difference in the year it occurs.',
        },
        {
          type: 'example',
          title: 'Speculative forward — no amortization',
          text: "A treasury desk enters a forward contract purely to take a view on the currency (not to hedge a real exposure). No premium/discount is amortized. Instead, at each year-end, the gain or loss is simply the difference between the rate locked in the contract (or last year's valuation rate) and the forward rate now available for the remaining maturity — taken fully to that year's P&L.",
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'The key differentiator tested is "amortize the premium" (hedging) vs "no amortization, mark the full differential" (speculation). Both classifications route cancellation/renewal profit or loss to P&L the same way.',
        },
      ],
    },
    {
      id: 'futures-accounting',
      heading: "9.1 Accounting for Equity Index/Stock Futures (in the Client's Books)",
      blocks: [
        {
          type: 'para',
          text: "ICAI guidance notes on accounting for equity index/stock futures focus on the client's (i.e., the trader/investor's) books — for brokers, trading members and clearing members, a futures trade is accounted for much like a trade in shares.",
        },
        {
          type: 'keyterm',
          term: 'Initial Margin Account',
          definition:
            'At inception, no entry is passed for the futures contract itself (no payment changes hands except margin). Initial/additional margin paid is debited to an "Initial Margin — Equity Index/Stock Futures Account" and shown under Current Assets at the balance sheet date. Margin given via bank guarantee or lodged securities is disclosed in notes only — no accounting entry.',
        },
        {
          type: 'keyterm',
          term: 'Mark-to-Market (MTM) Margin Account',
          definition:
            'Daily settlement payments/receipts are debited/credited to an "MTM Margin — Equity Index/Stock Futures Account", which can be maintained index-wise or stock-wise to help compute the loss provision.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Inception: only the initial margin is recorded (Dr Initial Margin A/c, Cr Bank/Deposit A/c) — the contract itself is off-balance-sheet.',
            'Daily settlement: MTM payments/receipts are posted to the MTM Margin A/c against Bank or a margin deposit account.',
            'Balance sheet date (open position): apply the prudence principle — see below.',
            'Final settlement/squaring-up: profit or loss = difference between the final settlement (or squaring-up) price and the contract price, recognized via the MTM Margin A/c; the initial margin is then released back (credited) against Bank/Deposit.',
            'Default: if a client fails to pay the daily settlement due, the position is closed out, the shortfall is adjusted against the initial margin, and any resulting profit/loss is recognized exactly as in normal squaring-up.',
          ],
        },
        {
          type: 'warning',
          title: 'Prudence at the balance sheet date',
          text: 'A DEBIT balance in the MTM Margin A/c (net amount paid = anticipated loss) must be provided for — debit P&L, credit a "Provision for Loss" account — and shown under Current Assets net of that provision. A CREDIT balance (net amount received = anticipated profit) is a Current Liability, but is NEVER credited to P&L — anticipated gains are ignored on grounds of prudence.',
        },
        {
          type: 'example',
          title: 'Worked illustration',
          text: 'Ms. Rao buys one lot of index futures and pays an initial margin of ₹60,000 (Dr Initial Margin A/c, Cr Bank). Over the next few sessions, SPAN margin calls require an additional ₹8,000 (Dr Initial Margin A/c, Cr Bank) and later ₹12,000 is refunded as the margin requirement eases (Dr Bank, Cr Initial Margin A/c). Suppose at year-end the MTM Margin A/c shows a debit balance of ₹5,000 (an anticipated loss) — a provision of ₹5,000 is created by debiting P&L and crediting "Provision for Loss on Equity Futures A/c"; this provision is shown as a deduction from the margin balance under Current Assets.',
        },
      ],
    },
    {
      id: 'options-accounting',
      heading: '9.1 Accounting for Equity Index and Stock Options',
      blocks: [
        {
          type: 'table',
          headers: ['Event', "Buyer/holder's books", "Seller/writer's books"],
          rows: [
            [
              'At inception',
              'Premium paid is debited to "Option Premium A/c"',
              'Initial margin paid is debited to "Option Margin A/c"; premium received is credited to "Option Premium A/c"',
            ],
            [
              'Open position at balance sheet date',
              "Provision made (prudence) only if premium paid > premium prevailing on that date; a market gain in the buyer's favour is ignored",
              "Provision made (prudence) only if the prevailing premium > premium received; a market gain in the writer's favour is ignored",
            ],
            [
              'Final settlement — cash-settled',
              'Premium is expensed to P&L; a favourable difference between settlement price and strike price on exercise is recognized as income',
              'Premium is recognized as income; an adverse difference between settlement price and strike price on exercise is recognized as a loss',
            ],
            [
              'Exercise — delivery-settled call',
              'Receives shares: Dr Equity Shares A/c, Cr Bank (at strike price)',
              'Delivers shares: Cr Equity Shares A/c, Dr Bank (at strike price)',
            ],
            [
              'Exercise — delivery-settled put',
              'Delivers shares: Cr Equity Shares A/c, Dr Bank',
              'Receives shares: Dr Equity Shares A/c, Cr Bank',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Cash-settled vs delivery-settled stock options',
          text: 'For both equity index options (always cash-settled) and equity stock options, the accounting at inception, margin payment/receipt, and open-position provisioning is identical. The treatment diverges only at final exercise: cash settlement books a P&L difference, while physical/delivery settlement transfers the underlying shares at the strike price, with the premium still separately taken to P&L.',
        },
        {
          type: 'keyterm',
          term: 'Provision for Loss on Options',
          definition:
            "When multiple open options exist on the same stock/index, positions are netted first (bought vs sold), and a provision is created only if the net result is a loss — a net gain is ignored under the prudence concept. Opening provisions are adjusted against the current year's requirement, with only the incremental change routed through P&L.",
        },
      ],
    },
    {
      id: 'taxation-business-income',
      heading: '9.2 Taxation of F&O Transactions — Business Income',
      blocks: [
        {
          type: 'para',
          text: 'Gains or losses from exchange-traded derivatives transactions in securities are taxed under the head "Profits and Gains from Business or Profession". Business income/loss is further classified as speculative or non-speculative — and only speculative losses can be set off against speculative gains.',
        },
        {
          type: 'timeline',
          items: [
            {
              year: 'Before FY 2005–06',
              text: 'Section 43(5) defined a "speculative transaction" as one settled otherwise than by actual delivery. Since most F&O trades are cash-settled, they were treated as speculative — losses could be set off only against other speculative income, raising the effective tax burden.',
            },
            {
              year: 'Finance Act, 2005',
              text: 'Section 43(5) was amended to specifically exclude derivative transactions carried out on a "recognized stock exchange" from the definition of a speculative transaction.',
            },
            {
              year: 'Effect (current law)',
              text: 'F&O income/loss on a recognized exchange is non-speculative business income — it can be set off against any other income of the year (except salary), and unabsorbed losses can be carried forward.',
            },
          ],
        },
        {
          type: 'list',
          items: [
            'Non-speculative F&O losses can be set off against any other head of income in the same year, except salary income.',
            'Unabsorbed losses can be carried forward for 8 assessment years, but only against non-speculative business income of later years.',
            'The right to carry forward and set off is available only if the return of income is filed on or before the due date.',
            'Securities Transaction Tax (STT) paid on such transactions is allowed as a deduction under the Income-tax Act, 1961.',
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exception: Foreign Portfolio Investors (FPIs)',
          text: 'For FPIs, gains/losses on recognized-exchange derivative transactions are taxed under the head "Capital Gains", not business income. Since most F&O contracts mature within about 3 months, such gains/losses are generally short-term capital gains/losses.',
        },
      ],
    },
    {
      id: 'tax-audit-turnover',
      heading: '9.2 Presumptive Taxation, Tax Audit and Turnover',
      blocks: [
        {
          type: 'formula',
          label: 'Presumptive income under Section 44AD',
          formula: 'Presumptive taxable income = 6% × F&O turnover',
          note: 'Available only if total F&O turnover does not exceed ₹2 crore. No separate deduction for expenses is allowed against this presumptive 6%.',
        },
        {
          type: 'keyterm',
          term: 'F&O turnover (for tax-audit purposes)',
          definition:
            'Not the notional/contract value of trades. Per prevailing ICAI guidance, turnover is computed as the sum of: the absolute value of profit or loss on every trade settled during the year, plus the premium received on options sold, plus the differential on reverse trades where an option is exercised. This is why F&O turnover is typically a small fraction of the total value transacted.',
        },
        {
          type: 'table',
          headers: ['Turnover', 'Condition', 'Tax audit required?'],
          rows: [
            ['Above ₹10 crore', 'Regardless of profit or loss', 'Yes — mandatory under Section 44AB(a)'],
            ['₹2 crore – ₹10 crore', 'Presumptive scheme not opted, and profit is below 6% of turnover', 'Yes'],
            ['₹2 crore – ₹10 crore', 'More than 95% of transactions are digital (cash receipts/payments ≤ 5%)', 'No, regardless of profit or loss'],
            ['Up to ₹2 crore', 'Profit declared at 6% or more of turnover under Section 44AD', 'No'],
          ],
        },
        {
          type: 'warning',
          title: 'Common trap',
          text: "Do not confuse F&O \"turnover\" with the total buy-plus-sell contract value of trades executed. Turnover for tax-audit thresholds is the absolute-profit-and-loss based figure described above — a trader with a large notional trading volume can still have a modest turnover for audit purposes.",
        },
      ],
    },
    {
      id: 'stt',
      heading: '9.2 Securities Transaction Tax (STT) on Derivatives',
      blocks: [
        {
          type: 'keyterm',
          term: 'Securities Transaction Tax (STT)',
          definition:
            'A transaction tax levied on every purchase/sale of securities listed on a recognized Indian stock exchange, including equity, derivatives and equity-oriented mutual funds. For derivatives, the exchange itself collects and remits STT to the Government.',
        },
        {
          type: 'table',
          headers: ['Taxable securities transaction', 'STT rate', 'Payable by'],
          rows: [
            ['Sale of an option in securities', '0.15%', 'Seller (on the option premium)'],
            ['Sale of an option in securities, where the option is exercised', '0.15%', 'Purchaser (on the settlement price)'],
            ['Sale of a futures contract in securities', '0.05%', 'Seller (on the traded price)'],
            ['Derivative contract settled by physical delivery of shares', '0.1%', 'Both seller and purchaser (delivery-equity rate applies)'],
          ],
        },
        {
          type: 'mnemonic',
          title: 'STT rate recall',
          text: '"Options twice at the same rate" — option SALE (0.15%, on premium, seller pays) and option EXERCISE (0.15%, on settlement price, purchaser pays) share the same 0.15% rate. Futures sale alone is lower, at 0.05%.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'STT is a deduction, not a rebate',
          text: 'Since F&O gains are now taxed as business income (not capital gains), STT paid is claimed as a deductible business expense while computing taxable profit — it is no longer available as a direct tax rebate as it once was when derivative income was treated differently.',
        },
      ],
    },
  ],
};

export default chapter;
