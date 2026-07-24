import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[1],
  quickRecap: [
    'An index is a portfolio of securities representing a market/sector, expressed as a change from a base value.',
    'Four construction methods: Market-cap weighted, Free-float market-cap weighted, Price-weighted, Equal-weighted.',
    'Sensex, Nifty, SX40 are now free-float market-cap weighted.',
    'Dow Jones and Nikkei 225 are price-weighted indices.',
    'Impact cost = % degradation from the ideal price (average of best bid & offer) when actually executing a trade.',
    'Index construction = choosing stocks + methodology; maintenance = adjusting for corporate actions; revision = periodically changing constituents.',
    'Applications of indices: Index Funds, Index Derivatives, Exchange Traded Funds (ETFs).',
  ],
  sections: [
    {
      id: 'intro',
      heading: '2.1–2.2 What is an Index and Why it Matters',
      blocks: [
        {
          type: 'keyterm',
          term: 'Index',
          definition:
            'A statistical indicator — a portfolio of securities representing a particular market or portion of a market — usually expressed as a percentage change from a base value.',
        },
        {
          type: 'list',
          items: [
            'Indicator of overall market or sector performance.',
            'Benchmark for portfolio performance (individuals & mutual funds compare returns against it).',
            'Underlying asset for derivative products (index futures, index options).',
          ],
        },
      ],
    },
    {
      id: 'types',
      heading: '2.3 Types of Stock Market Indices',
      blocks: [
        {
          type: 'table',
          headers: ['Method', 'How weight is assigned', 'Example indices'],
          rows: [
            ['Market-capitalization weighted', 'Weight ∝ market cap (price × shares outstanding)', 'Historically Sensex/Nifty'],
            ['Free-float market-cap weighted', 'Weight ∝ market cap of only freely tradable shares (excludes promoter/locked-in holding)', 'Sensex, Nifty, SX40 (current)'],
            ['Price-weighted', 'Weight ∝ share price alone — higher-priced stocks dominate', 'Dow Jones Industrial Average, Nikkei 225'],
            ['Equal-weighted', 'Every stock gets identical weight; requires periodic rebalancing', '—'],
          ],
        },
        {
          type: 'formula',
          label: 'Market-cap weighted index value',
          formula: 'New Index Value = (Current total market cap / Base total market cap) × Base Index Value',
          note: 'Example: base market cap ₹18,800 lakh → 100. Current market cap ₹42,500 lakh → (42500/18800)×100 = 226.06, a rise of 126.06%.',
        },
        {
          type: 'formula',
          label: 'Price-weighted index value',
          formula: 'Price Index = (Sum of prices of all stocks in the index) / (Number of stocks)',
          note: 'Example: 5 stocks priced 150+300+450+100+250 = 1250 → 1250/5 = 250 (base). If current prices sum to 2550 → 2550/5 = 510, a rise of 104%.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'In an equal-weighted index, if some stocks rise more than others, their weight drifts above the equal target — the fund manager must sell the winners and buy the laggards to rebalance back to equal weight.',
        },
      ],
    },
    {
      id: 'impact-cost',
      heading: '2.4 Attributes of an Index — Impact Cost & Liquidity',
      blocks: [
        {
          type: 'para',
          text: 'A good index should reflect market behaviour, be maintained by an independent third party, and be professionally managed. Liquidity of the underlying stocks is central to index quality, and is measured using impact cost.',
        },
        {
          type: 'keyterm',
          term: 'Bid-ask spread',
          definition: 'The difference between the best buy (bid) and best sell (ask/offer) price — the transaction cost for a small trade.',
        },
        {
          type: 'keyterm',
          term: 'Impact cost',
          definition:
            'The % degradation from the "ideal price" (average of best bid and best offer) that a trader actually experiences when executing a real order. Impact cost rises with order size — a measure of liquidity for larger trades, unlike the bid-ask spread which reflects only small trades.',
        },
        {
          type: 'formula',
          label: 'Impact cost',
          formula: 'Impact Cost (%) = [(Actual execution price − Ideal price) / Ideal price] × 100',
          note: 'Ideal price = (Best bid + Best offer) / 2. Worked example: to buy 1500 shares, ideal price = ₹9.85, actual buy price = ₹9.9333 → impact cost = 0.84%.',
        },
        {
          type: 'warning',
          title: 'Common trap',
          text: 'Impact cost is HIGH when liquidity is POOR (thin order book) — not low. "Impact cost is low when liquidity is poor" is a FALSE statement often used in exam questions.',
        },
      ],
    },
    {
      id: 'management',
      heading: '2.5 Index Management',
      blocks: [
        {
          type: 'table',
          headers: ['Activity', 'Meaning'],
          rows: [
            ['Construction', 'Choosing index stocks and deciding the calculation methodology'],
            ['Maintenance', 'Adjusting the index for corporate actions — bonus, rights, split, consolidation, mergers'],
            ['Revision', 'Periodically changing constituents to keep the index representative of the market'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Diversification vs liquidity trade-off',
          text: 'Going from 10 → 20 stocks sharply cuts risk. Going from 50 → 100 stocks barely helps. Beyond 100 stocks, diversification benefit is almost zero — so index committees stop expanding constituents well before that point.',
        },
        {
          type: 'para',
          text: 'A specialized Index Committee makes the final call on including/removing a security. BSE indices are managed by Asia Index Pvt Ltd; NSE indices by NSE Indices Limited.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Regulatory update (SEBI Circular, Oct 30, 2025)',
          text: 'For derivatives on existing non-benchmark indices: minimum 14 constituents, top constituent weight capped at 20%, combined weight of top 3 constituents capped at 45%, and a descending weight structure. Large weight breaches (e.g., BANKNIFTY, BANKEX, FINNIFTY) are corrected gradually over monthly tranches, not in one shot.',
        },
      ],
    },
    {
      id: 'major-indices',
      heading: '2.6 Major Indices in India',
      blocks: [
        {
          type: 'list',
          items: [
            'S&P BSE Sensex, S&P BSE Sensex Next 50, S&P BSE 100, S&P BSE 200, S&P BSE 500',
            'Nifty 50, Nifty Next 50, Nifty 100, Nifty 200, Nifty 500',
            'SX 40',
          ],
        },
      ],
    },
    {
      id: 'applications',
      heading: '2.7 Applications of Indices',
      blocks: [
        {
          type: 'keyterm',
          term: 'Index Funds',
          definition: 'Invest in an index\'s constituent stocks in the same proportion as the index, aiming to replicate its return (subject to a small "tracking error" from expenses/cash holdings).',
        },
        {
          type: 'keyterm',
          term: 'Index Derivatives',
          definition: 'Futures/options contracts with an index as the underlying — the most popular derivative contracts worldwide, widely used to hedge market risk.',
        },
        {
          type: 'keyterm',
          term: 'Exchange Traded Funds (ETFs)',
          definition: 'A basket of securities that trades like an individual stock on an exchange — allows intraday transactions and low-cost basket trading, unlike traditional mutual funds.',
        },
      ],
    },
  ],
};

export default chapter;
