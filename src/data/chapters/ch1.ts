import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[0],
  quickRecap: [
    'A derivative derives its value from an underlying asset — it has no independent value of its own.',
    'Forwards are private/OTC and customized; futures are exchange-traded and standardized.',
    'Options give a right without an obligation; the buyer pays a premium, the seller/writer takes the obligation.',
    'Swaps are a series of forward contracts to exchange cash flows.',
    'Three participant types: Hedgers (reduce risk), Speculators (take a view for profit), Arbitrageurs (riskless profit from price gaps).',
    'India: SCRA amended in 1999 to include derivatives as "securities"; exchange-traded derivatives began June 2000.',
    'Key risks: counterparty, price, liquidity, legal/regulatory, operational.',
  ],
  sections: [
    {
      id: 'basics',
      heading: '1.1 What is a Derivative?',
      blocks: [
        {
          type: 'keyterm',
          term: 'Derivative',
          definition:
            'A contract or product whose value is derived from the value of an underlying asset — such as shares, bonds, currencies, metals, energy, or agricultural commodities. It has no independent value of its own.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Think of it this way',
          text: 'A derivative is like a "shadow" contract — it moves when the underlying asset moves. No underlying price move, no derivative value change.',
        },
        {
          type: 'list',
          items: [
            'Metals — Gold, Silver, Aluminium, Copper, Zinc, Nickel, Tin, Lead',
            'Energy — Crude oil, oil products, Coal, Electricity, Natural Gas',
            'Agri commodities — Wheat, Sugar, Coffee, Cotton, Pulses',
            'Financial assets — Shares, Bonds, Foreign Exchange',
          ],
        },
      ],
    },
    {
      id: 'history',
      heading: '1.2 History & Evolution of Derivatives',
      blocks: [
        {
          type: 'para',
          text: 'Derivatives are centuries old. A handful of global milestones are exam-favourites — memorize the sequence, not just the facts.',
        },
        {
          type: 'timeline',
          items: [
            { year: '12th–13th Century', text: 'European trade fairs and English Cistercian Monasteries used forward-delivery contracts for wool.' },
            { year: '1634–1637', text: 'Tulip Mania in Holland — a speculative boom and bust in tulip futures.' },
            { year: '1848', text: 'Chicago Board of Trade (CBOT) facilitates forward contract trading.' },
            { year: '1865', text: 'CBOT lists the first exchange-traded derivative contract in the US — "futures contracts".' },
            { year: '1919', text: 'Chicago Butter and Egg Board reorganised → later becomes the Chicago Mercantile Exchange (CME).' },
            { year: '1972', text: 'CME introduces the International Monetary Market (IMM) — currency futures.' },
            { year: '1973', text: 'Chicago Board Options Exchange (CBOE) — first marketplace for listed options.' },
            { year: '1975', text: 'CBOT introduces Treasury bill futures — first successful pure interest rate futures.' },
            { year: '1977', text: 'CBOT introduces T-bond futures.' },
            { year: '1982', text: 'CME introduces Eurodollar futures; Kansas City Board of Trade launches the first stock index futures.' },
            { year: '1983', text: 'CBOE introduces options on stock indices — S&P 100 (OEX) and S&P 500 (SPX).' },
          ],
        },
        {
          type: 'mnemonic',
          title: '"CBOT did it first, CME followed, CBOE did options"',
          text: 'CBOT (1848 forwards, 1865 futures) → CME lineage (1919 reorg, 1972 currency futures, 1982 Eurodollar) → CBOE (1973 first listed options, 1983 index options).',
        },
      ],
    },
    {
      id: 'india',
      heading: '1.3 Indian Derivatives Market',
      blocks: [
        {
          type: 'timeline',
          items: [
            { year: 'Nov 18, 1996', text: 'SEBI sets up the L.C. Gupta Committee to develop a regulatory framework for derivatives trading.' },
            { year: 'Mar 17, 1998', text: 'L.C. Gupta Committee report: derivatives should be declared "securities".' },
            { year: 'Jun 1998', text: 'SEBI sets up the J.R. Varma Committee for risk containment measures (margining system).' },
            { year: 'Oct 1998', text: 'J.R. Varma Committee submits its report — margining and net-worth criteria.' },
            { year: '1999', text: 'SCRA amended to include "derivatives" within the definition of securities.' },
            { year: 'Mar 2000', text: 'Government repeals a 3-decade-old notification that prohibited forward trading in securities.' },
            { year: 'Jun 2000', text: 'Exchange-traded equity derivatives begin in India — index futures on Nifty & Sensex (BSE & NSE).' },
            { year: 'Jun 2001', text: 'Index options trading commences.' },
            { year: 'Jul 2001', text: 'Options on individual stocks commence.' },
            { year: 'Nov 2001', text: 'Futures on individual stocks commence.' },
            { year: 'Feb 2013', text: 'Metropolitan Stock Exchange of India Ltd (MSEI) starts derivatives trading.' },
          ],
        },
        {
          type: 'mnemonic',
          title: 'Order of product launch in India (2000–2001)',
          text: 'Index Futures (Jun 2000) → Index Options (Jun 2001) → Stock Options (Jul 2001) → Stock Futures (Nov 2001). "Index first, then stock; futures before the matching options within each."',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'Committee names are a classic MCQ trap: L.C. Gupta = regulatory framework; J.R. Varma = risk containment/margining. Do not swap them.',
        },
      ],
    },
    {
      id: 'products',
      heading: 'Products in the Derivatives Market',
      blocks: [
        {
          type: 'table',
          headers: ['Product', 'Traded on', 'Obligation', 'Customization'],
          rows: [
            ['Forward', 'OTC (private)', 'Both parties obligated', 'Fully customized'],
            ['Future', 'Exchange', 'Both parties obligated', 'Standardized (lot size, expiry)'],
            ['Option', 'Exchange / OTC', 'Buyer has right only; seller/writer is obligated', 'Standardized (exchange-traded)'],
            ['Swap', 'OTC (private)', 'Both parties obligated', 'Series of forward contracts'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'One-line definitions',
          text: 'Forward = customized promise between two parties. Future = forward, but standardized and exchange-traded. Option = right without obligation (buyer pays a premium). Swap = a string of forwards to exchange cash flows.',
        },
      ],
    },
    {
      id: 'otc-vs-exchange',
      heading: '1.5 OTC vs Exchange-Traded Derivatives',
      blocks: [
        {
          type: 'table',
          headers: ['Feature', 'OTC Derivatives', 'Exchange-Traded Derivatives'],
          rows: [
            ['Contract terms', 'Tailor-made / customized', 'Standardized'],
            ['Counterparty risk', 'Decentralized, borne by each institution', 'Guaranteed by the Clearing Corporation'],
            ['Position/leverage limits', 'No formal centralized limits', 'Formal limits and margining'],
            ['Disclosure', 'Private, little/no disclosure', 'Prices publicly visible on exchange'],
            ['Price formation', 'Negotiated bilaterally', 'Anonymous auction (order matching)'],
          ],
        },
      ],
    },
    {
      id: 'participants',
      heading: '1.4 Market Participants',
      blocks: [
        {
          type: 'keyterm',
          term: 'Hedgers',
          definition: 'Already exposed to a risk (e.g., holding shares) and use derivatives to reduce/offset that risk. They want to give away risk.',
        },
        {
          type: 'keyterm',
          term: 'Speculators / Traders',
          definition: 'Take a view on future price movement and take positions to profit — willing to take on risk. Attracted by leverage, lower cost, and faster execution than the underlying.',
        },
        {
          type: 'keyterm',
          term: 'Arbitrageurs',
          definition: 'Simultaneously buy cheap in one market and sell high in another to lock in a riskless profit. Such gaps close quickly as arbitrageurs rush in.',
        },
        {
          type: 'mnemonic',
          title: 'H-S-A',
          text: 'Hedgers give risk away → Speculators take risk on → Arbitrageurs exploit price gaps without taking risk at all.',
        },
      ],
    },
    {
      id: 'significance',
      heading: '1.6 Significance of Derivatives',
      blocks: [
        {
          type: 'list',
          items: [
            'Improves price discovery based on actual valuations and expectations.',
            'Transfers risk from low risk-appetite participants (hedgers) to high risk-appetite participants (speculators).',
            'Shifts speculative trades from the unorganized market to the organized, regulated market — improving systemic stability.',
          ],
        },
      ],
    },
    {
      id: 'risks',
      heading: '1.7 Risks Faced by Participants',
      blocks: [
        {
          type: 'table',
          headers: ['Risk type', 'What it means'],
          rows: [
            ['Counterparty risk', 'Risk of default by the other party to the contract'],
            ['Price risk', 'Loss due to adverse price movement of the position'],
            ['Liquidity risk', 'Inability to exit a position at a fair price'],
            ['Legal / regulatory risk', 'Uncertainty over enforceability of the contract'],
            ['Operational risk', 'Fraud, inadequate documentation, improper execution'],
          ],
        },
        {
          type: 'warning',
          title: 'Exam favourite',
          text: 'Because derivatives are leveraged instruments, they may not be appropriate for participants with limited resources, limited trading experience, or low risk tolerance. Always relate this to the Model Risk Disclosure Document that brokers must provide before F&O trading begins.',
        },
      ],
    },
  ],
};

export default chapter;
