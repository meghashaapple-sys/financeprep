import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[5],
  quickRecap: [
    'Indian F&O trading is fully electronic (order-driven, screen-based), not open-outcry; trading runs 9:15 am–3:30 pm, with exchanges permitted to extend hours between 9:00 AM and 11:55 PM subject to risk-system readiness.',
    'Clearing member types: Trading-cum-Clearing Member (clears own + others\' trades), Professional Clearing Member (clears for others only, not a Trading Member), Self-Clearing Member (clears only own/client trades, not other members\').',
    'User hierarchy at a trading firm: Corporate Manager (full firm-wide control, sets branch exposure limits) → Branch Manager (views/controls own branch) → Dealer (own orders/trades only).',
    'Time conditions: Day order (auto-cancelled at day end) and IOC (execute immediately or cancel, partial fills allowed). Price conditions: Limit order, Market order, Stop-loss order (activates at a trigger price and enters as a market/limit order).',
    'Order matching is price-time priority: best price first, and within the same price, earliest time stamp first — the trading system is an anonymous order-driven market.',
    'Stock F&O eligibility hinges on being in the top 500 by market cap/traded value, MQSOS ≥ ₹75 lakh, MWPL ≥ ₹1,500 crore, and average daily delivery value ≥ ₹35 crore — failing continued criteria for 3 straight months stops fresh contracts (existing ones run to expiry); re-entry needs 6 straight eligible months.',
    'Index F&O eligibility: eligible constituents must be ≥80% of index weight and no single ineligible stock >5% weight; a surrogate/pseudo index can substitute when the primary index fails review.',
    'Corporate action adjustments (bonus/split/consolidation) rescale strike price, market lot and position by an adjustment factor so that cum- and ex-date position values stay equal; only "extraordinary" dividends (≥2% of stock value) trigger a strike adjustment — ordinary dividends do not.',
    'Trading costs = user charges (brokerage) + statutory charges (STT, GST, stamp duty, SEBI turnover fees, transaction/IPFT charges) + bid-ask spread/impact cost (a market-driven cost, not something directly "paid").',
    'Algorithmic trading executes orders on pre-programmed logic; SEBI\'s framework mandates a Static IP, 2FA, unique Algo ID and a Kill Switch, and distinguishes registration-free "White Box" (transparent, replicable) algos from must-register "Black Box" (opaque) algos.',
    'The IRRA platform lets investors square off positions or cancel pending orders (never open new ones) when a trading member\'s own systems are disrupted.',
  ],
  sections: [
    {
      id: 'trading-mechanism-basics',
      heading: '6.1 Trading Mechanism and Market Timings',
      blocks: [
        {
          type: 'table',
          headers: ['Market type', 'How trades are booked'],
          rows: [
            ['Open outcry', 'Members physically present in a trading "pit", trading through shouted bids/offers and hand signals'],
            ['Electronic (screen-based)', 'Bids and offers entered and matched on computer terminals — no physical trading floor'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'All F&O trading on Indian exchanges is electronic — a fully automated, screen-based, order-driven market offering complete transparency of orders. There is no open-outcry pit trading in the Indian derivatives segment.',
        },
        {
          type: 'para',
          text: 'Trading on the derivatives segment normally runs on all working days from 9:15 am to 3:30 pm. To allow integration across market segments, SEBI has permitted exchanges to extend trading hours in the Equity Derivatives Segment between 9:00 AM and 11:55 PM, provided the exchange and its clearing corporation have risk-management systems and infrastructure adequate for the extended hours.',
        },
        {
          type: 'list',
          items: [
            'Index-based futures',
            'Index-based options',
            'Individual stock futures',
            'Individual stock options',
          ],
        },
        {
          type: 'para',
          text: 'The trader workstation typically displays: title bar, ticker windows for both the F&O market and the underlying (cash) market, toolbar, market watch window, inquiry window, snap quote, order/trade window, and a system message window. While entering orders, trading members must tag each order as proprietary ("Pro") or client ("Cli"), quoting the client account number for client orders.',
        },
      ],
    },
    {
      id: 'entities-in-trading',
      heading: '6.2 Entities Involved in Trading',
      blocks: [
        {
          type: 'table',
          headers: ['Entity', 'Key feature'],
          rows: [
            ['Trading Member (TM)', 'A stock exchange member who trades on behalf of clients or on own account; assigned a unique Trading Member ID shared across all its users'],
            ['Trading-cum-Clearing Member (TCM)', 'A Clearing Member who is also a Trading Member — clears/settles own proprietary trades, its clients\' trades, and trades of other Trading Members and Custodial Participants'],
            ['Professional Clearing Member (PCM)', 'Clears trades of an associate Trading Member and institutional clients, but is NOT itself a Trading Member — typically a bank or custodian'],
            ['Self-Clearing Member (SCM)', 'A Trading Member who clears/settles only its own proprietary trades and its own clients\' trades — cannot clear trades of other Trading Members'],
            ['Participant', 'A client of a trading member; may trade through multiple trading members but settles through a single clearing member'],
            ['Authorised Person (AP)', 'Replaced the erstwhile sub-broker network — sub-brokers ceased to exist w.e.f. April 1, 2019 and migrated to become APs or Trading Members'],
          ],
        },
        {
          type: 'warning',
          title: 'Common trap: PCM vs TCM',
          text: 'A Professional Clearing Member is explicitly NOT a Trading Member of the exchange — it only clears and settles for others (associate TMs and institutional/custodial clients). A Trading-cum-Clearing Member, by contrast, IS a Trading Member that also has clearing rights. Do not mix these two up.',
        },
        {
          type: 'keyterm',
          term: 'Corporate hierarchy (user levels at a Trading Member firm)',
          definition:
            'Corporate Manager (highest — full order/trade access across all branches and dealers, sets branch exposure limits) → Branch Manager (order/trade access for dealers within that branch only) → Dealer (lowest — can view only their own orders and trades).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Completing the Know Your Client (KYC) form and client due diligence',
            'Executing a Client-Broker agreement',
            'Timely execution of client orders and collection of adequate margins',
            'Maintaining a separate client bank account (segregation of client money)',
            'Ensuring timely pay-in/pay-out of funds and timely issue of contract notes',
            'Maintaining a unique client code and resolving client complaints',
          ],
        },
      ],
    },
    {
      id: 'order-types-matching',
      heading: '6.3 Types of Orders and Order Matching Rules',
      blocks: [
        {
          type: 'para',
          text: 'Orders on the F&O trading system can carry time conditions, price conditions, or combinations of both.',
        },
        {
          type: 'table',
          headers: ['Order type', 'Category', 'How it behaves'],
          rows: [
            ['Day order', 'Time condition', 'Valid only for the day it is entered; automatically cancelled by the system at day-end if unexecuted'],
            ['Immediate or Cancel (IOC)', 'Time condition', 'Must execute the moment it hits the system; any unmatched portion (including partial fills) is cancelled immediately'],
            ['Limit order', 'Price condition', 'Executes only at the specified limit price or better (lower for a buy, higher for a sell)'],
            ['Market order', 'Price condition', 'No price specified — executes immediately at the best available price in the market'],
            ['Stop-loss order', 'Price condition', 'Dormant until a trigger price is reached/crossed, then enters the market as a market or limit order, as pre-specified'],
          ],
        },
        {
          type: 'example',
          title: 'Stop-loss order — worked illustration',
          text: 'A trader buys shares at ₹100 expecting a rise, but wants to cap the loss if the price falls. They place a stop-loss sell order with a trigger price of ₹95 and a limit price of ₹92. The trigger price must lie between the last traded price and the limit price when the order is placed. Once the market price breaches ₹95, the order is released into the system as a limit sell order at ₹92.',
        },
        {
          type: 'keyterm',
          term: 'Order matching — price-time priority',
          definition:
            'Orders are time-stamped on entry and matched automatically: first by best price (highest bid, lowest offer), and within the same price, by time priority (earliest order first). The best buy order matches the best sell order; partial matches can generate multiple trades.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'No price bands, but operating ranges exist',
          text: 'There are no fixed daily price bands in the derivatives segment (unlike the cash market). Instead, operating ranges guard against fat-finger errors: ±10% of the base price for index futures and single-stock futures, and a contract-specific, delta-based range (updated daily) for index and stock options. Orders outside these ranges reach the exchange as a "price freeze".',
        },
        {
          type: 'list',
          items: [
            'Dynamic price-band flexing now needs 50 trades, 10 unique traders and 3 brokerage firms on each side (tightened from the earlier 25 trades / 5 unique traders) before a band can widen.',
            'A price-band change in the cash market or futures market of a stock moves the bands for all its futures contracts together.',
            'Cooling-off periods lengthen with repeated limit hits: first two increases of 5% after a 15-minute pause (5 minutes near close); next two at 3% after 30 minutes; further increases at 2% after 60 minutes.',
            'Bands slide symmetrically — if the upper band moves up, the lower band moves up too (no one-sided adjustment).',
          ],
        },
      ],
    },
    {
      id: 'stock-index-selection',
      heading: '6.4 Selection Criteria for Stocks and Indices in F&O',
      blocks: [
        {
          type: 'para',
          text: 'A stock must satisfy the following broad eligibility criteria continuously for six months before stock options/futures can be introduced on it.',
        },
        {
          type: 'table',
          headers: ['Criterion', 'Threshold'],
          rows: [
            ['Market presence', 'Among the top 500 stocks by average daily market capitalization and average daily traded value (previous 6 months, rolling)'],
            ['Median Quarter-Sigma Order Size (MQSOS)', 'Not less than ₹75 lakh (6-month rolling)'],
            ['Market-Wide Position Limit (MWPL)', 'Not less than ₹1,500 crore (rolling)'],
            ['Average daily delivery value (cash market)', 'Not less than ₹35 crore (previous 6 months, rolling)'],
          ],
        },
        {
          type: 'para',
          text: 'A stock meeting these criteria on the cash market of any exchange becomes eligible for derivatives trading on all exchanges. Failing the continued eligibility test for 3 consecutive months stops fresh-month contracts (existing unexpired contracts, and new strikes within existing months, may still trade till expiry). An excluded stock cannot be re-considered for one year from its last derivatives trading day, and re-entry requires meeting eligibility for six consecutive months.',
        },
        {
          type: 'keyterm',
          term: 'Product Success Framework (PSF) — stocks',
          definition:
            'An additional exit test (applied after a stock has completed at least 6 months in the derivatives segment) requiring: (i) at least 15% of active stock-derivative trading members or 200 members (whichever is lower) traded the contract monthly; (ii) trading on ≥75% of the review period\'s trading days; (iii) average daily turnover (futures + options premium) of at least ₹75 crore; (iv) average daily notional open interest of at least ₹500 crore. Failing PSF triggers exit in the next review cycle.',
        },
        {
          type: 'para',
          text: 'For an index, derivatives can be introduced if the individually-eligible constituent stocks together account for at least 80% of index weight, and no single ineligible stock exceeds 5% weight — checked monthly; 3 consecutive failing months stops fresh contracts. An excluded index has a minimum 6-month cooling-off before re-inclusion can even be considered.',
        },
        {
          type: 'table',
          headers: ['PSF criterion (index derivatives)', 'Threshold'],
          rows: [
            ['Active trading members', '15% of active index-derivative trading members, or 20 members, whichever is lower'],
            ['Trading frequency', 'On at least 75% of trading days in the review period'],
            ['Average daily turnover', 'At least ₹10 crore'],
            ['Average daily open interest', 'At least ₹4 crore'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Surrogate / Pseudo index',
          definition:
            'A substitute index used when the primary index under review fails eligibility but a similar index (elsewhere) meets it: the surrogate must have at least 80% of the constituent count of the larger index, share at least 50% of the larger index\'s constituent stocks, and maintain a correlation of at least 0.90 with the larger index over the previous 6 months. Only one surrogate/pseudo index is allowed per exchange per index.',
        },
        {
          type: 'warning',
          title: 'Exam favourite numbers',
          text: '80% eligible weight / 5% single-ineligible-stock cap for index inclusion is easy to confuse with the 80% constituent-count / 50% common-constituents / 0.90 correlation test for a surrogate index — these are two different tests answering two different questions (is the index itself eligible? vs can a substitute index be used?).',
        },
      ],
    },
    {
      id: 'corporate-actions',
      heading: '6.5 Adjustments for Corporate Actions',
      blocks: [
        {
          type: 'keyterm',
          term: 'Guiding principle for corporate action adjustment',
          definition:
            'The value of a market participant\'s position on the cum-date and ex-date of a corporate action should remain as unchanged as possible — preserving whether a position is in-the-money, at-the-money or out-of-the-money, and avoiding unintended exercise/assignment effects. Adjustments are carried out on the last cum-basis trading day, after market close, and apply to all open positions.',
        },
        {
          type: 'list',
          items: [
            'Strike price — may be scaled down',
            'Position — number of contracts may be scaled up',
            'Market lot / multiplier — may be scaled up',
          ],
        },
        {
          type: 'table',
          headers: ['Corporate action', 'Adjustment factor', 'Effect'],
          rows: [
            ['Bonus (ratio A:B)', '(A + B) / B', 'New strike = old strike ÷ factor; new market lot = old lot × factor; new position = old position × factor'],
            ['Stock split / consolidation (ratio A:B)', 'A / B', 'Same mechanism — strike divided by factor, lot and position multiplied by factor'],
            ['Rights issue', 'Adjustment factor = (P − E) / P, where E = benefit per share = (P − S)/(A + B)', 'P = cum-date closing price, S = rights issue price, A = existing shares, B = rights entitlement'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Rounding of fractions',
          text: 'Corporate action ratios (e.g. a 3:7 bonus) can produce fractional strikes/lots. The methodology rounds off the strike price and market lot, then reconciles any resulting difference in position value by further tweaking the strike or lot — so that no open position is ever forced to close because of rounding.',
        },
        {
          type: 'keyterm',
          term: 'Ordinary vs Extraordinary dividend',
          definition:
            'A dividend below 2% of the underlying\'s market value is "ordinary" — no strike adjustment is made. A dividend at or above 2% is "extraordinary" — the full dividend amount is deducted from all strike prices of that stock\'s option contracts (effective from the ex-dividend date), and open futures positions are carried forward at the daily settlement price less the dividend.',
        },
        {
          type: 'para',
          text: 'For determining whether a dividend is extraordinary, the "market price" is the stock\'s closing price on the day before the Board of Directors\' announcement (or the same day\'s close if announced after market hours). If shareholders revise the dividend rate at the AGM, the extraordinariness test is reapplied using the rate confirmed post-AGM and the closing price on the day before the AGM.',
        },
        {
          type: 'para',
          text: 'On a merger/demerger, once the record date is announced, no fresh-month contracts are introduced on the underlying that will cease to exist. All unexpired contracts outstanding on the last cum-date are compulsorily settled at the last available cash-market closing price of that underlying on the last cum-date.',
        },
      ],
    },
    {
      id: 'trading-costs',
      heading: '6.6 Trading Costs',
      blocks: [
        {
          type: 'table',
          headers: ['Cost category', 'Includes'],
          rows: [
            ['User charges', 'Brokerage (usually lower for intraday trades; rates vary by broker/services)'],
            ['Statutory charges', 'Securities Transaction Tax (STT), GST, Stamp Duty, SEBI turnover fees, exchange transaction charges, IPFT charges'],
            ['Market-driven costs', 'Bid-ask spread and impact cost — not "paid" to anyone, but arise from market imperfection/illiquidity'],
          ],
        },
        {
          type: 'table',
          headers: ['Statutory charge', 'Rate', 'Who pays / basis'],
          rows: [
            ['STT on sale of an option', '0.15% of the option premium', 'Payable by the seller'],
            ['STT where an option is exercised', '0.15% of the settlement price', 'Payable by the purchaser'],
            ['STT on sale of a futures contract', '0.05% of the price at which the futures is traded', 'Payable by the seller'],
            ['Stamp duty (equity futures)', '0.002% (₹200 per crore)', 'Payable by the buyer'],
            ['Stamp duty (equity options)', '0.003% (₹300 per crore)', 'Payable by the buyer'],
            ['SEBI turnover fees', '₹10 per crore + applicable GST', '—'],
            ['GST', '18%', 'Charged on brokerage plus transaction charges'],
          ],
        },
        {
          type: 'keyterm',
          term: 'IPFT (Investor Protection Fund Trust) charges',
          definition:
            'A fund created by stock exchanges to compensate investors when a defaulting trading member\'s assets are insufficient to cover investor claims; also funds investor education, awareness and research. Charged per crore of traded value (futures) or premium value (options), plus GST.',
        },
        {
          type: 'example',
          title: 'Total cost of a futures trade — worked numbers',
          text: 'Shorting 1 lot of index futures (lot 50) at 17,500 gives a contract value of ₹8,75,000. Illustrative costs: brokerage @0.03% = ₹262.50, STT @0.05% = ₹437.50, exchange fees @0.002% = ₹17.50, SEBI charges ₹10/crore = ₹0.88, IPFT ₹10/crore = ₹0.88, plus 18% GST on (brokerage + exchange fees + SEBI + IPFT) = ₹50.72 — a total trading cost of about ₹769.97. (Stamp duty is excluded here since it applies only on the buy side.)',
        },
        {
          type: 'keyterm',
          term: 'Bid-ask spread and impact cost',
          definition:
            'The bid-ask spread is the gap between the best buy and best sell price; a trader who buys at the ask and immediately sells at the bid incurs this gap as a cost. Impact cost measures the cost of this illiquidity — the wider the spread, the larger the impact cost — and it is larger for thinly-traded contracts.',
        },
        {
          type: 'warning',
          title: 'Common trap',
          text: 'Bid-ask spread and impact cost are NOT charges levied by an exchange, broker or regulator — they are implicit market costs arising from limited liquidity, unlike brokerage, STT, stamp duty and GST which are explicit, directly payable charges.',
        },
      ],
    },
    {
      id: 'algorithmic-trading',
      heading: '6.7 Algorithmic Trading',
      blocks: [
        {
          type: 'keyterm',
          term: 'Algorithmic trading',
          definition:
            'Execution of orders using automated, pre-programmed instructions that factor in variables like price, timing and volume — removing emotion from trade decisions and executing at speeds far beyond manual order entry. High-frequency trading (HFT) is an offshoot capable of tens of thousands of trades per second.',
        },
        {
          type: 'warning',
          title: 'SEBI caution on unregulated algo platforms',
          text: 'SEBI has flagged unregulated platforms that aggressively market algo strategies with promises of high returns. Brokers offering algo services are barred from referencing past or expected returns of a strategy, and from associating with any algo platform that does so.',
        },
        {
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['API (Application Programming Interface)', 'Rules/protocols letting different software applications exchange data with each other'],
            ['Static IP', 'A fixed, broker-approved IP address used to prevent unauthorized API access'],
            ['OAuth (Open Authentication)', 'A secure framework letting third-party apps access user data without sharing login credentials'],
            ['Two-Factor Authentication (2FA)', 'Two layers of verification (e.g., password + OTP) required for API access'],
            ['Algo ID', 'A unique identifier assigned by the exchange to each registered algo, for surveillance'],
            ['Kill Switch', 'An emergency, last-line-of-defence function that auto-halts trading on pre-defined conditions if an algo malfunctions'],
          ],
        },
        {
          type: 'table',
          headers: ['', 'Low-frequency algo (≤10 orders/second)', 'High-frequency algo (>10 orders/second)'],
          rows: [
            ['Registration', 'Not required', 'Mandatory, via the broker'],
            ['Algo ID', 'Generic', 'Unique exchange-assigned ID'],
          ],
        },
        {
          type: 'table',
          headers: ['Parameter', 'Execution / "White Box" Algos', '"Black Box" Algos'],
          rows: [
            ['Logic disclosure', 'Disclosed and understandable to the user', 'Not known/not disclosed to the user'],
            ['Replicability', 'Replicable by the user', 'Not replicable by the user'],
            ['Registration', 'Not required to register', 'Provider must register as a Research Analyst'],
            ['Research report', 'Not mandatory', 'Mandatory — a research report must be maintained for each algo'],
            ['Change in logic', 'Not treated as a new algo', 'Each logic change must be registered as a new algo'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'Brokers may share API access only within an investor\'s family (self, spouse, dependent children, dependent parents) with mandatory 2FA — open, unrestricted API sharing is not allowed. Brokers are solely responsible for handling algo-related investor grievances and API surveillance; SEBI and the exchange will not directly entertain such complaints.',
        },
      ],
    },
    {
      id: 'tracking-data-investor-protection',
      heading: '6.8 Tracking F&O Data and Investor-Protection Infrastructure',
      blocks: [
        {
          type: 'para',
          text: 'Exchange websites and broker trading platforms provide real-time F&O data including: Date, Symbol, Instrument (e.g., FUTSTK, OPTIDX), Expiry Date, Option Type (CE/PE for European calls/puts, CA/PA for American calls/puts), Corporate Action flag, Strike Price, Open/High/Low/Close/Last Traded Price, Open Interest, Total Traded Quantity, Total Traded Value, and Number of Trades.',
        },
        {
          type: 'keyterm',
          term: 'Open Interest — how it is computed for tracking',
          definition:
            'For futures: Open Interest = open positions × last available closing price of the futures contract. For options: Open Interest = open positions × notional value, where notional value = open position × last available closing price of the underlying.',
        },
        {
          type: 'list',
          items: [
            'Positive trend — top gainers in the futures market',
            'Negative trend — top losers in the futures market',
            'Futures OI gainers / losers — contracts with the largest % increase/decrease in Open Interest',
            'Active Calls / Active Puts — options with the highest trading volumes that day',
            'Put-Call Ratio (PCR) — ratio of put trading volume (or OI) to call trading volume (or OI)',
          ],
        },
        {
          type: 'keyterm',
          term: 'Investor Risk Reduction Access (IRRA) platform',
          definition:
            'A joint exchange platform that lets an investor square off open positions and/or cancel pending orders when their trading member\'s primary systems AND disaster-recovery site are both disrupted. IRRA is enabled only on the trading member\'s request and cannot be used to open new positions or increase risk — and it is for individual investors only, not for algorithmic or institutional trading.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Technical-glitch reporting timelines',
          text: 'Brokers must report a technical glitch to the exchange within 1 hour of occurrence, file a Preliminary Incident Report by T+1 day, and submit a Root Cause Analysis (RCA) report within 14 days of the incident. Reports are centrally logged on SEBI\'s iSPOT portal, and brokers are expected to run API-based Logging and Monitoring (LAMA) with exchanges to catch glitches proactively.',
        },
        {
          type: 'para',
          text: 'Under SEBI\'s business-continuity framework for interoperable segments, if an exchange suffers an outage, positions in correlated/common products can simply be offset on the other exchange (no special treatment needed, since interoperability nets the exposure). For scrips or indices without a correlated product elsewhere, exchanges may create reserve contracts or new correlated indices in advance. The affected exchange must notify SEBI and the alternative venue within 75 minutes of impact, and the alternative venue must invoke its business-continuity plan within 15 minutes of that intimation — NSE and BSE act as each other\'s alternative trading venue.',
        },
      ],
    },
  ],
};

export default chapter;
