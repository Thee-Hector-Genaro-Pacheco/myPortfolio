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
  links?: ProjectLink[];
  bullets: string[];
}

export interface EducationItemResume {
  institution: string;
  credential: string;
  dateOrStatus: string;
}

export interface DevelopmentFoundationItem {
  title: string;
  subtitle: string;
  period: string;
  tech?: string;
  links?: ProjectLink[];
  bullets: string[];
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
  foundations?: DevelopmentFoundationItem[];
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
      'Software Engineer and Founder at Pacific Horizon Labs LLC with hands-on software development and technical training dating to 2017, progressing from foundational web development and intensive full-stack training through university computer science coursework, collaborative engineering, containerized cloud infrastructure on AWS ECS Fargate, native mobile applications (SwiftUI & Kotlin), and commercial product delivery. Proven track record of end-to-end product ownership spanning type-safe REST APIs (Node.js/Express), relational data modeling (PostgreSQL/Prisma), human-in-the-loop AI workflows, and comprehensive automated test suites across collaborative team codebases and commercial products.',
    skills: [
      { label: 'Languages:', value: 'TypeScript, JavaScript, Python, Swift, SQL, Kotlin, C++' },
      { label: 'Cloud & DevOps:', value: 'AWS (ECS Fargate, ECR, RDS, Secrets Mgr), Docker, Linux, Git, GitLab, Jira, Vercel' },
      { label: 'Frontend & Mobile:', value: 'React, Next.js 16, SwiftUI (iPadOS), Android (Kotlin), Jetpack Compose, HTML5, CSS3' },
      { label: 'Data & Databases:', value: 'PostgreSQL, Prisma ORM, Supabase, Relational Schema Design' },
      { label: 'Backend & APIs:', value: 'Node.js, Express, REST APIs, GraphQL, FastAPI, Zod, RBAC' },
      { label: 'AI & Automation:', value: 'Human-in-the-Loop AI, Twilio Voice API, Claude API, Palantir Foundry / AIP' },
      { label: 'Quality & Testing:', value: 'Vitest, Unit & Integration Testing, Automated Testing, Audit Logging' },
      { label: 'Systems & Hardware:', value: 'Raspberry Pi 5, AVFoundation, Touchscreen, systemd, GPIO, 4–20 mA, PLC' }
    ],
    experience: [
      {
        role: 'Founder & Software Engineer',
        company: 'Pacific Horizon Labs LLC',
        period: '2026 – Present',
        links: [
          {
            label: 'COMPANY SITE',
            url: 'https://pacific-horizon-labs.netlify.app/',
            type: 'live'
          },
          {
            label: 'PHOTO BOOTH',
            url: 'https://pacific-horizon-labs.netlify.app/photobooth',
            type: 'live'
          },
          {
            label: 'RISING OPS',
            url: 'https://pacific-horizon-labs.netlify.app/rising-ops',
            type: 'live'
          }
        ],
        bullets: [
          'Founded commercial software entity developing production event and operations systems; engineered Pacific Horizon Photo Booth, advancing an active-cooled Raspberry Pi 5 / Linux hardware prototype into a native SwiftUI / iPadOS product with AVFoundation capture and Supabase cloud delivery.',
          'Architected Pacific Rising Ops, a business operations system integrating Twilio Voice and Gmail APIs with a deterministic action state machine and Zod validation, strictly requiring human-in-the-loop approval before protected external actions.',
          'Own end-to-end engineering across product architecture, type-safe REST APIs, native mobile software, automated workflow pipelines, and customer-facing business systems.'
        ]
      },
      {
        role: 'Instructional Student Assistant / Grader (Computer Science)',
        company: 'California State University, Fullerton',
        period: 'Jan 2025 – Dec 2025',
        bullets: [
          'Mentored and evaluated 150+ students in introductory computer science (CPSC 120 / C++), diagnosing compilation and runtime errors while clarifying control flow, functions, arrays, and memory fundamentals.',
          'Conducted technical debugging sessions with students to explain programming logic and algorithmic problem-solving rather than providing direct solutions, while reinforcing Git and GitHub version control workflows.'
        ]
      },
      {
        role: 'Software Engineering Contributor',
        company: 'Collaborative Nonprofit Software Platform',
        period: '2024–2026',
        bullets: [
          'Collaborated on an existing software platform using Jira-driven ticket workflows, Git/GitLab version control, REST API investigation, and team code debugging in a shared codebase.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation (pressure, temperature, flow, level), PLC I/O wiring, relays, and industrial power loops across 480VAC, 120VAC, and 24VDC systems with systematic fault isolation and auditable logs.'
        ]
      }
    ],
    featuredProjects: [
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
          'Architected and deployed a full-stack industrial calibration SaaS platform managing instrument tags, calibration logs, RBAC, and auditable history snapshots using Prisma ORM and PostgreSQL.',
          'Containerized Node/Express REST API with Docker on AWS ECS Fargate with RDS PostgreSQL in isolated VPC subnets, automated ECR image deployment, and Secrets Manager integration.',
          'Engineered a native Android field companion application in Kotlin with Jetpack Compose, ViewModels, CameraX, and ML Kit barcode scanning.'
        ]
      },
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
          'Built an agentic real estate intelligence platform in Next.js 16 and TypeScript, combining Claude-powered research orchestration with deterministic underwriting calculations.',
          'Implemented capital-stack analysis, LTV/CLTV thresholds, cash flow, debt/equity evaluation, multi-strategy screening, and provenance-aware evidence verification backed by PostgreSQL and Prisma ORM.',
          'Protected underwriting calculations, agent orchestration workflows, and database repository transactions with comprehensive automated Vitest test suites.'
        ]
      }
    ],
    additionalProjects: [
      {
        title: 'FieldTrack AI',
        desc: 'Edge Telemetry (Raspberry Pi/Python/React)',
        links: [
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai', type: 'github' }
        ]
      },
      {
        title: 'Procurement Tracking',
        desc: 'Full-Stack GraphQL Enterprise App (React/Apollo/Prisma/PostgreSQL)',
        links: [
          { label: 'LIVE APP', url: 'https://procurement-tracking-xg87.vercel.app/', type: 'live' },
          { label: 'GITHUB', url: 'https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking', type: 'github' }
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
    education: [
      {
        institution: 'Full-Stack Software Development Training',
        credential: 'Comprehensive Full-Stack Curriculum (MERN Stack, REST APIs, Git)',
        dateOrStatus: '2017 – 2021'
      },
      {
        institution: 'Western Governors University (WGU)',
        credential: 'B.S. Software Engineering',
        dateOrStatus: 'In Progress, 2026–Present'
      },
      {
        institution: 'California State University, Fullerton',
        credential: 'B.S. Computer Science Coursework / Project Rebound Scholar',
        dateOrStatus: '2024 – 2025'
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
    ],
    foundations: [
      {
        title: 'Full-Stack Software Development Training',
        subtitle: 'Comprehensive Full-Stack Curriculum',
        period: '2017 – 2021',
        tech: 'HTML5 • CSS3 • Responsive Design • JavaScript (ES6+) • DOM Manipulation • React • Node.js • Express • MongoDB • REST APIs • Git',
        bullets: [
          'Completed an intensive full-stack software development curriculum, progressing from semantic HTML/CSS structure, responsive design, and CSS specificity through JavaScript DOM programming, event handling, and dynamic UI behavior.',
          'Advanced into full-stack application development using the MERN stack (MongoDB, Express, React, Node.js), engineering RESTful APIs, MongoDB data models, and asynchronous workflows.',
          'Facilitated peer-led technical workshops and coding presentations, reinforcing foundational programming principles, code hygiene, and collaborative Git version control.'
        ]
      },
      {
        title: 'Early Independent & Student Projects',
        subtitle: 'Frontend Fundamentals, DOM Programming & Unit Testing',
        period: '2024',
        tech: 'HTML5 • CSS3 • JavaScript (ES6+) • DOM Manipulation • Functional Programming • Jest • JSDOM • GitHub',
        links: [
          {
            label: 'STAR RATING GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/star-rating',
            type: 'github'
          },
          {
            label: 'UNIT CONVERSION GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/units-conversion-web',
            type: 'github'
          },
          {
            label: 'CPSC 120L PORTFOLIO GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/thee-hector-genaro-pacheco.github.io',
            type: 'github'
          }
        ],
        bullets: [
          'Star Rating (June 2024): Developed an interactive star rating component demonstrating functional programming and DOM manipulation with custom helper abstractions (dom-helpers.js), click event listeners, and dynamic state styling in vanilla JavaScript.',
          'Unit Web Conversion (October 2024): Engineered a culinary conversion utility (milliliters to teaspoons, tablespoons, fluid ounces, and cups) with real-time form inputs, DOM rendering, and automated unit test coverage using Jest and JSDOM.',
          'CSUF Lab Portfolio (December 2024): Published a developer journal documenting hands-on CPSC 120L coursework, contrasting C++ pure functions (Blackjack terminal app) and vectors with JavaScript array methods and DOM manipulation.'
        ]
      },
      {
        title: 'California State University, Fullerton',
        subtitle: 'Computer Science Foundations & Academic Progression',
        period: '2024 – 2025',
        tech: 'C++ • CPSC 120 • CPSC 131 (Data Structures) • Linux • Git • Project Rebound',
        links: [
          {
            label: 'MYVECTOR GITHUB',
            url: 'https://github.com/Thee-Hector-Genaro-Pacheco/cpsc131-project1-myvector',
            type: 'github'
          }
        ],
        bullets: [
          'Completed introductory and intermediate computer science coursework in C++ (CPSC 120 and CPSC 131), engineering console applications, custom vector containers (myvector), and algorithmic problem solving.',
          'Project Rebound Scholar (2024 – Present): Recognized scholar actively participating in university academic programs, peer mentorship, and STEM community initiatives.'
        ]
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
      { label: 'Backend & APIs:', value: 'Node.js, Express, Twilio Voice API, REST APIs, GraphQL, Apollo Server, FastAPI, Zod, RBAC' },
      { label: 'Cloud & Infra:', value: 'AWS (ECS Fargate, ECR, RDS, Secrets Mgr, KMS, VPC, IAM), Vercel' },
      { label: 'Containers & OS:', value: 'Docker, Multi-Stage Builds, Container Registries (ECR), Linux, systemd' },
      { label: 'Databases:', value: 'PostgreSQL, Prisma ORM, Neon, Supabase, Relational Modeling, Indexing' },
      { label: 'DevOps & Testing:', value: 'Git, GitLab, GitHub, Jira, Docker CLI, Vitest, Integration Testing, Build Verification' },
      { label: 'Architecture:', value: 'Microservices, API Contract Design, Data Isolation, Deterministic Math' },
      { label: 'Security & Auth:', value: 'JWT Authentication, HTTP-only Cookies, Secrets Injection, Human-in-the-Loop Approval Gates' }
    ],
    experience: [
      {
        role: 'Founder & Software Engineer',
        company: 'Pacific Horizon Labs LLC',
        period: '2026 – Present',
        links: [
          { label: 'COMPANY SITE', url: 'https://pacific-horizon-labs.netlify.app/', type: 'live' },
          { label: 'RISING OPS', url: 'https://pacific-horizon-labs.netlify.app/rising-ops', type: 'live' },
          { label: 'PHOTO BOOTH', url: 'https://pacific-horizon-labs.netlify.app/photobooth', type: 'live' }
        ],
        bullets: [
          'Architected Pacific Rising Ops, an operations automation service integrating Twilio Voice and Gmail API draft intelligence, enforcing a deterministic finite state machine where protected external actions strictly require explicit human voice approval.',
          'Engineered cloud backend services and media asset storage pipelines on Supabase with dynamic signed token generation and automated retention cleanup.',
          'Designed zero-trust approval gates and immutable audit logging for sensitive business operations, ensuring safe AI boundary enforcement.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Maintained high-availability industrial control infrastructure, diagnosing electrical loops, PLC I/O wiring, relays, and field instrumentation across 480VAC, 120VAC, and 24VDC systems with systematic root-cause isolation.'
        ]
      },
      {
        role: 'Software Engineering Contributor',
        company: 'Collaborative Nonprofit Software Platform',
        period: '2024–2026',
        bullets: [
          'Collaborated on an existing software platform using Jira-driven ticket workflows, Git/GitLab version control, API integration investigation, local environment configuration, and shared build and test workflows.'
        ]
      }
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
          'Validated deterministic financial invariant calculations, agent workflows, and database repository transactions with automated Vitest suites.'
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
        title: 'FieldTrack AI',
        desc: 'Edge Telemetry (Raspberry Pi/Python/React)',
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
      'Software Engineer combining computer science with a professional industrial Instrumentation & Controls background, experienced in both hardware systems engineering and collaborative software development. Track record includes embedded Linux systems on Raspberry Pi 5, native iPadOS applications in Swift/SwiftUI, programmatic camera control via gphoto2 and AVFoundation, real-time sensor telemetry pipelines, Jira/GitLab workflows, and systematic physical-world troubleshooting.',
    skills: [
      { label: 'Languages:', value: 'Swift, Python, C++, TypeScript, JavaScript, SQL, Bash' },
      { label: 'Embedded & Linux:', value: 'Raspberry Pi 5, iPadOS / iOS, Debian/Linux, systemd Services, Kiosk Mode, GPIO, Active Cooling' },
      { label: 'Hardware Protocols:', value: 'AVFoundation, gphoto2, USB PTP, GPS/NMEA (UART/Serial), PIR Motion, 4–20 mA Loops, HART' },
      { label: 'Industrial Controls:', value: 'PLC Systems & I/O, Relay Logic, 480VAC/120VAC/24VDC, Fluke 789, Trex HART' },
      { label: 'Networking & APIs:', value: 'FastAPI, WebSockets, REST APIs, Node.js, Express, Docker' },
      { label: 'Software & Tools:', value: 'Git, GitLab, Jira, React, PostgreSQL, Prisma ORM, Systematic Fault Isolation, Calibration Logs' },
      { label: 'Platforms:', value: 'Palantir Foundry, Palantir AIP, Human-in-the-Loop AI' },
      { label: 'Quality & Standards:', value: 'Signal Validation, Preventative Maintenance, MPE Tolerances, Industrial Auditing' }
    ],
    experience: [
      {
        role: 'Founder & Software Engineer',
        company: 'Pacific Horizon Labs LLC',
        period: '2026 – Present',
        links: [
          { label: 'COMPANY SITE', url: 'https://pacific-horizon-labs.netlify.app/', type: 'live' },
          { label: 'PHOTO BOOTH', url: 'https://pacific-horizon-labs.netlify.app/photobooth', type: 'live' },
          { label: 'RISING OPS', url: 'https://pacific-horizon-labs.netlify.app/rising-ops', type: 'live' }
        ],
        bullets: [
          'Engineered a commercial event kiosk platform operated under Pacific Horizon Labs LLC, transitioning from an embedded Linux hardware prototype into a native Apple iPadOS SwiftUI application.',
          'Built foundational generation with active-cooled Raspberry Pi 5, 64-bit Debian, systemd daemons, and gphoto2 USB PTP Canon DSLR automation for unattended event reliability.',
          'Architected Pacific Rising Ops, an operations automation platform integrating Twilio Voice interactions with deterministic human-in-the-loop approval state machines.'
        ]
      },
      {
        role: 'Instrumentation & Controls Technician',
        company: 'Process Control & Industrial Systems',
        period: 'Field Engineering Experience',
        bullets: [
          'Calibrated and commissioned 4–20 mA process transmitters (pressure, temperature, flow, level) and troubleshot PLC I/O wiring, relays, and industrial power loops with systematic fault isolation and auditable logs.'
        ]
      },
      {
        role: 'Software Engineering Contributor',
        company: 'Collaborative Nonprofit Software Platform',
        period: '2024–2026',
        bullets: [
          'Contributed to an existing software platform within a collaborative team environment, utilizing Jira issue tracking, Git/GitLab workflows, and peer technical communication.'
        ]
      }
    ],
    featuredProjects: [
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
