import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[3],
  quickRecap: [
    'An option gives its buyer a right, not an obligation; the seller/writer takes on the obligation in exchange for the premium.',
    'Call = right to buy; Put = right to sell. All exchange-traded index and stock options in India are European style — exercisable only on the expiry date.',
    'Moneyness: a call is ITM when Spot > Strike and OTM when Spot < Strike; a put is exactly the mirror image (ITM when Spot < Strike). ATM = strike closest to spot.',
    'Premium = Intrinsic Value + Time Value. Intrinsic value is never negative and exists only for ITM options; time value decays toward zero as expiry approaches ("wasting asset").',
    'Long option = loss capped at premium paid, profit potentially unlimited. Short option = gain capped at premium received, loss potentially unlimited — only sellers pay margin.',
    'Break-even point: Call = Strike + Premium; Put = Strike − Premium. BEP is the same whether you are the buyer or the seller of that contract.',
    'Futures have symmetric, linear payoffs and obligate both sides equally; options are asymmetric — only the writer carries unlimited risk and daily MTM margin.',
    'Five inputs drive option price: spot price, strike price, volatility, time to expiry, and interest rates. Higher volatility and longer time to expiry raise BOTH call and put premiums.',
    'The five Greeks — Delta (price sensitivity), Gamma (rate of change of Delta), Theta (time decay), Vega (volatility sensitivity), Rho (interest-rate sensitivity) — quantify how premium reacts to each input.',
    'Implied volatility is backed out by running an option pricing model (e.g., Black-Scholes) in reverse from the market premium; high IV nudges traders to sell options, low IV nudges them to buy.',
  ],
  sections: [
    {
      id: 'basics',
      heading: '4.1 What is an Option? Key Terminology',
      blocks: [
        {
          type: 'para',
          text: 'A forward or futures contract commits both sides to buy/sell the underlying, producing a linear payoff with unlimited profit and unlimited loss on both legs. Options exist to let a participant ride the upside of a view while capping the downside — for a price. An option is a contract that gives its holder the right, but not the obligation, to buy or sell the underlying asset on or before a stated date, at a predetermined price, in exchange for an upfront fee called the premium.',
        },
        {
          type: 'optionQuadrant',
          title: 'The four basic positions, made concrete',
          cards: [
            {
              name: 'Long Call',
              explainer: 'I buy the right to BUY the stock from the writer at the strike price — meaning I am the one who may buy.',
              optionAction: 'Buy',
              right: 'Right',
              stockAction: 'Buy',
              premium: 'Pays premium',
              view: 'Bullish',
              risk: 'Limited to the premium paid',
              reward: 'Unlimited (rises with spot)',
            },
            {
              name: 'Short Call',
              explainer: 'I sell someone the right to buy the stock FROM me at the strike price — meaning I am the one who must sell.',
              optionAction: 'Sell',
              right: 'Obligation',
              stockAction: 'Sell',
              premium: 'Receives premium',
              view: 'Bearish',
              risk: 'Unlimited (rises with spot)',
              reward: 'Limited to the premium received',
            },
            {
              name: 'Long Put',
              explainer: 'I buy the right to SELL the stock to the writer at the strike price — meaning I am the one who may sell.',
              optionAction: 'Buy',
              right: 'Right',
              stockAction: 'Sell',
              premium: 'Pays premium',
              view: 'Bearish',
              risk: 'Limited to the premium paid',
              reward: 'Large (rises as spot falls to zero)',
            },
            {
              name: 'Short Put',
              explainer: 'I sell someone the right to sell the stock TO me at the strike price — meaning I am the one who must buy.',
              optionAction: 'Sell',
              right: 'Obligation',
              stockAction: 'Buy',
              premium: 'Receives premium',
              view: 'Bullish',
              risk: 'Large (rises as spot falls to zero)',
              reward: 'Limited to the premium received',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Two different transactions — don\'t collapse them into one',
          text: 'Every position involves TWO separate actions: (1) what you do to the OPTION right now — buy it or write/sell it, which fixes whether you pay or receive the premium — and (2) what happens to the STOCK later if it\'s exercised. For calls these two happen to line up: buy a call and you may BUY the stock; sell a call and you must SELL the stock. For puts they flip: buy a put (an option-market "buy") and you may SELL the stock; sell/write a put (an option-market "sell") and you must BUY the stock. A short put writer has sold the option, but is on the hook to become a stock BUYER if assigned — that mismatch between "sold the option" and "must buy the stock" is the single most common source of confusion in this chapter.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Why a put writer ends up buying',
          text: 'A put gives its buyer the right to SELL the stock to someone at the strike price. That "someone" is the put writer (short put) — so when the put buyer exercises, the writer is contractually the one who must BUY. Selling a put is really selling a promise to be a buyer of last resort.',
        },
        {
          type: 'keyterm',
          term: 'Call Option',
          definition: 'An option that gives its buyer/holder the right to buy the underlying asset at the strike price.',
        },
        {
          type: 'keyterm',
          term: 'Put Option',
          definition: 'An option that gives its buyer/holder the right to sell the underlying asset at the strike price.',
        },
        {
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['Buyer / Holder', 'Pays the premium upfront; owns a right with no obligation. Exercises only when it is favourable to do so.'],
            ['Writer / Seller', 'Receives the premium; is legally obliged to honour the contract whenever the buyer chooses to exercise.'],
            ['Option Premium', 'The price the buyer pays the seller for the right embedded in the option, quoted per unit of the underlying.'],
            ['Spot Price (S)', 'The price at which the underlying asset currently trades in the cash market.'],
            ['Strike / Exercise Price (X)', 'The pre-agreed price at which the underlying may be bought (call) or sold (put).'],
            ['Open Interest', 'The total number of option contracts outstanding for that underlying at a point in time.'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'American vs European — India uses only one',
          text: 'An American option can be exercised any time on or before expiry. A European option can be exercised only on the expiry date itself. All exchange-traded index and stock options in India are European style, so early exercise/assignment risk does not arise here.',
        },
        {
          type: 'list',
          items: [
            'Opening purchase (long on option) — a transaction that creates or increases a long position in an option series.',
            'Opening sale (short on option) — a transaction that creates or increases a short position in an option series.',
            'Closing purchase — an offsetting buy that reduces or eliminates an existing short position; also called "covering" the short.',
            'Closing sale — an offsetting sell that reduces or eliminates an existing long position.',
          ],
        },
        {
          type: 'warning',
          title: 'A closing trade must match the exact series',
          text: 'You cannot close a long call by simply buying a put, or by trading an option with a different strike or expiry. A closing transaction requires the sale/purchase of an option with identical contract specifications — same underlying, same strike price, and same expiry date.',
        },
      ],
    },
    {
      id: 'contract-specs',
      heading: '4.2 Contract Specifications of Exchange-Traded Options',
      blocks: [
        {
          type: 'para',
          text: 'Just as with futures, the exchange fixes every contract term except the premium (which is discovered by trading). Only the premium is market-determined; everything else — lot size, expiry structure, tick size, settlement method — is standardized by the exchange.',
        },
        {
          type: 'table',
          headers: ['Specification', 'Typical Index Option (e.g., Nifty)', 'BSE Sensex Option'],
          rows: [
            ['Contract/Lot size', 'Fixed number of index units per contract, set by the exchange', '20 units per contract'],
            ['Tick size', '5 paisa', 'Rs. 0.05'],
            ['Trading cycle', 'Weekly, monthly (near/mid/far), quarterly, and long-dated half-yearly expiries', '7 serial weekly + 3 monthly + 3 quarterly + 8 semi-annual expiries'],
            ['Expiration day', 'Nifty/Bank Nifty: last Tuesday of the month (previous trading day if a holiday)', 'Monthly/Quarterly/Semi-annual: last Thursday; Weekly: every Thursday'],
            ['Final settlement', 'Cash-settled at the closing price of the underlying in the cash segment on the last trading day', 'Cash-settled at the closing index value on expiry day'],
            ['Trading hours', '9:15 am to 3:30 pm, Monday to Friday', '9:15 am to 3:30 pm, Monday to Friday'],
            ['Exercise style', 'European (exercise only at expiry)', 'European (exercise only at expiry)'],
          ],
        },
        {
          type: 'example',
          title: 'Total premium payable',
          text: 'If the quoted per-unit premium of a call option is Rs. 124.50 and the contract lot size is 50, the buyer pays a total premium of 124.50 × 50 = Rs. 6,225 upfront to the seller — regardless of whether the option later expires ITM or worthless.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Regulatory update — weekly expiry limited to one benchmark index',
          text: 'Per SEBI\'s circular dated October 1, 2024 (effective November 20, 2024), each exchange may offer weekly-expiry derivative contracts on only ONE of its benchmark indices. For example, BSE can run weekly expiry on Sensex or Bankex, but not both; NSE similarly picks only one index for the weekly cycle.',
        },
        {
          type: 'para',
          text: 'Stock option contracts on the NSE follow a three-month trading cycle (near, next and far month), unlike index options which additionally offer weekly, quarterly, and half-yearly maturities — giving index options a much wider range of available expiries than stock options.',
        },
      ],
    },
    {
      id: 'moneyness',
      heading: '4.3 Moneyness of an Option — ITM, ATM, OTM',
      blocks: [
        {
          type: 'para',
          text: 'Moneyness describes whether exercising the option right now would produce a positive, zero, or negative cash flow for the holder. It is defined identically for calls and puts in concept, but the spot-vs-strike direction flips between the two.',
        },
        {
          type: 'table',
          headers: ['Moneyness', 'Call Option Condition', 'Put Option Condition', 'Immediate exercise cash flow'],
          rows: [
            ['In-the-money (ITM)', 'Spot price > Strike price', 'Spot price < Strike price', 'Positive'],
            ['At-the-money (ATM)', 'Spot price ≈ Strike price (nearest available strike)', 'Spot price ≈ Strike price (nearest available strike)', 'Zero'],
            ['Out-of-the-money (OTM)', 'Spot price < Strike price', 'Spot price > Strike price', 'Negative (holder simply would not exercise)'],
          ],
        },
        {
          type: 'keyterm',
          term: 'ATM option (practical definition)',
          definition: 'Since strikes are listed at fixed intervals while the spot price moves continuously, an exact match is rare. In practice, the ATM option is the one whose strike is closest to the current spot price. Example: if the index is at 21,415 and listed strikes are 21,350 / 21,400 / 21,450, the 21,400 strike is the ATM option.',
        },
        {
          type: 'warning',
          title: 'Do not apply the call rule to a put',
          text: 'This is a classic exam trap: "A call is ITM when spot is below strike" is FALSE — it is the opposite. Calls gain value as the underlying rises (ITM above strike); puts gain value as the underlying falls (ITM below strike). Always re-derive the direction from first principles rather than recalling a single rule for both.',
        },
        {
          type: 'mnemonic',
          title: 'Calls Climb, Puts Plunge',
          text: 'Calls are ITM when the underlying has Climbed above the strike. Puts are ITM when the underlying has Plunged below the strike. Both are worthless (OTM) on the opposite side.',
        },
      ],
    },
    {
      id: 'intrinsic-time-value',
      heading: '4.4 Intrinsic Value and Time Value',
      blocks: [
        {
          type: 'para',
          text: 'Every option premium is made up of two components: intrinsic value (the "real", exercise-now value) and time value (the extra amount the market pays for the possibility that the option becomes more valuable before expiry).',
        },
        {
          type: 'formula',
          label: 'Intrinsic value of a call option',
          formula: 'Intrinsic Value (Call) = Max(Spot Price − Strike Price, 0)',
          note: 'Only positive for ITM calls. ATM and OTM calls have zero intrinsic value.',
        },
        {
          type: 'formula',
          label: 'Intrinsic value of a put option',
          formula: 'Intrinsic Value (Put) = Max(Strike Price − Spot Price, 0)',
          note: 'Only positive for ITM puts. ATM and OTM puts have zero intrinsic value.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Intrinsic value can never be negative',
          text: 'The holder is never compelled to exercise at a loss — an OTM or ATM option is simply left to lapse, so the worst-case intrinsic value is zero, never negative.',
        },
        {
          type: 'formula',
          label: 'Time value',
          formula: 'Time Value = Option Premium − Intrinsic Value',
          note: 'ATM and OTM options have zero intrinsic value, so their entire premium is time value.',
        },
        {
          type: 'example',
          title: 'Splitting a premium into intrinsic value and time value',
          text: 'Suppose the index spot is 21,315 and the strike is 21,400. A call at this strike is OTM (spot below strike), so its intrinsic value is zero — if it trades at Rs. 96, the entire Rs. 96 is time value. The put at the same strike is ITM: intrinsic value = 21,400 − 21,315 = Rs. 85. If the put premium is Rs. 148, its time value is 148 − 85 = Rs. 63.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'ATM options usually have the highest pure time value among strikes near the spot, since their fate (ITM vs OTM) is the most uncertain of all — this is tested repeatedly in the buyer/seller-perspective section.',
        },
      ],
    },
    {
      id: 'payoffs',
      heading: '4.5 Payoff Profiles — Long/Short Call & Put',
      blocks: [
        {
          type: 'para',
          text: 'Four basic positions exist: long call, short call, long put, short put. Each pair (long/short of the same option) is a mirror image of the other around the horizontal (profit = 0) axis.',
        },
        {
          type: 'table',
          headers: ['Position', 'Maximum Loss', 'Maximum Profit', 'Break-Even Point (BEP)'],
          rows: [
            ['Long Call (buy call)', 'Premium paid', 'Unlimited (rises with spot price)', 'Strike + Premium'],
            ['Short Call (write call)', 'Unlimited (rises with spot price)', 'Premium received', 'Strike + Premium'],
            ['Long Put (buy put)', 'Premium paid', 'Strike − Premium (spot can fall only to zero)', 'Strike − Premium'],
            ['Short Put (write put)', 'Strike − Premium (spot can fall only to zero)', 'Premium received', 'Strike − Premium'],
          ],
        },
        {
          type: 'formula',
          label: 'Break-even point — Call',
          formula: 'BEP (Call) = Strike Price + Premium',
          note: 'Same BEP applies to both the long call buyer and the short call writer — BEP is a property of the instrument, not the position direction.',
        },
        {
          type: 'formula',
          label: 'Break-even point — Put',
          formula: 'BEP (Put) = Strike Price − Premium',
          note: 'Same BEP applies to both the long put buyer and the short put writer.',
        },
        {
          type: 'example',
          title: 'Long call worked example',
          text: 'You buy a call at strike 20,100 for a premium of Rs. 88. BEP = 20,100 + 88 = 20,188. If the index closes at 20,600 on expiry, the payoff is 20,600 − 20,100 = Rs. 500, and net profit is 500 − 88 = Rs. 412. If the index closes anywhere at or below 20,100, you let the option lapse and your loss is capped at the Rs. 88 premium.',
        },
        {
          type: 'payoffChart',
          title: 'Long Call — buy strike 20,100, premium ₹88',
          subtitle: 'Loss capped at the premium; profit is unlimited as the index rises',
          xLabel: 'Index level at expiry',
          points: [
            { x: 19500, y: -88 },
            { x: 20100, y: -88 },
            { x: 20700, y: 512 },
          ],
          breakevens: [20188],
          maxProfit: { value: 'Unlimited' },
          maxLoss: { value: 88, atLabel: 'at or below strike' },
        },
        {
          type: 'payoffChart',
          title: 'Short Call — write strike 20,100, premium ₹88',
          subtitle: 'The mirror image of the long call: gain capped at the premium, loss unlimited',
          xLabel: 'Index level at expiry',
          points: [
            { x: 19500, y: 88 },
            { x: 20100, y: 88 },
            { x: 20700, y: -512 },
          ],
          breakevens: [20188],
          maxProfit: { value: 88, atLabel: 'at or below strike' },
          maxLoss: { value: 'Unlimited' },
        },
        {
          type: 'example',
          title: 'Long put worked example',
          text: 'You buy a put at strike 20,100 for a premium of Rs. 130. BEP = 20,100 − 130 = 19,970. Below 19,970 you are in profit; the theoretical ceiling on profit occurs if the index falls all the way to zero, giving a maximum net profit of 20,100 − 130 = Rs. 19,970. Above strike 20,100, you let the put lapse and lose the Rs. 130 premium.',
        },
        {
          type: 'payoffChart',
          title: 'Long Put — buy strike 20,100, premium ₹130',
          subtitle: 'Loss capped at the premium; profit grows as the index falls, capped only by the index hitting zero',
          xLabel: 'Index level at expiry',
          points: [
            { x: 19500, y: 470 },
            { x: 20100, y: -130 },
            { x: 20700, y: -130 },
          ],
          breakevens: [19970],
          maxProfit: { value: 19970, atLabel: 'if the index falls to zero' },
          maxLoss: { value: 130, atLabel: 'at or above strike' },
        },
        {
          type: 'payoffChart',
          title: 'Short Put — write strike 20,100, premium ₹130',
          subtitle: 'The mirror image of the long put: gain capped at the premium, loss grows as the index falls',
          xLabel: 'Index level at expiry',
          points: [
            { x: 19500, y: -470 },
            { x: 20100, y: 130 },
            { x: 20700, y: 130 },
          ],
          breakevens: [19970],
          maxProfit: { value: 130, atLabel: 'at or above strike' },
          maxLoss: { value: 19970, atLabel: 'if the index falls to zero' },
        },
        {
          type: 'warning',
          title: 'Margin follows obligation, not premium',
          text: 'Option buyers (long call or long put) pay only the premium upfront and post no further margin, because their maximum possible loss is already paid in full. Option sellers (short call or short put) receive the premium but must post margin with the exchange, because their loss is theoretically unlimited (short call) or very large (short put, capped only by spot falling to zero).',
        },
        {
          type: 'mnemonic',
          title: 'Long vs Short, at a glance',
          text: 'LONG = Limited loss (premium), Open-ended gain. SHORT = Small, capped gain (premium), Harsh, unlimited-style risk that needs margin.',
        },
      ],
    },
    {
      id: 'futures-vs-options',
      heading: '4.6 Futures vs Options — and the Role of Leverage',
      blocks: [
        {
          type: 'para',
          text: 'Options have an asymmetric risk exposure: gains and losses are not mirror images of each other in the way they are for futures. A call buyer\'s loss is capped at the premium paid however far the stock falls, but the gain rises without limit as the stock rises — an asymmetric payoff. Futures, in contrast, have a symmetric (linear) payoff on both sides.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Futures Contract', 'Option Contract'],
          rows: [
            ['Obligation', 'Both buyer and seller are obligated to transact', 'Buyer has a right only, with no obligation; seller/writer is obligated if the buyer exercises'],
            ['Upfront payment', 'Initial margin (by both sides)', 'Buyer pays premium; seller posts initial margin'],
            ['Payoff shape', 'Symmetric / linear', 'Asymmetric'],
            ['Daily MTM margin', 'Both buyer and seller', 'Only the seller/writer'],
            ['Maximum gain/loss', 'Both sides can gain/lose without limit', 'Buyer: profit unlimited, loss capped at premium. Seller: profit capped at premium, loss unlimited'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Leverage',
          text: 'An option buyer pays a comparatively small premium to gain exposure to a much larger contract value — this is leverage. A modest, favourable percentage move in the underlying can therefore translate into a large percentage gain on the premium paid.',
        },
        {
          type: 'example',
          title: 'Leverage in numbers',
          text: 'A call at strike 20,100 with lot size 50 has a contract value of 20,100 × 50 = Rs. 10,05,000. If the premium is Rs. 88 per unit, the buyer commits only 88 × 50 = Rs. 4,400 — roughly 0.4% of the contract value — to control exposure worth over Rs. 10 lakh.',
        },
        {
          type: 'warning',
          title: 'Leverage cuts both ways',
          text: 'If the underlying does not move as anticipated and the option expires worthless, the buyer loses the entire premium — which, though small in absolute terms, can represent a 100% loss on the capital actually committed to that trade.',
        },
      ],
    },
    {
      id: 'pricing-greeks',
      heading: '4.7 Option Pricing Fundamentals and the Greeks',
      blocks: [
        {
          type: 'para',
          text: 'Prices of options are not fixed by the exchange or by SEBI — they are discovered through trading, driven by five fundamental parameters.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Spot price of the underlying asset',
            'Strike price of the option',
            'Volatility of the underlying asset\'s price',
            'Time to expiration',
            'Interest rates',
          ],
        },
        {
          type: 'table',
          headers: ['Parameter rises...', 'Effect on Call Premium', 'Effect on Put Premium'],
          rows: [
            ['Spot price', 'Increases', 'Decreases'],
            ['Strike price', 'Decreases', 'Increases'],
            ['Volatility', 'Increases', 'Increases'],
            ['Time to expiry', 'Increases', 'Increases'],
            ['Interest rate', 'Increases', 'Decreases'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Time decay favours the seller',
          text: 'Time value is structurally biased toward zero — all else held constant, an option\'s time value erodes every single day as expiry approaches ("wasting asset"). This gives the option seller a fundamental structural edge over the option buyer, since price has an inherent tendency to drift down over the contract\'s remaining life.',
        },
        {
          type: 'table',
          headers: ['Greek', 'What it measures', 'Typical sign (long position)'],
          rows: [
            ['Delta (Δ)', 'Change in option premium per unit change in the price of the underlying — the "speed" of the option', 'Positive for a long call, negative for a long put'],
            ['Gamma (Γ)', 'Change in Delta per unit change in the underlying price — the "acceleration"; second derivative of premium w.r.t. spot', 'Positive for both long calls and long puts'],
            ['Theta (Θ)', 'Change in premium for a one-day decrease in time to expiry — measures time decay', 'Negative for a long call or long put'],
            ['Vega (ν)', 'Change in premium for a given change (typically 1%) in the underlying\'s implied volatility', 'Positive for both long calls and long puts'],
            ['Rho (ρ)', 'Change in premium for a one-percentage-point change in the risk-free interest rate', 'Positive for a long call, negative for a long put'],
          ],
        },
        {
          type: 'example',
          title: 'Reading the Greeks',
          text: 'Delta 0.60: a Re. 1 rise in the underlying moves the premium by about 60 paise. Gamma 0.08 on a delta of 0.50: after a Re. 1 rise in the underlying, the new delta becomes roughly 0.50 + 0.08 = 0.58. Theta 1.2 (5 days to expiry): the premium erodes by about Rs. 1.20 per day, all else equal. Vega 0.80: the premium moves by roughly 0.80% for every 1 percentage-point change in implied volatility.',
        },
        {
          type: 'keyterm',
          term: 'Delta as a hedge ratio',
          definition: 'Delta is also called the hedge ratio. If a trader holds "n" shares, n ÷ Delta gives the number of calls that must be sold (written) to build a delta-neutral portfolio — one where a small gain on the shares from a price rise is offset by an equal loss on the written calls, and vice versa.',
        },
        {
          type: 'mnemonic',
          title: 'D-G-T-V-R',
          text: 'Delta = Direction sensitivity. Gamma = Gas-pedal (how fast Delta itself changes). Theta = Time-bleed. Vega = Volatility sensitivity. Rho = Rate (interest) sensitivity.',
        },
      ],
    },
    {
      id: 'pricing-models-iv',
      heading: '4.8–4.9 Option Pricing Models and Implied Volatility',
      blocks: [
        {
          type: 'callout',
          tone: 'info',
          title: 'The Binomial Pricing Model',
          text: 'Models the underlying\'s price evolution as a tree of possible up/down moves over equally-spaced time steps, each with an assigned probability. It is iterative — very flexible and intuitive, and considered highly accurate — but computationally heavier than a closed-form model.',
        },
        {
          type: 'formula',
          label: 'Black-Scholes option pricing formulas',
          formula: 'Call: C = S·N(d1) − X·e^(−rt)·N(d2)   |   Put: P = X·e^(−rt)·N(−d2) − S·N(−d1)',
          note: 'd1 = [ln(S/X) + (r + v²/2)t] / (v√t); d2 = d1 − v√t. S = spot price, X = strike price, t = time to expiry (in years), r = continuously compounded risk-free rate, v = annualized volatility, N(x) = standard normal cumulative distribution. The model ignores dividends and, unlike the binomial model, needs no iteration.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Same five inputs, different engine',
          text: 'Both the binomial model and Black-Scholes are built on the same five determinants of option price — spot price, strike price, volatility, time to expiry, and the risk-free interest rate. The difference is computational approach: iterative tree vs. closed-form formula.',
        },
        {
          type: 'keyterm',
          term: 'Implied Volatility (IV)',
          definition: 'The volatility figure that, when fed into an option pricing model (typically Black-Scholes) together with the other four known inputs, reproduces the option\'s actual observed market premium. It is derived by running the pricing model in reverse — starting from the market price and solving backward for volatility.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Implied volatility ≠ historical volatility',
          text: 'Historical volatility looks backward — it is the standard deviation of the underlying\'s actual past price changes over some period. Implied volatility is forward-looking — it reflects what the market currently expects for the remaining life of the option, extracted from the live option premium rather than past price data.',
        },
        {
          type: 'example',
          title: 'Implied volatility spikes around an event',
          text: 'A mining company\'s stock has been range-bound, with historical volatility around 15%. It is awaiting a regulatory decision on a key license due the next day — a favourable outcome could sharply lift the stock, an adverse one could sharply hit it. Just before the announcement, options on the stock trade at premiums implying volatility of roughly 75% — far above the 15% historical figure — because the market is pricing in a large potential swing in either direction.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Trading on implied volatility levels',
          text: 'When implied volatility is high, options are "expensive" relative to history, and traders tend to lean toward selling options (collecting the rich premium as compensation for the asymmetric risk they take on). When implied volatility is low, options are comparatively "cheap", and traders tend to lean toward buying options.',
        },
      ],
    },
    {
      id: 'buyer-seller-perspective',
      heading: '4.10 Options from the Buyer\'s and Seller\'s Perspective',
      blocks: [
        {
          type: 'para',
          text: 'Choosing which strike to trade — ITM, ATM, or OTM — means trading off premium cost against the probability and leverage of a payoff. Deep ITM options carry substantial intrinsic value and so cost more, but need only a modest favourable move to stay profitable. Deep OTM options are cheap, carry only time value, but need a large favourable move before expiry to pay off at all.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'ATM options carry the greatest uncertainty',
          text: 'For a deeply ITM or OTM option, a small price move in the underlying is unlikely to flip its moneyness — it will largely stay ITM or OTM. An ATM option, however, can flip to either side on a small move, so its outcome is the most uncertain. This uncertainty (a function of time to expiry and volatility) is exactly what is captured in time value — which is why ATM strikes tend to carry the richest time value among strikes at a given expiry.',
        },
        {
          type: 'table',
          headers: ['Position', 'Underlying market view'],
          rows: [
            ['Call buyer', 'Bullish'],
            ['Call seller / writer', 'Neutral to bearish'],
            ['Put buyer', 'Bearish'],
            ['Put seller / writer', 'Neutral to bullish'],
          ],
        },
        {
          type: 'example',
          title: 'Comparing ROI across call strikes',
          text: 'With the index at 20,125, call premiums might be: strike 19,900 → Rs. 300; strike 20,000 → Rs. 230; strike 20,100 → Rs. 178; strike 20,200 → Rs. 132. If the index rallies to 20,450 at expiry, profits are 250, 220, 172 and 118 respectively — but as a Return on Investment (profit ÷ premium paid), the strikes read roughly 83%, 96%, 97% and 89%. The cheaper, closer-to-the-money strikes can deliver a sharply higher percentage return on a favourable move than the expensive, deep-ITM strike — though the deep-ITM strike was already carrying a head start via intrinsic value and the deep-OTM strike carries the highest chance of expiring worthless.',
        },
        {
          type: 'warning',
          title: 'Higher premium income = higher risk, for sellers too',
          text: 'A seller writing a deep ITM put collects a rich premium but bears a large loss risk if the underlying keeps falling. A seller writing a deep OTM put collects only a small premium but faces comparatively lower risk of the underlying reaching that strike. There is no free lunch on either side of the trade — richer premium income is compensation for greater risk taken on.',
        },
      ],
    },
  ],
};

export default chapter;
