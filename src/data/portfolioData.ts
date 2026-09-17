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
  technologies: string[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  whatIBuilt: string[];
  whatILearned: string[];
  gallery?: ProjectGalleryImage[];
  metricsOrNotes?: string;
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
  subTitle: 'Full-Stack • Cloud Infrastructure • AI • Mobile • IoT • Embedded Systems',
  tagline: 'Building software across web, cloud infrastructure, AI, native mobile, IoT, and real-world hardware.',
  location: 'Southern California, USA',
  email: 'hector.genaro.pacheco@gmail.com',
  github: 'https://github.com/Thee-Hector-Genaro-Pacheco',
  gitlab: 'https://gitlab.com/hpache17',
  linkedin: 'https://www.linkedin.com/in/hectorgenaropacheco/',
  resumePath: '/resume.pdf',
  resumeConfigured: true,
  aboutText: `I am a Software Engineer with a distinct background spanning full-stack web software, native Android development, AWS cloud infrastructure, retrieval-augmented AI systems, IoT edge computing, and industrial instrumentation & controls. 

Having worked directly with PLC-connected devices, 4–20 mA loop instrumentation, calibration protocols, and field troubleshooting, I bring a physical-world systems mindset to modern software engineering. I engineer auditable, resilient software applications—ranging from AWS-backed industrial SaaS platforms and native Kotlin/Android mobile applications to AI-assisted data pipelines and edge vision telemetry on Raspberry Pi.

My technical training also includes Palantir Foundry and AIP, with coursework in agentic AI workflows, enterprise data operations, data governance, and business-process modeling.`,
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
        'Rigorous Test Suite with 59 Test Files and 804 Tests Verified at Core Underwriting Checkpoint'
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
        'Designed robust test harness patterns for financial models, achieving 804 passing tests across 59 test files at the core underwriting checkpoint.'
      ],
      metricsOrNotes: 'Development Checkpoint: 59 test files • 804 tests passing (Vitest) • Clean ESLint • Clean production Next.js 16 build'
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
    id: 'photo-booth',
    slug: 'photo-booth',
    title: 'Interactive Photo Booth System',
    subtitle: 'Raspberry Pi Hardware & Software Integration',
    category: 'Client Hardware/Software · Embedded Linux · DSLR Automation',
    accentColor: '#F43F5E',
    accentGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
    accentBg: 'rgba(244, 63, 94, 0.1)',
    accentBorder: 'rgba(244, 63, 94, 0.3)',
    shortDescription: 'A commercial interactive photo booth system built around a Raspberry Pi 5, DSLR camera integration, touchscreen kiosk interface, and peripheral integration. The system combines Linux services, camera automation, hardware/software integration, and a touch-first event workflow designed for reliable event operation.',
    technologies: ['Raspberry Pi', 'Python', 'Linux', 'gphoto2', 'systemd', 'DSLR', 'Touchscreen', 'Hardware Integration'],
    githubUrl: undefined, // Client hardware system - public repository button omitted
    liveUrl: undefined, // Physical embedded system - live web app button omitted
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'The Interactive Photo Booth System is a commercial hardware and software platform engineered for real-world event operations for a nonprofit client. Built around a Raspberry Pi 5, an Acer 15.6-inch touchscreen, and a Canon DSLR camera, the system integrates Linux operating system services, camera automation via gphoto2, touch-first kiosk presentation, and robust local media storage into a unified physical booth designed for reliable event operation.',
      problem: 'Event photo booths frequently suffer from fragile desktop software, cumbersome manual reboots, disconnected consumer cameras, and delicate physical wiring that fails under heavy public use. The client required a portable, dedicated hardware-software system capable of booting automatically into an interactive kiosk interface, triggering high-resolution DSLR captures reliably, processing event media locally, and running continuously without technical intervention.',
      solution: 'Architected an integrated edge kiosk system powered by a Raspberry Pi 5 running 64-bit Linux with active thermal cooling. The solution pairs photobooth-app (v8.7.0) with a gphoto2 camera control backend to drive a tethered Canon Rebel T100 DSLR, automated via systemd user services and a custom kiosk startup script to launch an Acer PM161QT touchscreen interface upon boot. All configuration, media frames, databases, and logs are persisted deterministically in structured user directories.',
      architecture: {
        title: 'Layered Kiosk, Linux Daemon & Hardware Automation Architecture',
        description: 'Multi-tier embedded architecture isolating touch user input, application presentation, operating system process supervision, camera driver protocols, and persistent local media pipelines.',
        pipelineStack: {
          title: 'PHOTO BOOTH HARDWARE & SOFTWARE WORKFLOW PIPELINE',
          nodes: [
            { nodeName: 'Touchscreen Interface', subText: '15.6" ACER PM161QT' },
            { nodeName: 'Photo Booth App', subText: 'PHOTOBOOTH-APP V8.7.0' },
            { nodeName: 'Raspberry Pi 5 / Linux', subText: 'SYSTEMD USER DAEMON' },
            { nodeName: 'Camera Control Layer', subText: 'GPHOTO2 BACKEND' },
            { nodeName: 'Canon DSLR', subText: 'CANON REBEL T100' },
            { nodeName: 'Image / Media Workflow', subText: '~/PHOTOBOOTH/MEDIA' },
            { nodeName: 'Output / Peripherals', subText: 'EVENT ATTENDANT DISPATCH' }
          ]
        },
        components: [
          'Touchscreen Kiosk Interface: Acer PM161QT 15.6-inch portable touchscreen delivering responsive, touch-first event interaction with custom kiosk launch scripts.',
          'Photo Booth Application Core: Photobooth-app (v8.7.0) managing live preview framing, countdown states, capture triggers, and local gallery views.',
          'Linux Service & Process Supervisor: Systemd user service (~/.local/share/systemd/user/photobooth-app.service) providing daemonized background execution and automatic restart protection.',
          'Programmatic Camera Control Layer: GPhoto2 abstraction backend communicating directly with the Canon DSLR over USB PTP (Picture Transfer Protocol).',
          'Tethered DSLR Optical Capture: Canon Rebel T100 delivering high-resolution optical image capture superior to standard webcams or mobile sensors.',
          'Deterministic Media & Configuration Storage: Structured local filesystem storage (~/photobooth/) partitioning config, databases, frames, logs, media, processed_full, and userdata.',
          'Thermal & Physical Management: Raspberry Pi Active Cooler maintaining sustained clock frequencies and low thermal thresholds during multi-hour event runtime.'
        ]
      },
      roadmapPhases: [
        {
          phase: 'Phase 1',
          title: 'Hardware Kiosk & DSLR Capture Baseline',
          description: 'Raspberry Pi 5 active-cooled setup, systemd user services, kiosk-mode touch interface, and Canon T100 gphoto2 integration.',
          status: 'In Progress'
        },
        {
          phase: 'Phase 2',
          title: 'Event Printing Workflow & Enclosure Hardening',
          description: 'Thermal/dye-sublimation photo printer driver integration, custom event framing presets, and ruggedized transport enclosure.',
          status: 'Planned'
        },
        {
          phase: 'Phase 3',
          title: 'Modular Device Services & Native Image Processing',
          description: 'The system is planned to evolve toward a more modular architecture with a lightweight Go device-service layer for hardware health, job orchestration, and telemetry, along with a native C++/OpenCV image-processing component for performance-sensitive media and computer-vision workflows.',
          status: 'Planned'
        }
      ],
      technologies: ['Raspberry Pi 5', 'Linux', 'Python', 'photobooth-app 8.7.0', 'gphoto2', 'Canon DSLR', 'systemd', 'Touchscreen Kiosk', 'Hardware Integration'],
      keyFeatures: [
        'Tethered Canon T100 DSLR Camera Control via gphoto2 USB PTP Backend',
        'Interactive 15.6-inch Acer PM161QT Touchscreen Event Kiosk Interface',
        'Unattended Background Daemon Execution via systemd User Service',
        'Automatic Kiosk Startup Script for Instant Power-On Event Readiness',
        'Deterministic Persistent Storage Hierarchy for Config, Databases, Media, and Logs',
        'Hardware Active Cooling Preventing Thermal Throttling in Closed Enclosures',
        'Touch-First Event Workflow with Countdown Timers and Real-Time Review',
        'Engineered as Real Commercial Client Hardware for Nonprofit Operations'
      ],
      engineeringChallenges: [
        'Managing USB bus power distribution and device locking when communicating programmatically with the Canon T100 DSLR through gphoto2 without OS desktop automount conflicts.',
        'Ensuring reliable touch input coordination and display synchronization on an external portable touchscreen connected to Raspberry Pi 5 under kiosk window managers.',
        'Structuring fault-tolerant systemd service definitions and shell scripts to guarantee hands-off reboot recovery during live unattended event operation.',
        'Maintaining low thermal signatures and stable clock speeds under continuous capture workloads using active cooling within physical booth enclosures.'
      ],
      whatIBuilt: [
        'Configured the Raspberry Pi 5 hardware platform with active cooling, USB peripheral mapping, and display/touch wiring harnesses.',
        'Implemented automated systemd service definitions (photobooth-app.service) and shell startup scripts (~/photobooth-kiosk.sh) for resilient kiosk operation.',
        'Integrated and calibrated the Canon T100 DSLR camera using gphoto2 for reliable programmatic shutter release and high-resolution photo transfer.',
        'Deployed and customized photobooth-app v8.7.0, structuring persistent directories for configuration, databases, frames, processed media, and logs.',
        'Conducted physical bench testing of display responsiveness, USB stability, and touch calibration to support unattended public event usage.'
      ],
      whatILearned: [
        'Deepened practical expertise in embedded Linux system administration, systemd user daemons, and kiosk window orchestration on Raspberry Pi.',
        'Mastered low-level USB camera control protocols, gphoto2 device configuration, and physical peripheral troubleshooting.',
        'Gained hands-on experience designing end-to-end hardware/software systems for real client operational requirements and unattended public interaction.'
      ],
      metricsOrNotes: 'Current Implementation: photobooth-app v8.7.0 • Canon T100 DSLR via gphoto2 • Raspberry Pi 5 Linux systemd service • 15.6" Touchscreen Kiosk'
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
    description: 'Engineering production web software, native Android applications, and cloud systems—TypeScript, React, Kotlin, Jetpack Compose, Node.js, AWS ECS Fargate, Amazon RDS PostgreSQL, Docker containers, and Vercel Edge.',
    iconName: 'Cloud',
    keySkills: ['TypeScript / React', 'Kotlin / Jetpack Compose', 'Node.js & Express', 'AWS (ECS / ECR / RDS)', 'Docker & Vercel']
  },
  {
    stepNumber: 5,
    title: 'IoT, Edge AI & Connected Tech',
    subtitle: 'Unified Physical & Digital Software',
    description: 'Connecting physical hardware, edge computing (Raspberry Pi), computer vision, real-time WebSockets, and auditable AI platforms into cohesive engineering systems.',
    iconName: 'Network',
    keySkills: ['Raspberry Pi Edge Nodes', 'Computer Vision', 'WebSockets / Telemetry', 'AI Data Pipelines']
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
      { name: 'Python', featured: true, tag: 'Scripting / OpenCV' },
      { name: 'C++', featured: false, tag: 'Systems' },
      { name: 'SQL', featured: true, tag: 'PostgreSQL / Queries' },
      { name: 'Kotlin', featured: true, tag: 'Native Android' }
    ]
  },
  {
    title: 'Frontend & Mobile Development',
    description: 'Modern web interfaces, responsive design systems, and native Android applications.',
    iconName: 'Smartphone',
    skills: [
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
      { name: 'Supabase PostgreSQL', featured: true, tag: 'Cloud DB & Auth' },
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
    description: 'Applied training in modern AI-assisted data platforms, workflow design, data governance, and enterprise data operations.',
    iconName: 'Cpu',
    skills: [
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
    clientName: 'Interactive Photo Booth System',
    industry: 'Nonprofit Event Operations & Hardware Systems',
    focusAreas: ['Embedded Linux Kiosk', 'DSLR Camera Automation', 'Touchscreen Integration', 'Hardware Reliability'],
    description: 'A commercial interactive photo booth system engineered for a nonprofit client, integrating a Raspberry Pi 5, Canon DSLR camera automation via gphoto2, a 15.6-inch touchscreen kiosk interface, systemd background services, and unattended event execution.',
    deliverables: [
      'Raspberry Pi 5 and Active Cooler hardware assembly with touch/display connectivity',
      'Canon T100 DSLR integration using gphoto2 for automated tethered capture',
      'Acer PM161QT 15.6-inch touchscreen display and kiosk-mode event interface',
      'Systemd user service automation (photobooth-app.service) for reliable background daemon execution',
      'Kiosk startup scripts and persistent directory hierarchy for media, configuration, and logs'
    ],
    technologies: ['Raspberry Pi 5', 'Linux', 'Python', 'photobooth-app', 'gphoto2', 'Canon DSLR', 'systemd', 'Touchscreen'],
    status: 'Active Development',
    tag: 'CLIENT HARDWARE WORK',
    iconName: 'Camera',
    caseStudySlug: 'photo-booth'
  }
];
