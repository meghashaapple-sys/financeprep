import type { Chapter } from '../../types';
import { CHAPTERS } from '../subject';

const chapter: Chapter = {
  ...CHAPTERS[9],
  quickRecap: [
    'Investment "risk" means the probability of not getting the desired/expected return — not merely the chance of losing capital.',
    'A signed Risk Disclosure Document (RDD) is mandatory at client on-boarding before F&O trading begins; the broker must also assess net worth, income and trading experience.',
    'Three core derivative risks: Market, Liquidity and Counterparty — counterparty risk is largely absent for exchange-traded derivatives because the Clearing Corporation guarantees settlement.',
    "SEBI's January 2023 study: about 9 in 10 individual F&O traders made net losses in FY 2021–22; loss-makers also paid ~28% of their loss amount in transaction costs.",
    'Written AML/CFT procedures rest on three pillars: policy for client acceptance, procedure for client identification, and transaction monitoring/Suspicious Transaction Reporting — all under PMLA, 2002.',
    'Customer Due Diligence (CDD) = identify the client AND the beneficial owner, verify both using reliable independent documents, and conduct ongoing scrutiny of the relationship.',
    'Clients of Special Category (CSC) — e.g., NRIs, HNIs, PEPs, trusts/NGOs, high-risk-country clients, non-face-to-face clients — require enhanced due diligence.',
    'The Unique Client Code (UCC), linked to PAN, is allotted only after KYC is complete and must be activated/mapped before the client can trade.',
    'A Suspicious Transaction Report goes to the Principal/Money Laundering Control Officer and onward to FIU-IND; the client must never be told a report has been made.',
    'Grievance escalation path: broker/exchange first → SCORES (entity must file an Action Taken Report within 21 days) → SMARTODR portal (conciliation, then arbitration) if still unresolved.',
  ],
  sections: [
    {
      id: 'risk-profile',
      heading: '10.1 Understanding the Client\'s Risk Profile',
      blocks: [
        {
          type: 'keyterm',
          term: 'Risk (in an investment context)',
          definition:
            'Not just the chance of losing capital, but more importantly the probability that the investor will not get the return he expects from an investment. Fixed-income instruments carry mainly credit/default risk; market-oriented instruments carry the risk of not achieving the desired return.',
        },
        {
          type: 'para',
          text: 'There is a risk-return trade-off: the greater the risk accepted, the greater the potential return demanded as compensation. A risk-averse investor tilts toward debt/fixed income; a less risk-averse investor accepts greater exposure to equity and derivatives.',
        },
        {
          type: 'list',
          items: [
            'Age',
            'Personal income and combined family income',
            'Number of dependents',
            'Occupation and marital status',
            'Education',
            'Existing liabilities',
            'Access to other/inherited sources of wealth',
            'Investment time horizon — the longer the horizon, the more risk can generally be absorbed',
          ],
        },
        {
          type: 'warning',
          title: 'Mis-selling traps to know',
          text: 'Unsuitable recommendation: e.g., a broker advising a low-risk-tolerance senior citizen to trade futures, options or penny stocks. Churning: making unnecessary and excessive trades in a client\'s account solely to generate commission. Both are red flags investors — and exam questions — are expected to recognize.',
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Sales agent conduct rules',
          text: 'Sales calls are permitted only between 9 am and 8 pm (unless the customer requests otherwise); the agent must identify themselves and their purpose immediately, must leave/stop contact at the customer\'s request, must not exploit inexperience or vulnerability, and members must keep a record of the date of each customer contact.',
        },
      ],
    },
    {
      id: 'risk-disclosure-document',
      heading: '10.2 The Risk Disclosure Document',
      blocks: [
        {
          type: 'keyterm',
          term: 'Risk Disclosure Document (RDD)',
          definition:
            'A document highlighting the risks of trading on stock exchanges and the rights/obligations of broker and client. Brokers must ensure clients understand derivatives risk and obtain a signed copy of the RDD at client on-boarding, before F&O trading begins.',
        },
        {
          type: 'table',
          headers: ['Risk', 'What it means'],
          rows: [
            ['Market risk', 'Risk of the market/stock price moving in an unfavourable direction, causing a loss'],
            ['Liquidity risk', "Risk of being unable to exit a loss-making position — e.g., volumes typically thin near a contract's expiry"],
            ['Counterparty risk', 'Risk of default by the other party — largely not applicable on exchange-traded derivatives since the exchange/clearing corporation guarantees settlement'],
          ],
        },
        {
          type: 'list',
          items: [
            'Futures traders: face daily MTM settlement obligations, forced liquidation if margin shortfalls are not met on time, sudden margin-rate increases in volatile periods, and difficulty exiting positions when liquidity dries up.',
            'Option buyers: options are a "wasting asset" — if the underlying does not move as anticipated before expiry, the premium paid can be lost in full.',
            'Option sellers/writers: unlike buyers (whose loss is capped at the premium), a writer\'s potential loss is unlimited if the market moves sharply against the position.',
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'SEBI study (January 2023) — frequently tested facts',
          text: 'Based on FY 2021-22 data: about 9 out of 10 individual F&O traders incurred net losses; average net trading loss was close to ₹50,000; loss-makers additionally spent about 28% of their net loss as transaction costs; profit-makers spent 15%-50% of their profits as transaction costs. Brokers must retain individual client P&L data (including HUFs/NRIs, but excluding proprietary traders/institutions/partnership firms) for at least 5 years, and must display these risk facts on login.',
        },
      ],
    },
    {
      id: 'aml-cdd',
      heading: '10.3 Written AML/CFT Procedures and Customer Due Diligence',
      blocks: [
        {
          type: 'keyterm',
          term: 'Money laundering (PMLA, 2002)',
          definition:
            'Whoever acquires, owns, possesses or transfers proceeds of crime, or knowingly enters into any transaction related to proceeds of crime, or conceals/aids concealment of such proceeds, is guilty of the money-laundering offence. The Prevention of Money-Laundering Act, 2002 (PMLA) provides for confiscation of such property.',
        },
        {
          type: 'list',
          items: [
            'Policy for acceptance of clients',
            'Procedure for identifying clients',
            'Transaction monitoring and reporting — especially Suspicious Transaction Reporting (STR)',
          ],
        },
        {
          type: 'list',
          items: [
            'Identify the beneficial owner(s) — the natural person(s) who ultimately own, control or influence a client, or on whose behalf a transaction is conducted.',
            "Verify the customer's identity using reliable, independent source documents/data.",
            'Identify and verify beneficial ownership and control.',
            "Conduct ongoing due diligence — periodic scrutiny of transactions to ensure consistency with the intermediary's knowledge of the customer's business and risk profile.",
          ],
        },
        {
          type: 'table',
          headers: ['Client risk category', 'Typical drivers'],
          rows: [
            ['Low risk', 'Well-documented, transparent client profile; low-risk location/business; no unusual payment patterns'],
            ['Medium risk', 'Some risk factors present — reviewed and monitored more closely than low-risk clients'],
            ['High risk', 'Location, nature of business, trading turnover or payment pattern raises money-laundering/terror-financing concern — requires enhanced due diligence and regular KYC updates'],
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Clients of Special Category (CSC) — a frequently tested list',
          text: 'Non-resident clients, High Net-worth clients, Trusts/Charities/NGOs, companies with close family shareholding, Politically Exposed Persons (PEP) of foreign origin, current/former Heads of State and senior politicians (and their close associates/family), forex-offering companies, clients from high-risk countries, non-face-to-face clients, and clients with a dubious public reputation. This list is illustrative — intermediaries must apply independent judgment.',
        },
      ],
    },
    {
      id: 'kyc-documents',
      heading: '10.3 Client Identification and KYC Documentation',
      blocks: [
        {
          type: 'para',
          text: 'The KYC policy must spell out client identification at multiple stages — establishing the relationship, carrying out transactions, and whenever there is doubt about previously obtained data. Original documents must be seen before accepting a copy, and failure to provide satisfactory identity evidence must be escalated internally.',
        },
        {
          type: 'table',
          headers: ['Client type', 'Key documents required'],
          rows: [
            ['Individual', 'PAN card (mandatory), plus one of Passport / Voter ID / Driving Licence / Aadhaar / NREGA job card / UIDAI letter, for identity; and Aadhaar / Passport / Driving Licence / Voter ID / bank statement / ration card / utility bill, for address'],
            ['Company', 'Certificate of Incorporation, Memorandum & Articles of Association, Board Resolution to open the account (with authorised signatories), Power of Attorney (if any), PAN allotment letter, telephone bill'],
            ['Partnership firm', 'Registration certificate (if registered), partnership deed, Power of Attorney to a partner/employee, identity documents of all partners/PoA holders, telephone bill'],
          ],
        },
        {
          type: 'keyterm',
          term: 'Unique Client Code (UCC)',
          definition:
            "Allotted by the broker after KYC is complete, linked to the client's PAN, and serves as a unique client identifier. The broker uploads UCC details to the exchange/clearing corporation, and the trading account is activated only after UCC mapping is complete. SEBI also requires UCC to be mapped with the client's demat account, to detect any diversion or misappropriation of securities by an intermediary.",
        },
        {
          type: 'list',
          items: [
            'In-person verification (IPV) is compulsory before opening a trading/demat account — done physically or via webcam/video call.',
            'IPV is NOT required if KYC is completed via Aadhaar e-KYC authentication, or if the KYC form and documents (e.g., via DigiLocker) are submitted and verified fully online.',
            'e-KYC: the investor fills the account-opening form online, uploads scanned identity/address proofs, completes video IPV, and digitally signs the form.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Digital KYC accessibility for persons with disabilities',
          text: "Following an April 2025 Supreme Court judgment, intermediaries must make digital KYC accessible: accounts may be opened with a guardian's signature, and where a client cannot perform the standard eye-blink liveliness check (e.g., a visually impaired applicant), alternate checks such as facial expressions, nodding, visibly displaying the OTP, or real-time video recording may be used instead.",
        },
      ],
    },
    {
      id: 'str',
      heading: '10.3 Suspicious Transaction Reporting',
      blocks: [
        {
          type: 'keyterm',
          term: 'Suspicious Transaction Report (STR) / FIU-IND',
          definition:
            'Under AML/CFT regulations, transactions meeting the PMLA definition of "suspicious" must be reported to the Financial Intelligence Unit – India (FIU-IND), the body set up by the Government to detect potential money laundering.',
        },
        {
          type: 'list',
          items: [
            'Clients whose identity is difficult to verify, or who appear uncooperative.',
            'Fund sources that are unclear or inconsistent with the client\'s apparent standing/business.',
            'Substantial, unexplained increases in business activity.',
            'Large transfers to/from overseas locations with instructions for cash payment.',
            'Attempted transfer of investment proceeds to apparently unrelated third parties.',
          ],
        },
        {
          type: 'warning',
          title: 'Critical STR rules — a classic exam trap',
          text: 'A suspicious transaction must be reported immediately to the Principal Officer/Money Laundering Control Officer within the intermediary. Dealing with the client must continue as normal unless told otherwise, and the client must NEVER be informed that a report/suspicion exists ("tipping off"). The account should be suspended or closed only in exceptional circumstances.',
        },
        {
          type: 'para',
          text: 'SEBI-regulated entities and their agents are separately required to prominently disclose their registered name and registration number on their social media handles and at the start of securities-market-related content/videos, so investors can distinguish them from unregistered persons.',
        },
      ],
    },
    {
      id: 'grievance-scores',
      heading: '10.4 Investor Grievance Redressal and SCORES',
      blocks: [
        {
          type: 'keyterm',
          term: 'SCORES',
          definition:
            "SEBI Complaints Redressal System — a web-based, centralized grievance-redress system. A complaint filed online gets an instant acknowledgement with a unique registration number, is forwarded to the entity concerned, and the entity must upload an Action Taken Report (ATR) and resolve the complaint within 21 days of SEBI's intimation.",
        },
        {
          type: 'list',
          items: [
            'Non-receipt of documents (member-client agreement, contract notes, account statements, order/trade logs)',
            'Non-refund of margin money; trades executed without adequate margin',
            'Delay or non-receipt of funds',
            'Squaring up of positions without consent, or failure to square up leading to an unfavourable settlement price',
            'Unauthorized transactions in the account',
            'Trading errors and servicing issues (online/offline transactions, gain/loss statements, etc.)',
          ],
        },
        {
          type: 'list',
          items: [
            'Approach the concerned Exchange/member first, then SEBI if unresolved.',
            'Complaints may be filed in writing, in English, Hindi or any regional language, and must be signed by the client.',
            'No fee is charged for filing a complaint.',
            'Frivolous, vague, anonymous, pseudonymous or trivial complaints are not entertained.',
          ],
        },
        {
          type: 'timeline',
          items: [
            { year: 'Step 1', text: 'Investor first lodges the grievance directly with the Market Participant (broker/intermediary).' },
            { year: 'Step 2', text: 'If unresolved, the investor escalates through the SCORES portal.' },
            { year: 'Step 3', text: 'If still unsatisfied, the investor initiates the SMARTODR (Online Dispute Resolution) portal; the relevant Market Infrastructure Institution reviews the case within 21 calendar days and refers it to an empanelled ODR Institution.' },
            { year: 'Step 4', text: 'A sole independent conciliator is appointed and attempts an amicable resolution within 21 calendar days.' },
            { year: 'Step 5', text: 'If conciliation fails, the investor may pursue online arbitration; the arbitral award must be paid/complied with within 15 calendar days (challenge under Section 34 of the Arbitration Act must be initiated within 7 days, if any).' },
          ],
        },
        {
          type: 'callout',
          tone: 'exam',
          title: 'Exam angle',
          text: 'Sequence to remember: Broker/Exchange → SCORES (21-day ATR) → SMARTODR (conciliation, 21 days) → Online arbitration (award payable in 15 days). SCORES and the ODR portal are linked/interoperable.',
        },
      ],
    },
    {
      id: 'dos-donts',
      heading: "10.5 General Do's and Don'ts for Investors",
      blocks: [
        {
          type: 'list',
          items: [
            'Deal only with SEBI/exchange-registered intermediaries.',
            'Read and understand the Risk Disclosure Document before registering as a client.',
            'Collect photocopies of all documents executed for registration, immediately.',
            'Always insist on contract notes; verify with the exchange if in doubt.',
            'Settle dues only through normal banking channels.',
            'Adopt strategies commensurate with one\'s own risk-bearing capacity.',
            'Remember there are no guaranteed returns in the stock market.',
            'Ensure funds are available before buying, and securities are available before selling.',
            'Follow up promptly if expected documentation is not received in reasonable time.',
          ],
        },
        {
          type: 'list',
          items: [
            'Do not deal with unregistered brokers or intermediaries.',
            'Do not sign documents without fully understanding their terms.',
            'Do not leave custody of the Demat transaction slip book with any intermediary.',
            'Do not make payments in cash.',
            'Do not accept unsigned, duplicate or incomplete contract notes.',
            'Do not trade based on rumours or "tips", or chase promises of guaranteed/high returns.',
            'Do not delay approaching the Exchange/SEBI in case of a dispute — file written complaints promptly.',
          ],
        },
      ],
    },
  ],
};

export default chapter;
