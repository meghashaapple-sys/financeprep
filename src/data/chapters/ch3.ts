import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[2],
  quickRecap: [
    'A forward is a customized, bilateral OTC contract; a future is its standardized, exchange-traded cousin, settlement-guaranteed by the Clearing Corporation.',
    'Contract specifications (everything except price) are fixed by the exchange: underlying, lot size/contract multiplier, tick size, contract cycle and expiry day.',
    'Basis = Spot price − Futures price. It can be positive or negative during the contract\'s life but always converges to zero at expiry.',
    'Cost of carry (for equities) = financing/interest cost of holding the asset minus income (dividend) earned during the holding period.',
    'Fair futures price: F = S(1+r−q)^T (discrete) or F = Se^((r−q)T) (continuous) — the cost-of-carry / no-arbitrage model.',
    'Long futures payoff = (Expiry price − Trade price) × lot size; Short futures payoff is the exact mirror image — both are linear and uncapped.',
    'Futures priced above fair value trigger cash-and-carry arbitrage (buy spot, sell futures); priced below fair value trigger reverse cash-and-carry arbitrage (sell/short spot, buy futures).',
    'Contango = futures trade above spot; Backwardation = futures trade below spot.',
    'Open Interest is a stock (outstanding contracts on one side, at a point in time); Trading Volume is a flow (contracts traded over a period).',
    'Three participants keep the market efficient: Hedgers offload risk, Speculators/Traders absorb it for profit, Arbitrageurs lock in riskless gains and keep spot-futures prices aligned.',
  ],
  sections: [
    {
      id: 'forwards',
      heading: '3.1 Introduction to Forward Contracts',
      blocks: [
        {
          type: 'keyterm',
          term: 'Forward Contract',
          definition:
            'A bilateral agreement made directly between two parties (no exchange involved) to buy or sell an asset on a specified future date, at a price decided today. Both parties are obligated to perform, regardless of where the market price ends up.',
        },
        {
          type: 'example',
          title: 'Locking in a price with gold',
          text:
            'On April 2, 2026, gold trades at ₹71,400 per 10 grams in the cash/spot market — that is a cash transaction at the spot price. You instead want delivery in 2 months. The goldsmith quotes a forward price of ₹71,900 for 2-month delivery; you agree — you are now "long forward" and the goldsmith is "short forward". No money or gold changes hands today. Two months later you pay ₹71,900 and take delivery, whatever the spot price is by then. If spot has risen to ₹72,500, you gain ₹600 (you paid 71,900, the gold is worth 72,500). If spot has fallen to ₹71,200, you lose ₹700 (you must still pay 71,900 for gold worth only 71,200) — the forward removed price risk, not price movement.',
        },
        {
          type: 'list',
          items: [
            'A bilateral contract between two identified parties — not traded on an exchange.',
            'All terms — price, quantity, quality of underlying, delivery place and settlement procedure — are fixed on the day the contract is entered into.',
            'Terms can only be altered if both parties mutually agree.',
            'Widely used in commodities, foreign exchange, equity and interest-rate markets by corporations, traders and institutions to meet specific requirements.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Why enter a forward at all?',
          text: 'The essential purpose of a forward is to fix a price today and thereby avoid price risk — you are assured in advance of the price at which you will buy or sell the underlying asset, irrespective of how the market moves later.',
        },
        {
          type: 'table',
          headers: ['Limitation', 'Why it happens'],
          rows: [
            [
              'Liquidity risk',
              'Forwards are tailor-made to the specific needs of the two parties and are not listed on any exchange, so other participants have little interest or access — making it hard to exit before maturity.',
            ],
            [
              'Counterparty (default/credit) risk',
              'The risk of economic loss if the other party fails to honour the contract. Whichever way the market moves, the losing side always has an incentive to walk away — e.g., if a buyer agreed to pay ₹40/kg for rice and the market price later falls to ₹35, the buyer may prefer to default and buy from the market instead.',
            ],
          ],
        },
        {
          type: 'warning',
          title: 'Obligation, not a right',
          text: 'A forward contract obligates BOTH parties to perform at maturity — unlike an option, neither side can walk away just because the market has moved against them (barring default). Do not confuse a forward\'s "obligation on both sides" with an option\'s "right without obligation for the buyer".',
        },
      ],
    },
    {
      id: 'futures-vs-forwards',
      heading: '3.2 & 3.5 Futures Contracts, and How They Differ from Forwards',
      blocks: [
        {
          type: 'keyterm',
          term: 'Futures Contract',
          definition:
            'An agreement made through an organized exchange to buy or sell a fixed amount of a commodity or financial asset on a future date at an agreed price — in short, a standardized forward traded on an exchange, with settlement guaranteed by the exchange\'s Clearing Corporation. The buyer takes a "long" position; the seller takes a "short" position.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: '"Buy" and "sell" are figurative at inception',
          text: 'When a futures deal is originated, no money and no underlying asset actually changes hands between buyer and seller — only margins are exchanged with the Clearing Corporation. Actual profit/loss is settled daily via mark-to-market.',
        },
        {
          type: 'list',
          items: [
            'Contract between two parties routed through the Exchange, on a centralized trading platform.',
            'Price is discovered through free interaction of buyers and sellers (order matching) — the exchange fixes everything else.',
            'Margins are payable by both the buyer and the seller.',
            'Quality and quantity of the underlying are standardized, decided today by the exchange.',
          ],
        },
        {
          type: 'table',
          headers: ['Feature', 'Forward Contract', 'Futures Contract'],
          rows: [
            ['Operational mechanism', 'Not traded on an exchange', 'Exchange-traded'],
            ['Contract specifications', 'Differ trade to trade — tailor-made', 'Standardized for all traders except price'],
            ['Counterparty risk', 'Exists; sometimes reduced by a guarantor', 'Assumed by the Clearing Corporation, which guarantees settlement to every trade'],
            ['Liquidity', 'Low — customized, not easily accessible to others', 'High — standardized and exchange-traded'],
            ['Price discovery', 'Inefficient — markets are scattered/bilateral', 'Efficient — centralized order book brings all buyers and sellers together'],
            ['Information dissemination', 'Poor quality, slow spread', 'Nationwide, rapid dissemination of relevant information'],
          ],
        },
        {
          type: 'mnemonic',
          title: '"Futures = Forwards, Formalized"',
          text: 'Futures take everything a forward has and add: a Floor (centralized exchange), a Financial guarantor (the Clearing Corporation) and Fixed terms (standardization) — which is exactly why they solve the liquidity and counterparty-risk problems of forwards.',
        },
        {
          type: 'warning',
          title: 'Futures are not risk-free',
          text: 'Standardization brings its own limitations: only a limited set of maturities and underlyings are available, contract design lacks flexibility, and daily mark-to-market settlement adds administrative/cash-flow burden compared to a forward.',
        },
      ],
    },
    {
      id: 'contract-specs',
      heading: '3.3 Contract Specifications of Futures Contracts',
      blocks: [
        {
          type: 'para',
          text: 'The exchange decides every term of a futures contract except the price itself — these terms are collectively called "contract specifications". They include the underlying, contract multiplier/size, tick size, contract cycle and expiration rules.',
        },
        {
          type: 'keyterm',
          term: 'Underlying instrument & underlying price',
          definition:
            'The underlying instrument is the index or stock on which the futures contract is based (e.g., Nifty 50). The underlying price is the spot/cash-market price of that instrument.',
        },
        {
          type: 'formula',
          label: 'Contract (notional) value',
          formula: 'Contract Value = Futures Price × Lot Size (Contract Multiplier)',
          note: 'Example: Nifty futures lot size = 75, futures price = ₹24,650 → Contract value = 75 × 24,650 = ₹18,48,750.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'SEBI contract-value norms (effective Nov 2024)',
          text: 'Under SEBI\'s revised framework, a derivative contract must have a value of not less than ₹15 lakh at introduction, and the lot size is set so that on each periodic review the contract value stays between ₹15 lakh and ₹20 lakh — up from the earlier ₹5–10 lakh band fixed back in 2015.',
        },
        {
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['Contract cycle', 'The period over which a contract trades. NSE index/stock futures follow a 3-month cycle — near month, next month and far month are simultaneously available. BSE also offers weekly futures.'],
            ['Expiration day', 'The last trading day of a contract, on which all open positions are compulsorily settled. If a position is to continue, it must be "rolled over" into the next contract of the same underlying.'],
            ['Tick size', 'The minimum price move allowed in quotations (e.g., 5 paisa for Nifty futures, ₹0.05 for Sensex futures).'],
            ['Daily settlement price', 'The price used to mark-to-market open positions each day — computed as the last half-hour weighted average price of that contract.'],
            ['Final settlement price', 'The closing price of the underlying in the cash market on the expiry day — the price at which the near-month contract is finally settled.'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Uniform expiry-day regulation (SEBI, May 2025)',
          text: 'Each exchange must pick a single weekday — Tuesday or Thursday — as its expiry day for ALL equity derivatives contracts, and may offer only one weekly benchmark index options contract (on that day). All other contracts (index futures, single-stock futures/options) must have a minimum 1-month tenor, expiring on the last Tuesday/Thursday of the month per the exchange\'s chosen day. Any change to the expiry day needs prior SEBI approval. NSE currently uses Tuesday; BSE uses Thursday.',
        },
        {
          type: 'table',
          headers: ['Specification', 'Nifty Futures (NSE)', 'Sensex Futures (BSE)'],
          rows: [
            ['Underlying', 'Nifty 50 index', 'BSE Sensex'],
            ['Tick size', '5 paisa', '₹0.05'],
            ['Contract cycle', '3-month trading cycle (near/next/far)', '7 serial weekly + 3 serial monthly contracts'],
            ['Expiry', 'Last Tuesday of the month', 'Monthly: last Thursday; Weekly: every Thursday'],
            ['Trading hours', '9:15 a.m. – 3:30 p.m., Mon–Fri', '9:15 a.m. – 3:30 p.m.'],
            ['Settlement', 'Cash-settled at closing spot value on expiry', 'Cash-settled at closing spot value on expiry'],
          ],
        },
        {
          type: 'warning',
          title: 'Don\'t mix up daily vs. final settlement price',
          text: 'Daily settlement price (last half-hour VWAP) is used for MTM on EVERY trading day the contract is open. Final settlement price (the underlying\'s cash-market closing price) is used only ONCE — on expiry day — to close out the contract. Exam questions frequently swap these two definitions.',
        },
      ],
    },
    {
      id: 'terminology',
      heading: '3.4 Key Terminology — Basis, Cost of Carry, Margins, Open Interest and Positions',
      blocks: [
        {
          type: 'keyterm',
          term: 'Basis',
          definition: 'The difference between the spot price and the futures price for a specific contract.',
        },
        {
          type: 'formula',
          label: 'Basis',
          formula: 'Basis = Spot Price − Futures Price',
          note: 'If futures price > spot price, basis is negative. If spot price > futures price, basis is positive. Basis must be defined against a specific contract month — the one-month basis differs from the two-month basis, and the gap between them reflects the cost of carrying the asset for that extra month.',
        },
        {
          type: 'warning',
          title: 'Basis converges to zero at expiry',
          text: 'Whatever the basis is during the contract\'s life — positive or negative — it must become zero at maturity, because final settlement happens at the underlying\'s closing cash-market price. A "basis stays wide at expiry" statement is always FALSE.',
        },
        {
          type: 'keyterm',
          term: 'Cost of Carry',
          definition:
            'The relationship between futures and spot prices — broadly, the cost of financing/holding (and, for commodities, storing/insuring) the underlying asset until delivery, net of any income earned on it during that period. For equities: Cost of carry = Interest cost of financing the purchase − Dividend income earned.',
        },
        {
          type: 'example',
          title: 'Working out cost of carry',
          text:
            'A share of PQR Ltd trades at ₹500. An investor without cash borrows ₹500 at 9% p.a. to buy it and holds it for a year, during which the company is expected to pay a 150% dividend on its ₹10 face value, i.e., ₹15. Interest cost = 9% × 500 = ₹45. Net cost of carry = 45 − 15 = ₹30. The breakeven (fair) 1-year futures price for this investor is 500 + 30 = ₹530. Cost of carry can differ across participants depending on their own borrowing rate and dividend expectations.',
        },
        {
          type: 'keyterm',
          term: 'Initial Margin',
          definition: 'The amount a participant must deposit in the margin account at the time of entering into a futures position. Both the buyer AND the seller pay initial margin, since both are obligated to honour the contract. Higher-volatility underlyings attract higher initial margin.',
        },
        {
          type: 'example',
          title: 'Initial margin and MTM, worked through',
          text:
            'On a given day, a trader goes long one Nifty futures contract (lot size 75) at ₹24,400. Contract value = 24,400 × 75 = ₹18,30,000. If the broker charges 12% of contract value as initial margin, the trader deposits 12% × 18,30,000 = ₹2,19,600. At the close of that day, Nifty futures settle at ₹24,512.40 — a gain of 112.40 points. The trader\'s mark-to-market (MTM) gain = 112.40 × 75 = ₹8,430, credited to the account; the next day\'s position starts fresh from 24,512.40.',
        },
        {
          type: 'keyterm',
          term: 'Marking to Market (MTM)',
          definition: 'The daily settlement of profits and losses on open futures positions, based on the daily settlement price — even though the contract itself may run for several months. Losers pay into the system; gainers are paid out, every trading day.',
        },
        {
          type: 'keyterm',
          term: 'Open Interest (OI)',
          definition: 'The total number of futures contracts outstanding (not yet settled/closed) for an underlying, counted on only one side (long = short, always, so only one side is reported). OI indicates depth in the market.',
        },
        {
          type: 'table',
          headers: ['Event', 'Open Interest after', 'Volume for the day'],
          rows: [
            ['Day 1: A shorts 50 contracts, B goes long 50', '50', '50'],
            ['Day 2: C goes long 100, D goes short 100 (new positions)', '150 (increases — new long and short created)', '100'],
            ['Day 2: A buys back (closes) 50 short; E shorts 50 fresh', '150 (unchanged — A\'s short is simply replaced by E\'s)', '50'],
            ['Day 2: C sells (closes) 100 long; D buys back (closes) 100 short', '50 (falls — existing long and short positions are closed out)', '100'],
          ],
        },
        {
          type: 'mnemonic',
          title: 'OI is a stock, Volume is a flow',
          text: 'Open Interest is a snapshot — contracts still outstanding at a point in time (like a bank balance). Trading Volume is a flow — contracts traded during a period, e.g., a day (like a bank statement\'s transactions). New positions on both sides raise OI; closing trades on both sides reduce it; one side closing and a new one opening leaves OI unchanged — but Volume rises every time regardless.',
        },
        {
          type: 'keyterm',
          term: 'Price Band',
          definition: 'The permissible price range for a contract on a given day, computed off the previous day\'s closing price (or, on the first trading day, the underlying\'s previous cash-market close). E.g., previous close ₹100 with a 10% band allows trading between ₹90 and ₹110 the next day.',
        },
        {
          type: 'table',
          headers: ['Position term', 'Meaning'],
          rows: [
            ['Long position', 'Outstanding/unsettled buy position in a contract.'],
            ['Short position', 'Outstanding/unsettled sell position in a contract.'],
            ['Open position', 'Any outstanding long or short position across contracts — the net exposure still on the books.'],
            ['Naked position', 'A long or short futures position with NO offsetting position in the underlying asset.'],
            ['Calendar spread position', 'Long in one maturity and short in another maturity of the SAME underlying (e.g., short near-month, long far-month). Computed with reference to the near-month leg; becomes an open/naked position once the near leg expires or either leg is closed.'],
            ['Opening a position', 'A buy or sell that increases the client\'s existing open position.'],
            ['Closing a position', 'A buy or sell that reduces the client\'s existing open position (selling what was bought, or buying back what was sold).'],
          ],
        },
      ],
    },
    {
      id: 'payoffs',
      heading: '3.6 Payoff Charts for Futures Contracts',
      blocks: [
        {
          type: 'keyterm',
          term: 'Payoff',
          definition:
            'The likely profit or loss to a market participant as the price of the underlying changes at expiry. A payoff diagram plots the underlying\'s expiry price on the X-axis (never negative, so no left-hand side is drawn) against profit/loss on the Y-axis.',
        },
        {
          type: 'formula',
          label: 'Futures payoff at expiry',
          formula: 'Long Futures Payoff = (Expiry Spot Price − Trade Price) × Lot Size    |    Short Futures Payoff = (Trade Price − Expiry Spot Price) × Lot Size',
          note: 'Both are LINEAR (a straight-line 45° payoff) with theoretically unlimited profit and unlimited loss potential — there is no premium paid and no cap, unlike an option.',
        },
        {
          type: 'table',
          headers: ['Market price at expiry', 'Long Futures Payoff (trade price ₹200)', 'Short Futures Payoff (trade price ₹200)'],
          rows: [
            ['140', '-60', '+60'],
            ['160', '-40', '+40'],
            ['180', '-20', '+20'],
            ['200', '0', '0'],
            ['220', '+20', '-20'],
            ['240', '+40', '-40'],
            ['260', '+60', '-60'],
          ],
        },
        {
          type: 'example',
          title: 'Reading the payoff table',
          text:
            'Trader A went long one XYZ futures contract at ₹200 (lot size 300); Trader B was the counterparty, short at ₹200. At expiry the spot settles at ₹260. A must pay only ₹200 under the contract for an asset now worth ₹260 — profit = (260−200)×300 = ₹18,000. B, who is short, must effectively buy at 260 to cover an obligation to deliver at 200 — loss = (200−260)×300 = −₹18,000. Before transaction costs, the long\'s gain always exactly equals the short\'s loss.',
        },
        {
          type: 'mnemonic',
          title: 'Long wins when it runs, Short wins when it sinks',
          text: 'Long futures profits when the underlying price RISES above the trade price; Short futures profits when the underlying price FALLS below the trade price. The two payoff lines are mirror images of each other around the trade price.',
        },
      ],
    },
    {
      id: 'pricing',
      heading: '3.7 & 3.8 Futures Pricing: Cost of Carry, Expectations Model and Convergence',
      blocks: [
        {
          type: 'para',
          text: 'There is no single universal way to price futures because underlying assets differ in demand-supply patterns and cash-flow characteristics. Two popular models are discussed: the Cost of Carry (no-arbitrage) model and the Expectations model.',
        },
        {
          type: 'keyterm',
          term: 'Cost of Carry Model (no-arbitrage model)',
          definition:
            'Assumes that in an efficient market, arbitrage opportunities cannot persist. A futures/forward position can always be replicated synthetically by buying the asset in the cash market and "carrying" it to the future date; the fair futures price is the cost of creating this synthetic position — spot price plus the cost of carrying it to delivery.',
        },
        {
          type: 'formula',
          label: 'Fair futures price — basic model',
          formula: 'F = S(1 + r)^T      (discrete compounding)     or     F = Se^(rT)      (continuous compounding)',
          note: 'S = spot price, r = cost of carry (financing rate, in %), T = time to expiry in years.',
        },
        {
          type: 'formula',
          label: 'Fair futures price — with income on the asset',
          formula: 'F = S(1 + r − q)^T      (discrete)     or     F = Se^((r − q)T)      (continuous)',
          note: 'q = expected income/return during the holding period (e.g., dividend yield). This is the standard formula used for equity index/stock futures, since r and q partly offset each other.',
        },
        {
          type: 'example',
          title: 'Fair price of an index future',
          text:
            'An index trades at S = 18,200. Cost of financing r = 11% p.a.; expected dividend yield on the index q = 3% p.a., spread uniformly through the year; time to expiry T = 90/365 years. Discrete model: F = 18,200 × (1 + 0.11 − 0.03)^(90/365) = 18,200 × (1.08)^0.2466 ≈ ₹18,548.68. Continuous model: F = 18,200 × e^(0.08 × 90/365) ≈ ₹18,562.58. If the index futures actually trades above ≈18,563, an arbitrageur can buy the index basket in cash and sell index futures to lock in the extra gain (ignoring transaction costs, taxes and margins).',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Cash-and-carry vs. reverse cash-and-carry',
          text: 'If the market futures price is HIGHER than the fair price → "cash-and-carry arbitrage": buy the asset in the cash market (long spot), sell futures (short futures). If the market futures price is LOWER than the fair price → "reverse cash-and-carry arbitrage": sell/borrow-and-sell the asset in cash (short spot), buy futures (long futures). Either way, arbitrage trading pushes prices back toward the fair value.',
        },
        {
          type: 'example',
          title: 'Cash-and-carry arbitrage, worked through',
          text:
            'Spot gold = ₹71,000 per 10g; total financing + storage + insurance cost for 3 months = ₹550, so fair 3-month futures = 71,550. Suppose the market futures price is actually ₹71,720. An arbitrageur borrows money, buys gold spot at 71,000, carries it for 3 months (cost 550 → all-in cost 71,550), and simultaneously sells the 3-month futures at 71,720. At expiry, delivering the gold against the futures locks in a riskless profit of 71,720 − 71,550 = ₹170 per 10g. This buying pressure in cash and selling pressure in futures pushes spot up and futures down until the two align — eliminating the gap.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'No-arbitrage bounds',
          text: 'Real-world frictions — margins, brokerage, taxes — mean arbitrage only pays off once the futures price moves outside a "no-arbitrage band" around the fair price. Lower transaction costs narrow this band and make markets more efficient (prices track fair value more tightly).',
        },
        {
          type: 'list',
          items: [
            'Key assumptions of the Cost of Carry model: the underlying is available in abundance and can be freely bought/sold.',
            'Demand and supply of the underlying are not seasonal.',
            'The underlying is easy to hold/store/maintain, and can be sold short.',
            'There are no transaction costs, no taxes, and no margin requirements (in the simplest form of the model).',
          ],
        },
        {
          type: 'keyterm',
          term: 'Convenience Yield',
          definition:
            'An intangible benefit/comfort of physically holding a (usually scarce) commodity — e.g., stockpiling essentials during a shortage. It can dominate the cost of carry and push futures to trade at a discount to spot. It is chiefly relevant for commodities with low inventories, and is generally NOT observed in financial assets like equities, bonds or currencies.',
        },
        {
          type: 'keyterm',
          term: 'Expectations Model',
          definition:
            'Holds that it is the relationship between EXPECTED future spot price and the futures price — not today\'s spot price — that drives the market, especially for assets that cannot be stored or sold short. Under this view, the futures price is simply the market\'s best current estimate of the spot price at expiry.',
        },
        {
          type: 'table',
          headers: ['Market condition', 'Relationship', 'Interpretation'],
          rows: [
            ['Contango', 'Futures price > Spot price', 'Market may be pricing in a rising spot price (or simply reflects positive net cost of carry)'],
            ['Backwardation', 'Futures price < Spot price', 'Market may be pricing in a falling spot price (or reflects high convenience yield / dividend yield exceeding financing cost)'],
          ],
        },
        {
          type: 'mnemonic',
          title: 'Contango Climbs, Backwardation Bends below',
          text: '"Contango" and "Climbs" both start with a hard C-sound — futures trade ABOVE spot. "Backwardation" trades BELOW ("backward" of) spot.',
        },
        {
          type: 'warning',
          title: 'Don\'t over-read contango/backwardation as a pure forecast',
          text: 'In equity index/stock futures, contango usually just reflects that financing cost r exceeds the dividend yield q (a mechanical cost-of-carry effect), and backwardation around high-dividend/ex-dividend periods reflects q exceeding r — NOT necessarily a bullish or bearish market call. Treating contango/backwardation as always "the market\'s directional forecast" is an exam trap.',
        },
        {
          type: 'para',
          text: 'Convergence at expiry: because the final settlement price of a futures contract is defined as the underlying\'s closing cash-market price on the last trading day, the futures price and spot price MUST converge to the same value at maturity — there can be no gap left once the contract expires. This is true for every underlying asset class.',
        },
      ],
    },
    {
      id: 'applications',
      heading: '3.9 Uses of Futures — Hedgers, Speculators and Arbitrageurs',
      blocks: [
        {
          type: 'keyterm',
          term: 'Hedger',
          definition:
            'A participant already exposed to price risk (e.g., holding a portfolio, or a farmer awaiting a crop) who uses futures to reduce/offset that risk. Classic examples: a farmer selling futures to lock in a sale price for produce; an investor selling index futures to protect a portfolio from a temporary correction.',
        },
        {
          type: 'keyterm',
          term: 'Speculator / Trader',
          definition:
            'Takes a naked view on price direction to profit, accepting risk in the process. Futures make speculation cheaper than trading the underlying directly (due to leverage), which magnifies both potential gains AND potential losses — "leverage is a double-edged sword".',
        },
        {
          type: 'keyterm',
          term: 'Arbitrageur',
          definition:
            'Simultaneously buys cheap and sells dear across markets/products to lock in a riskless profit, without taking on directional risk. Arbitrageurs establish the efficient link between the cash and derivatives markets and keep prices aligned with the cost-of-carry model.',
        },
        {
          type: 'example',
          title: 'Locked-in arbitrage profit, whichever way the price moves',
          text:
            'End of day: spot price of an underlying = ₹200; matching futures = ₹215; lot size = 40. An arbitrageur buys in cash at 200 and simultaneously sells futures at 215, locking in ₹15/unit. If, on expiry, spot settles at ₹210: cash leg (buy 200, sell 210) = +10; futures leg (sold at 215, bought back/covered at 210) = +5; total = ₹15/unit. If instead spot settles at ₹190: cash leg (buy 200, sell 190) = −10; futures leg (sold at 215, covered at 190) = +25; total = ₹15/unit again. Either way the arbitrageur nets ₹15 × 40 = ₹600 on the lot — the profit was locked in on day one, regardless of which direction the market later moved (transaction costs ignored).',
        },
        {
          type: 'table',
          headers: ['Arbitrage type', 'Positions taken'],
          rows: [
            ['Cash-and-carry arbitrage', 'Long (buy) in the cash/underlying market + Short (sell) in the futures market — used when futures trade ABOVE fair price.'],
            ['Reverse cash-and-carry arbitrage', 'Long (buy) in the futures market + Short (sell, via borrowing) in the cash/underlying market — used when futures trade BELOW fair price.'],
            ['Inter-exchange (inter-market) arbitrage', 'Same contract, opposite positions on two different exchanges, exploiting a temporary price gap between them (e.g., buy at BSE, sell the costlier contract at NSE).'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Unsystematic (specific) risk vs. Systematic (market) risk',
          definition:
            'Unsystematic risk is company/industry-specific (e.g., a strike, loss of a key executive) and can be reduced by diversification. Systematic risk is the non-diversifiable market-wide risk (e.g., a change in monetary policy) that remains even in a well-diversified portfolio — and is exactly what index futures are used to hedge, while single-stock futures hedge the total risk of a single-stock holding.',
        },
        {
          type: 'formula',
          label: 'Portfolio beta',
          formula: 'βp = W1×β1 + W2×β2 + ... + Wn×βn        (ΣWi = 1)',
          note: 'Example: a portfolio holds 4 stocks with betas 0.5, 1.1, 1.3 and 0.9, weighted 35%, 15%, 20% and 30% respectively. βp = (0.5×0.35) + (1.1×0.15) + (1.3×0.20) + (0.9×0.30) = 0.175 + 0.165 + 0.26 + 0.27 = 0.87. A beta > 1 means the stock/portfolio is more volatile than the index ("aggressive"); beta < 1 means less volatile ("conservative").',
        },
        {
          type: 'formula',
          label: 'Number of index futures contracts to hedge a portfolio',
          formula: 'Number of contracts = (Vp × βp) / Vi',
          note: 'Vp = value of the portfolio, βp = beta of the portfolio, Vi = value of one index futures contract (= futures index level × contract multiplier). Example: Vp = ₹50,00,000, βp = 1.2, index futures at 24,500 with multiplier 75 → Vi = 24,500 × 75 = ₹18,37,500. Contracts required = (50,00,000 × 1.2) / 18,37,500 ≈ 3.27, i.e., roughly 3 contracts (short, to hedge).',
        },
        {
          type: 'warning',
          title: 'A 1:1 hedge ratio only works for single-stock futures',
          text: 'When hedging a single stock holding with its own stock futures, a simple 1:1 lot-for-lot hedge ratio works (e.g., 550 shares hedged with 1 contract of 550-share lot size). It does NOT work for hedging a diversified portfolio with index futures — there, the portfolio\'s beta and the index futures\' contract value must both be factored in via the Vp×βp/Vi formula. Assuming 1:1 for an index hedge is a classic exam trap.',
        },
        {
          type: 'table',
          headers: ['Hedge type', 'Meaning'],
          rows: [
            ['Long hedge', 'Hedging a future cash-market purchase by going LONG futures today — protects against the price rising before you actually buy (e.g., expecting funds to invest later).'],
            ['Short hedge', 'Hedging an existing/future cash-market sale by going SHORT futures today — protects against the price falling before you actually sell (e.g., planning to liquidate a portfolio later).'],
            ['Cross hedge', 'Hedging with futures on a closely related — but not identical — asset, because no futures contract exists on the exact asset held (e.g., hedging jet fuel exposure using crude oil futures). Using index futures to hedge a specific stock portfolio is, in a broad sense, also a cross hedge.'],
            ['Hedge contract month', 'The maturity chosen should expire just AFTER the date you intend to unwind your cash-market exposure — never before it.'],
          ],
        },
        {
          type: 'mnemonic',
          title: 'Buying later → go long now; Selling later → go short now',
          text: 'If you expect to BUY in the cash market later, go LONG futures today (locks in today\'s price against a later rise). If you expect to SELL in the cash market later, go SHORT futures today (locks in today\'s price against a later fall).',
        },
      ],
    },
  ],
};

export default chapter;
