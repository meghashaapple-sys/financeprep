import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[6],
  quickRecap: [
    'By the legal principle of novation, the Clearing Corporation becomes the central counterparty to every F&O trade and guarantees its financial settlement.',
    'Three clearing member types: Self-clearing member (own trades only), Trading member-cum-clearing member (own + other TMs), Professional clearing member (only clears other TMs\' trades, does not trade).',
    'Clearing member norms: net worth ≥ Rs 300 lakh (Rs 100 lakh if self-clearing only) + Rs 50 lakh deposit to the CC + Rs 10 lakh incremental deposit per extra TM cleared.',
    'A TM\'s open position = proprietary net position + each client\'s net position, with client positions summed as separate long/short totals — never netted against each other across clients.',
    'Interoperability (since 2019) lets a broker clear all exchanges\' trades through one clearing corporation of choice, cutting duplicate margin/collateral requirements.',
    'Since October 2019: stock futures/options settle by physical delivery on expiry; index futures/options remain cash-settled.',
    'Daily and final settlement prices are both based on the last 30 minutes\' volume-weighted average price (VWAP) across exchanges.',
    'SPAN sets Initial Margin using 99% Value-at-Risk over a 1-day horizon (2-day for certain futures) — the margin stack also includes Premium, Assignment, ICMTM, Delivery and Exposure margins.',
    'Three position limit layers — client-level, trading-member-wise, and Market-Wide Position Limit (MWPL) — with fresh positions banned once aggregate OI crosses 95% of MWPL, resumed only below 80%.',
    'Core SGF pays for a defaulting clearing member\'s obligations; the Investor Protection Fund compensates investors when a defaulter\'s own assets fall short.',
  ],
  sections: [
    {
      id: 'clearing-members',
      heading: '7.1 Clearing Members and Clearing Banks',
      blocks: [
        {
          type: 'para',
          text: 'The Clearing Corporation is responsible for clearing, settlement and risk management of every trade executed on the F&O segment. Under the legal principle of ‘novation’, it interposes itself as the counterparty to both sides of a trade, becoming buyer to every seller and seller to every buyer, and guarantees financial settlement — with the help of Clearing Members and Clearing Banks.',
        },
        {
          type: 'keyterm',
          term: 'Novation',
          definition:
            'The legal principle under which the Clearing Corporation substitutes itself as the counterparty to both the buyer and the seller of every trade, so that neither party is exposed to the other’s default risk — only to the Clearing Corporation, which guarantees settlement.',
        },
        {
          type: 'table',
          headers: ['Type of Clearing Member', 'Whose trades it clears', 'Trades on own account?'],
          rows: [
            ['Self-clearing member', 'Only trades executed by itself (own account or its own clients)', 'Yes'],
            ['Trading member-cum-clearing member', 'Its own trades plus trades of other trading members and custodial participants', 'Yes'],
            ['Professional clearing member', 'Only trades executed by other trading members', 'No — clears for others only'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Three functions of a Clearing Member',
          text: 'Clearing — computing obligations of all its trading members (determining what needs to be settled). Settlement — actually performing the settlement. Risk Management — setting position limits based on upfront deposits/margins for each TM and continuously monitoring positions.',
        },
        {
          type: 'table',
          headers: ['Clearing Member Eligibility Norm', 'Amount'],
          rows: [
            ['Net worth (general clearing member)', 'At least Rs 300 lakh'],
            ['Net worth (clears only its own deals)', 'At least Rs 100 lakh'],
            ['Deposit to Clearing Corporation (part of security deposit)', 'Rs 50 lakh'],
            ['Additional incremental deposit per extra TM cleared', 'Rs 10 lakh'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Clearing Bank',
          definition:
            'A bank designated by the Clearing Corporation for F&O fund settlement. Every clearing member must open a separate bank account with the designated clearing bank; all pay-in/pay-out of funds happens by debit/credit to this account.',
        },
        {
          type: 'para',
          text: 'Both the trading member-cum-clearing member and the professional clearing member must bring in additional security deposits for every trading member whose trades they undertake to clear and settle — this ties their financial exposure to the number and size of TMs they support.',
        },
      ],
    },
    {
      id: 'clearing-mechanism',
      heading: '7.2 Clearing Mechanism — Computing Open Positions',
      blocks: [
        {
          type: 'para',
          text: 'The first step in clearing is computing the open positions and obligations of every clearing member. A CM’s open position is built bottom-up: from each client, to each trading member, to the clearing member.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'While placing orders, trading members tag each order as proprietary (Pro) or client (Cli).',
            'Proprietary positions are netted on a pure net basis: Net = total Buy qty − total Sell qty, for each contract.',
            'Each individual client’s position is also netted on its own (buy − sell for that client alone) — but different clients’ net positions are NOT netted against one another.',
            'A trading member’s open position = its proprietary net position + the sum of all clients’ net long positions + the sum of all clients’ net short positions (long and short totals are kept and reported separately).',
            'A clearing member’s open position = the sum of the open (long and short) positions of every trading member and custodial participant clearing through it.',
          ],
        },
        {
          type: 'formula',
          label: 'Trading Member open position',
          formula: 'TM Open Position = Proprietary Net Position + Σ(each client’s net long) + Σ(each client’s net short)',
          note: 'The long total and short total are reported as two separate numbers at every level — they are never netted against each other, even at the clearing member level.',
        },
        {
          type: 'example',
          title: 'Worked example — building up a clearing member’s open position',
          text: 'Clearing member Alpha clears trades for two trading members in the same Nifty futures series. Beta Securities: proprietary net 2,500 long, Client 1 net 1,500 long, Client 2 net 2,000 long — all components are long, so Beta’s TM-level position is 6,000 long and 0 short. Gamma Capital: proprietary net 1,000 short, Client 1 net 1,500 long, Client 2 net 2,500 short — Gamma’s long total is 1,500 (from Client 1) and its short total is 3,500 (1,000 proprietary + 2,500 from Client 2). Alpha’s open position reported to the Clearing Corporation = Long 6,000 + 1,500 = 7,500 contracts, Short 0 + 3,500 = 3,500 contracts.',
        },
        {
          type: 'warning',
          title: 'Common trap',
          text: 'Different clients’ positions are never netted against each other — only a single client’s own buys and sells are netted, and only proprietary trades are netted on a pure net basis. If Client 1 is long 800 and Client 2 is short 900 in the same contract, the member’s outstanding liability (open position) to the Clearing Corporation is 800 + 900 = 1,700 contracts, not 100.',
        },
      ],
    },
    {
      id: 'interoperability',
      heading: '7.3 Interoperability of Clearing Corporations',
      blocks: [
        {
          type: 'para',
          text: 'Earlier, each stock exchange in India had its own clearing corporation, so a participant trading on multiple exchanges had to take membership of — and maintain separate collateral/margin deposits at — each exchange’s clearing house. This fragmented capital and raised trading costs.',
        },
        {
          type: 'keyterm',
          term: 'Interoperability of Clearing Corporations',
          definition:
            'A framework proposed by SEBI in 2018 and implemented in 2019 under which trades executed on any exchange can be cleared and settled by the clearing corporation of any other exchange, allowing a broker to route all trades through a single clearing corporation of choice.',
        },
        {
          type: 'list',
          items: [
            'Lower trading costs — members maintain margins/collateral with a single clearing corporation instead of several, improving capital efficiency.',
            'Business continuity — if trading is disrupted on one exchange, or the link between an exchange and its clearing house breaks, brokers can still route trades to another clearing corporation.',
            'Simplified operations — brokers need to comply with the requirements of only one clearing corporation.',
            'Healthy competition among clearing corporations, which can improve the pricing of their services.',
          ],
        },
        {
          type: 'example',
          title: 'Netting across exchanges',
          text: 'A client holds a long position of 12 lots in a stock’s futures contract on NSE and a short position of 7 lots in the identical contract on BSE. Post-interoperability, with both cleared through the same clearing corporation, the net position works out to long 5 lots, and margin is charged only on this net exposure — instead of gross margin being charged separately at two clearing corporations.',
        },
      ],
    },
    {
      id: 'settlement-futures',
      heading: '7.4 Settlement of Futures Contracts',
      blocks: [
        {
          type: 'para',
          text: 'Futures contracts undergo two kinds of settlement: (A) Mark-to-Market (MTM) settlement — daily, in cash; and (B) Final settlement — on the expiry/last trading day, either in cash (index) or by physical delivery (individual securities, since October 2019).',
        },
        {
          type: 'keyterm',
          term: 'Mark-to-Market (MTM) Settlement',
          definition:
            'The daily process of adjusting margins for price changes. Profit/loss is computed as: (a) trade price vs the day’s settlement price, for trades executed but not squared off that day; (b) previous day’s settlement price vs current day’s settlement price, for brought-forward positions; (c) buy price vs sell price, for trades executed and squared off the same day.',
        },
        {
          type: 'formula',
          label: 'Theoretical daily settlement price (if no trade in the last 30 minutes)',
          formula: 'F = S × e^(rt)',
          note: 'F = theoretical futures price, S = value of the underlying index/security, r = interest rate (e.g., MIBOR or as specified), t = time to expiry. Where the contract did trade in the last 30 minutes, the actual volume-weighted average price (VWAP) of that window is used instead.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Settlement price basis — memorize this',
          text: 'Both the daily settlement price and the final settlement price for futures are based on the last 30 minutes’ VWAP of the contract across exchanges (or of the underlying, on the last trading day). Daily MTM pay-in/pay-out happens before market hours the next day; the loss-making CM pays, the CC passes it to the profit-making CM.',
        },
        {
          type: 'table',
          headers: ['Contract type', 'Final settlement mode (since Oct 2019)'],
          rows: [
            ['Index futures / index options', 'Cash settlement only'],
            ['Stock (individual security) futures / options', 'Physical delivery, if open on expiry day'],
          ],
        },
        {
          type: 'example',
          title: 'Worked example — final settlement of a long stock futures position',
          text: 'A client holds a long position in 1 lot (lot size 1,000) of a stock futures contract on its expiry date. Final settlement price = Rs 640; previous day’s settlement price = Rs 655. Because he is long on expiry, he must take delivery of 1,000 shares at the final settlement price: 1,000 × 640 = Rs 6,40,000 payable on T+1. In addition, the daily MTM difference — (640 − 655) × 1,000 = −Rs 15,000 — is collected from him in cash on T+1, since the settlement price fell from the previous day.',
        },
        {
          type: 'example',
          title: 'Same contract, the short side',
          text: 'A client holding the mirror-image short position in the same contract must deliver 1,000 shares on T+1 and receives 1,000 × 640 = Rs 6,40,000. He is credited (not debited) the MTM difference of Rs 15,000 in cash, because the price fall benefited his short position.',
        },
      ],
    },
    {
      id: 'settlement-options',
      heading: '7.4 (contd.) Settlement of Options and Net Settlement Across Segments',
      blocks: [
        {
          type: 'para',
          text: 'Options contracts undergo two kinds of settlement: Daily Premium Settlement and Final Exercise Settlement. All in-the-money (ITM) options are automatically exercised on the expiry day — no manual exercise instruction is needed for retail-style contracts.',
        },
        {
          type: 'keyterm',
          term: 'Daily Premium Settlement',
          definition:
            'The buyer pays the premium and the seller receives it; amounts are netted per client per contract. Members owing premium pay the Clearing Corporation, which passes it to members owed premium — settled by debit/credit to the clearing bank account on T+1.',
        },
        {
          type: 'formula',
          label: 'Exercise settlement value (per unit of the option)',
          formula: 'Call = Closing price of underlying on exercise day − Strike price\nPut = Strike price − Closing price of underlying on exercise day',
          note: 'This equals the option’s intrinsic value at expiry. Index options are European-style and cash-settled; stock options are also European-style but settled by physical delivery.',
        },
        {
          type: 'example',
          title: 'Index option — cash settlement',
          text: 'A client holds a call option on an index, strike 24,000, lot size 25. The index closes at 24,350 on expiry. Being an index option, settlement is in cash: (24,350 − 24,000) × 25 = Rs 8,750, credited to the client’s clearing account on T+1.',
        },
        {
          type: 'example',
          title: 'Stock option — physical delivery',
          text: 'A client holds a long call on a stock, strike Rs 640, lot size 1,000. The stock closes at Rs 690 on expiry — the call is ITM. Being a stock option, it settles by physical delivery: the client takes delivery of 1,000 shares and pays strike × lot size = 640 × 1,000 = Rs 6,40,000. If it had instead been a long put at strike Rs 720 with the stock closing at Rs 655 (ITM), the client would deliver 1,000 shares and receive 720 × 1,000 = Rs 7,20,000.',
        },
        {
          type: 'table',
          headers: ['Position exercised/assigned', 'Resulting obligation'],
          rows: [
            ['Long call (ITM, exercised)', 'Buy / take delivery, pay strike × lot size'],
            ['Short call (ITM, assigned)', 'Sell / give delivery, receive strike × lot size'],
            ['Long put (ITM, exercised)', 'Sell / give delivery, receive strike × lot size'],
            ['Short put (ITM, assigned)', 'Buy / take delivery, pay strike × lot size'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Net settlement of cash and F&O segments on expiry',
          definition:
            'A client’s cash-market obligation and physical F&O settlement obligation on the same underlying, arising on expiry, can be settled on a net basis — only one net funds pay-in/pay-out, with no security movement — provided the client trades and clears through the same TM–CM combination in both segments. Not available to institutional investors or where a different CM/CC combination is used across segments.',
        },
      ],
    },
    {
      id: 'span-margining',
      heading: '7.5–7.6 Risk Management and SPAN Margining',
      blocks: [
        {
          type: 'para',
          text: 'Risk containment in the F&O segment rests on: stringent capital-adequacy requirements for membership, an upfront initial margin on every open position, end-of-day MTM settlement, and continuous online position monitoring. The engine behind margin computation and monitoring is SPAN.',
        },
        {
          type: 'keyterm',
          term: 'SPAN (Standard Portfolio Analysis of Risk)',
          definition:
            'A risk-management and margining system originally designed by the Chicago Mercantile Exchange (CME) and adopted by Indian exchanges. It treats futures and options uniformly while recognizing options-specific exposures, and uses a ‘risk array’ to estimate the largest loss a portfolio could reasonably suffer over the next trading day — the initial margin is then set to cover that one-day loss.',
        },
        {
          type: 'table',
          headers: ['Margin component', 'What it covers'],
          rows: [
            ['Initial Margin', '99% Value-at-Risk over a 1-day horizon (2-day horizon for certain futures where next-day MTM collection may not be feasible); charged gross at client level, net at proprietary level'],
            ['Premium Margin', 'The premium payable by an option buyer, at client level, until premium pay-in is complete'],
            ['Assignment Margin', 'The net exercise settlement obligation on assigned option positions (index and stock options), until pay-in of that obligation is complete'],
            ['Intraday Crystallised Losses (ICMTM)', 'Losses crystallised on futures trades that close out an open position intraday; computed on weighted average price, forms part of initial margin, adjusted in real time against liquid assets'],
            ['Delivery Margin', 'Levied on potential deliverable / ITM long option positions in a staggered manner from 4 days before expiry (20/40/60/80% of the computed amount on Expiry−4, −3, −2, −1 EOD respectively)'],
            ['Exposure Margin', 'VaR + Extreme Loss Margin rates (as in the Capital Market segment) applied to client-level settlement obligations, over and above initial margin'],
          ],
        },
        {
          type: 'mnemonic',
          title: 'I-P-A-I-D-E — the margin stack',
          text: 'Initial → Premium → Assignment → ICMTM → Delivery → Exposure. All are collected upfront/intraday by the Clearing Corporation from clearing members, who collect the same from their TMs and clients.',
        },
        {
          type: 'warning',
          title: 'Common trap — Initial vs Exposure vs MTM margin',
          text: 'Initial Margin is prospective — a SPAN/VaR-based estimate of the worst one-day loss, collected upfront before a position can be taken. Exposure Margin is an additional prospective layer collected over and above Initial Margin. MTM settlement is NOT a margin held against future loss at all — it is the cash settlement of a gain/loss that has already occurred since the previous settlement, collected daily. Do not describe MTM as a form of ‘margin cover’.',
        },
        {
          type: 'formula',
          label: 'Worked example — SPAN-style initial margin',
          formula: 'Initial Margin (₹) = No. of contracts × Lot size × Price × Margin %',
          note: 'Trader P sells 18 contracts of a BankNifty futures series at 51,200 (lot size 15); Trader Q sells 24 contracts of the next series at 51,500 (same lot size). Initial margin = 8%. P: 18 × 15 × 51,200 = Rs 1,38,24,000 × 8% = Rs 11,05,920. Q: 24 × 15 × 51,500 = Rs 1,85,40,000 × 8% = Rs 14,83,200. Combined initial margin collected from both = Rs 25,89,120.',
        },
      ],
    },
    {
      id: 'margin-operations',
      heading: 'Margin Operations — Peak Margin, Cross Margin, Pledge/Repledge',
      blocks: [
        {
          type: 'keyterm',
          term: 'Peak Margin framework',
          definition:
            'Introduced by SEBI’s circular dated July 20, 2020 to stop brokers under-margining intraday leverage. Clearing corporations send brokers a minimum of 4 intraday snapshots of client-wise margin requirement; a broker’s margin shortfall penalty is the higher of (a) EOD margin shortfall, or (b) peak intraday snapshot shortfall.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Beginning-of-Day (BOD) simplification',
          text: 'Following SEBI circulars of May 10, 2022 and February 1, 2023, both intraday snapshot verification and EOD margin-collection verification in the derivatives segment are based on the fixed Beginning of Day (BOD) SPAN + Extreme Loss Margin (ELM) parameters, effective from August 1, 2022 — removing the earlier penalty risk from pure intraday margin-parameter fluctuations while margin collection by the Clearing Corporation itself continues to update intraday/EOD as before.',
        },
        {
          type: 'list',
          items: [
            'Cross margining is available across the Cash and Derivatives segments, to all categories of market participants.',
            'Only the portion of a client’s Cash-segment and Derivatives-segment positions that offset each other is eligible for the cross-margining benefit.',
            'Where one CM clears both segments for a client, the CM must intimate client details via the Collateral Interface for Members (CIM) to avail the benefit.',
            'Where different CMs clear the two segments for the same client, the CMs must enter into an agreement to share the cross-margining benefit.',
            'Cross margining for Index Futures vs. their Constituent Stock Futures requires the derivatives-segment CM to furnish client details separately.',
          ],
        },
        {
          type: 'keyterm',
          term: 'Margin Pledge / Re-pledge mechanism',
          definition:
            'In force since September 2020, this replaced the older power-of-attorney model (which some brokers misused to divert client securities). Clients pledge securities as collateral only through a ‘margin pledge’ created in the Depository system, into the broker’s dedicated ‘Client Securities Margin Pledge Account’. The TM may re-pledge only from that account to the CM, and the CM may re-pledge further to the Clearing Corporation — title never transfers, and each client’s pledged securities can only be used for that client’s own margin obligations.',
        },
        {
          type: 'para',
          text: 'SEBI also requires disaggregated, client-level reporting of collateral: TMs report collateral received/retained/placed-with-CM data to their CM; CMs in turn report a fuller five-part breakdown up to the Clearing Corporation daily. Exchanges/CCs must provide clients a web portal to view the collateral reported against their name — closing the loop on visibility. Early pay-in (EPI) of securities or funds by a member exempts that position from delivery margins.',
        },
      ],
    },
    {
      id: 'position-limits',
      heading: '7.7 Position Limits',
      blocks: [
        {
          type: 'keyterm',
          term: 'Position Limit',
          definition:
            'A restriction on the number of derivative contracts a trading member or client (acting individually or in concert with others) may hold, designed to prevent price manipulation through accumulated control over a stock or the market. SEBI prescribes three layers: client-level, trading member-wise, and market-wide (MWPL).',
        },
        {
          type: 'table',
          headers: ['Limit', 'Rule'],
          rows: [
            ['Client-level (stock F&O)', 'Higher of 1% of free-float market cap (in shares) or 5% of open interest in all derivative contracts on that stock per exchange'],
            ['Client-level reporting trigger', 'Persons acting in concert holding ≥15% of open interest in an underlying index must report this to the Exchange/CC — failure is a penal violation'],
            ['TM-wise — Index futures', 'Higher of Rs 7,500 crore or 15% of total market open interest in equity index futures'],
            ['TM-wise — Index options', 'Higher of Rs 7,500 crore or 15% of total market open interest in equity index options'],
            ['TM-wise — Individual securities', 'Combined futures + options position limit = 20% of the applicable MWPL per exchange'],
            ['Market-Wide Position Limit (MWPL)', '20% of the free-float (non-promoter) shares of the underlying company'],
          ],
        },
        {
          type: 'list',
          items: [
            'Trading systems flag an alert once open interest in a security’s F&O contracts crosses 60% of its MWPL.',
            'If aggregate OI across exchanges exceeds 95% of MWPL, no fresh positions are allowed in that security from the next trading day.',
            'Normal trading resumes only once aggregate OI falls back to 80% or below of MWPL.',
            'MWPL and TM-wise position limits are both fixed by the Clearing Corporation on the last trading day of a month, applicable for the following month.',
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle — the 95% / 80% band',
          text: 'The ban-on-fresh-positions trigger (95% of MWPL) and the resumption trigger (80% of MWPL) are asymmetric — this hysteresis band is a favourite exam number pair. Also remember position limits are based on the previous day’s closing market OI, so if OI genuinely falls, participants may breach a stale limit without any wrongdoing.',
        },
        {
          type: 'para',
          text: 'On a client-level violation, the CM/TM must stop the client from taking fresh positions and bring existing positions down within limits; the exchange penalizes the clearing member, who may recover the amount from the erring TM/client. TM-limit violations are monitored throughout the day (the TM cannot increase the exposure further); MWPL violations are checked at day-end, with penalties recovered from the affiliated clearing member on a T+1 basis along with pay-in.',
        },
      ],
    },
    {
      id: 'violations-sgf-cyber',
      heading: '7.8–7.11 Violations, Guarantee Funds, Recent Reforms and Cyber Security',
      blocks: [
        {
          type: 'list',
          items: [
            'Non-fulfilment of initial margin, settlement, or securities-deliverable obligations',
            'Non-fulfilment of minimum deposit requirements; exposure margin violations',
            'Position limit violations, including Market-Wide Position Limit (MWPL) violations',
            'Mis-utilisation of TM/constituent/client collaterals and deposits',
            'Violation relating to exercised positions; short or non-reporting of client margin',
          ],
        },
        {
          type: 'warning',
          title: 'Consequences of violation',
          text: 'The Clearing Corporation may direct exchanges to withdraw any/all membership rights of the erring clearing member — including trading facilities of its TMs and clearing facilities of custodial participants — without notice, close out outstanding positions (final and binding), impose penalties, invoke bank guarantees/FDRs, or realise money by disposing off securities.',
        },
        {
          type: 'keyterm',
          term: 'Running account settlement of client funds',
          definition:
            'To prevent misuse of client funds, brokers must settle clients’ running account balances monthly or quarterly (client’s choice), per an annual settlement calendar jointly issued by exchanges. A client with a credit balance and no transaction for 30 calendar days must have that entire balance returned at the next monthly settlement date, regardless of his chosen cycle — unless he trades again before that date.',
        },
        {
          type: 'table',
          headers: ['Fund', 'Purpose'],
          rows: [
            ['Core Settlement Guarantee Fund (Core SGF)', 'A segment-wise fund (Cash, F&O, CD, etc.) that funds the obligations of a defaulting clearing member so settlement completes without disrupting the normal settlement process'],
            ['Investor Protection Fund (IPF)', 'Compensates investors when a defaulting member’s own assets are insufficient to meet admitted claims; also funds investor education, awareness and research; administered through a registered Trust'],
          ],
        },
        {
          type: 'list',
          items: [
            'Upfront collection of full option premium from buyers (effective Feb 1, 2025) — limits undue leverage.',
            'Removal of calendar spread margin benefit for contracts expiring the same day (effective Feb 1, 2025; extended to single-stock derivatives from May 5, 2026) — curbs basis-risk speculation on expiry.',
            'Intraday monitoring of position limits via ≥4 random snapshots a day, including one between 14:45–15:30 hrs (effective Apr 1, 2025).',
            'Larger minimum contract size for new index derivatives — market value of Rs 15–20 lakh (effective Nov 20, 2024).',
            'Weekly index derivatives rationalised to one benchmark index per exchange (effective Nov 20, 2024).',
            'Additional 2% Extreme Loss Margin on short options on expiry day, for tail-risk coverage (effective Nov 20, 2024).',
          ],
        },
        {
          type: 'keyterm',
          term: 'Cyber Security and Cyber Resilience Framework (CSCRF)',
          definition:
            'SEBI’s framework (phased rollout from Jan 1, 2025) for Market Infrastructure Institutions (MIIs) — Stock Exchanges, Depositories, Clearing Corporations, KYC Registration Agencies (KRAs), and Qualified Registrars & Transfer Agents (QRTAs) — and other SEBI Regulated Entities, aimed at addressing evolving cyber threats and aligning with industry audit standards.',
        },
        {
          type: 'mnemonic',
          title: 'A-W-C-R-E — the 5 cyber resiliency goals',
          text: 'Anticipate (stay prepared) → Withstand (keep functioning during an attack) → Contain (isolate the breach) → Recover (restore functions) → Evolve (adapt capabilities to reduce future impact).',
        },
      ],
    },
  ],
};

export default chapter;
