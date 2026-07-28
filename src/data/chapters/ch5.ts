import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[4],
  quickRecap: [
    'Long hedge (long futures) locks in a future buy price; short hedge (short futures) locks in a future sell price — futures gain/loss offsets the cash-market loss/gain.',
    'Portfolio hedge ratio = (Portfolio Beta × Portfolio Value) / (Futures Price × Lot Size) — round down to whole contracts.',
    'Cash-and-carry arbitrage: futures overpriced vs fair value (S×e^rt) → buy spot, sell futures. Reverse cash-and-carry: futures underpriced → sell/short spot, buy futures.',
    'Calendar spread arbitrage: buy the underpriced-month futures, sell the overpriced-month futures; low risk, low return, no directional bet — needs simultaneous execution.',
    'Vertical spreads (bull call, bear call, bull put, bear put) are all limited-profit, limited-loss positions built from same-expiry, different-strike options.',
    'Straddle = same strike, both legs ATM; Strangle = different (OTM) strikes — strangle is cheaper to buy but needs a bigger move to profit.',
    'Covered call = long stock + short call = "synthetic short put" (capped upside, large downside). Protective put = long stock + long put = "synthetic long call" (capped downside, unlimited upside). Collar caps both sides.',
    'Butterfly spread is the limited-risk cousin of a short straddle — long-short-short-long (or equivalent) across three equally-spaced strikes.',
    'Put-call parity (European options only): c + X·e^(−r×t) = p + S₀. Any deviation is a risk-free arbitrage opportunity.',
    'Delta-hedging keeps portfolio delta near zero by offsetting option delta with futures/stock; since delta itself changes with price, the hedge must be rebalanced continuously (dynamic hedging).',
    'Rising price + rising OI = bullish build-up; rising price + falling OI = short-covering; falling price + rising OI = bearish build-up; falling price + falling OI = long unwinding. PCR > 1 is read as bullish (contrarian), PCR < 1 as bearish.',
  ],
  sections: [
    {
      id: 'hedging-futures',
      heading: '5.1 Hedging with Stock and Index Futures',
      blocks: [
        {
          type: 'keyterm',
          term: 'Long hedge',
          definition:
            'Taking a long futures position today to lock in the price of a stock purchase planned for a future date — protects a prospective buyer against a price rise before funds become available.',
        },
        {
          type: 'keyterm',
          term: 'Short hedge',
          definition:
            'Taking a short futures position today to lock in the price of a stock sale planned for a future date — protects a prospective seller against a price fall before the shares are actually sold.',
        },
        {
          type: 'example',
          title: 'Long hedge — locking in a purchase price',
          text: 'An investor wants to buy 1,500 shares of ABC Ltd in about six weeks, once a fixed deposit matures. The stock trades at ₹455 and the matching futures contract (lot 1,500) trades at ₹457.30, so the investor buys one lot of futures today. If the stock rallies to ₹520 by the purchase date (futures at ₹521.20), the extra ₹95,850 spent buying costlier shares in the cash market is almost exactly offset by a ₹95,850 gain on the long futures — net cost per share works out to ₹456.10. If the stock instead falls to ₹390 (futures at ₹391.10), the cheaper cash purchase is offset by a ₹99,300 loss on futures — net cost per share is ₹456.20. Either way, the effective purchase price stays anchored close to the original futures price of ₹457.30, regardless of which direction the stock actually moves.',
        },
        {
          type: 'example',
          title: 'Short hedge — locking in a selling price',
          text: 'An investor holding 1,200 shares of PQR Ltd plans to sell them in two months to repay a loan. The stock is at ₹1,690 and the matching futures (lot 600) trades at ₹1,706, so the investor shorts 2 lots. If the stock later falls to ₹1,440 (futures ₹1,441), the lower cash-market realisation is compensated by a gain on the short futures, giving an effective selling price of about ₹1,705/share. If the stock instead rallies to ₹1,800 (futures ₹1,802), the loss on the short futures offsets the windfall in the cash market, giving an effective selling price of about ₹1,704/share. In both cases the realised price stays close to the ₹1,706 futures price locked in at the start.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Why the effective price is not exact',
          text: 'The effective locked-in price is close to, but not exactly equal to, the original futures price — the small gap reflects the cost-of-carry built into the futures price and any change in that cost-of-carry between initiation and unwind (basis risk).',
        },
        {
          type: 'formula',
          label: 'Hedge ratio for a stock portfolio using index futures',
          formula: 'Number of futures contracts = (Portfolio Beta × Portfolio Value) / (Index Futures Price × Lot Size)',
          note: 'Example: portfolio value ₹90,00,000, beta 1.3, index futures at 17,700 with lot size 50 → (1.3 × 90,00,000)/(17,700 × 50) = 13.22, so the manager shorts 13 lots to hedge the systematic (market) risk of a well-diversified portfolio.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'A hedge using index futures only neutralises systematic (market-wide) risk, not the unsystematic/specific risk of individual holdings. To hedge a bullish exposure a short position is taken; to hedge a planned purchase a long position is taken — direction of the futures leg is always opposite to the risk being removed.',
        },
      ],
    },
    {
      id: 'speculation-arbitrage-futures',
      heading: '5.2 Speculation and Arbitrage Using Futures',
      blocks: [
        {
          type: 'para',
          text: 'Futures were designed for hedging, but their low upfront outlay (margin, not full contract value) makes them equally popular for taking directional bets and for arbitrage between the cash and futures markets.',
        },
        {
          type: 'keyterm',
          term: 'Leverage in futures trading',
          definition:
            'Because a futures position only requires margin (a fraction of contract value) rather than full payment, the percentage return on a correct directional bet is far higher through futures than through an equivalent cash-market purchase — but so is the percentage loss if the view is wrong.',
        },
        {
          type: 'table',
          headers: ['', 'Buy shares in cash market', 'Long futures (same exposure)'],
          rows: [
            ['Cash outlay', 'Full value of shares purchased', 'Only the margin (e.g., ~20% of contract value)'],
            ['Profit on a favourable move', 'Same absolute rupee profit', 'Same absolute rupee profit'],
            ['Return on investment', 'Low — capital fully deployed', 'High — capital outlay is only the margin'],
          ],
        },
        {
          type: 'example',
          title: 'Leverage effect — a bullish trade',
          text: 'A trader expects XYZ Ltd to rise from ₹1,298 towards ₹1,350. Buying 850 shares outright costs ₹11,03,300; a week later at ₹1,345 the profit is ₹39,950 — a return of about 3.6%. Instead, going long one lot (850) of futures at ₹1,300 needs only ₹2,21,000 margin (20% of contract value); the same ₹39,100 profit on the futures leg translates to a return of about 17.7% on the margin deployed — nearly five times the cash-market return for an identical rupee gain.',
        },
        {
          type: 'warning',
          title: 'Leverage cuts both ways',
          text: 'The same low-margin structure that inflates percentage gains on a correct view inflates percentage losses on a wrong one. A short futures position lets a trader express a bearish view (e.g., expecting a stock to fall from ₹1,595 to ₹1,520) without needing to own or borrow the underlying shares, unlike short-selling in the cash market.',
        },
        {
          type: 'formula',
          label: 'Fair (theoretical) futures price — cost-of-carry model',
          formula: 'Fair Futures Price = Spot Price × e^(r × t)',
          note: 'r = annualised cost of carry (as a decimal), t = time to expiry in years, continuous compounding. If the traded futures price is above this fair value, the futures is "overpriced"; if below, it is "underpriced".',
        },
        {
          type: 'example',
          title: 'Cash-and-carry arbitrage (futures overpriced)',
          text: 'Stock A trades at ₹1,500 in the cash market; the 3-month futures trades at ₹1,550 against a fair value of about ₹1,534.13 (9% p.a. cost of carry). Since the futures is overpriced, the arbitrageur buys 100 shares in the cash market and sells one futures contract. Whether the stock closes at ₹1,580 or ₹1,480 on expiry, the gain on one leg is offset by the loss on the other, and after netting off the financing cost of holding the stock, the arbitrageur locks in a riskless profit of ₹1,587 (=100 shares × ₹15.87, the gap between the traded and fair futures prices) — the same result under either price scenario.',
        },
        {
          type: 'example',
          title: 'Reverse cash-and-carry arbitrage (futures underpriced)',
          text: 'Stock B trades at ₹100 in the cash market while the one-month futures trades at only ₹90 — a negative cost of carry. The arbitrageur sells 200 shares in the cash market (or borrows them if not already held) and buys one futures contract. If the stock finishes at ₹110, the loss on the short stock position is offset by the gain on the long futures; if it finishes at ₹85, the reverse happens — either way the net gain on the position is ₹2,000, plus interest earned by investing the cash-sale proceeds until expiry (about ₹150.56 at 9% p.a. for one month), taking the total gain to about ₹2,150.56.',
        },
        {
          type: 'warning',
          title: 'A condition often missed',
          text: 'Reverse cash-and-carry arbitrage assumes the arbitrageur already holds the stock to sell, or can borrow it. If the stock must be borrowed to sell short, the cost of borrowing the stock must be deducted from the arbitrage profit — ignoring this overstates the true gain.',
        },
      ],
    },
    {
      id: 'calendar-spread',
      heading: '5.3 Calendar Spreads Using Futures',
      blocks: [
        {
          type: 'keyterm',
          term: 'Calendar spread (using futures)',
          definition:
            'An arbitrage between futures contracts on the same underlying but with two different expiry months — buy the underpriced-month contract and sell the overpriced-month contract, profiting when the spread between the two prices reverts to its fair value.',
        },
        {
          type: 'strategyLegs',
          title: 'Calendar spread — the two legs',
          view: 'No directional view on the stock — this is a bet purely on the near-vs-far price GAP correcting, not on which way the stock moves.',
          legs: [
            { action: 'Sell', instrument: 'Near-month Futures (overpriced leg)', right: 'Obligation', premium: 'Sold at ₹121.30' },
            { action: 'Buy', instrument: 'Far-month Futures (underpriced leg)', right: 'Obligation', premium: 'Bought at ₹121.50' },
          ],
          netCost: 'Both legs are futures — both are full obligations. There is no premium outlay, only margin on both legs.',
        },
        {
          type: 'example',
          title: 'Calendar spread arbitrage',
          text: 'A stock trades at ₹120; the near-month futures is at ₹121.30 and the mid-month futures at ₹121.50 — a spread of just ₹0.20. At an 8% p.a. cost of carry, the fair spread between one-month and two-month futures should be closer to ₹0.81 (fair near-month ≈ ₹120.80, fair mid-month ≈ ₹121.61). The narrow actual spread means the near-month contract is overpriced relative to the mid-month, so the arbitrageur shorts the near-month futures at ₹121.30 and goes long the mid-month futures at ₹121.50. If the spread later widens back towards fair value — e.g., the stock settles near-month expiry at ₹122 while mid-month trades at ₹122.82 — the position nets a small gain (about ₹0.62 per share) regardless of which way the stock actually moved.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Why calendar spreads are "low risk, low return"',
          text: 'There is no directional bet — the arbitrageur is simultaneously long one month and short another, so losses from an adverse stock move in one leg are largely offset by gains in the other. The profit captured is only the small mispricing between the two legs, which is why returns are modest. In practice these opportunities vanish quickly because liquid index/stock futures are tracked closely by many arbitrageurs.',
        },
        {
          type: 'warning',
          title: 'Execution risk',
          text: 'For the anticipated profit to materialise, both legs must be entered simultaneously and unwound simultaneously. Any delay in executing the second leg after the first has been placed exposes the arbitrageur to price risk and can turn the expected small profit into a loss.',
        },
      ],
    },
    {
      id: 'option-spreads',
      heading: '5.4 Option Spread Strategies — Vertical, Horizontal and Diagonal',
      blocks: [
        {
          type: 'para',
          text: 'A spread combines options on the same underlying and of the same type (all calls, or all puts) but with different strikes and/or maturities. All spreads are limited-profit, limited-loss positions.',
        },
        {
          type: 'table',
          headers: ['Spread type', 'What differs between the legs', 'Payoff chart possible?'],
          rows: [
            ['Vertical spread', 'Same expiry, different strike prices', 'Yes'],
            ['Horizontal (calendar/time) spread', 'Same strike price, different expiry dates', 'No — legs expire on different dates'],
            ['Diagonal spread', 'Different strike prices AND different expiry dates', 'No — more complex, mainly used OTC'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Bull Call Spread',
          definition:
            'Buy a call at a lower strike, sell a call at a higher strike (same expiry) — a bullish, net-debit strategy that reduces the cost of a plain long call in exchange for capping the upside.',
        },
        {
          type: 'example',
          title: 'Bull call spread — worked numbers',
          text: 'Long the 17,500 call for a premium of ₹185; short the 17,800 call for a premium of ₹61 (net cost ₹124). Below 17,500, both options expire worthless and the loss is capped at the net premium of ₹124. Above 17,800, gains on the long call are exactly capped by losses on the short call, capping the maximum profit at ₹176 (=(17,800−17,500)−124). Break-even = lower strike + net premium = 17,500 + 124 = 17,624.',
        },
        {
          type: 'keyterm',
          term: 'Bull Put Spread',
          definition:
            'Sell a put at a higher strike, buy a put at a lower strike (same expiry) — a bullish, net-credit strategy; the long put caps the otherwise-unlimited downside of the naked short put.',
        },
        {
          type: 'example',
          title: 'Bull put spread — worked numbers',
          text: 'Short the 17,500 put for ₹125; long the 17,000 put for ₹34 (net credit ₹91). If the index stays above 17,500, both puts expire worthless and the trader keeps the full net credit of ₹91 (maximum profit). Below 17,000, losses on the short put are capped by gains on the long put, at a maximum loss of ₹409 (=(17,500−17,000)−91). Break-even = higher strike − net premium received = 17,500 − 91 = 17,409.',
        },
        {
          type: 'keyterm',
          term: 'Bear Call Spread',
          definition:
            'Sell a call at a lower strike, buy a call at a higher strike (same expiry) — a bearish, net-credit strategy; the long call caps the otherwise-unlimited downside of the naked short call.',
        },
        {
          type: 'example',
          title: 'Bear call spread — worked numbers',
          text: 'Short the 17,500 call for ₹185; long the 17,800 call for ₹61 (net credit ₹124 — maximum profit if the index stays at or below 17,500). Above 17,800, losses on the short call are capped by gains on the long call, at a maximum loss of ₹176. Break-even = lower strike + net premium received = 17,500 + 124 = 17,624.',
        },
        {
          type: 'keyterm',
          term: 'Bear Put Spread',
          definition:
            'Buy a put at a higher strike, sell a put at a lower strike (same expiry) — a bearish, net-debit strategy that reduces the cost of a plain long put in exchange for capping the downside profit.',
        },
        {
          type: 'example',
          title: 'Bear put spread — worked numbers',
          text: 'Long the 17,500 put for ₹125; short the 17,000 put for ₹34 (net cost ₹91). If the index falls to or below 17,000, the maximum profit of ₹409 (=(17,500−17,000)−91) is captured. Above 17,500, both puts expire worthless and the loss is capped at the net premium of ₹91. Break-even = higher strike − net premium = 17,500 − 91 = 17,409.',
        },
        {
          type: 'mnemonic',
          title: 'Naming vertical spreads',
          text: '"Bull spreads buy low, sell high (on strikes); bear spreads sell low, buy high." A CALL spread that starts with a net outflow is bullish (bull call); a PUT spread that starts with a net outflow is bearish (bear put). Whichever leg is bought at the strike closer to the current price usually decides the net premium direction.',
        },
        {
          type: 'para',
          text: 'Horizontal spreads (same strike, different expiries) bet on how the time value gap between the two expiries will change — no payoff diagram is possible since the two legs do not expire together. Diagonal spreads combine both a strike difference and an expiry difference, are the most complex of the three, and are used more in the OTC market than on exchanges.',
        },
      ],
    },
    {
      id: 'straddles-strangles',
      heading: '5.5 Straddles and Strangles',
      blocks: [
        {
          type: 'keyterm',
          term: 'Straddle',
          definition:
            'A combination of a call and a put on the same underlying with the same strike price and same expiry. A long straddle bets on a large move in either direction; a short straddle bets that the price will stay near the strike.',
        },
        {
          type: 'keyterm',
          term: 'Strangle',
          definition:
            'Similar outlook to a straddle, but the call and put use different (out-of-the-money) strikes rather than the same strike — cheaper to set up than a straddle, but needs a bigger move to become profitable.',
        },
        {
          type: 'example',
          title: 'Long straddle — worked numbers',
          text: 'A stock trades at ₹6,000; the ATM call and put (both strike 6,000) cost ₹257 and ₹136 respectively (total premium ₹393). Maximum loss (₹393) occurs only if the stock expires exactly at ₹6,000. If the stock falls to ₹5,300, the long put profits by ₹564 while the call is worthless, for a net gain of ₹307; if the stock rallies to ₹6,700, the long call profits by ₹443 while the put is worthless, again netting ₹307. Break-even points are Strike ± Total Premium = ₹5,607 and ₹6,393.',
        },
        {
          type: 'example',
          title: 'Long strangle — worked numbers',
          text: 'With the stock at ₹6,100, an OTM 6,200 call costs ₹145 and an OTM 6,000 put costs ₹140 (total premium ₹285, cheaper than the straddle above). Maximum loss (₹285) occurs anywhere the stock finishes between the two strikes (₹6,000–₹6,200). If the stock falls to ₹5,700, the put nets ₹160 against the lost ₹145 call premium, a net gain of ₹15; if it rallies to ₹6,800, the call nets ₹455 against the lost ₹140 put premium, a net gain of ₹315. Break-even points are 5,715 and 6,485 — further apart than the straddle\'s, since the strangle needs a larger move to clear both strikes and recover the smaller premium paid.',
        },
        {
          type: 'strategyLegs',
          title: 'Long Straddle — the two legs',
          view: 'Expects a BIG move but is unsure of direction — profits whether the stock rallies hard or falls hard.',
          legs: [
            { action: 'Buy', instrument: '6,000 Call', right: 'Right', premium: '₹257 paid' },
            { action: 'Buy', instrument: '6,000 Put (same strike)', right: 'Right', premium: '₹136 paid' },
          ],
          netCost: 'Net debit ₹393 (max loss) — both legs are rights, so risk is capped even though two premiums are paid.',
        },
        {
          type: 'payoffChart',
          title: 'Long Straddle — 6,000 call + 6,000 put',
          subtitle: 'A "V" shape: maximum loss (the total premium) sits exactly at the strike; profit grows in either direction',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 5300, y: 307 },
            { x: 6000, y: -393 },
            { x: 6700, y: 307 },
          ],
          breakevens: [5607, 6393],
          maxProfit: { value: 'Unlimited' },
          maxLoss: { value: 393, atLabel: 'exactly at the strike' },
        },
        {
          type: 'strategyLegs',
          title: 'Long Strangle — the two legs',
          view: 'Same "big move, either direction" view as the straddle, but cheaper to set up because both strikes are OTM.',
          legs: [
            { action: 'Buy', instrument: '6,200 Call (OTM)', right: 'Right', premium: '₹145 paid' },
            { action: 'Buy', instrument: '6,000 Put (OTM)', right: 'Right', premium: '₹140 paid' },
          ],
          netCost: 'Net debit ₹285 (max loss, anywhere between the two strikes) — cheaper than the straddle\'s ₹393.',
        },
        {
          type: 'payoffChart',
          title: 'Long Strangle — 6,200 call + 6,000 put',
          subtitle: 'Same "V" idea as the straddle, but flat-bottomed between the two OTM strikes — cheaper, needs a bigger move',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 5700, y: 15 },
            { x: 6000, y: -285 },
            { x: 6200, y: -285 },
            { x: 6800, y: 315 },
          ],
          breakevens: [5715, 6485],
          maxProfit: { value: 'Unlimited' },
          maxLoss: { value: 285, atLabel: 'anywhere between the two strikes' },
        },
        {
          type: 'table',
          headers: ['Feature', 'Long Straddle', 'Long Strangle', 'Short Straddle', 'Short Strangle'],
          rows: [
            ['Strikes used', 'Same (ATM)', 'Different (both OTM)', 'Same (ATM)', 'Different (both OTM)'],
            ['View', 'Big move, direction unsure', 'Big move, direction unsure', 'Price stays range-bound', 'Price stays range-bound'],
            ['Cost to enter', 'Higher premium outlay', 'Lower premium outlay', 'Net credit received', 'Net credit received (smaller)'],
            ['Max profit', 'Unlimited', 'Unlimited', 'Limited to premium received', 'Limited to premium received'],
            ['Max loss', 'Limited to premium paid', 'Limited to premium paid', 'Unlimited', 'Unlimited'],
          ],
        },
        {
          type: 'warning',
          title: 'Common trap',
          text: 'Short straddles and short strangles are unlimited-loss, limited-profit strategies — the mirror image of their long versions. They should never be confused with hedged/insured positions like covered calls or protective puts, which involve an actual stock holding.',
        },
      ],
    },
    {
      id: 'covered-collar-butterfly',
      heading: '5.6 Covered Calls, Collars and Butterfly Spreads',
      blocks: [
        {
          type: 'keyterm',
          term: 'Covered call',
          definition:
            'Long stock + short a call option against it — generates extra income (the premium) from an existing holding, at the cost of capping the upside once the stock crosses the call strike.',
        },
        {
          type: 'example',
          title: 'Covered call — worked numbers',
          text: 'Buy the stock at ₹1,590 and sell the 1,600 call for a premium of ₹10. If the stock rises to ₹1,640, the ₹50 gain in the cash position is partly offset by a ₹30 loss on the short call, netting ₹20 (the maximum profit, capped once the stock is above 1,600). If the stock falls to ₹1,520, the ₹70 cash-market loss is cushioned only by the ₹10 premium kept, netting a loss of ₹60. Break-even = purchase price − premium received = 1,590 − 10 = 1,580.',
        },
        {
          type: 'strategyLegs',
          title: 'Covered Call — the two legs',
          view: 'Mildly bullish to neutral — happy to earn income if the stock drifts sideways or rises only modestly, gives up gains beyond the strike.',
          legs: [
            { action: 'Buy', instrument: 'Stock (existing holding)', right: 'Obligation', premium: 'Bought at ₹1,590' },
            { action: 'Sell', instrument: '1,600 Call', right: 'Obligation', premium: '₹10 received' },
          ],
          netCost: 'The stock leg is always an "obligation" in the sense that you own it outright and bear its full downside — the call you sold adds a second obligation: to deliver the stock if exercised.',
        },
        {
          type: 'payoffChart',
          title: 'Covered Call — long stock at ₹1,590 + short 1,600 call',
          subtitle: 'Upside capped once the stock crosses the strike; downside keeps falling with the stock, cushioned only by the premium',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 1500, y: -80 },
            { x: 1600, y: 20 },
            { x: 1700, y: 20 },
          ],
          breakevens: [1580],
          maxProfit: { value: 20, atLabel: 'at or above strike' },
          note: 'Max loss is not shown as a fixed number here — like plain stock ownership, the loss keeps growing as the stock falls, just ₹10 less steep than owning the stock outright thanks to the premium received.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Synthetic short put',
          text: 'The covered call\'s payoff — capped gains above the strike, growing losses below it — is identical in shape to a naked short put with the same strike. This is why a covered call is called a "synthetic short put".',
        },
        {
          type: 'keyterm',
          term: 'Collar',
          definition:
            'An extension of a covered call: long stock + short a call (for income) + long an OTM put (to floor the downside). It caps both the maximum profit and the maximum loss.',
        },
        {
          type: 'example',
          title: 'Collar — worked numbers',
          text: 'Continuing the covered call above (long stock at 1,590, short 1,600 call at ₹10 premium), also buy the 1,580 put for ₹7. If the stock falls to ₹1,490, the ₹100 cash-market loss is now mostly offset by the ₹83 gain on the long put plus the ₹10 call premium, netting a much smaller loss of ₹7 (versus −₹90 for the plain covered call). If the stock rises to ₹1,690, the maximum profit is now ₹13 (=100−80−7), slightly lower than the ₹20 cap on the plain covered call, because of the premium paid for the protective put.',
        },
        {
          type: 'strategyLegs',
          title: 'Collar — the three legs',
          view: 'Neutral — willing to give up upside beyond the call strike in exchange for a guaranteed floor below the put strike.',
          legs: [
            { action: 'Buy', instrument: 'Stock (existing holding)', right: 'Obligation', premium: 'Bought at ₹1,590' },
            { action: 'Sell', instrument: '1,600 Call', right: 'Obligation', premium: '₹10 received' },
            { action: 'Buy', instrument: '1,580 Put', right: 'Right', premium: '₹7 paid' },
          ],
          netCost: 'Net premium: ₹10 received − ₹7 paid = ₹3 net credit — the put "right" is what turns the covered call\'s open-ended downside into a hard floor.',
        },
        {
          type: 'payoffChart',
          title: 'Collar — covered call + protective put (floor 1,580)',
          subtitle: 'Both the profit and the loss are now capped — the "cap the tails" trade-off',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 1490, y: -7 },
            { x: 1580, y: -7 },
            { x: 1600, y: 13 },
            { x: 1690, y: 13 },
          ],
          breakevens: [1587],
          maxProfit: { value: 13, atLabel: 'at or above call strike 1,600' },
          maxLoss: { value: 7, atLabel: 'at or below put strike 1,580' },
        },
        {
          type: 'keyterm',
          term: 'Butterfly spread',
          definition:
            'An extension of a short straddle that limits its unlimited downside: buy one lower-strike option, sell two middle-strike options, buy one higher-strike option (all same type and expiry, equally spaced strikes). Payoff resembles a butterfly shape — limited profit, limited loss.',
        },
        {
          type: 'example',
          title: 'Butterfly spread (using calls) — worked numbers',
          text: 'Long the 6,000 call (premium ₹230), short two 6,100 calls (premium ₹150 each), long the 6,200 call (premium ₹100). Net cost to set up = −230+150+150−100 = −₹30 (this is the maximum loss, occurring at or below 6,000, or at/above 6,200). At the middle strike of 6,100, the position earns its maximum profit of ₹70. Break-even points = lower strike + net debit = 6,030, and higher strike − net debit = 6,170.',
        },
        {
          type: 'strategyLegs',
          title: 'Long Butterfly — the four legs',
          view: 'Neutral, pinpointed — expects the stock to settle very close to the middle strike (6,100) and stay away from both wings.',
          legs: [
            { action: 'Buy', instrument: '6,000 Call (lower wing)', right: 'Right', premium: '₹230 paid' },
            { action: 'Sell', instrument: '6,100 Call, ×2 (middle)', right: 'Obligation', premium: '₹150 received each' },
            { action: 'Buy', instrument: '6,200 Call (upper wing)', right: 'Right', premium: '₹100 paid' },
          ],
          netCost: 'Net debit ₹30 (max loss) = 230 − 150 − 150 + 100. The two long "wing" legs are what cap the short middle legs\' otherwise unlimited risk.',
        },
        {
          type: 'payoffChart',
          title: 'Long Butterfly (calls) — buy 6,000 & 6,200, sell two 6,100',
          subtitle: 'The "pin the middle strike" shape: small, limited loss on both tails, small, limited profit if the stock lands near the middle strike',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 5900, y: -30 },
            { x: 6000, y: -30 },
            { x: 6100, y: 70 },
            { x: 6200, y: -30 },
            { x: 6300, y: -30 },
          ],
          breakevens: [6030, 6170],
          maxProfit: { value: 70, atLabel: 'exactly at the middle strike' },
          maxLoss: { value: 30, atLabel: 'at or beyond either outer strike' },
        },
        {
          type: 'para',
          text: 'A butterfly can equally be built entirely with puts (buy the highest strike, sell two at the middle strike, buy the lowest strike) or as a call-put combination (buy a low-strike call, sell a middle-strike call, buy a high-strike put, sell a middle-strike put) — all variants target the same limited profit/limited loss, "pin the middle strike" payoff.',
        },
        {
          type: 'mnemonic',
          title: 'Family tree of strategies',
          text: 'Collar = Covered Call + a floor (long OTM put). Butterfly = Short Straddle + a ceiling on both sides (long OTM call + long OTM put). Both strategies "cap the tails" of a riskier parent position in exchange for giving up some of its profit potential.',
        },
      ],
    },
    {
      id: 'protective-put',
      heading: '5.7 Hedging with Options — Protective Puts',
      blocks: [
        {
          type: 'para',
          text: 'A call option can be bought to lock in a future purchase price (insurance against a price rally); a put option can be bought to protect an existing holding against a price fall — this is the protective put.',
        },
        {
          type: 'keyterm',
          term: 'Protective put',
          definition:
            'Long stock + long a put option on the same stock — insures the cash position against a fall in price while leaving the upside open, at the cost of the put premium.',
        },
        {
          type: 'example',
          title: 'Protective put — worked numbers',
          text: 'A fund manager holds stock bought at ₹1,600 and buys the 1,600 put for a premium of ₹20. If the stock falls to ₹1,530, the ₹70 cash-market loss is offset by a ₹50 gain on the long put, capping the net loss at ₹20 (the premium paid) — however far the stock falls, the loss never exceeds ₹20. If the stock rises to ₹1,660, the ₹60 cash-market gain is reduced by the ₹20 premium paid, netting ₹40 — and profits keep rising one-for-one with the stock above this point.',
        },
        {
          type: 'strategyLegs',
          title: 'Protective Put — the two legs',
          view: 'Bullish to neutral, but risk-averse — wants to stay invested for the upside while insuring against a sharp fall.',
          legs: [
            { action: 'Buy', instrument: 'Stock (existing holding)', right: 'Obligation', premium: 'Bought at ₹1,600' },
            { action: 'Buy', instrument: '1,600 Put', right: 'Right', premium: '₹20 paid' },
          ],
          netCost: 'Unlike the covered call, both legs here are on the "buy" side — the put is a right you hold, purely insurance, costing a premium instead of earning one.',
        },
        {
          type: 'payoffChart',
          title: 'Protective Put — long stock at ₹1,600 + long 1,600 put',
          subtitle: 'A hard floor at the premium paid, with the stock\'s full upside left open',
          xLabel: 'Stock price at expiry',
          points: [
            { x: 1500, y: -20 },
            { x: 1600, y: -20 },
            { x: 1700, y: 80 },
          ],
          breakevens: [1620],
          maxProfit: { value: 'Unlimited' },
          maxLoss: { value: 20, atLabel: 'at or below strike (the floor)' },
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Synthetic long call',
          text: 'The protective put\'s payoff — a floor equal to the premium paid, with unlimited upside — has the same shape as a plain long call. This is why a protective put is called a "synthetic long call". A useful contrast: covered call = synthetic short put; protective put = synthetic long call.',
        },
        {
          type: 'warning',
          title: 'Common exam trap',
          text: 'Do not mix up the two: the covered call generates income but leaves the downside largely uncovered (capped upside, large downside); the protective put costs a premium but insures the downside (limited downside, unlimited upside). A "collar" is what you get if you combine both ideas together.',
        },
      ],
    },
    {
      id: 'put-call-parity',
      heading: '5.8 Put-Call Parity and Arbitrage Using Options',
      blocks: [
        {
          type: 'formula',
          label: 'Put-Call Parity (European options only)',
          formula: 'c + X·e^(−r×t) = p + S₀',
          note: 'c = call premium, p = put premium, X = common strike price, S₀ = current spot price, r = interest rate, t = time to expiry. Rearranged: p = c + X·e^(−r×t) − S₀, and c = p + S₀ − X·e^(−r×t).',
        },
        {
          type: 'para',
          text: 'If the actual traded price of the put (or call) differs from the fair price implied by this relationship, a risk-free arbitrage exists by combining the stock, the call and the put in offsetting positions.',
        },
        {
          type: 'example',
          title: 'Put-call parity arbitrage — worked numbers',
          text: 'A stock trades at ₹1,251; the 1,240-strike, one-month call trades at ₹47.50, and the interest rate is 8% p.a. Put-call parity implies a fair put price of about ₹28.26, but the put is actually trading at ₹23.15 — it is underpriced. The arbitrageur buys the underpriced put and the stock while shorting the (relatively overpriced) call, funding the net outflow of about ₹1,226.65 by borrowing at 8% p.a. Whether the stock finishes at ₹1,275 (put worthless, short call loses ₹35, stock sold for a gain) or at ₹1,200 (call worthless, put pays ₹40, stock sold at a loss), after repaying the borrowing the arbitrageur nets the same risk-free profit of about ₹5.14 — exactly the gap between the fair and traded put prices.',
        },
        {
          type: 'warning',
          title: 'Execution risk',
          text: 'This arbitrage requires three simultaneous legs — buying/selling the stock, the call and the put together. Any delay in one leg after the others are executed leaves the arbitrageur with a naked, unhedged position exposed to real market risk. Also remember: put-call parity in this simple form applies strictly to European options.',
        },
      ],
    },
    {
      id: 'delta-hedging-oi-pcr',
      heading: '5.9 Delta-Hedging, Open Interest and the Put-Call Ratio',
      blocks: [
        {
          type: 'keyterm',
          term: 'Delta',
          definition:
            'A measure of how much an option\'s price is expected to change for a small (₹1) change in the underlying price. A call delta of 0.60 means the call premium moves by about ₹0.60 for every ₹1 move in the stock.',
        },
        {
          type: 'formula',
          label: 'Delta-neutral hedge using futures',
          formula: 'Futures lots required = (|Option position delta| × Lot size) / (Futures delta ≈ 1 × Lot size)',
          note: 'A stock futures contract has a delta of approximately 1 (its price tracks the spot price nearly one-for-one).',
        },
        {
          type: 'example',
          title: 'Delta-hedging — worked numbers',
          text: 'A trader is short 10 lots of ATM calls (lot size 50) with a delta of 0.50. A ₹1 rise in the stock would cause a loss of 0.50 × 50 × 10 = ₹250 on the short call position. To offset this, the trader goes long in stock futures: since a futures contract has a delta of about 1, going long 5 lots (delta = 1 × 50 × 5 = 250) exactly cancels the −250 delta of the short calls, giving a delta-neutral combined position unaffected by small price moves. If the stock then rises and the call delta itself rises to 0.60, the required hedge grows to 6 lots of futures — the position must be continually rebalanced as delta changes, a process called dynamic delta-hedging.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Delta by position type',
          text: 'Long futures: delta +1. Short futures: delta −1. Long call: delta between 0 and +1 (gains partially as underlying rises). Short call: delta between −1 and 0. Long put: delta between −1 and 0 (gains partially as underlying falls). Short put: delta between 0 and +1.',
        },
        {
          type: 'keyterm',
          term: 'Open Interest (OI)',
          definition:
            'The number of outstanding (not yet closed) derivative positions in a contract. SEBI\'s newer Future-Equivalent OI (FutEq OI) methodology measures this on a delta-adjusted basis across futures and options combined on an underlying, rather than simply counting notional contracts — bringing OI closer in spirit to actual directional exposure.',
        },
        {
          type: 'table',
          headers: ['Futures price', 'Open Interest', 'Interpretation'],
          rows: [
            ['Rising', 'Rising', 'Bullish — fresh long positions being built up'],
            ['Rising', 'Falling', 'Short-covering — existing shorts being squared off'],
            ['Falling', 'Rising', 'Bearish — fresh short positions being built up'],
            ['Falling', 'Falling', 'Long-unwinding — existing longs being squared off'],
          ],
        },
        {
          type: 'formula',
          label: 'Put-Call Ratio (PCR)',
          formula: 'PCR = Put trading volume (or Put OI) / Call trading volume (or Call OI)',
          note: 'Example: Put OI 8,000, Call OI 12,000 → PCR = 8000/12000 = 0.67.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'PCR is a contrarian indicator',
          text: 'PCR < 1 (calls outnumber puts) is read as bearish — option sellers/writers are more comfortable selling calls, implying they do not expect the market to rise. PCR > 1 (puts outnumber calls) is read as bullish — sellers are more comfortable selling puts, implying they do not expect a fall.',
        },
      ],
    },
  ],
};

export default chapter;
