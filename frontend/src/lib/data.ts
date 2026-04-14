// ─── Edit all website copy here ──────────────────────────────────────────────

export const siteConfig = {
  name: 'Legal Flow One',
  tagline: 'One place to launch, manage, and maintain your legal entities.',
  description:
    'Legal Flow One turns fragmented governance work into one structured, automated platform — so you stay in control across every entity and jurisdiction.',
  email: 'hello@legalflowone.com',
  linkedin: 'https://linkedin.com/company/legalflowone',
}

// ─── Hero trust strip ────────────────────────────────────────────────────────

export const heroTrustPoints = [
  'End-to-end entity lifecycle',
  'Automated governance workflows',
  'Multi-entity visibility',
  'Built for global operations',
]

// ─── Pain points (Problem section) ──────────────────────────────────────────

export interface PainPoint {
  icon: string
  title: string
  description: string
}

export const painPoints: PainPoint[] = [
  {
    icon: 'Puzzle',
    title: 'Disconnected processes',
    description:
      'Formation, compliance, documents, and governance are handled in different tools, spreadsheets, and email threads — with no single source of truth.',
  },
  {
    icon: 'Users',
    title: 'Teams working in silos',
    description:
      'Legal, finance, founders, and operations each manage their own piece. Coordination is manual, slow, and prone to gaps.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Missed deadlines and filings',
    description:
      'Obligations, renewals, and board actions are easy to overlook. The cost of missing them — fines, penalties, loss of good standing — is high.',
  },
  {
    icon: 'Globe2',
    title: 'Chaos across jurisdictions',
    description:
      'Managing entities in multiple countries multiplies complexity. Local rules, different timelines, and fragmented providers make oversight nearly impossible.',
  },
]

// ─── Solution features ───────────────────────────────────────────────────────

export interface SolutionFeature {
  icon: string
  title: string
  description: string
}

export const solutionFeatures: SolutionFeature[] = [
  {
    icon: 'Building2',
    title: 'Entity setup & formation',
    description: 'Guided workflows for registering and structuring legal entities across jurisdictions.',
  },
  {
    icon: 'FileText',
    title: 'Document generation',
    description: 'Automatically produce resolutions, agreements, filings, and corporate records.',
  },
  {
    icon: 'CheckSquare',
    title: 'Tasks & obligation tracking',
    description: 'A live roadmap of what needs to happen — deadlines, filings, approvals, and next steps.',
  },
  {
    icon: 'Users',
    title: 'Governance records',
    description: 'Shareholders, directors, ownership, resolutions, and approvals — all structured and auditable.',
  },
  {
    icon: 'Bell',
    title: 'Alerts & notifications',
    description: 'Proactive reminders for renewals, filings, governance events, and missing actions.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Multi-entity dashboard',
    description: 'One view across all your entities — status, tasks, documents, and governance health.',
  },
]

// ─── Key features (Features section) ─────────────────────────────────────────

export interface Feature {
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'Building2',
    title: 'Guided Entity Setup',
    description:
      'Structured onboarding and company formation workflows. From jurisdiction selection to first documents — every step is clear, tracked, and actionable.',
  },
  {
    icon: 'Users',
    title: 'Governance & Corporate Records',
    description:
      'Shareholders, directors, ownership structures, board resolutions, and approvals — maintained in one organized, audit-friendly record.',
  },
  {
    icon: 'FileText',
    title: 'Document Automation',
    description:
      'Generate and manage corporate documents in one place. Resolutions, agreements, filings, and templates — produced accurately and stored centrally.',
  },
  {
    icon: 'ClipboardList',
    title: 'Task Roadmaps & Obligations',
    description:
      'A live list of what needs to happen: upcoming filings, deadlines, board actions, and dependencies. Nothing slips through.',
  },
  {
    icon: 'BellRing',
    title: 'Monitoring & Alerts',
    description:
      'Stay ahead of renewals, missing steps, and governance events. Alerts surface what needs attention before it becomes a problem.',
  },
  {
    icon: 'Globe2',
    title: 'Multi-Entity Management',
    description:
      'Oversee one company or a full group structure from a central dashboard. Consistent process, full visibility, at any scale.',
  },
]

// ─── How It Works steps ───────────────────────────────────────────────────────

export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Set up your entity data',
    description:
      'Enter your company details, jurisdiction, structure, directors, and shareholders. Legal Flow One organizes it into a clean, structured profile.',
  },
  {
    number: '02',
    title: 'Generate workflows, documents, and governance actions',
    description:
      'The platform creates your task roadmap, produces the documents you need, and maps out your obligations — automatically.',
  },
  {
    number: '03',
    title: 'Monitor, maintain, and scale from one place',
    description:
      'Track governance health, stay on top of deadlines, and add more entities as you grow — all from the same dashboard.',
  },
]

// ─── Use cases / audiences ───────────────────────────────────────────────────

export interface UseCase {
  icon: string
  audience: string
  title: string
  description: string
}

export const useCases: UseCase[] = [
  {
    icon: 'Rocket',
    audience: 'Founders & Startups',
    title: 'Launch with structure from day one',
    description:
      'Set up your entity correctly, generate the right documents, and stay on top of obligations — without needing a full legal team.',
  },
  {
    icon: 'Scale',
    audience: 'Legal & Operations Teams',
    title: 'Replace the spreadsheets and email chains',
    description:
      'One platform for entity records, governance actions, document workflows, and obligation tracking — built for teams who need real process.',
  },
  {
    icon: 'ArrowUpRight',
    audience: 'SMEs Expanding Internationally',
    title: 'Expand without losing control',
    description:
      'Manage entities across multiple jurisdictions from one place. Consistent governance process no matter where you operate.',
  },
  {
    icon: 'Building',
    audience: 'Enterprise Groups',
    title: 'Full visibility across a group structure',
    description:
      'Oversee subsidiaries, branches, and holding companies from one dashboard. Standardized governance at scale.',
  },
  {
    icon: 'Handshake',
    audience: 'Corporate Service Partners',
    title: 'Deliver a better client experience',
    description:
      'Support your clients with a structured platform for entity maintenance, governance records, and obligation tracking.',
  },
]

// ─── Benefits ────────────────────────────────────────────────────────────────

export interface Benefit {
  icon: string
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: 'Clock',
    title: 'Faster entity setup and governance workflows',
    description: 'Structured onboarding and document automation cut setup time significantly.',
  },
  {
    icon: 'Eye',
    title: 'Better visibility across legal operations',
    description: 'One dashboard for all entities, tasks, and documents — no more digging through emails.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Fewer missed steps and deadlines',
    description: 'Proactive alerts and obligation tracking keep your entities in good standing.',
  },
  {
    icon: 'FolderOpen',
    title: 'Structured, audit-friendly records',
    description: 'Clean governance records and document history — ready for due diligence, audits, or review.',
  },
  {
    icon: 'Minimize2',
    title: 'Less manual coordination',
    description: 'Automated workflows replace fragmented email and spreadsheet-based processes.',
  },
  {
    icon: 'TrendingUp',
    title: 'Scalable from one entity to many',
    description: 'Start with one company. Grow to a group structure. The platform scales with you.',
  },
]

// ─── Differentiation items ───────────────────────────────────────────────────

export interface DiffItem {
  alternative: string
  limitation: string
  lfoAdvantage: string
}

export const diffItems: DiffItem[] = [
  {
    alternative: 'Law firms & legal advisors',
    limitation: 'Expertise on demand, but no structured system for ongoing management or visibility.',
    lfoAdvantage: 'Combines legal workflow structure with day-to-day operational management in one platform.',
  },
  {
    alternative: 'Local incorporation services',
    limitation: 'Help you start, then leave you to manage everything manually afterward.',
    lfoAdvantage: 'Covers the full lifecycle — from formation through ongoing governance and maintenance.',
  },
  {
    alternative: 'Spreadsheets & email',
    limitation: 'Fragile, unscalable, and easy to lose track of. Not built for governance.',
    lfoAdvantage: 'Structured workflows, centralized records, and built-in tracking replace ad hoc methods.',
  },
  {
    alternative: 'Point compliance tools',
    limitation: 'Solve one problem — filings or alerts — but leave the bigger picture fragmented.',
    lfoAdvantage: 'An end-to-end operating layer: entity data, documents, governance, obligations, and oversight.',
  },
]

// ─── Trust signals ───────────────────────────────────────────────────────────

export interface TrustSignal {
  icon: string
  title: string
  description: string
}

export const trustSignals: TrustSignal[] = [
  {
    icon: 'Lock',
    title: 'Structured and secure',
    description: 'Entity data, governance records, and documents are stored in a structured, access-controlled environment.',
  },
  {
    icon: 'FileCheck',
    title: 'Audit-ready records',
    description: 'Every governance action, document, and change is logged — ready for due diligence or review.',
  },
  {
    icon: 'Users2',
    title: 'Role-based operational clarity',
    description: 'Defined access for founders, legal teams, advisors, and administrators. Everyone sees what they need.',
  },
  {
    icon: 'Globe2',
    title: 'Built for global operations',
    description: 'Designed to handle entities across multiple jurisdictions with consistent process and visibility.',
  },
]
