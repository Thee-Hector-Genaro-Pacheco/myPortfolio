export type ResumeVariantId = 'general' | 'backend-cloud' | 'embedded-iot';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'case-study';
}

export interface ResumeProject {
  title: string;
  subtitle: string;
  tech: string;
  period?: string;
  links: ProjectLink[];
  bullets: string[];
}

export interface AdditionalProject {
  title: string;
  desc: string;
  links: ProjectLink[];
}

export interface SkillCategory {
  label: string;
  value: string;
}

export interface ExperienceItemResume {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationItemResume {
  institution: string;
  credential: string;
  dateOrStatus: string;
}

export interface ResumeVariantData {
  id: ResumeVariantId;
  label: string;
  badge: string;
  targetRoles: string[];
  docTitle: string;
  pdfPath: string;
  downloadFilename: string;
  summary: string;
  skills: SkillCategory[];
  featuredProjects: ResumeProject[];
  additionalProjects: AdditionalProject[];
  experience: ExperienceItemResume[];
  education: EducationItemResume[];
}

export const resumeVariantsData: Record<ResumeVariantId, ResumeVariantData> = {
  general: {
    id: 'general',
    label: 'General Software Engineer',
    badge: 'Full-Stack & Systems',
    targetRoles: [
      'Software Engineer I',
      'Entry-Level Software Engineer',
      'Junior Software Engineer',
      'Full-Stack Developer'
    ],
    docTitle: 'Software Engineer | Full-Stack • Backend & APIs • Cloud Infrastructure • Mobile Systems',
    pdfPath: '/resume-software-engineer.pdf',
    downloadFilename: 'Hector_Pacheco_Software_Engineer_Resume.pdf',
    summary:
      'Versatile Software Engineer with experience delivering standalone systems and collaborative contributions in shared codebases. Background spans full-stack web platforms, containerized cloud infrastructure on AWS ECS Fargate, type-safe REST/GraphQL APIs, relational database modeling (PostgreSQL/Prisma), native Android mobile apps (Kotlin/Jetpack Compose), embedded Linux daemons, and Jira/GitLab-driven team workflows with automated testing.',
    skills: [
      { label: 'Languages:', value: 'TypeScript, JavaScript, Python, SQL, C++, Kotlin' },
      { label: 'Cloud & DevOps:', value: 'AWS (ECS Fargate, ECR, RDS, Secrets Mgr), Docker, Linux, Git, GitLab, Jira, Vercel' },
      { label: 'Frontend & Mobile:', value: 'React, Next.js 16, Android (Kotlin), Jetpack Compose, HTML5, CSS3, Tailwind CSS' },
      { label: 'Data & Databases:', value: 'PostgreSQL, Prisma ORM, MongoDB, Supabase' },
      { label: 'Backend & APIs:', value: 'Node.js, Express, REST APIs, GraphQL, FastAPI, Zod' },
      { label: 'Systems & Hardware:', value: 'Raspberry Pi 5, gphoto2, systemd, GPIO, 4–20 mA, PLC' },
      { label: 'AI & Platforms:', value: 'Palantir Foundry, Palantir AIP, OpenAI API, RAG' },
      { label: 'Quality & Testing:', value: 'Vitest, Unit & Integration Testing, Automated Testing, Audit Logging' }
    ],
    featuredProjects: [
      {
        title: 'EstateOS',
        subtitle: 'Agentic Real Estate Investment Intelligence Platform',
        period: 'Aug 2026 – Sep 2026',
        tech: 'Next.js 16 • TypeScript • Claude API • Multi-Agent • PostgreSQL • Prisma • Vitest',
        links: [
          {
            label: 'CASE STUDY',
            url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos',
            type: 'case-study'
          }
        ],
        bullets: [
          'Built a full-stack real-estate intelligence platform combining Claude-powered research and multi-agent orchestration with deterministic TypeScript underwriting.',
          'Implemented cash flow, cap rate, cash-on-cash return, LTV/CLTV, debt/equity analysis, multi-strategy screening, and evidence provenance/source-authority guardrails.',
          'Validated core logic, agent behavior, repositories, and integrations with 1,234 passing automated tests across 76 tracked Vitest suites, including PostgreSQL/Prisma integration coverage.'
        ]
      },
      {
        title: 'CalTrack',
        subtitle: 'Industrial Calibration SaaS & Mobile Platform',
        period: 'Jun 2026 – Jul 2026',
        tech: 'React • TypeScript • Node.js • Express • PostgreSQL • Docker • AWS ECS Fargate • Kotlin / Android',
        links: [
          {
            label: 'LIVE APP',
            url: 'https://caltrack-web-six.vercel.app/login',
            type: 'live'
          },
          {
            label: 'GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/caltrack',
            type: 'github'
          }
        ],
        bullets: [
          'Architected and deployed a full-stack industrial calibration SaaS platform managing instrument tags, calibration logs, RBAC, and auditable history snapshots.',
          'Containerized Node/Express backend with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel Edge.',
          'Engineered a native Android field companion application in Kotlin with Jetpack Compose, ViewModels, CameraX, and ML Kit barcode scanning.'
        ]
      },
      {
        title: 'Interactive Photo Booth System',
        subtitle: 'Client Hardware/Software Integration',
        tech: 'Raspberry Pi 5 • Linux • Python • photobooth-app • gphoto2 • Canon DSLR • systemd',
        links: [
          {
            label: 'CASE STUDY',
            url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth',
            type: 'case-study'
          }
        ],
        bullets: [
          'Built an event photo booth system for a nonprofit client, integrating Raspberry Pi 5, active cooling, an Acer 15.6" touchscreen, and tethered Canon DSLR.',
          'Automated camera capture via gphoto2 over USB PTP and configured systemd user services with kiosk startup scripts for reliable event operation.'
        ]
      }
    ],
    additionalProjects: [
      {
        title: 'Procurement Tracking',
        desc: 'Full-Stack GraphQL Enterprise App (React/Apollo/Prisma/PostgreSQL)',
        links: [
          { label: 'LIVE APP', url: 'https://procurement-tracking-xg87.vercel.app/', type: 'live' },
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking', type: 'github' }
        ]
      },
      {
        title: 'FieldTrack AI',
        desc: 'Edge Computing & Telemetry (Raspberry Pi/Python/FastAPI/React)',
        links: [
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai', type: 'github' }
        ]
      },
      {
        title: 'OC Water Features',
        desc: 'Production Web Platform (Next.js/Supabase/Vercel)',
        links: [
          { label: 'LIVE SITE', url: 'https://www.ocwaterfeaturesinc.com/', type: 'live' }
        ]
      }
    ],
    experience: [
      {
        role: 'Software Engineering Contributor',
        company: 'Nonprofit serving underserved communities',
        period: 'Collaborative Contribution',
        bullets: [
          'Contributed to an existing nonprofit software platform using Jira-based development workflows, Git/GitLab version control, API investigation, and collaborative debugging within a shared codebase.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation, PLC I/O wiring, relays, and field sensors across 480VAC, 120VAC, and 24VDC power systems with systematic fault isolation and auditable logs.'
        ]
      }
    ],
    education: [
      {
        institution: 'Western Governors University (WGU)',
        credential: 'B.S. Software Engineering',
        dateOrStatus: 'In Progress, 2026–Present'
      },
      {
        institution: 'Palantir Technologies',
        credential: 'Foundry & AIP Learning Credentials',
        dateOrStatus: 'May 2026'
      },
      {
        institution: 'Mirion Technologies',
        credential: 'SU-890 iCAM Operations & Maintenance',
        dateOrStatus: 'March 2026, 16.00 Continued Education Credits'
      }
    ]
  },

  'backend-cloud': {
    id: 'backend-cloud',
    label: 'Backend / Cloud / DevOps',
    badge: 'APIs & AWS Infrastructure',
    targetRoles: [
      'Backend Software Engineer I',
      'Junior Backend Developer',
      'Cloud Engineer I',
      'Platform / DevOps Engineer'
    ],
    docTitle: 'Software Engineer | Backend • Cloud Infrastructure • DevOps',
    pdfPath: '/resume-backend-cloud.pdf',
    downloadFilename: 'Hector_Pacheco_Backend_Cloud_Resume.pdf',
    summary:
      'Backend and cloud-focused software engineer with experience across standalone cloud architectures and collaborative team development in shared codebases. Hands-on experience building containerized REST & GraphQL microservices, relational PostgreSQL/Prisma schemas, AWS ECS Fargate deployments, zero-secret runtime configuration (AWS Secrets Manager/KMS), Jira-driven ticket workflows, Git/GitLab version control, and automated testing.',
    skills: [
      { label: 'Languages:', value: 'TypeScript, JavaScript, Python, SQL, Bash/Shell' },
      { label: 'Backend & APIs:', value: 'Node.js, Express, REST APIs, GraphQL, Apollo Server, FastAPI, Zod, RBAC' },
      { label: 'Cloud & Infra:', value: 'AWS (ECS Fargate, ECR, RDS, Secrets Mgr, KMS, VPC, IAM), Vercel' },
      { label: 'Containers & OS:', value: 'Docker, Multi-Stage Builds, Container Registries (ECR), Linux, systemd' },
      { label: 'Databases:', value: 'PostgreSQL, Prisma ORM, Neon, Supabase, Relational Modeling, Indexing' },
      { label: 'DevOps & Testing:', value: 'Git, GitLab, GitHub, Jira, Docker CLI, Vitest, Integration Testing, Build Verification' },
      { label: 'Architecture:', value: 'Microservices, API Contract Design, Data Isolation, Deterministic Math' },
      { label: 'Security & Auth:', value: 'JWT Authentication, HTTP-only Cookies, Secrets Injection, Least Privilege' }
    ],
    featuredProjects: [
      {
        title: 'CalTrack',
        subtitle: 'Industrial Calibration SaaS & API Platform',
        period: 'Jun 2026 – Jul 2026',
        tech: 'Node.js • Express • TypeScript • PostgreSQL • Prisma • Docker • AWS ECS Fargate • ECR',
        links: [
          {
            label: 'LIVE APP',
            url: 'https://caltrack-web-six.vercel.app/login',
            type: 'live'
          },
          {
            label: 'GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/caltrack',
            type: 'github'
          }
        ],
        bullets: [
          'Architected and deployed containerized Node/Express REST API on AWS ECS Fargate with Amazon RDS PostgreSQL in isolated VPC subnets.',
          'Built multi-stage Docker pipeline compiling shared TypeScript packages, generating Prisma client, running automated tests, and building linux/amd64 images.',
          'Configured Amazon ECR image hosting and injected runtime environment credentials securely using AWS Secrets Manager and AWS KMS.',
          'Enforced role-based access control (RBAC), database foreign-key constraints, and historical snapshot preservation for compliance auditing.'
        ]
      },
      {
        title: 'EstateOS',
        subtitle: 'Agentic Real Estate Investment Intelligence Platform',
        period: 'Aug 2026 – Sep 2026',
        tech: 'TypeScript • Node.js • Next.js 16 • Claude API • PostgreSQL • Prisma ORM • Vitest',
        links: [
          {
            label: 'CASE STUDY',
            url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos',
            type: 'case-study'
          }
        ],
        bullets: [
          'Architected multi-agent orchestration service integrating Claude API research with deterministic underwriting engines and real-time SSE progress streaming.',
          'Engineered server-side evidence snapshot repositories in PostgreSQL/Prisma, enforcing source-authority tiers and cryptographic deduplication to isolate trusted data.',
          'Achieved 1,234 passing automated tests across 76 tracked Vitest suites, validating financial invariant math, agent workflows, and database repository transactions.'
        ]
      },
      {
        title: 'Procurement Tracking System',
        subtitle: 'Enterprise GraphQL Platform',
        period: 'May 2026 – Jul 2026',
        tech: 'Node.js • Express 5 • GraphQL • Apollo Server 4 • Prisma ORM 6 • PostgreSQL • JWT',
        links: [
          {
            label: 'LIVE APP',
            url: 'https://procurement-tracking-xg87.vercel.app/',
            type: 'live'
          },
          {
            label: 'GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking',
            type: 'github'
          }
        ],
        bullets: [
          'Designed and deployed a type-safe GraphQL purchasing API on Render with PostgreSQL on Neon, modeling complex purchase-order and multi-stage receiving state transitions.',
          'Implemented Apollo Server 4 query/mutation resolvers with JWT authentication, HTTP-only session cookies, and multi-role RBAC resolver permission guards.'
        ]
      }
    ],
    additionalProjects: [
      {
        title: 'Interactive Photo Booth',
        desc: 'Linux systemd User Daemon & Hardware Integration (Raspberry Pi 5/Python)',
        links: [
          { label: 'CASE STUDY', url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth', type: 'case-study' }
        ]
      },
      {
        title: 'OC Water Features',
        desc: 'Production Web Platform (Next.js/Supabase PostgreSQL/Vercel)',
        links: [
          { label: 'LIVE SITE', url: 'https://www.ocwaterfeaturesinc.com/', type: 'live' }
        ]
      },
      {
        title: 'Pi Arcade OS',
        desc: 'Embedded Linux System & Custom Daemon (Python/GPIO)',
        links: [
          { label: 'SITE', url: 'https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/', type: 'live' },
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os', type: 'github' }
        ]
      }
    ],
    experience: [
      {
        role: 'Software Engineering Contributor',
        company: 'Nonprofit serving underserved communities',
        period: 'Collaborative Contribution',
        bullets: [
          'Collaborated on an existing nonprofit codebase using Jira-driven ticket workflows, Git/GitLab version control, API integration investigation, local environment configuration, and shared build and test workflows.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Maintained high-availability industrial control infrastructure, diagnosing electrical loops, PLC I/O wiring, relays, and field instrumentation across 480VAC, 120VAC, and 24VDC systems with systematic root-cause isolation.'
        ]
      }
    ],
    education: [
      {
        institution: 'Western Governors University (WGU)',
        credential: 'B.S. Software Engineering',
        dateOrStatus: 'In Progress, 2026–Present'
      },
      {
        institution: 'Palantir Technologies',
        credential: 'Foundry & AIP Learning Credentials',
        dateOrStatus: 'May 2026'
      },
      {
        institution: 'Mirion Technologies',
        credential: 'SU-890 iCAM Operations & Maintenance',
        dateOrStatus: 'March 2026'
      }
    ]
  },

  'embedded-iot': {
    id: 'embedded-iot',
    label: 'Embedded / IoT / Physical Systems',
    badge: 'Hardware & Linux Systems',
    targetRoles: [
      'IoT Software Engineer',
      'Embedded Linux Engineer',
      'Controls / OT Software Engineer',
      'Systems Integration Engineer'
    ],
    docTitle: 'Software Engineer | Embedded Systems • IoT • Physical Systems',
    pdfPath: '/resume-embedded-iot.pdf',
    downloadFilename: 'Hector_Pacheco_Embedded_IoT_Resume.pdf',
    summary:
      'Software Engineer combining computer science with a professional industrial Instrumentation & Controls background, experienced in both hardware systems engineering and collaborative software development. Track record includes embedded Linux systems on Raspberry Pi 5, programmatic camera control via gphoto2, real-time sensor telemetry pipelines, industrial calibration software, Jira/GitLab workflows, and systematic physical-world troubleshooting.',
    skills: [
      { label: 'Languages:', value: 'Python, C++, TypeScript, JavaScript, SQL, Bash' },
      { label: 'Embedded & Linux:', value: 'Raspberry Pi 5, Debian/Linux, systemd Services, Kiosk Mode, GPIO, Active Cooling' },
      { label: 'Hardware Protocols:', value: 'gphoto2, USB PTP, GPS/NMEA (UART/Serial), PIR Motion, 4–20 mA Loops, HART' },
      { label: 'Industrial Controls:', value: 'PLC Systems & I/O, Relay Logic, 480VAC/120VAC/24VDC, Fluke 789, Trex HART' },
      { label: 'Networking & APIs:', value: 'FastAPI, WebSockets, REST APIs, Node.js, Express, Docker' },
      { label: 'Software & Tools:', value: 'Git, GitLab, Jira, React, PostgreSQL, Prisma ORM, Systematic Fault Isolation, Calibration Logs' },
      { label: 'Platforms:', value: 'Palantir Foundry, Palantir AIP' },
      { label: 'Quality & Standards:', value: 'Signal Validation, Preventative Maintenance, MPE Tolerances, Industrial Auditing' }
    ],
    featuredProjects: [
      {
        title: 'Interactive Photo Booth System',
        subtitle: 'Client Hardware/Software Integration',
        tech: 'Raspberry Pi 5 • Linux (Debian) • Python • photobooth-app • gphoto2 • Canon DSLR • systemd',
        links: [
          {
            label: 'CASE STUDY',
            url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth',
            type: 'case-study'
          }
        ],
        bullets: [
          'Architected and built an event photo kiosk powered by an active-cooled Raspberry Pi 5 and 15.6" Acer touchscreen for a nonprofit client.',
          'Automated tethered Canon Rebel T100 DSLR control over USB PTP using gphoto2, managing camera state, shutter triggers, and photo transfers.',
          'Authored systemd user service definitions and kiosk boot scripts ensuring hands-off reboot recovery, persistent logging, and reliable event operation.'
        ]
      },
      {
        title: 'FieldTrack AI',
        subtitle: 'Edge Computing & Sensor Telemetry Platform',
        period: 'Jul 2026 – Aug 2026',
        tech: 'Raspberry Pi 5 • Python • FastAPI • Node.js • React • WebSockets • GPS/NMEA',
        links: [
          {
            label: 'GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai',
            type: 'github'
          }
        ],
        bullets: [
          'Built an edge telemetry platform on Raspberry Pi 5 integrating GPS/NMEA serial stream parsing, PIR motion hardware interrupts, and system diagnostics.',
          'Implemented Python/FastAPI hardware services streaming low-latency JSON telemetry frames over bidirectional WebSockets to a real-time React dashboard.'
        ]
      },
      {
        title: 'CalTrack',
        subtitle: 'Industrial Calibration SaaS & Mobile Platform',
        period: 'Jun 2026 – Jul 2026',
        tech: 'React • TypeScript • Node.js • Express • PostgreSQL • Docker • AWS ECS Fargate',
        links: [
          {
            label: 'LIVE APP',
            url: 'https://caltrack-web-six.vercel.app/login',
            type: 'live'
          },
          {
            label: 'GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/caltrack',
            type: 'github'
          }
        ],
        bullets: [
          'Bridged physical industrial instrumentation workflows with modern cloud software, engineering an equipment calibration platform for process plant compliance.',
          'Modeled database schemas for 4–20 mA transmitters (pressure, temperature, flow, level), tracking calibration histories, tolerances, and calibration cycles.'
        ]
      }
    ],
    additionalProjects: [
      {
        title: 'Pi Arcade OS',
        desc: 'Embedded Gaming Platform (Raspberry Pi/Python/GPIO/Pygame)',
        links: [
          { label: 'SITE', url: 'https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/', type: 'live' },
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os', type: 'github' }
        ]
      },
      {
        title: 'EstateOS',
        desc: 'Agentic Real Estate Platform (Multi-Agent Orchestration & Underwriting)',
        links: [
          { label: 'CASE STUDY', url: 'https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos', type: 'case-study' }
        ]
      },
      {
        title: 'Procurement Tracking',
        desc: 'Full-Stack GraphQL Workflow Platform (Apollo/Prisma/PostgreSQL)',
        links: [
          { label: 'LIVE APP', url: 'https://procurement-tracking-xg87.vercel.app/', type: 'live' },
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking', type: 'github' }
        ]
      }
    ],
    experience: [
      {
        role: 'Software Engineering Contributor',
        company: 'Nonprofit serving underserved communities',
        period: 'Collaborative Contribution',
        bullets: [
          'Contributed to an existing codebase within a collaborative team environment, utilizing Jira issue tracking, Git/GitLab workflows, and peer technical communication.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Calibrated and commissioned 4–20 mA process transmitters (pressure, temperature, flow, level) and troubleshot PLC I/O wiring, relays, and industrial power loops with systematic fault isolation and auditable logs.'
        ]
      }
    ],
    education: [
      {
        institution: 'Western Governors University (WGU)',
        credential: 'B.S. Software Engineering',
        dateOrStatus: 'In Progress, 2026–Present'
      },
      {
        institution: 'Mirion Technologies',
        credential: 'SU-890 iCAM Operations & Maintenance',
        dateOrStatus: 'March 2026, 16.00 Continued Education Credits'
      },
      {
        institution: 'Palantir Technologies',
        credential: 'Foundry & AIP Learning Credentials',
        dateOrStatus: 'May 2026'
      }
    ]
  }
};
