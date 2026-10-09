export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  status: 'Planned' | 'In Progress' | 'Upcoming';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  accentColor: string; // CSS color string (e.g. #8B5CF6)
  accentGradient: string;
  accentBg: string;
  accentBorder: string;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string; // Optional public repository
  liveUrl?: string; // Optional live production application/site
  liveUrlLabel?: string; // e.g. "Live App" or "Project Site"
  companyUrl?: string; // Optional company/parent website
  companyUrlLabel?: string;
  featured: boolean;
  status: 'Production Live' | 'Active Development' | 'Prototype' | 'Embedded Build' | 'Production Client Work' | 'Completed Project';
  caseStudy: CaseStudy;
}

export interface TechnicalDemo {
  title: string;
  label: string;
  caption: string;
  videoPath: string;
  posterPath?: string;
  problem: string;
  whyItMatters: string;
  engineeringResponse: string;
  result: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    components: string[];
    cloudStack?: {
      frontend: string;
      backend: string;
      containerRegistry: string;
      database: string;
      secretsAndSecurity: string;
      networking: string;
    };
    layeredStack?: {
      hardware: string;
      edgeAgent: string;
      apiServices: string;
      webUI: string;
    };
    ragStack?: {
      nodeName: string;
      subText: string;
    }[];
    pipelineStack?: {
      title?: string;
      nodes: {
        nodeName: string;
        subText: string;
      }[];
    };
  };
  technicalDemo?: TechnicalDemo;
  roadmapPhases?: RoadmapPhase[];
  mobileRoadmap?: {
    title: string;
    status: string;
    description: string;
    plannedFeatures: string[];
  };
  hardwareEvolution?: HardwareEvolution;
  approvalWorkflow?: ApprovalWorkflow;
  technologies: string[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  whatIBuilt: string[];
  whatILearned: string[];
  gallery?: ProjectGalleryImage[];
  metricsOrNotes?: string;
}

export interface HardwareEvolutionStage {
  stageBadge: string;
  title: string;
  description: string;
  technologies: string[];
  keyMilestones: string[];
}

export interface HardwareEvolution {
  title: string;
  description: string;
  stages: HardwareEvolutionStage[];
}

export interface SafetyPrinciple {
  title: string;
  detail: string;
  allowed: boolean;
}

export interface StateMachineTransition {
  fromState: string;
  toState: string;
  trigger: string;
  guard: string;
}

export interface ApprovalWorkflow {
  title: string;
  description: string;
  safetyModelOverview: string;
  safetyPrinciples: SafetyPrinciple[];
  stateMachineTransitions: StateMachineTransition[];
}

export interface ProgressionStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keySkills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrContext: string;
  location?: string;
  period: string;
  type: 'Industrial Engineering' | 'Software Engineering' | 'Client Work' | 'Education';
  summary: string;
  highlights: string[];
  technologies: string[];
  links?: ExperienceLink[];
}

export interface ClientWorkItem {
  id: string;
  clientName: string;
  industry: string;
  focusAreas: string[];
  description: string;
  deliverables: string[];
  technologies: string[];
  status: 'Live / Deployed Production' | 'In Development' | 'Completed' | 'Active Development';
  tag?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  secondaryLinks?: { label: string; url: string }[];
  githubUrl?: string;
  caseStudySlug?: string;
  iconName?: 'Globe' | 'Camera';
}

export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  gitlab: string;
  linkedin: string;
  resumePath: string; // Path to resume PDF when configured
  resumeConfigured: boolean; // Set to true when public/resume.pdf is placed
  aboutText: string;
  corePrinciples: { title: string; desc: string }[];
  education: {
    degree: string;
    field: string;
    institution?: string;
    status: string;
    period?: string;
    highlights: string[];
  }[];
}

export const personalInfo: PersonalInfo = {
  name: 'Hector Pacheco',
  title: 'Software Engineer',
  subTitle: 'Full-Stack • Cloud Infrastructure • AI Systems • Native Mobile (iOS/Android) • Edge & Hardware',
  tagline: 'Building software across web platforms, AWS cloud, native mobile (SwiftUI & Jetpack Compose), human-in-the-loop AI, and physical hardware.',
  location: 'Southern California, USA',
  email: 'hector.genaro.pacheco@gmail.com',
  github: 'https://github.com/Thee-Hector-Genaro-Pacheco',
  gitlab: 'https://gitlab.com/hpache17',
  linkedin: 'https://www.linkedin.com/in/hectorgenaropacheco/',
  resumePath: '/resume.pdf',
  resumeConfigured: true,
  aboutText: `I am a Software Engineer and Founder of Pacific Horizon Labs LLC, with a distinct background spanning full-stack web software, native mobile development (SwiftUI for iPadOS and Kotlin for Android), AWS cloud infrastructure, human-in-the-loop AI systems, IoT edge computing, and industrial instrumentation & controls.

Having worked directly with PLC-connected devices, 4–20 mA loop instrumentation, calibration protocols, and field troubleshooting, I bring a physical-world systems mindset to modern software engineering. I engineer auditable, resilient software applications—ranging from AWS-backed industrial SaaS platforms and native iPadOS/Android mobile applications to AI-assisted operations workflows and edge vision telemetry on Raspberry Pi.

My technical training also includes Palantir Foundry and AIP, with credentials in agentic AI workflows, enterprise data operations, data governance, and business-process modeling. Through Pacific Horizon Labs LLC, I take complete engineering ownership of software products from initial concept and hardware prototyping through native production architecture and voice-enabled business operations.`,
  corePrinciples: [
    {
      title: 'Physical & Digital Integration',
      desc: 'Understanding how code interacts with sensors, cloud networks, timing, and physical hardware interfaces.'
    },
    {
      title: 'Systems-First Engineering',
      desc: 'Applying rigorous fault isolation, clear signal paths, and auditability learned from industrial control loops to full-stack & cloud architecture.'
    },
    {
      title: 'Resilient Cloud & Web Architecture',
      desc: 'Building modern web applications with containerized AWS infrastructure, type-safe TypeScript APIs, structured databases, and human-in-the-loop controls.'
    }
  ],
  education: [
    {
      degree: 'B.S. Software Engineering',
      field: 'Software Engineering',
      institution: 'Western Governors University (WGU)',
      status: 'In Progress',
      period: '2026–Present',
      highlights: [
        'Focusing on Data Structures, Algorithms, Cloud Architecture, Distributed Systems, Software Design Patterns, and Operating Systems',
        'Hands-on research and development in Cloud SaaS, Edge AI, Embedded Linux, and Full-Stack web architecture'
      ]
    },
    {
      degree: 'Palantir Foundry & AIP Training',
      field: 'Palantir Technologies Learning Credentials',
      institution: 'Palantir Technologies',
      status: 'May 2026',
      highlights: [
        'Completed a series of Palantir Technologies learning credentials covering Foundry, AIP workflows, agentic AI workflows, business process modeling, data science fundamentals, enterprise use-case scoping, code repositories, and data governance.',
        'Completed Credentials: Speedrun: Mining Your First Business Process • Speedrun: Data Science Fundamentals • Scoping Use Cases in Foundry & AIP • Introduction to Foundry & AIP for Enterprise Organizations • Speedrun: Your First AIP Workflow • Speedrun: Your First Agentic AIP Workflow • Deep Dive: Transforming your Data with Code Repositories • Deep Dive: Data Governance Tools in Foundry'
      ]
    },
    {
      degree: 'SU-890 iCAM Operations and Maintenance',
      field: 'Certificate of Achievement (16.00 Continued Education Credits)',
      institution: 'Mirion Technologies',
      status: 'March 2026',
      highlights: [
        'Completed manufacturer training in SU-890 iCAM operations and maintenance for radiation-monitoring instrumentation.'
      ]
    },
    {
      degree: 'Radiation Worker II Training',
      field: 'Technical Training (Two-Day Specialized Instruction)',
      institution: 'NV5 Training Academy',
      status: 'January 2026',
      highlights: [
        'Completed two days of specialized Radiation Worker II instruction through NV5 Training Academy.'
      ]
    },
    {
      degree: 'Instrumentation & Process Controls Training',
      field: 'Industrial Automation & Process Controls',
      status: 'Completed Field Training',
      highlights: [
        'Comprehensive training in 4–20 mA current loops, PLC ladder logic, process transmitter calibration, and electrical safety standards'
      ]
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: 'caltrack',
    slug: 'caltrack',
    title: 'CalTrack',
    subtitle: 'Industrial Calibration SaaS & Mobile Platform',
    category: 'Industrial SaaS · Full-Stack · AWS Cloud · Native Android',
    accentColor: '#06B6D4',
    accentGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(56, 189, 248, 0.05) 100%)',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    accentBorder: 'rgba(6, 182, 212, 0.3)',
    shortDescription: 'A full-stack industrial calibration platform deployed across AWS and Vercel with a native Android companion application for field workflows. Engineered for instrument tags, calibration records, RBAC, audit histories, and mobile barcode-assisted workflows.',
    technologies: ['React', 'TypeScript', 'AWS ECS Fargate', 'PostgreSQL', 'Kotlin', 'Jetpack Compose', 'Node.js', 'Express', 'Docker', 'CameraX', 'ML Kit Barcode'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/caltrack',
    liveUrl: 'https://caltrack-web-six.vercel.app/login',
    liveUrlLabel: 'Live App',
    featured: true,
    status: 'Production Live',
    caseStudy: {
      overview: 'CalTrack applies industrial instrumentation calibration protocols to modern web and native mobile software architecture. Deployed in production with a React/TypeScript web frontend on Vercel Edge, a containerized Node.js API on AWS ECS Fargate, and a native Android companion application in Kotlin using Jetpack Compose, CameraX, and ML Kit for field calibration technicians.',
      problem: 'Industrial facilities frequently rely on disconnected spreadsheets or paper logbooks for recording instrument calibrations. This introduces compliance risks, untracked asset records, and unmonitored equipment drift across operating process units.',
      solution: 'CalTrack provides a secure, cloud-hosted SaaS system and native Android application for instrument tag indexing, calibration record management, user authentication, role-based access control (RBAC), audit history tracking, and mobile barcode-assisted field workflows.',
      architecture: {
        title: 'Production AWS Cloud, Full-Stack & Native Android Architecture',
        description: 'Multi-tier architecture separating high-performance Vercel edge delivery, containerized AWS backend microservices, managed relational storage, and native Android mobile apps.',
        components: [
          'Frontend Layer: React & TypeScript SPA deployed on Vercel Edge Network',
          'Native Mobile Layer: Android companion app built in Kotlin with Jetpack Compose, Material 3, ViewModels, Coroutines, CameraX, and ML Kit Barcode Scanning',
          'API Microservices: Node.js & Express application containerized via Docker and deployed on AWS ECS Fargate',
          'Container Registry: Amazon ECR for secure container image storage and deployment tagging',
          'Managed Relational DB: Amazon RDS PostgreSQL configured with isolated subnets and Prisma ORM',
          'Security & Secrets: AWS Secrets Manager & AWS KMS for runtime credential injection',
          'Networking: AWS VPC with isolated container subnets and security group rules'
        ],
        cloudStack: {
          frontend: 'React / TypeScript on Vercel Edge',
          backend: 'Node.js / Express in Docker on AWS ECS Fargate',
          containerRegistry: 'Amazon ECR (Elastic Container Registry)',
          database: 'Amazon RDS PostgreSQL (Managed Relational Database)',
          secretsAndSecurity: 'AWS Secrets Manager & AWS KMS',
          networking: 'AWS VPC (Virtual Private Cloud)'
        }
      },
      roadmapPhases: [
        {
          phase: 'v0.7',
          title: 'Work Orders & Scheduling',
          description: 'Work order management, technician assignment, calibration calendar, and automated notifications.',
          status: 'Planned'
        },
        {
          phase: 'v0.8',
          title: 'Advanced Calculation Math Engine',
          description: 'Interactive 5-point calibration calculation math engine, automated MPE tolerance validation, and reference-standard checks.',
          status: 'Planned'
        },
        {
          phase: 'v0.9',
          title: 'Certificates & Cryptography',
          description: 'Exportable PDF calibration certificates, cryptographic digital signatures, and formal QA approval workflow.',
          status: 'Planned'
        }
      ],
      mobileRoadmap: {
        title: 'Native Android Companion Application',
        status: 'Implemented Native Mobile',
        description: 'Native Android companion application built in Kotlin and Jetpack Compose for field calibration technicians operating in industrial plant facilities.',
        plannedFeatures: [
          'Native Android UI built with Jetpack Compose & Material 3',
          'CameraX integration with Google ML Kit Barcode Scanning (QR, Code 128, Data Matrix)',
          'ViewModel & Coroutine architecture with DataStore auth token persistence',
          'Retrofit & OkHttp API integration with automatic token refreshing via AuthInterceptor',
          'Reference standard inspection, plant area mapping, and work order state views'
        ]
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS ECS Fargate', 'Amazon RDS PostgreSQL', 'Kotlin', 'Android SDK', 'Jetpack Compose', 'CameraX', 'ML Kit Barcode', 'Docker', 'Vercel', 'Prisma ORM'],
      keyFeatures: [
        'Instrument Tag Database (Pressure, Temperature, Level, Flow, Control Valves)',
        'Native Android Mobile Companion App (Kotlin, Jetpack Compose, CameraX, ML Kit Barcode Scanning)',
        'User Authentication & Role-Based Access Control (RBAC)',
        'Historical Calibration Record Management & Audit Trail Preservation',
        'Industrial Instrument Specification & Parameter Metadata Management',
        'Containerized AWS ECS Fargate & Amazon RDS Backend Deployment',
        'Live Deployed Production Web Application'
      ],
      engineeringChallenges: [
        'Deploying a containerized Node.js API to AWS ECS Fargate while ensuring secure runtime secret injection via AWS Secrets Manager.',
        'Integrating CameraX and ML Kit barcode scanning in Kotlin with Jetpack Compose for real-time barcode/QR tag resolution.',
        'Structuring relational database tables in PostgreSQL to maintain historic calibration snapshots even when physical instrument parameters are modified.',
        'Designing clean RESTful API contracts with Prisma ORM for efficient equipment query resolution.'
      ],
      whatIBuilt: [
        'Architected and containerized the Node.js backend using Docker and deployed to AWS ECS Fargate with Amazon ECR image hosting.',
        'Engineered a native Android companion application in Kotlin using Jetpack Compose, Material 3, ViewModels, Retrofit, CameraX, and ML Kit for barcode-assisted field workflows.',
        'Configured Amazon RDS PostgreSQL for persistent relational data storage with Prisma ORM data modeling.',
        'Built frontend instrument registry components in React/TypeScript to manage instrument tags, user roles, and calibration records.',
        'Deployed the production web application on Vercel at caltrack-web-six.vercel.app/login.'
      ],
      whatILearned: [
        'Gained hands-on experience building native Android applications with Kotlin, Jetpack Compose, Material 3, CameraX, and ML Kit scanner integration.',
        'Deployed containerized microservices with AWS ECS Fargate, ECR, Secrets Manager, and RDS.',
        'Designed full-stack data models for industrial equipment indexing and role-based audit trail preservation.'
      ]
    }
  },
  {
    id: 'estateos',
    slug: 'estateos',
    title: 'EstateOS',
    subtitle: 'Real Estate Investment Intelligence Platform',
    category: 'Real Estate Intelligence · Deterministic Underwriting · Provenance-Aware Research',
    accentColor: '#3B82F6',
    accentGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)',
    accentBg: 'rgba(59, 130, 246, 0.1)',
    accentBorder: 'rgba(59, 130, 246, 0.3)',
    shortDescription: 'A full-stack real estate analysis platform that combines trusted property and distress data with deterministic underwriting and provenance-aware research. EstateOS calculates debt, equity, LTV/CLTV, evaluates investment strategies, and surfaces evidence, assumptions, warnings, and financial insights for human review.',
    technologies: ['Next.js 16', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vitest', 'Node.js', 'TailwindCSS', 'Zod'],
    githubUrl: undefined, // Private repository - button omitted
    liveUrl: undefined,
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'EstateOS is a full-stack real estate investment intelligence platform engineered to turn fragmented property, ownership, debt, distress, valuation, and zoning records into a structured, auditable analysis workflow. The system combines external property data sources with pure TypeScript deterministic financial underwriting, identity-bound evidence snapshots, and provenance-aware research workflows to surface financial metrics, assumptions, and risk warnings for human decision-makers.',
      problem: 'Real-estate investment research often requires combining fragmented property, ownership, debt, distress, valuation, zoning, and financial information before an investor can determine whether an opportunity is worth pursuing. Disconnected county recorder records, property assessor databases, commercial APIs, and unstructured documents lead to manual data gathering, hidden senior or subordinate liens, and missed financial risk factors. Delegating these critical calculations blindly to LLMs introduces hallucination risks and unverified assumptions.',
      solution: 'EstateOS turns fragmented inputs into a structured investment-analysis workflow. Built with Next.js 16, React, TypeScript, Prisma, and PostgreSQL, EstateOS enforces a strict architectural boundary separating source facts, deterministic underwriting, and grounded research. All financial math—including debt capital stacks, LTV/CLTV, equity, cash flows, and multi-strategy screening—executes deterministically in TypeScript, while external property evidence is bound server-side to prevent untrusted input from contaminating investment evaluations.',
      architecture: {
        title: 'Provenance-Aware Real Estate Intelligence & Deterministic Underwriting Architecture',
        description: 'Architectural separation between source facts, deterministic analysis, grounded provenance-aware research, and human review and action. Calculations and investment logic remain strictly deterministic rather than delegated blindly to an LLM.',
        pipelineStack: {
          title: 'DETERMINISTIC & PROVENANCE-AWARE ANALYSIS PIPELINE',
          nodes: [
            { nodeName: 'Source Facts', subText: 'RAW PROPERTY, DEBT & DISTRESS' },
            { nodeName: 'Deterministic Analysis', subText: 'LTV, CLTV, EQUITY & STRATEGIES' },
            { nodeName: 'Grounded Research', subText: 'PROVENANCE & AUTHORITY TIERS' },
            { nodeName: 'Human Review & Action', subText: 'INVESTOR GATEWAY & DECISION' }
          ]
        },
        components: [
          'Source Data Ingestion & Normalization: Ingests structured property records, distress filings, and ownership intelligence from sources including ATTOM, Realie, Regrid, and public county recorder/tax data while capturing provider metadata and timestamps.',
          'Deterministic Financial Underwriting Engine: Pure TypeScript calculation engine executing exact arithmetic for mortgage amortization, NOI, Cap Rate, net cash flows, Cash-on-Cash Return, and analytical DSCR without LLM delegation.',
          'Debt Capital Stack & Leverage Analyzer: Models senior and subordinate lien positions, first-position balances, estimated equity, LTV (Loan-to-Value), CLTV (Combined Loan-to-Value), and complete debt stack verification.',
          'Multi-Strategy Investment Screening: Deterministically evaluates opportunity viability across six distinct real estate strategies: Wholesale, Fix & Flip, BRRRR, Buy & Hold, Subject-To, and Seller Financing with transparent criteria scoring.',
          'Identity-Bound Evidence Snapshots: Server-controlled PropertyEvidenceSnapshot domain cryptographically binding trusted source data to specific opportunity records, ensuring trusted source data is strictly distinguishable from untrusted development input.',
          'Two-Layer Source Authority Classifier: Classifies research citations by authority tier (official municipal/government, established market data, secondary industry, commercial content) to maintain evidence integrity.',
          'Human-in-the-Loop Review Gateway: Surfaces financial assumptions, warnings, missing-lien flags, and supporting evidence in structured panels, ensuring humans evaluate all opportunities before taking action.'
        ]
      },
      roadmapPhases: [
        {
          phase: 'Phase 1',
          title: 'Planning Authority & Zoning Containment',
          description: 'Authoritative municipal jurisdiction synthesis, spatial boundary containment, and local zoning constraint mapping.',
          status: 'In Progress'
        },
        {
          phase: 'Phase 2',
          title: 'Automated Scout Distress Discovery',
          description: 'Autonomous ingestion of pre-foreclosure recorder filings and distressed leads with canonical parcel deduplication.',
          status: 'Planned'
        },
        {
          phase: 'Phase 3',
          title: 'Agentic Task Harness & Worker Orchestration',
          description: 'Supervised asynchronous multi-agent worker loops with structured task attempts, trace logging, and human checkpoints.',
          status: 'Planned'
        }
      ],
      technologies: ['Next.js 16', 'React', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Vitest', 'Node.js', 'TailwindCSS', 'Zod'],
      keyFeatures: [
        'Deterministic Debt Capital Stack & Leverage Engine (LTV, CLTV, Senior/Subordinate Liens, Estimated Equity)',
        'Multi-Strategy Investment Screening (Wholesale, Fix & Flip, BRRRR, Buy & Hold, Subject-To, Seller Finance)',
        'Pure TypeScript Financial Calculators (NOI, Cap Rate, Debt Service, Cash Flow, Cash-on-Cash Return, DSCR)',
        'Identity-Bound Property Evidence Snapshots (Server-Controlled Provenance & Trusted vs. Untrusted Separation)',
        'Multi-Tier Source Authority Classifier (Official Government, Primary Assessor, Market Data, Secondary Industry)',
        'Transparent Assumptions & Risk Warning Engine (Missing Lien Warnings, Vacancy Adjustments, Incomplete Stack Flags)',
        'Grounded Research Integration Framework (Provenance-Aware Source Citations & Confidence Validation)',
        'Rigorous Automated Test Harness with 1,234 Passing Tests across 76 Tracked Vitest Suites'
      ],
      engineeringChallenges: [
        'Isolating deterministic financial math from LLM interpretation to ensure 100% auditable, reproducible underwriting results that investors can trust.',
        'Architecting identity-bound evidence snapshots so that server-verified source data cannot be forged or superseded by untrusted client inputs.',
        'Modeling complex multi-lien capital stacks with incomplete or estimated subordinate debt while explicitly surfacing assumption warnings to human reviewers.',
        'Classifying external research sources by authority tiers to prevent low-credibility commercial web content from influencing regulatory and zoning evaluations.'
      ],
      whatIBuilt: [
        'Engineered the deterministic financial underwriting core in TypeScript, calculating debt capital stacks, LTV/CLTV ratios, mortgage payments, NOI, and cash flows with rigorous input validation.',
        'Built the multi-strategy investment screening engine evaluating opportunities across Wholesale, Fix & Flip, BRRRR, Buy & Hold, Subject-To, and Seller Finance models.',
        'Designed the PropertyEvidenceSnapshot domain in Prisma and PostgreSQL to bind trusted property evidence to acquisition opportunities.',
        'Implemented the two-layer source authority classifier and evidence guardrails to validate citation confidence levels against source domains.',
        'Developed the opportunity analysis dashboard presenting financial metrics, strategy rankings, warnings, and provenance evidence for human evaluation.'
      ],
      whatILearned: [
        'Deepened expertise in financial systems engineering, deterministic arithmetic invariants, and real-estate debt modeling (LTV, CLTV, subordinate lien mechanics).',
        'Mastered provenance-aware data architecture, distinguishing authoritative primary sources from derivative calculations and unverified client inputs.',
        'Designed robust test harness patterns for financial models, achieving 1,234 passing automated tests across 76 tracked Vitest suites.'
      ],
      metricsOrNotes: 'Development Checkpoint: 76 tracked Vitest suites • 1,234 passing automated tests • Clean ESLint • Clean production Next.js 16 build'
    }
  },
  {
    id: 'photo-booth',
    slug: 'photo-booth',
    title: 'Pacific Horizon Photo Booth',
    subtitle: 'Native SwiftUI / iPadOS Platform & Hardware Evolution',
    category: 'Commercial Product · Native SwiftUI · iPadOS · Hardware Evolution',
    accentColor: '#F43F5E',
    accentGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
    accentBg: 'rgba(244, 63, 94, 0.1)',
    accentBorder: 'rgba(244, 63, 94, 0.3)',
    shortDescription: 'A commercial interactive photo booth platform operated under Pacific Horizon Labs LLC. Built as a native iPadOS application in Swift and SwiftUI with AVFoundation capture, Vision-driven face tracking, expression-reactive AR effects, and Supabase cloud QR delivery, evolved from an earlier Raspberry Pi 5 Linux / gphoto2 DSLR prototype.',
    technologies: ['Swift', 'SwiftUI', 'iPadOS', 'AVFoundation', 'Apple Vision', 'Supabase', 'QR Delivery', 'Raspberry Pi 5', 'Linux', 'gphoto2'],
    githubUrl: undefined, // Commercial platform - public repository button omitted
    liveUrl: 'https://pacific-horizon-labs.netlify.app/photobooth',
    liveUrlLabel: 'AI Photo Booth',
    companyUrl: 'https://pacific-horizon-labs.netlify.app/',
    companyUrlLabel: 'Pacific Horizon Labs',
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'The Pacific Horizon Photo Booth is a commercial interactive event platform operated under Pacific Horizon Labs LLC. The system delivers high-throughput, touch-first guest capture, live expression-reactive augmented reality overlays, and real-time digital media delivery via dynamic QR code. Architecturally, the product represents a deliberate engineering progression: beginning as an embedded Linux / Raspberry Pi 5 prototype tethered to a Canon DSLR over gphoto2, and evolving into a native Apple iPadOS application built in Swift and SwiftUI with custom AVFoundation camera pipelines, Apple Vision framework face tracking, and Supabase cloud delivery infrastructure.',
      problem: 'Commercial event activations demand high-framerate visual previews, reliable multi-guest face tracking, zero-training touch interaction, and frictionless media retrieval under varying venue lighting and unstable Wi-Fi. Traditional photo booth setups frequently rely on fragile multi-component rigs, slow consumer desktop software, delicate external USB cabling, and manual reboot interventions that fail during live operational pressure.',
      solution: 'Architected a native iPadOS kiosk application in Swift and SwiftUI leveraging high-performance Apple silicon. The application features a custom AVFoundation capture pipeline supporting both high-resolution still photography and short-form video looping (LoopCapturePipeline with AVAssetWriter), Apple Vision framework person segmentation and 2D facial landmark tracking, and an automated session state machine with automatic 90-second abandoned-session recovery. Captured media is uploaded asynchronously to Supabase cloud storage and immediately presented with dynamic QR codes for mobile guest download, while local device persistence maintains offline resilience.',
      architecture: {
        title: 'Native iPadOS SwiftUI Architecture & Real-Time Media Pipeline',
        description: 'End-to-end event kiosk architecture separating reactive SwiftUI presentation, AVFoundation hardware capture, Vision landmark tracking, local session state machines, and Supabase cloud distribution.',
        pipelineStack: {
          title: 'PHOTO BOOTH NATIVE CAPTURE & DIGITAL DISTRIBUTION PIPELINE',
          nodes: [
            { nodeName: 'Touch Kiosk UI', subText: 'SWIFTUI / READYVIEW' },
            { nodeName: 'AVFoundation Camera', subText: 'LIVE PREVIEW & LOOP' },
            { nodeName: 'Vision Face Tracking', subText: 'LANDMARKS & SEGMENTATION' },
            { nodeName: 'AR & Frame Compositor', subText: 'REAL-TIME RENDERING' },
            { nodeName: 'Session State Machine', subText: 'BOOTHTLOW & PERSISTENCE' },
            { nodeName: 'Supabase Cloud Storage', subText: 'SIGNED UPLOADS & RETENTION' },
            { nodeName: 'Dynamic QR Delivery', subText: 'ZERO-FRICTION GUEST CLAIM' }
          ]
        },
        components: [
          'Native iPadOS / SwiftUI Presentation: High-framerate declarative interface built with SwiftUI, featuring custom viewfinder overlays, countdown timers, aperture marks, and gesture-driven event flows.',
          'Multi-Stage Session State Machine: Deterministic BoothFlow coordinator managing .ready, .experienceSelection, .camera, .photoReview, .loopReview, .delivery, and .complete stages with automatic 90-second abandoned session reset protection.',
          'AVFoundation & Boomerang Loop Pipeline: Custom camera capture engine pairing real-time live preview with LoopCapturePipeline and LoopVideoWriter (AVAssetWriter) for short-form looping motion capture.',
          'Apple Vision Framework & Expression-Reactive AR: Real-time person segmentation (VNGeneratePersonSegmentationRequest) and multi-face landmark tracking (TrackedFaceState) for synchronized AR accessory overlays and virtual background compositing.',
          'Event Configuration & Admin Surface: EventConfigurationStore persisting per-event watermarks, frame graphics, experience toggles, and hidden long-press administrative controls (AdminEventEditorView).',
          'Supabase Cloud Delivery Infrastructure: SupabaseDeliveryService generating unique claim tokens and dynamic QR codes for instant mobile guest retrieval without requiring native app installs on guest devices.',
          'Offline-First Local Persistence: SessionRepository, BoothSession, and MediaRetentionCleanupService maintaining local device storage integrity and automated retention pruning during low-connectivity event operations.'
        ]
      },
      hardwareEvolution: {
        title: 'Prototype & Hardware Evolution',
        description: 'The Photo Booth platform represents a deliberate, multi-generation engineering evolution—validating core user interaction on physical edge hardware before scaling into a polished native commercial product.',
        stages: [
          {
            stageBadge: 'GENERATION 1: HARDWARE PROTOTYPE',
            title: 'Embedded Linux & DSLR Kiosk Prototype',
            description: 'Engineered an edge hardware kiosk powered by a Raspberry Pi 5 running 64-bit Debian Linux with active thermal cooling, an Acer 15.6" touchscreen, and a tethered Canon Rebel T100 DSLR camera. Automated camera control over USB PTP using gphoto2 and supervised the system via systemd user daemons and custom kiosk startup scripts.',
            technologies: ['Raspberry Pi 5', '64-bit Linux', 'gphoto2', 'Canon Rebel T100', 'systemd', 'Python', 'Acer Touchscreen'],
            keyMilestones: [
              'Validated the interactive touch-and-capture loop with live guests in unattended nonprofit event operations',
              'Solved USB bus power coordination and OS automount conflicts for programmatic DSLR shutter control',
              'Engineered fault-tolerant systemd user service daemons (~/.local/share/systemd/user/photobooth-app.service) ensuring auto-recovery upon power cycling',
              'Identified commercial constraints: hardware bulk, external cabling fragility, and tethered transfer latencies'
            ]
          },
          {
            stageBadge: 'GENERATION 2: COMMERCIAL PLATFORM',
            title: 'Native Apple iPadOS & SwiftUI Commercial Product',
            description: 'Formed Pacific Horizon Labs LLC and re-architected the entire software stack into a native Swift and SwiftUI application on iPadOS. Leveraged Apple silicon for high-throughput image processing, native AVFoundation camera pipelines, Apple Vision framework landmark tracking, and Supabase cloud distribution.',
            technologies: ['Swift', 'SwiftUI', 'iPadOS', 'AVFoundation', 'Apple Vision', 'Core Image / Metal', 'Supabase', 'QR Delivery'],
            keyMilestones: [
              'Unified camera sensor, display, and compute into a reliable, streamlined commercial form factor',
              'Replaced external gphoto2 scripts with low-latency AVFoundation capture and custom LoopVideoWriter pipelines',
              'Implemented real-time multi-face tracking and person segmentation via Apple Vision framework',
              'Deployed cloud delivery infrastructure generating dynamic QR claim codes for instant guest media handoff'
            ]
          }
        ]
      },
      roadmapPhases: [
        {
          phase: 'Phase 1',
          title: 'Embedded Linux & DSLR Hardware Baseline',
          description: 'Raspberry Pi 5 active-cooled setup, systemd user services, kiosk-mode touch interface, and Canon T100 gphoto2 integration.',
          status: 'Planned'
        },
        {
          phase: 'Phase 2',
          title: 'Native iPadOS & SwiftUI Commercial Architecture',
          description: 'Native Swift/SwiftUI application, AVFoundation camera pipeline, Apple Vision face tracking, modular AR effects, and Supabase QR delivery.',
          status: 'In Progress'
        },
        {
          phase: 'Phase 3',
          title: 'Multi-Modal Experiences & Offline-First Resilience',
          description: 'Boomerang looping motion capture, automated media retention pruning, and resilient edge synchronization for intermittent connectivity.',
          status: 'In Progress'
        },
        {
          phase: 'Phase 4',
          title: 'Unified Telemetry & Multi-Device Fleet Management',
          description: 'Centralized device health telemetry, operational metrics, and remote configuration synchronization across deployed kiosks.',
          status: 'Planned'
        }
      ],
      technologies: ['Swift', 'SwiftUI', 'iPadOS', 'AVFoundation', 'Apple Vision', 'Supabase', 'QR Delivery', 'Raspberry Pi 5', 'Linux', 'gphoto2', 'systemd', 'Python'],
      keyFeatures: [
        'Native Swift & SwiftUI user interface engineered for responsive, high-framerate kiosk interactions',
        'AVFoundation custom capture pipeline supporting still photography and looping motion capture',
        'Real-time face tracking and person segmentation powered by Apple Vision framework',
        'Dynamic event configuration and theming with hidden administrative editor (AdminEventEditorView)',
        'Supabase cloud delivery infrastructure with dynamic QR code generation for instant guest download',
        'Local session repository and automated media retention cleanup services for offline resilience',
        'Foundational hardware prototype running 64-bit Linux on Raspberry Pi 5 with gphoto2 DSLR control',
        'Commercial product foundation operated under Pacific Horizon Labs LLC'
      ],
      engineeringChallenges: [
        'Transitioning from tethered USB camera protocols (gphoto2) to high-frame-rate native AVFoundation pipelines while ensuring consistent optical exposure across varying venue environments.',
        'Synchronizing live Vision framework landmark detection with SwiftUI rendering loops to prevent frame drops during real-time AR face overlay compositing.',
        'Designing an unattended kiosk state machine that gracefully recovers from abandoned guest sessions via automatic timeouts without stranding in-flight uploads.',
        'Architecting a reliable digital delivery pipeline bridging local device storage with Supabase cloud buckets via QR tokens for instantaneous guest handoff.'
      ],
      whatIBuilt: [
        'Built the native iPadOS application in Swift and SwiftUI with custom components for viewfinder overlays, countdowns, and review states.',
        'Implemented AVFoundation capture sessions and a custom LoopVideoWriter for high-fidelity still and looping video capture.',
        'Integrated Apple Vision framework for real-time person segmentation and landmark-based AR effect compositing.',
        'Built EventConfigurationStore and AdminEventEditorView for on-site event configuration, watermark framing, and feature toggles.',
        'Integrated Supabase delivery infrastructure and QR generation for zero-friction guest media access.',
        'Originally engineered the physical Raspberry Pi 5 / Linux / Canon DSLR kiosk prototype that validated the core user loop in the field.'
      ],
      whatILearned: [
        'Deepened production expertise in Swift, SwiftUI architecture, AVFoundation media pipelines, and Apple Vision framework.',
        'Understood the operational advantages of moving from bespoke embedded Linux hardware to a unified native mobile OS for commercial kiosk deployments.',
        'Mastered the balance between local hardware persistence and cloud delivery architectures for real-time event workflows.'
      ],
      metricsOrNotes: 'Production Architecture: Native Swift & SwiftUI (iPadOS) • AVFoundation & Apple Vision • Supabase Cloud Delivery • Evolution from Raspberry Pi 5 / Linux / gphoto2 Prototype'
    }
  },
  {
    id: 'pacific-rising-ops',
    slug: 'pacific-rising-ops',
    title: 'Pacific Rising Ops',
    subtitle: 'Human-in-the-Loop AI Operations & Twilio Voice Platform',
    category: 'Agentic AI · Human-in-the-Loop · Twilio Voice · Workflow Orchestration',
    accentColor: '#6366F1',
    accentGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(129, 140, 248, 0.05) 100%)',
    accentBg: 'rgba(99, 102, 241, 0.1)',
    accentBorder: 'rgba(99, 102, 241, 0.3)',
    shortDescription: 'An agentic business operations platform engineered for Pacific Horizon Labs LLC. Automates email ingestion, Claude-driven classification, and reply drafting with an interactive Twilio voice interface—enforcing a strict human-in-the-loop state machine where sensitive external actions require explicit human confirmation.',
    technologies: ['TypeScript', 'Node.js', 'Twilio Voice API', 'Claude (Anthropic)', 'Google Workspace API (Gmail)', 'Zod', 'Express', 'WebSockets', 'Audit Logging'],
    githubUrl: undefined, // Internal proprietary platform
    liveUrl: 'https://pacific-horizon-labs.netlify.app/rising-ops',
    liveUrlLabel: 'Pacific Rising Ops',
    companyUrl: 'https://pacific-horizon-labs.netlify.app/',
    companyUrlLabel: 'Pacific Horizon Labs',
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'Pacific Rising Ops is the central agentic operations platform for Pacific Horizon Labs LLC. Designed to assist with business communications, customer inquiries, scheduling, and back-office orchestration, the system integrates Google Workspace Gmail ingestion, Claude-powered message classification and reply drafting, and an interactive Twilio Voice telephony system. Built upon a rigorous human-in-the-loop safety model, the platform enforces strict approval boundaries: the AI may read, classify, summarize, recommend, and draft, but sensitive external actions (sending emails, dispatching communications, or mutating external state) are held in pending status until explicit human approval is received via voice, web dashboard, or CLI.',
      problem: 'Technical ventures and growing product businesses suffer from fragmented communication channels, delayed inquiry response times, and repetitive operational triage overhead. However, deploying fully autonomous AI agents introduces unacceptable operational risks: hallucinated commitments, unauthorized email transmissions, incorrect pricing quotes, and unverified promises. The challenge was building an intelligent automation system that dramatically accelerates operational workflows while guaranteeing zero unauthorized external actions.',
      solution: 'Engineered a deterministic, human-in-the-loop operational architecture in TypeScript and Node.js. Inbound emails from Google Workspace Gmail are fetched securely via OAuth2, classified using Claude Sonnet with Zod schema validation, and evaluated against strict policy guardrails. If a response is warranted, the system creates a draft in Gmail (users.drafts.create) without calling any send method. An action state machine holds the proposed action in AWAITING_APPROVAL. The system can initiate or receive Twilio Voice calls to summarize unhandled items and read drafted responses to the operator. Critically, approving or executing an action over voice requires verbatim spoken confirmation ("confirm approval"), rejecting casual utterances like "yes" or "okay". All state transitions and decisions are permanently recorded in an append-only audit trail.',
      architecture: {
        title: 'Agentic Ingestion, Voice Telephony & Human Approval Architecture',
        description: 'Multi-tier operations pipeline separating secure OAuth2 ingestion, structured LLM extraction, deterministic approval state machines, Twilio voice telephony, and append-only audit logging.',
        pipelineStack: {
          title: 'PACIFIC RISING OPS — HUMAN-IN-THE-LOOP ORCHESTRATION PIPELINE',
          nodes: [
            { nodeName: 'Business Inputs', subText: 'GMAIL API (OAUTH2)' },
            { nodeName: 'Structured Extraction', subText: 'CLAUDE + ZOD SCHEMA' },
            { nodeName: 'Draft Preparation', subText: 'REPLY DRAFT (NO AUTOSEND)' },
            { nodeName: 'Pending Action State', subText: 'AWAITING_APPROVAL' },
            { nodeName: 'Human Approval Gate', subText: 'TWILIO VOICE / DASHBOARD' },
            { nodeName: 'Approved Execution', subText: 'STRICT ACTION DISPATCH' },
            { nodeName: 'Audit & Deduplication', subText: 'RUNS.JSONL & DATA STORE' }
          ]
        },
        components: [
          'Google Workspace Gmail Ingestion: OAuth2 loopback authentication and scoped REST client (gmail.readonly, gmail.compose) fetching inbound threads, headers, and bodies without external sending permissions.',
          'Claude Semantic Classification & Extraction: Claude Sonnet inference with Zod schema validation categorizing incoming messages (customer inquiries, bookings, vendor notices, noise) with confidence thresholds.',
          'Zero-Autonomy Draft Generation: Policy engine that drafts proposed replies strictly into Gmail threads (users.drafts.create) grounded in business documentation, strictly forbidding autonomous sending.',
          'Deterministic Approval State Machine: Formal transition engine (RECEIVED → CLASSIFIED → DRAFTED → AWAITING_APPROVAL → APPROVED/REJECTED → EXECUTING → SENT) rejecting invalid state transitions.',
          'Twilio Voice Operations Engine: Telephony integration supporting inbound and outbound calls, spoken operational summaries, draft read-backs, and voice-driven approval workflows.',
          'Strict Confirmation Voice Matcher: Deterministic utterance parser requiring exact phrases ("confirm approval" or "confirm rejection"), explicitly rejecting casual phrases ("yes", "okay", "sure") to prevent accidental authorization.',
          'Multi-Surface Approval Interfaces: Operator review supported across interactive Twilio Voice calls, React/Vite operational dashboard, and operator CLI (npm run approvals).',
          'Append-Only Audit Logging & Deduplication: Immutable logging to data/runs.jsonl and state tracking in data/processed.json ensuring zero duplicate processing and complete operational traceability.'
        ]
      },
      approvalWorkflow: {
        title: 'Human-in-the-Loop Safety Model & Approval Architecture',
        description: 'The core engineering tenet of Pacific Rising Ops is that artificial intelligence serves as an operational copilot rather than an unconstrained actor. Consequential and external actions are protected by verifiable, code-enforced boundaries.',
        safetyModelOverview: 'The system maintains a strict separation between read/prepare capabilities and write/execute capabilities. Autonomous code paths are restricted to ingestion, classification, summarization, and draft creation. Any action that sends messages externally, modifies calendars, or commits business resources requires verified human authorization.',
        safetyPrinciples: [
          { title: 'Read & Ingest Business Messages', detail: 'Ingests incoming emails via Gmail API with minimal scopes.', allowed: true },
          { title: 'Classify & Extract Metadata', detail: 'Parses sender intent, inquiry type, and urgency with Zod schemas.', allowed: true },
          { title: 'Generate Reply Drafts', detail: 'Creates reviewable Gmail drafts (users.drafts.create) grounded in business rules.', allowed: true },
          { title: 'Provide Spoken Summaries', detail: 'Reads operational briefs and pending actions over Twilio voice calls.', allowed: true },
          { title: 'Autonomous Email Sending', detail: 'Strictly zero code paths call messages.send or drafts.send autonomously.', allowed: false },
          { title: 'Autonomous Calendar Mutation', detail: 'Calendar invites and appointments are held pending human sign-off.', allowed: false },
          { title: 'Casual Voice Approvals', detail: 'Casual words like "yes" or "okay" are explicitly rejected by voice parser.', allowed: false },
          { title: 'Unverified External Actions', detail: 'Protected actions remain in AWAITING_APPROVAL until explicitly signed off.', allowed: false }
        ],
        stateMachineTransitions: [
          { fromState: 'RECEIVED', toState: 'CLASSIFIED', trigger: 'Gmail Ingestion & Payload Parse', guard: 'Valid OAuth token & unhandled message ID' },
          { fromState: 'CLASSIFIED', toState: 'DRAFTED', trigger: 'Claude Structured Extraction', guard: 'Classification confidence >= 0.70 & requiresResponse' },
          { fromState: 'DRAFTED', toState: 'AWAITING_APPROVAL', trigger: 'Draft Created (users.drafts.create)', guard: 'Draft ID returned & payload recorded in action store' },
          { fromState: 'AWAITING_APPROVAL', toState: 'APPROVED', trigger: 'Human Sign-off (Voice / Web / CLI)', guard: 'Explicit verbatim confirmation ("confirm approval")' },
          { fromState: 'AWAITING_APPROVAL', toState: 'REJECTED', trigger: 'Human Decline (Voice / Web / CLI)', guard: 'Explicit operator rejection ("confirm rejection")' },
          { fromState: 'APPROVED', toState: 'EXECUTING', trigger: 'Action Executor Invocation', guard: 'Valid ApprovalRecord with approver identity and timestamp' },
          { fromState: 'EXECUTING', toState: 'SENT', trigger: 'Dispatch External API Call', guard: 'Successful API execution response recorded' }
        ]
      },
      roadmapPhases: [
        {
          phase: 'Phase 1',
          title: 'Gmail Ingestion & LLM Drafting',
          description: 'OAuth2 authentication, Claude classification, and policy-grounded draft creation into Gmail threads.',
          status: 'Planned'
        },
        {
          phase: 'Phase 2',
          title: 'Deterministic State Machine & Multi-Surface Approval',
          description: 'Formal ActionStatus lifecycle rules, CLI approval tooling, and Web dashboard integration.',
          status: 'Planned'
        },
        {
          phase: 'Phase 3',
          title: 'Twilio Voice Operations & Strict Voice Confirmation',
          description: 'Inbound and outbound Twilio Voice calling, TwiML generation, and strict voice confirmation matching.',
          status: 'In Progress'
        },
        {
          phase: 'Phase 4',
          title: 'Bi-Directional Calendar Orchestration & Event Lead Sync',
          description: 'Google Calendar FreeBusy integration and booking request status synchronization.',
          status: 'Planned'
        }
      ],
      technologies: ['TypeScript', 'Node.js', 'Twilio Voice API', 'Claude (Anthropic)', 'Google Workspace API (Gmail)', 'Zod', 'Express', 'WebSockets', 'Audit Logging', 'Deterministic State Machine'],
      keyFeatures: [
        'Google Workspace Gmail API ingestion with scoped OAuth2 loopback authentication',
        'Claude Sonnet classification with Zod schema validation and confidence scoring',
        'Safe draft generation into Gmail threads with strictly zero autonomous send execution',
        'Twilio Voice integration enabling spoken operational briefings and draft reviews over telephone',
        'Strict confirmation voice matcher requiring verbatim "confirm approval" to prevent false triggers',
        'Deterministic ActionStatus finite state machine preventing invalid lifecycle transitions',
        'Multi-surface operator approval across Twilio Voice, React web dashboard, and CLI tooling',
        'Append-only audit logging and message deduplication guaranteeing traceability'
      ],
      engineeringChallenges: [
        'Designing a voice conversation engine that accurately distinguishes between informational commands ("read summary", "read draft") and high-stakes authorization commands over telephone audio.',
        'Eliminating accidental approvals by enforcing strict verbatim confirmation matching ("confirm approval") while providing intuitive feedback when casual affirmations ("yes", "okay") are spoken.',
        'Architecting zero-secret runtime configuration and robust OAuth2 token refresh workflows for long-running daemon operations.',
        'Maintaining complete idempotency across email ingestion passes through message ID de-duplication and structured audit records.'
      ],
      whatIBuilt: [
        'Engineered the core orchestration pipeline in TypeScript connecting Gmail API, Claude inference, and Twilio voice webhooks.',
        'Implemented the ActionStore and deterministic state transition validator (ALLOWED_TRANSITIONS) enforcing human approval gates.',
        'Built Twilio Voice call handlers, TwiML generation, and WebSocket speech recognition conversation loops.',
        'Created the multi-surface approval interfaces, including CLI commands and web dashboard integration.',
        'Structured immutable audit logging (data/runs.jsonl) and de-duplication stores (data/processed.json).'
      ],
      whatILearned: [
        'Mastered human-in-the-loop architectural patterns, ensuring artificial intelligence enhances operator throughput without removing human governance.',
        'Deepened expertise in Twilio Voice telephony, real-time speech processing, and voice UX design for mission-critical operations.',
        'Gained practical insight into building type-safe LLM applications using Zod schemas and structured output validation.'
      ],
      metricsOrNotes: 'Production Architecture: TypeScript / Node.js • Claude Sonnet + Zod • Twilio Voice Telephony • Strict Human Approval Finite State Machine • Zero-Autonomous Send Safety Guarantee'
    }
  },
  {
    id: 'fieldtrack-ai',
    slug: 'fieldtrack-ai',
    title: 'FieldTrack AI',
    subtitle: 'Edge AI & Sensor Telemetry Platform',
    category: 'IoT / Edge AI / Embedded',
    accentColor: '#10B981',
    accentGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(52, 211, 153, 0.05) 100%)',
    accentBg: 'rgba(16, 185, 129, 0.1)',
    accentBorder: 'rgba(16, 185, 129, 0.3)',
    shortDescription: 'A Raspberry Pi edge-computing platform combining Python hardware daemons, OpenCV computer vision, GPS tracking, PIR motion sensing, and a Node/React telemetry dashboard.',
    technologies: ['Raspberry Pi 5', 'Python', 'FastAPI', 'Node.js', 'TypeScript', 'React', 'OpenCV'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai',
    liveUrl: undefined,
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'FieldTrack AI bridges physical edge sensing with modern web browser interfaces. Running locally on a Raspberry Pi 5, it collects multi-sensor telemetry, runs lightweight computer vision inference, and streams real-time status data to a remote or local web dashboard.',
      problem: 'Remote physical monitoring systems often depend heavily on continuous cloud availability and high-bandwidth video streaming, leading to bandwidth bottlenecks, high latency, and vulnerability during network drops.',
      solution: 'FieldTrack AI performs edge processing directly on device hardware (Raspberry Pi 5). Sensor events, GPS coordinate streams, PIR motion detection, and computer vision detections are processed on-device and pushed as lightweight WebSocket telemetry frames to a low-latency dashboard.',
      architecture: {
        title: 'Layered Edge-to-Web Telemetry Architecture',
        description: 'Multi-layer system separating physical sensor hardware daemons, Python/FastAPI hardware services, Node/TypeScript API servers, and React monitoring dashboards.',
        components: [
          'Physical Hardware Layer: Raspberry Pi 5, Camera Module, GPS Unit, PIR Motion Sensor, 16x2 LCD, RGB Indicators',
          'Edge Hardware Agent (Python / FastAPI): Camera capture, GPS NMEA serial stream, PIR GPIO interrupts, LCD display, RGB status pins',
          'API & Vision Layer (Node.js / TypeScript / Express): Hand gesture & computer vision detection service, WebSocket telemetry server, network status monitoring',
          'Web Command Interface (React / TypeScript): Real-time map rendering, camera preview, diagnostic gauges, and motion alert logging'
        ],
        layeredStack: {
          hardware: 'Raspberry Pi 5, Camera Module, GPS Unit, PIR Motion Sensor, 16x2 LCD',
          edgeAgent: 'Python / FastAPI Hardware Daemon (GPS Serial NMEA, GPIO Interrupts)',
          apiServices: 'Node.js / TypeScript Express & OpenCV Vision Service',
          webUI: 'React & TypeScript Telemetry Monitoring Interface'
        }
      },
      technologies: ['Raspberry Pi 5', 'Python', 'FastAPI', 'Node.js', 'TypeScript', 'React', 'OpenCV', 'WebSockets', 'PySerial (NMEA)', 'PIR GPIO'],
      keyFeatures: [
        'Real-Time Camera Feed & Computer Vision Detection Service',
        'Live GPS Tracking with NMEA Sentence Parsing and Map Plotting',
        'PIR Motion Hardware Interrupt Triggering & Event Logging',
        'Bidirectional WebSocket Data Streaming Protocol',
        'System Diagnostics Panel (CPU Temp, RAM Usage, Network Signal, Voltages)'
      ],
      engineeringChallenges: [
        'Managing concurrent hardware threads in Python without blocking the high-frequency sensor telemetry loop.',
        'Optimizing computer vision frame analysis to run efficiently on low-power ARM architecture without CPU thermal throttling.',
        'Handling intermittent network connections gracefully with local buffer queues on the Pi.'
      ],
      whatIBuilt: [
        'Wrote Python hardware integration scripts for reading serial NMEA data from the GPS unit and handling PIR GPIO pin interrupts.',
        'Created a Node.js/TypeScript telemetry gateway server running directly on the Raspberry Pi.',
        'Built a custom React dashboard component displaying telemetry charts, camera previews, and live location updates.'
      ],
      whatILearned: [
        'Gained hands-on experience in physical hardware interfacing, GPIO pin control, serial NMEA parsing, and WebSocket streaming under low-bandwidth edge conditions.',
        'Engineered resilient WebSocket communication protocols tailored for intermittent network conditions.'
      ]
    }
  },
  {
    id: 'procurement-tracking',
    slug: 'procurement-tracking',
    title: 'Procurement Tracking System',
    subtitle: 'Enterprise Procurement Workflow Platform',
    category: 'Full-Stack · GraphQL · Business Operations',
    accentColor: '#F59E0B',
    accentGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
    accentBg: 'rgba(245, 158, 11, 0.1)',
    accentBorder: 'rgba(245, 158, 11, 0.3)',
    shortDescription: 'A full-stack procurement operations platform for managing purchase requests, approval workflows, vendors, purchase orders, and goods receiving. Built with React/TypeScript, GraphQL/Apollo, Node/Express, Prisma, and PostgreSQL with role-based access control.',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'GraphQL', 'Apollo Server', 'Prisma ORM', 'PostgreSQL'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking',
    liveUrl: 'https://procurement-tracking-xg87.vercel.app/',
    liveUrlLabel: 'Live App',
    featured: true,
    status: 'Production Live',
    caseStudy: {
      overview: 'The Procurement Tracking System models an end-to-end operational purchasing workflow, connecting procurement requests, multi-role approvals, vendor management, purchase-order lifecycles, and receiving operations through a type-safe GraphQL application.',
      problem: 'Procurement processes become difficult to audit when requests, approvals, vendor data, purchase orders, and receiving records are distributed across spreadsheets, email threads, and disconnected systems.',
      solution: 'The platform centralizes procurement operations into a role-aware application with structured workflows, persistent PostgreSQL data, GraphQL APIs, and permissions enforced across both the user interface and backend resolvers.',
      architecture: {
        title: 'Production Full-Stack GraphQL Architecture',
        description: 'Client-side React 19 application consuming a Node/Express GraphQL API backed by Prisma ORM and managed PostgreSQL.',
        components: [
          'Frontend Layer: React 19 & TypeScript SPA deployed on Vercel Edge with Apollo Client',
          'GraphQL API: Node.js & Express 5 server using Apollo Server 4 deployed on Render',
          'Database Tier: Managed PostgreSQL database on Neon with Prisma ORM 6 data modeling',
          'Security & Auth: JWT authentication, HTTP-only cookies, BCrypt password hashing, and RBAC permission enforcement',
          'Role Model: Multi-role permission system enforcing ADMIN, REQUESTER, APPROVER, BUYER, and RECEIVER access controls'
        ]
      },
      technologies: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'GraphQL', 'Apollo Client 4', 'Apollo Server 4', 'Prisma ORM 6', 'PostgreSQL', 'JWT', 'Vercel', 'Render'],
      keyFeatures: [
        'Procurement Request Creation & Line-Item Management',
        'Multi-Role Approval & Rejection Workflows',
        'Vendor Directory & Qualification Status Tracking',
        'Purchase Order Generation & Lifecycle Management',
        'Partial & Full Goods Receiving with Remaining Quantity Tracking',
        'Role-Based Access Control (ADMIN, REQUESTER, APPROVER, BUYER, RECEIVER)',
        'Backend GraphQL Resolver Permission Enforcement',
        'Live Deployed Production Application on Vercel & Render'
      ],
      engineeringChallenges: [
        'Enforcing role-based access control rules consistently across GraphQL query and mutation resolvers.',
        'Accurately modeling purchase order lifecycle state transitions from request creation to partial or full goods receiving.'
      ],
      whatIBuilt: [
        'Designed the relational PostgreSQL schema in Prisma ORM to model requests, line items, approvals, purchase orders, vendors, and receiving logs.',
        'Implemented Express 5 and Apollo Server 4 GraphQL resolvers with JWT authentication and RBAC middleware.',
        'Built the React 19 / TypeScript frontend application with Apollo Client for managing purchasing workflows and inventory receiving.'
      ],
      whatILearned: [
        'Mastered GraphQL schema design, Apollo Server resolver authorization, and complex multi-role state machine modeling in full-stack applications.'
      ]
    }
  },
  {
    id: 'thriveward-funding-intelligence',
    slug: 'thriveward-funding-intelligence',
    title: 'Thriveward Funding Intelligence',
    subtitle: 'Retrieval-Augmented Funding Intelligence Platform',
    category: 'AI · RAG · Data Intelligence · Governance',
    accentColor: '#8B5CF6',
    accentGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(167, 139, 250, 0.05) 100%)',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    accentBorder: 'rgba(139, 92, 246, 0.3)',
    shortDescription: 'Funding intelligence platform combining provenance-aware document ingestion, pgvector semantic retrieval, RAG grounding, Argon2id RBAC auth, and human-governed decision workflows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'pgvector', 'OpenAI API', 'Docker', 'Argon2id', 'JWT'],
    githubUrl: undefined, // Private repository - button omitted
    liveUrl: undefined,
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'Thriveward Funding Intelligence is a Retrieval-Augmented Generation (RAG) platform for discovering, structuring, and evaluating funding opportunities. The system combines PDF document ingestion, page-bounded text chunking, vector embedding, PostgreSQL pgvector cosine retrieval, structured LLM analysis, and human-in-the-loop governance.',
      problem: 'Funding notices and official grant documents are published with inconsistent formats, complex eligibility rules, and frequent addendums. Traditional keyword search misses semantic context, while ungrounded LLMs hallucinate rules and lack verifiable citations.',
      solution: 'Thriveward Funding Intelligence builds an end-to-end RAG grounding pipeline. Official documents are parsed into page-bounded chunks, embedded into a 1536-dimensional vector space using OpenAI text-embedding-3-small, indexed in PostgreSQL via pgvector, and retrieved using controlled multi-query semantic search to ground structured LLM evaluations with exact page citations.',
      architecture: {
        title: 'Document Ingestion, pgvector Retrieval & RAG Grounding Architecture',
        description: 'Server-authoritative pipeline isolating raw PDF ingestion, page parsing, deterministic chunking, vector embeddings, pgvector semantic search, citation evidence binding, structured OpenAI LLM evaluation, and human review.',
        components: [
          'Document Ingestion & PDF Parser: Validates raw PDF uploads with SHA-256 hashes, extracts page-bounded text with page numbers, character counts, and citation references.',
          'Deterministic Chunking Service: Generates page-bounded document chunks (document-chunker-v1) with token constraints and exact start/end offsets.',
          'Embedding & Index Identity Engine: Embeds text chunks via OpenAI text-embedding-3-small, tracks configuration hashes, and prevents stale index reuse.',
          'pgvector Semantic Retrieval: Executes cosine similarity search (<=>) across vector(1536) columns in PostgreSQL with token budget limits and query deduplication.',
          'Evidence Catalog Grounding: Constructs citation-bound evidence snapshots (AiEvaluationRetrievalEvidence) linking LLM analysis directly to page-level excerpts.',
          'Structured LLM Analyst: Executes OpenAI gpt-4o-mini with strict JSON schema response format to output eligibility verdicts, alignment scores, and risk factors.',
          'Human-in-the-Loop Review & Governance: Enforces mandatory human approval/rejection workflows with immutable audit reasons, prohibiting autonomous submissions.'
        ],
        ragStack: [
          { nodeName: 'Funding Documents', subText: 'Official NOFO / Grant PDFs' },
          { nodeName: 'PDF Page Parser', subText: 'Text & SHA-256 Extraction' },
          { nodeName: 'Page Chunker', subText: 'Token-Bounded Offsets' },
          { nodeName: 'OpenAI Embeddings', subText: 'text-embedding-3-small' },
          { nodeName: 'pgvector Index', subText: 'PostgreSQL vector(1536)' },
          { nodeName: 'Semantic Retrieval', subText: 'Cosine Similarity (<=>)' },
          { nodeName: 'Evidence Catalog', subText: 'Citation-Bound Grounding' },
          { nodeName: 'Structured LLM', subText: 'OpenAI gpt-4o-mini' },
          { nodeName: 'Human Review', subText: 'Immutable Approval Gate' }
        ]
      },
      technicalDemo: {
        title: 'RAG Index Integrity — Technical Demo',
        label: 'Development Recording',
        caption: 'Debugging and hardening Thriveward\'s retrieval pipeline, embedding configuration, and semantic-index integrity.',
        videoPath: '/media/thriveward/rag-index-integrity.mp4',
        posterPath: '/media/thriveward/rag-index-integrity-poster.png',
        problem: 'Semantic vector indexes are only valid relative to the exact embedding model, provider, dimensions, and chunking configuration used to create them. If embedding configuration changes without index identity tracking, the vector index silently reuses stale embeddings, breaking semantic retrieval accuracy and citation binding.',
        whyItMatters: 'Vector similarity search relies on mathematical spatial alignment. Comparing query embeddings against document chunk embeddings from a different model or dimension results in arbitrary distance scores, degraded retrieval precision, and invalid grounding evidence.',
        engineeringResponse: 'Thriveward implements server-authoritative index identity tracking using deterministic payload hashes, source manifest hashes, and configuration hashes (embedding provider, model, dimensions, chunker version). The database enforces a unique constraint (documentVersionId, configurationHash) to isolate index versions.',
        result: 'Incompatible or stale embedding configurations cannot be silently reused. Any configuration change generates a new document index version, ensuring index identity and retrieval grounding invariants remain strictly enforced.'
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'pgvector', 'OpenAI API', 'Docker', 'Argon2id', 'JWT'],
      keyFeatures: [
        'PDF Page Extraction & Page-Bounded Deterministic Text Chunking',
        'OpenAI text-embedding-3-small Vector Generation & Batching',
        'PostgreSQL pgvector Cosine Distance Search (<=>) & Rank Sorting',
        'Index Identity Tracking & Configuration Hash Invalidation Defense',
        'Citation-Bound Evidence Catalog & Grounded LLM Analysis',
        'Structured LLM Output via OpenAI gpt-4o-mini & JSON Schema',
        'Argon2id Password Hashing, Session Cookies & Anti-CSRF Defense',
        'Role-Based Access Control (RBAC) & Immutable Human Review Gate'
      ],
      engineeringChallenges: [
        'Preventing vector space corruption when updating embedding models or chunking parameters by implementing configuration hashing and index version isolation in PostgreSQL.',
        'Enforcing verifiable citation grounding by binding LLM analysis exclusively to retrieved document chunk evidence with page-level snapshots and text hashes.',
        'Maintaining server-authoritative state transitions to guarantee human approval is required before any grant evaluation advances.'
      ],
      whatIBuilt: [
        'Architected the full document indexing and retrieval pipeline using Prisma ORM, PostgreSQL pgvector, and OpenAI embeddings.',
        'Implemented server-side index identity tracking with configuration hashes to prevent stale vector reuse across model updates.',
        'Built controlled multi-query semantic search algorithms with token budget limits and evidence deduplication.',
        'Integrated Argon2id authentication, RBAC authorization middleware, and human-in-the-loop evaluation review UI.'
      ],
      whatILearned: [
        'Mastered pgvector indexing in PostgreSQL, vector space mathematical invariants, index identity hashing, and RAG citation grounding design.'
      ]
    }
  },
  {
    id: 'pi-arcade-os',
    slug: 'pi-arcade-os',
    title: 'Pi Arcade OS',
    subtitle: 'Embedded Hardware & Software Gaming Platform',
    category: 'Embedded / Linux / Systems',
    accentColor: '#F97316',
    accentGradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(251, 146, 60, 0.05) 100%)',
    accentBg: 'rgba(249, 115, 22, 0.1)',
    accentBorder: 'rgba(249, 115, 22, 0.3)',
    shortDescription: 'A Raspberry Pi embedded gaming system built in Python and Pygame featuring GPIO arcade controls, I2C LCD display, passive buzzer audio, Snake, Pong, Tetris, and an achievement engine.',
    technologies: ['Raspberry Pi', 'Python', 'Pygame', 'GPIO Wiring', 'I2C LCD', 'Linux OS'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os',
    liveUrl: 'https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/',
    liveUrlLabel: 'Project Site',
    featured: true,
    status: 'Embedded Build',
    caseStudy: {
      overview: 'Pi Arcade OS is a custom hardware and software embedded arcade platform. Built in Python and Pygame on Raspberry Pi hardware, it integrates microswitch arcade joysticks and buttons via direct GPIO wiring, a 16x2 I2C LCD stats display, passive buzzer audio effects, and custom game engines.',
      problem: 'Generic arcade setups often rely on heavy emulator suites that lack hardware-level peripheral integration, custom game engines, or direct physical status display integration.',
      solution: 'Pi Arcade OS connects physical microswitches directly to Raspberry Pi GPIO headers, utilizing software debouncing logic and event loops to power custom Python games (Snake, Pong, Tetris) with real-time I2C LCD status reporting.',
      architecture: {
        title: 'Hardware & Game Architecture Stack',
        description: 'Direct GPIO switch closure and I2C peripherals integrated with Python Pygame execution loops.',
        components: [
          'Physical Arcade Interface: Microswitch joysticks, pushbuttons, wiring harness connected to Raspberry Pi GPIO headers',
          'I2C Peripheral Integration: 16x2 LCD display for live game statistics, player scores, and notifications',
          'Game Engine Core: Python & Pygame modular architecture supporting Snake, Pong, and Tetris',
          'Achievement & Persistence System: JSON-backed save states, high score tracking, and achievement notifications'
        ]
      },
      roadmapPhases: [
        {
          phase: 'Sprint 7',
          title: 'Systemd Kiosk Autostart',
          description: 'Configuring custom Linux systemd services for instant headless autostart upon Pi power-on.',
          status: 'Planned'
        }
      ],
      technologies: ['Raspberry Pi', 'Python', 'Pygame', 'GPIO Hardware Wiring', '16x2 I2C LCD Display', 'Passive Buzzer Audio', 'Linux OS'],
      keyFeatures: [
        'Custom Python Game Engine Suite (Snake, Pong, Tetris)',
        'Direct GPIO Arcade Microswitch Interfacing with Software Debouncing Logic',
        '16x2 I2C LCD Display Integration for Score & System Telemetry Output',
        'Passive Buzzer Audio Sound Effect Generation',
        'JSON Achievement & Save-State Persistence System',
        'Modular Game Registry Architecture for adding new titles'
      ],
      engineeringChallenges: [
        'Mitigating mechanical switch contact chatter (debouncing) in software timing loops.',
        'Managing concurrent display updates to the 16x2 I2C LCD without causing frame drops in Pygame game loops.'
      ],
      whatIBuilt: [
        'Wired physical arcade joysticks and buttons to Raspberry Pi GPIO expansion headers.',
        'Wrote custom Python game engines for Snake, Pong, and Tetris utilizing Pygame surface rendering.',
        'Integrated I2C LCD library calls to display live player statistics and achievement notifications.'
      ],
      whatILearned: [
        'Solidified low-level hardware/software integration skills, mechanical switch debouncing techniques, and Linux system administration.'
      ]
    }
  },
  {
    id: 'ecommerce-store',
    slug: 'ecommerce-store',
    title: 'E-Commerce Store',
    subtitle: 'MERN + GraphQL Commerce Application',
    category: 'Full-Stack · GraphQL · AWS',
    accentColor: '#EC4899',
    accentGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 114, 182, 0.05) 100%)',
    accentBg: 'rgba(236, 72, 153, 0.1)',
    accentBorder: 'rgba(236, 72, 153, 0.3)',
    shortDescription: 'A full-stack e-commerce application built with React/TypeScript, Node/Express, MongoDB, and GraphQL, featuring JWT authentication, role-aware users, and AWS S3 image uploads using pre-signed URLs.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Apollo Client', 'AWS S3', 'JWT'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/ecommerce-store',
    liveUrl: undefined,
    featured: true,
    status: 'Completed Project',
    caseStudy: {
      overview: 'E-Commerce Store is a full-stack web application built to explore MERN stack architecture integrated with GraphQL APIs and AWS cloud object storage. It provides user registration, authentication, product catalog management, and secure media uploads via AWS S3.',
      problem: 'Traditional REST e-commerce APIs can lead to over-fetching product data and complex file upload handling on backend application servers.',
      solution: 'The application utilizes GraphQL queries for precise data retrieval and decouples image uploads by generating secure, pre-signed AWS S3 URLs directly on the server for direct client upload.',
      architecture: {
        title: 'Full-Stack MERN & GraphQL Cloud Architecture',
        description: 'React/TypeScript frontend communicating via GraphQL to a Node/Express API backed by MongoDB document storage and AWS S3 object storage.',
        components: [
          'Frontend: React & TypeScript SPA with Apollo Client state management',
          'API Tier: Node.js & Express server exposing GraphQL endpoints',
          'Database: MongoDB for flexible product catalog and user document storage',
          'Object Storage: AWS S3 with server-generated pre-signed upload URLs',
          'Security: JWT authentication with admin vs standard user authorization'
        ]
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Apollo Client', 'AWS S3', 'JWT', 'Mongoose'],
      keyFeatures: [
        'User Registration & Authentication Workflow',
        'Role-Based Authorization (Admin vs Regular Users)',
        'AWS S3 Product & Profile Image Uploads via Pre-Signed URLs',
        'GraphQL Product Catalog Querying & Mutation Endpoints',
        'Toast-Based User Feedback Notifications',
        'Decoupled Media Upload Architecture'
      ],
      engineeringChallenges: [
        'Configuring pre-signed AWS S3 URL generation to allow clients to upload images directly to cloud storage without burdening the Node API server.'
      ],
      whatIBuilt: [
        'Developed the React/TypeScript frontend components for product catalog browsing, user auth forms, and image upload inputs.',
        'Implemented Node/Express GraphQL resolvers and MongoDB Mongoose schemas for products and users.',
        'Integrated AWS S3 SDK on the backend to issue secure pre-signed upload URLs.'
      ],
      whatILearned: [
        'Gained practical experience integrating GraphQL with MongoDB document stores and leveraging AWS S3 pre-signed URLs for cloud object storage.'
      ]
    }
  }
];

export const controlsToCodeSteps: ProgressionStep[] = [
  {
    stepNumber: 1,
    title: 'Instrumentation & Controls',
    subtitle: 'Physical Hardware Foundation',
    description: 'Hands-on field experience and technical training involving industrial sensors, 4–20 mA current loops, process transmitters, monitoring instrumentation, electrical wiring, and physical measurement devices.',
    iconName: 'Cpu',
    keySkills: ['4–20 mA Current Loops', 'Transmitters & Sensors', 'Electrical Wiring', 'Multimeters & Calibrators']
  },
  {
    stepNumber: 2,
    title: 'Industrial Systems',
    subtitle: 'Automation & Logic Verification',
    description: 'Working with PLC-connected devices, industrial communications, control loops, commissioning, calibration protocols, and system safety standards.',
    iconName: 'Activity',
    keySkills: ['PLC Systems', 'Calibration & Commissioning', 'Control Loops', 'NIST / ISA Standards']
  },
  {
    stepNumber: 3,
    title: 'Programming & Scripting',
    subtitle: 'Bridging Hardware & Logic',
    description: 'Transitioning from ladder logic and industrial controllers into Python, C++, Linux systems, shell scripting, and hardware pin interfacing (GPIO/Serial).',
    iconName: 'Terminal',
    keySkills: ['Python', 'Linux OS', 'GPIO & Serial (UART/NMEA)', 'System Automation']
  },
  {
    stepNumber: 4,
    title: 'Full-Stack, Mobile & Cloud Infrastructure',
    subtitle: 'Scalable Web, Mobile Apps & AWS Deployments',
    description: 'Engineering production web software, native mobile applications across Apple iPadOS and Android, and cloud systems—TypeScript, React, Swift, SwiftUI, Kotlin, Jetpack Compose, Node.js, AWS ECS Fargate, Amazon RDS PostgreSQL, Docker containers, and Vercel Edge.',
    iconName: 'Cloud',
    keySkills: ['TypeScript / React', 'Swift / SwiftUI (iPadOS)', 'Kotlin / Jetpack Compose', 'AWS (ECS / ECR / RDS)', 'Docker & Vercel']
  },
  {
    stepNumber: 5,
    title: 'Agentic Operations, IoT & Connected Systems',
    subtitle: 'Unified Physical & Digital Software',
    description: 'Connecting physical hardware, edge computing (Raspberry Pi), computer vision, Twilio voice telephony, and human-in-the-loop AI operations into cohesive, auditable engineering systems.',
    iconName: 'Network',
    keySkills: ['Human-in-the-Loop AI', 'Twilio Voice Telephony', 'Raspberry Pi Edge Nodes', 'Computer Vision']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages for web software, native mobile apps, backend APIs, system scripting, and databases.',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript', featured: true, tag: 'ES6+' },
      { name: 'TypeScript', featured: true, tag: 'Strongly Typed' },
      { name: 'Swift', featured: true, tag: 'Native iPadOS / iOS' },
      { name: 'Python', featured: true, tag: 'Scripting / OpenCV' },
      { name: 'C++', featured: false, tag: 'Systems' },
      { name: 'SQL', featured: true, tag: 'PostgreSQL / Queries' },
      { name: 'Kotlin', featured: true, tag: 'Native Android' }
    ]
  },
  {
    title: 'Frontend & Mobile Development',
    description: 'Modern web interfaces, responsive design systems, and native iPadOS/Android applications.',
    iconName: 'Smartphone',
    skills: [
      { name: 'SwiftUI', featured: true, tag: 'Native iPadOS' },
      { name: 'AVFoundation & Vision', featured: true, tag: 'Camera & Tracking' },
      { name: 'React', featured: true, tag: 'UI Framework' },
      { name: 'Next.js', featured: true, tag: 'SSR / Full-Stack' },
      { name: 'Android', featured: true, tag: 'Native Mobile' },
      { name: 'Jetpack Compose', featured: true, tag: 'Declarative UI' },
      { name: 'HTML5 & CSS3', featured: true, tag: 'Semantic Layout' },
      { name: 'Responsive Design', featured: true, tag: 'Mobile First' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable server runtime architecture, REST APIs, low-latency streaming, and middleware.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', featured: true, tag: 'Runtime' },
      { name: 'Express.js', featured: true, tag: 'REST Framework' },
      { name: 'Twilio Voice API', featured: true, tag: 'Voice Telephony' },
      { name: 'FastAPI', featured: true, tag: 'Python APIs' },
      { name: 'REST APIs', featured: true, tag: 'API Design' },
      { name: 'WebSockets', featured: true, tag: 'Real-Time Telemetry' },
      { name: 'Zod Validation', featured: true, tag: 'Schema Safety' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, managed cloud databases, ORM abstractions, and data provenance.',
    iconName: 'Database',
    skills: [
      { name: 'Amazon RDS PostgreSQL', featured: true, tag: 'AWS Cloud DB' },
      { name: 'PostgreSQL', featured: true, tag: 'Relational DB' },
      { name: 'Supabase PostgreSQL', featured: true, tag: 'Cloud DB & Storage' },
      { name: 'Prisma ORM', featured: true, tag: 'Type-Safe ORM' },
      { name: 'Schema Design', featured: true, tag: 'Normalization' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Containerized application deployment, managed cloud databases, secrets management, cloud networking, and production hosting across AWS and Vercel.',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS', featured: true, tag: 'Cloud Platform' },
      { name: 'Amazon ECS / Fargate', featured: true, tag: 'Container Orchestration' },
      { name: 'Amazon ECR', featured: true, tag: 'Container Registry' },
      { name: 'Amazon RDS', featured: true, tag: 'Managed DB' },
      { name: 'AWS Secrets Manager', featured: true, tag: 'Secrets Security' },
      { name: 'AWS KMS', featured: true, tag: 'Key Management' },
      { name: 'VPC Networking', featured: false, tag: 'Cloud Security' },
      { name: 'Docker', featured: true, tag: 'Containerization' },
      { name: 'Vercel', featured: true, tag: 'Edge Hosting' },
      { name: 'Linux OS', featured: true, tag: 'Bash / CLI / Daemons' },
      { name: 'Git & GitHub', featured: true, tag: 'Version Control' }
    ]
  },
  {
    title: 'AI & Data Platforms',
    description: 'Applied training in modern AI-assisted data platforms, human-in-the-loop workflows, data governance, and enterprise data operations.',
    iconName: 'Cpu',
    skills: [
      { name: 'Human-in-the-Loop AI', featured: true, tag: 'Approval State Machines' },
      { name: 'Palantir Foundry', featured: true, tag: 'Data Platform' },
      { name: 'Palantir AIP', featured: true, tag: 'AI Workflows' },
      { name: 'Agentic AI Workflows', featured: true, tag: 'AI Design' },
      { name: 'Palantir Foundry Data Governance', featured: true, tag: 'Governance' },
      { name: 'Business Process Modeling', featured: false, tag: 'Process Mining' },
      { name: 'Palantir Foundry Code Repositories', featured: true, tag: 'Data Transformation' },
      { name: 'Data Science Workflows', featured: false, tag: 'Foundry Data Science' }
    ]
  },
  {
    title: 'Hardware, Embedded & Industrial',
    description: 'Physical systems integration, process instrumentation, edge devices, and field engineering.',
    iconName: 'Wrench',
    skills: [
      { name: 'Raspberry Pi 5', featured: true, tag: 'Edge Hardware' },
      { name: 'GPIO & Pin Interfacing', featured: true, tag: 'Embedded I/O' },
      { name: 'Sensors & GPS', featured: true, tag: 'NMEA / Telemetry' },
      { name: 'Radiation Monitoring Instrumentation', featured: false, tag: 'Mirion iCAM' },
      { name: 'Instrumentation & Controls', featured: true, tag: '4–20 mA Loops' },
      { name: 'PLC-Connected Systems', featured: true, tag: 'Industrial Automation' },
      { name: 'Electrical Troubleshooting', featured: true, tag: 'Commissioning & Field' }
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-founder',
    title: 'Founder & Software Engineer',
    companyOrContext: 'Pacific Horizon Labs LLC',
    location: 'Southern California',
    period: '2026 – Present',
    type: 'Software Engineering',
    summary: 'Founded Pacific Horizon Labs LLC to design, engineer, and operate commercial software products and intelligent business systems. Directing end-to-end technical execution across native iPadOS applications (SwiftUI), edge hardware prototyping, and AI-assisted operations automation.',
    links: [
      { label: 'Visit Company Website', url: 'https://pacific-horizon-labs.netlify.app/', primary: true },
      { label: 'AI Photo Booth', url: 'https://pacific-horizon-labs.netlify.app/photobooth' },
      { label: 'Pacific Rising Ops', url: 'https://pacific-horizon-labs.netlify.app/rising-ops' }
    ],
    highlights: [
      'Engineered the native Pacific Horizon Photo Booth application in Swift and SwiftUI for iPadOS, migrating from an earlier Linux hardware prototype to a commercial touch kiosk with live AVFoundation capture and Vision-powered AR effects.',
      'Architected Pacific Rising Ops, an operations agent combining Google Workspace Gmail ingestion, Claude-powered classification, and Twilio voice interactions with strict human-in-the-loop approval gates.',
      'Enforced deterministic security and approval boundaries ensuring all external actions (email sending, telephony dispatch) require explicit human confirmation via voice, web dashboard, or CLI.',
      'Integrated Supabase cloud delivery infrastructure and dynamic QR generation for contactless, real-time guest media distribution.',
      'Maintained complete engineering ownership across concept prototyping, hardware integration, user experience design, and production business operations.'
    ],
    technologies: ['Swift', 'SwiftUI', 'iPadOS', 'TypeScript', 'Node.js', 'Twilio Voice', 'Claude API', 'Supabase', 'Linux', 'Raspberry Pi 5']
  },
  {
    id: 'exp-1',
    title: 'Instrumentation & Controls Technician',
    companyOrContext: 'Process Control & Industrial Automation Systems',
    location: 'Southern California',
    period: 'Field Engineering Experience',
    type: 'Industrial Engineering',
    summary: 'Hands-on field engineering role focused on industrial instrumentation, process controls, PLC-connected devices, calibration, commissioning, and physical system troubleshooting.',
    highlights: [
      'Calibrated and commissioned 4–20 mA process transmitters (pressure, temperature, flow, level) to exacting engineering tolerances.',
      'Troubleshot electrical control loops, PLC I/O wiring harnesses, terminal blocks, relays, and field instruments.',
      'Verified process control loop operation, signal integrity, and safety shutdowns in operating industrial facilities.',
      'Maintained traceable calibration records, documentation, and preventative maintenance logs complying with safety standards.',
      'Applied systematic fault isolation methodologies to resolve complex hardware, wiring, and sensor communication issues.'
    ],
    technologies: ['4–20 mA Loop Transmitters', 'PLC Systems & I/O', 'Industrial Wiring', 'Multimeters / Calibrators', 'Process Schematics / Loop Diagrams']
  }
];

export const clientWorkItems: ClientWorkItem[] = [
  {
    id: 'client-1',
    clientName: 'OC Water Features',
    industry: 'Specialty Contracting / Water Feature Design',
    focusAreas: ['Production Web Platform', 'SEO Optimization', 'Lead Intake Workflows', 'Client Admin Tooling'],
    description: 'Production full-stack web platform for a Southern California water-feature business, combining SEO, lead generation, customer workflows, administrative tooling, and production deployment.',
    deliverables: [
      'Production Next.js application with SSR & SSG for maximum regional SEO performance',
      'Supabase PostgreSQL database integration with secure user authentication',
      'Zod-validated lead generation and custom quote request workflows',
      'Administrative portal for client media showcases and customer inquiry management',
      'Deployed live on Vercel with custom domain configuration & SSL security'
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase PostgreSQL', 'Zod Validation', 'Vercel'],
    status: 'Live / Deployed Production',
    iconName: 'Globe',
    liveUrl: 'https://www.ocwaterfeaturesinc.com/'
  },
  {
    id: 'client-2',
    clientName: 'Pacific Horizon Labs LLC',
    industry: 'Software Products & Intelligent Business Systems',
    focusAreas: ['Native iPadOS / SwiftUI Product', 'Human-in-the-Loop AI Operations', 'Hardware & Kiosk Systems', 'Cloud Delivery Infrastructure'],
    description: 'Formed Pacific Horizon Labs LLC as the company developing and operating the interactive Photo Booth product and AI business operations systems. Evolved the system from an embedded Linux prototype into a native Apple/iPadOS application with cloud delivery and voice-enabled operations.',
    deliverables: [
      'Native iPadOS application built with Swift and SwiftUI featuring AVFoundation camera workflows and Vision face tracking',
      'Supabase cloud delivery pipeline with dynamic QR code generation for real-time mobile media retrieval',
      'AI-assisted business operations agent (Pacific Rising Ops) with Gmail classification and Twilio voice integration',
      'Strict human-in-the-loop approval architecture requiring explicit human sign-off before protected external actions',
      'Preserved Raspberry Pi 5 / Linux / gphoto2 hardware kiosk baseline as the foundational engineering prototype'
    ],
    technologies: ['SwiftUI', 'Swift', 'iPadOS', 'TypeScript', 'Twilio Voice', 'Claude API', 'Supabase', 'Raspberry Pi 5', 'Linux'],
    status: 'Active Development',
    tag: 'COMMERCIAL VENTURE & PRODUCTS',
    iconName: 'Camera',
    liveUrl: 'https://pacific-horizon-labs.netlify.app/',
    liveUrlLabel: 'Visit Company Website',
    secondaryLinks: [
      { label: 'AI Photo Booth', url: 'https://pacific-horizon-labs.netlify.app/photobooth' },
      { label: 'Pacific Rising Ops', url: 'https://pacific-horizon-labs.netlify.app/rising-ops' }
    ],
    caseStudySlug: 'photo-booth'
  }
];
