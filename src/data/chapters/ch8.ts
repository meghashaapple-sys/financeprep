import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[7],
  quickRecap: [
    'SCRA 1956, Section 2(h) defines "securities" — explicitly including derivatives — and Section 18A makes derivative contracts legal only if traded on a recognized stock exchange and settled through its clearing house.',
    'SEBI Act 1992 gives SEBI statutory power to (a) protect investors, (b) promote development of, and (c) regulate the securities market — jurisdiction covers issuers, intermediaries and exchanges.',
    'The L.C. Gupta Committee framework requires: min. 50 exchange members, a separate governing council with trading/clearing member representation capped at 40%, and prior SEBI approval before launching any new contract.',
    'Clearing member net worth = Rs 3 crore (Rs 1 crore for a self-clearing member only) — SEBI sets CM net worth; exchanges set TM/Limited Trading Member net worth (no SEBI floor for TMs).',
    'Every clearing member must maintain Liquid Net Worth of at least Rs 50 lakh with the exchange/clearing corporation.',
    'Minimum contract value was raised from Rs 5,00,000 to Rs 15–20 lakh, effective November 20, 2024.',
    'A member’s default in the F&O segment is treated as default across all segments of that exchange, and on every exchange where he holds membership.',
    'SOP for TM/CM default: investors with credit balance below Rs 25 lakh are settled fully and first from unencumbered deposits; balances above Rs 25 lakh are paid pro-rata.',
    'SOP for exchange outage: inform SEBI immediately by email, inform the market within 15 minutes, and if normalcy is not restored within 1 hour of scheduled close, all exchanges extend trading by 1.5 hours that day.',
  ],
  sections: [
    {
      id: 'scra',
      heading: '8.1 Securities Contracts (Regulation) Act, 1956',
      blocks: [
        {
          type: 'keyterm',
          term: 'Securities Contracts (Regulation) Act, 1956 (SCRA)',
          definition:
            'The Act aimed at preventing undesirable transactions in securities, governing the trading of securities in India. It gives the Central Government regulatory jurisdiction over: (a) stock exchanges, through recognition and continued supervision, (b) contracts in securities, and (c) listing of securities on stock exchanges.',
        },
        {
          type: 'list',
          items: [
            'Shares, scrips, stocks, bonds, debentures, debenture stock, or other marketable securities of a like nature in/of any incorporated company or body corporate',
            'Derivatives',
            'Units or any other instrument issued by a collective investment scheme to its investors',
            'Security receipts as defined under the SARFAESI Act, 2002',
            'Units or instruments issued to investors under a mutual fund scheme (excludes ULIPs and similar combined insurance-cum-investment instruments)',
            'Certificates/instruments issued by a special purpose distinct entity acknowledging beneficial interest in debt or receivables (including mortgage debt) assigned to it',
            'Government securities',
            'Rights or interests in securities, and any other instrument the Central Government declares to be a security',
          ],
        },
        {
          type: 'keyterm',
          term: '"Derivative" under SCRA Section 2(ac)',
          definition:
            'A security derived from a debt instrument, share, loan (secured or unsecured), risk instrument or contract for differences, or any other form of security; OR a contract that derives its value from the prices, or index of prices, of underlying securities; also includes commodity derivatives and any other instrument the Central Government declares a derivative.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Section 18A — legality of derivative contracts',
          text: 'Notwithstanding anything in any other law, a contract in derivatives is legal and valid ONLY if it is (a) traded on a recognized stock exchange, and (b) settled on the clearing house of that recognized stock exchange, in accordance with its rules and bye-laws. A derivative deal that skips the exchange/clearing house route has no such statutory protection.',
        },
        {
          type: 'table',
          headers: ['Aspect', 'SCRA, 1956', 'SEBI Act, 1992'],
          rows: [
            ['Core purpose', 'Prevent undesirable transactions in securities; regulate exchanges, contracts and listing', 'Protect investors; promote and regulate the securities market'],
            ['Recognizes stock exchanges', 'Yes — Central Government grants recognition under Section 4', 'No — SEBI regulates business in already-recognized exchanges'],
            ['Defines "securities" / "derivative"', 'Yes — Section 2(h) and Section 2(ac)', 'No independent definition — relies on SCRA'],
            ['Administering authority in practice', 'Central Government (many powers now delegated to SEBI)', 'Securities and Exchange Board of India (SEBI)'],
          ],
        },
      ],
    },
    {
      id: 'sebi-act',
      heading: '8.2 Securities and Exchange Board of India Act, 1992',
      blocks: [
        {
          type: 'para',
          text: 'The SEBI Act, 1992 establishes SEBI with statutory powers over three broad objectives. Its regulatory jurisdiction extends to corporates issuing capital and transferring securities, and to every intermediary and person associated with the securities market.',
        },
        {
          type: 'mnemonic',
          title: 'P-D-R — SEBI’s three objectives',
          text: 'Protect the interests of investors in securities → Develop the securities market → Regulate the securities market.',
        },
        {
          type: 'list',
          items: [
            'Regulating the business in stock exchanges and any other securities markets',
            'Registering and regulating the working of stock brokers, sub-brokers, etc.',
            'Promoting and regulating self-regulatory organizations (SROs)',
            'Prohibiting fraudulent and unfair trade practices relating to securities markets',
            'Calling for information from, and undertaking inspection, inquiries and audits of, stock exchanges, mutual funds, intermediaries, SROs, and other persons associated with the securities market',
            'Performing such functions and exercising such powers under the SCRA, 1956 as may be delegated to it by the Central Government',
          ],
        },
      ],
    },
    {
      id: 'regulations-trading',
      heading: '8.3 Regulations in Trading',
      blocks: [
        {
          type: 'para',
          text: 'The L.C. Gupta Committee, set up by SEBI, designed the regulatory framework for derivatives trading. SEBI accepted its recommendations on May 11, 1998 and approved a phased introduction of derivatives trading in India, beginning with stock index futures.',
        },
        {
          type: 'list',
          items: [
            'Any exchange meeting the L.C. Gupta Committee’s eligibility criteria may apply to SEBI under Section 4 of the SCRA for recognition to start derivatives trading.',
            'The derivatives exchange/segment must have a separate governing council, with trading/clearing member representation capped at a maximum of 40% of the total council.',
            'The exchange must regulate its members’ sales practices and obtain prior SEBI approval before launching trading in any new derivative contract.',
            'The exchange must have a minimum of 50 members.',
            'Members of an existing (e.g., cash market) segment do NOT automatically become members of the derivatives segment — they must separately satisfy the L.C. Gupta eligibility conditions.',
            'Clearing and settlement of derivatives trades must be through a SEBI-approved clearing corporation, which itself must apply to SEBI and meet the Committee’s eligibility conditions.',
            'Derivative brokers/dealers and clearing members need separate SEBI registration, in addition to their existing registration as cash-market brokers.',
          ],
        },
        {
          type: 'formula',
          label: 'Net worth of a member (for regulatory purposes)',
          formula: 'Net Worth = (Capital + Free Reserves) − Non-allowable assets',
          note: 'Non-allowable assets deducted: fixed assets, pledged securities, the member’s card, non-allowable (unlisted) securities, bad deliveries, doubtful debts/advances, prepaid expenses, intangible assets, and 30% of the value of marketable securities held.',
        },
        {
          type: 'table',
          headers: ['Period', 'Minimum contract value'],
          rows: [
            ['Earlier norm', 'Not less than Rs 5,00,000'],
            ['Effective November 20, 2024', 'Rs 15–20 lakh (as prescribed by SEBI)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Strict "Know Your Customer" (KYC) enforcement — every client must be registered with the derivatives broker.',
            'Members must issue a Risk Disclosure Document (RDD) to every client and obtain a signed copy before derivatives trading begins.',
            'Trading members must have qualified "approved users" and salespersons who have passed a SEBI-approved certification programme.',
            'Trade confirmation slips and exercise notices from the trading system must be retained for 5 years.',
            'Every member broker in the derivatives segment must be inspected by the exchange at least once a year.',
            'A member’s default in the derivatives segment is treated as a default in ALL segments of that exchange, and on every exchange where he holds membership.',
          ],
        },
        {
          type: 'keyterm',
          term: 'Collateral deposits — cash vs non-cash component',
          definition:
            'Collateral deposits made by members/authorized dealers are segregated into a cash component (cash, bank guarantees, fixed deposit receipts, T-bills, dated government securities) and a non-cash component (other approved forms, such as demat securities).',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Penalty/suspension of a stockbroker’s registration — SEBI (Stock Broker) Regulations, 2026',
          text: 'Can be ordered where the broker: violates provisions of the Act, breaches the code of conduct, fails to resolve investor complaints, indulges in manipulation/price-rigging/market cornering, suffers substantial financial deterioration, fails to pay fees, violates the conditions of registration, or is suspended by the stock exchange itself. Annual inspection under these Regulations verifies that books of account and other records are properly maintained.',
        },
      ],
    },
    {
      id: 'regulations-clearing',
      heading: '8.4 Regulations in Clearing, Settlement and Risk Management',
      blocks: [
        {
          type: 'list',
          items: [
            'Membership of "Capital Market and F&O segment" — right to execute, clear and settle trades in both segments.',
            'Membership of "Capital Market, Wholesale Debt Market and F&O segment" — the same rights extended across all three segments.',
            'An existing Capital Market segment member can additionally take F&O segment membership.',
            'A trading member can also become a clearing member by meeting additional requirements; standalone (clearing-only) membership is also possible.',
          ],
        },
        {
          type: 'para',
          text: 'Initial and exposure margins are payable upfront by clearing members, in cash, bank guarantees, fixed deposit receipts, or approved securities. A clearing member may cap the maximum collateral limit for initial margin for each trading member/custodial participant it clears for, set through the trading system — such a limit, once set, applies for that day unless the clearing member changes it.',
        },
        {
          type: 'list',
          items: [
            'Collecting margins on a timely basis',
            'Ensuring smooth operation of daily clearing and settlement',
            'Acting as the legal counterparty to every contract (novation)',
            'Monitoring positions across derivatives and cash segments',
            'Deciding daily settlement prices',
            'Maintaining a consistent record of margins at the client level',
            'Ensuring client margins are never appropriated against a broker’s own dues',
            'Transferring a defaulting broker’s client positions to another (solvent) member',
          ],
        },
        {
          type: 'table',
          headers: ['Liquid asset component', 'Minimum share'],
          rows: [
            ['Cash component', 'At least 50% of total liquid assets'],
            ['Non-cash component', 'The remaining balance (approved securities, bank guarantees, FDRs, etc.)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Occasions when the 99% Value-at-Risk limit has been violated',
            'Defaults by broker-members',
            'Daily market activity report',
            'Daily market report',
          ],
        },
        {
          type: 'keyterm',
          term: 'Trade Guarantee Fund (TGF)',
          definition:
            'A fund whose objectives are to guarantee settlement of bona fide member transactions, build confidence among market participants, and protect investors’ interests. All active members of the exchange must make an initial contribution to it.',
        },
        {
          type: 'warning',
          title: 'Non-fulfilment of margin obligations',
          text: 'Failing to meet initial or exposure margin obligations (in whole or in part) is a violation of the Rules, Bye-laws and Regulations of the Clearing Corporation, attracting penalties and — where warranted — withdrawal of trading/clearing facilities, close-out of outstanding positions, or invocation of bank guarantees/FDRs.',
        },
      ],
    },
    {
      id: 'eligibility',
      heading: '8.5 Eligibility Criteria for Membership on the Derivatives Segment',
      blocks: [
        {
          type: 'table',
          headers: ['Requirement', 'Amount / Condition'],
          rows: [
            ['Net worth — Clearing Member', 'Rs 3 crore, with an auditor’s certificate of net worth furnished to the exchange every 6 months'],
            ['Net worth — Self-clearing member', 'Rs 1 crore'],
            ['Net worth — Trading Member', 'No net worth requirement specified by SEBI (left to the exchange)'],
            ['Liquid Net Worth — every clearing member / self-clearing member', 'At least Rs 50 lakh, maintained with the exchange/clearing corporation'],
            ['Certification', 'Members must pass the SEBI-approved certification programme; every trading member must appoint at least 2 approved users who have passed it — only approved users may operate the derivatives trading terminal'],
          ],
        },
        {
          type: 'warning',
          title: 'Not a contradiction — just different units',
          text: 'Chapter 7’s clearing-member net worth norm (Rs 300 lakh, Rs 100 lakh for self-clearing only) and this chapter’s SEBI eligibility figures (Rs 3 crore, Rs 1 crore) are the SAME numbers, just expressed in lakh vs crore. Rs 300 lakh = Rs 3 crore; Rs 100 lakh = Rs 1 crore. Do not treat them as two different thresholds in an exam question.',
        },
      ],
    },
    {
      id: 'sop-default',
      heading: '8.6 Standard Operating Procedure — Default by a TM or CM',
      blocks: [
        {
          type: 'para',
          text: 'SEBI has laid down the actions that stock exchanges, clearing corporations and depositories must take on receiving warning signals of a possible default by a trading member or clearing member — aimed at protecting the interests of the defaulting TM’s non-defaulting clients. The clearing member of that TM must also take the actions the SOP prescribes. As an interim measure, credit balances are settled using unencumbered deposits already available with the exchange/CC.',
        },
        {
          type: 'table',
          headers: ['Investor credit balance', 'Treatment'],
          rows: [
            ['Below Rs 25 lakh', 'Settled in full, as an interim measure, from unencumbered deposits available with the exchange/clearing corporation'],
            ['Above Rs 25 lakh', 'Paid on a pro-rata basis from the remaining funds'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam number to remember',
          text: 'Rs 25 lakh is the threshold separating full interim settlement (below the threshold) from pro-rata settlement (above it) in a TM/CM default scenario.',
        },
      ],
    },
    {
      id: 'sop-outage',
      heading: '8.7 Standard Operating Procedure — Stock Exchange Outage',
      blocks: [
        {
          type: 'para',
          text: 'Per SEBI Circular SEBI/HO/MRD-TPD-1/CIR/P/2023/7 dated January 9, 2023, an SOP governs how a stock exchange must respond to a technical outage disrupting continuous trading — so market participants and other Market Infrastructure Institutions (MIIs) are informed promptly and intraday positions can still be closed out smoothly.',
        },
        {
          type: 'list',
          items: [
            'The affected exchange must inform SEBI immediately, by email, on occurrence of the outage.',
            'Market participants and other MIIs must be informed within 15 minutes, via broadcast message and by publishing on the exchange website.',
            'Trading may continue in unaffected segments of the same exchange, and on other, unaffected stock exchanges.',
            'The affected exchange must restore normal operations at the earliest — including, if needed, activating its Disaster Recovery Site.',
            'The exchange must give at least 15 minutes’ notice to the market before resuming trading.',
          ],
        },
        {
          type: 'table',
          headers: ['Scenario', 'Extension of trading hours'],
          rows: [
            ['Normal trading resumes at least 1 hour before scheduled market closure', 'No extension of trading hours required'],
            ['Normalcy is not restored within 1 hour before scheduled closure', 'All stock exchanges extend trading hours by 1.5 hours for that day'],
            ['Outage occurs in the last trading hour, within 15 minutes of scheduled closure', 'All stock exchanges extend trading hours by 1.5 hours for that day'],
          ],
        },
      ],
    },
  ],
};

export default chapter;
