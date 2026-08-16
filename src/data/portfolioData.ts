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
  };
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
  status: 'Live / Deployed Production' | 'In Development' | 'Completed';
  liveUrl?: string;
  githubUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
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
  subTitle: 'Full-Stack • Cloud Infrastructure • AI • IoT • Embedded Systems',
  tagline: 'Building software across web, cloud infrastructure, AI, IoT, and real-world hardware.',
  location: 'Southern California, USA',
  email: 'hector.genaro.pacheco@gmail.com',
  github: 'https://github.com/Thee-Hector-Genaro-Pacheco',
  linkedin: 'https://www.linkedin.com/in/hectorgenaropacheco/',
  resumePath: '/resume.pdf',
  resumeConfigured: true,
  aboutText: `I am a Software Engineer with a distinct background spanning industrial instrumentation and controls, electrical systems, full-stack software development, cloud infrastructure, AI platforms, and IoT edge computing. 

Having worked directly with PLC-connected devices, 4–20 mA loop instrumentation, calibration protocols, and field troubleshooting, I bring a physical-world systems mindset to modern software engineering. I engineer auditable, resilient software applications—ranging from AWS-backed industrial SaaS platforms and AI-assisted data pipelines to edge vision telemetry on Raspberry Pi.

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
    subtitle: 'Industrial Calibration SaaS & Cloud Platform',
    category: 'Industrial SaaS · Full-Stack · AWS Cloud',
    accentColor: '#06B6D4',
    accentGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(56, 189, 248, 0.05) 100%)',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    accentBorder: 'rgba(6, 182, 212, 0.3)',
    shortDescription: 'A full-stack industrial calibration platform deployed to AWS ECS Fargate and Vercel. Engineered to manage process plant instrument tags, calibration records, role-based access control, and persistent audit histories.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS ECS Fargate', 'Amazon RDS', 'Docker'],
    githubUrl: 'https://github.com/Thee-Hector-Genaro-Pacheco/caltrack',
    liveUrl: 'https://caltrack-web-six.vercel.app/login',
    liveUrlLabel: 'Live App',
    featured: true,
    status: 'Production Live',
    caseStudy: {
      overview: 'CalTrack applies industrial instrumentation calibration protocols to modern cloud software architecture. Deployed in production with a React/TypeScript frontend on Vercel Edge and a containerized Node.js API on AWS ECS Fargate, it models real-world plant instrument workflows—managing instrument tags, process parameter metadata, user authentication, role-based access control, and persistent audit histories.',
      problem: 'Industrial facilities frequently rely on disconnected spreadsheets or paper logbooks for recording instrument calibrations. This introduces compliance risks, untracked asset records, and unmonitored equipment drift across operating process units.',
      solution: 'CalTrack provides a secure, cloud-hosted SaaS system for instrument tag indexing, calibration record management, user authentication, role-based access control (RBAC), audit history tracking, and persistent PostgreSQL data modeling deployed across AWS ECS Fargate and Vercel.',
      architecture: {
        title: 'Production AWS Cloud & Full-Stack Architecture',
        description: 'Multi-tier cloud deployment separating high-performance Vercel edge frontend delivery from containerized AWS backend microservices and managed relational storage.',
        components: [
          'Frontend Layer: React & TypeScript SPA deployed on Vercel Edge Network',
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
        title: 'Planned Mobile & Field Engineering Roadmap',
        status: 'Planned / Future Mobile Roadmap',
        description: 'An offline-first mobile suite planned for field calibration technicians operating in remote facilities with low or zero cellular connectivity.',
        plannedFeatures: [
          'Offline-First Field Workflows with Progressive Web App (PWA) support',
          'Native Mobile Technician Application optimized for rugged tablets',
          'Local SQLite Database Synchronization for zero-latency offline data entry',
          'Auto-Reconnect Sync Protocol to push queued calibration runs upon network restoration',
          'Bluetooth Low Energy (BLE) integration for direct digital calibrator data capture'
        ]
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS ECS Fargate', 'Amazon RDS PostgreSQL', 'Amazon ECR', 'AWS Secrets Manager', 'AWS KMS', 'Docker', 'Vercel', 'Prisma ORM'],
      keyFeatures: [
        'Instrument Tag Database (Pressure, Temperature, Level, Flow, Control Valves)',
        'User Authentication & Role-Based Access Control (RBAC)',
        'Historical Calibration Record Management & Audit Trail Preservation',
        'Industrial Instrument Specification & Parameter Metadata Management',
        'Containerized AWS ECS Fargate & Amazon RDS Backend Deployment',
        'Live Deployed Production Web Application'
      ],
      engineeringChallenges: [
        'Deploying a containerized Node.js API to AWS ECS Fargate while ensuring secure runtime secret injection via AWS Secrets Manager.',
        'Structuring relational database tables in PostgreSQL to maintain historic calibration snapshots even when physical instrument parameters are modified.',
        'Designing clean RESTful API contracts with Prisma ORM for efficient equipment query resolution.'
      ],
      whatIBuilt: [
        'Architected and containerized the Node.js backend using Docker and deployed to AWS ECS Fargate with Amazon ECR image hosting.',
        'Configured Amazon RDS PostgreSQL for persistent relational data storage with Prisma ORM data modeling.',
        'Built frontend instrument registry components in React/TypeScript to manage instrument tags, user roles, and calibration records.',
        'Deployed the production web application on Vercel at caltrack-web-six.vercel.app/login.'
      ],
      whatILearned: [
        'Gained hands-on experience deploying containerized applications with AWS ECS Fargate, ECR, Secrets Manager, and RDS.',
        'Designed full-stack data models for industrial equipment indexing and role-based audit trail preservation.'
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
    id: 'bridge-ai',
    slug: 'bridge-ai',
    title: 'Bridge AI',
    subtitle: 'AI-Assisted Funding Intelligence Platform',
    category: 'Full-Stack / AI Platform',
    accentColor: '#8B5CF6',
    accentGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(167, 139, 250, 0.05) 100%)',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    accentBorder: 'rgba(139, 92, 246, 0.3)',
    shortDescription: 'A funding-intelligence platform designed to discover, normalize, evaluate, and manage grant opportunities while maintaining source provenance, audit history, and human approval controls.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
    githubUrl: undefined, // Private repository - button omitted
    liveUrl: undefined,
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'Bridge AI is a specialized funding intelligence platform built to solve the fragmentation, lack of auditability, and manual overhead involved in discovering and evaluating grant funding opportunities for non-profits and institutions.',
      problem: 'Grant discovery today relies on disconnected databases, non-standardized application schemas, and unstructured document formats. Traditional keyword tools lack data provenance, making it difficult for organizations to verify funding source accuracy or maintain auditable evaluation decisions.',
      solution: 'Bridge AI introduces an auditable ingestion pipeline that fetches, normalizes, and indexes funding metrics while enforcing strict human-in-the-loop governance. Intelligent evaluators score suitability while keeping raw document lineage intact for full transparency.',
      architecture: {
        title: 'Ingestion & Governance Architecture',
        description: 'Multi-tiered pipeline separating source data ingestion, normalization, evaluation logic, and human approval workflows.',
        components: [
          'Source Ingestion Layer: REST API adapters & document parsers',
          'Provenance Engine: Hash-verified raw payload archiving in PostgreSQL',
          'Evaluation Core: AI-assisted relevance scoring with rule-based boundary checks',
          'Governance Dashboard: Human-in-the-loop review portal with immutable audit logs'
        ]
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Docker', 'REST APIs', 'Data Provenance Protocols'],
      keyFeatures: [
        'Automated Grant Opportunity Normalization & De-duplication',
        'Source Provenance Tracking & Immutable Audit History',
        'Human-in-the-Loop Approval & Governance Workflow',
        'Custom Scoring Rules based on Institutional Eligibility Criteria',
        'Containerized Architecture using Docker for seamless local & cloud deployment'
      ],
      engineeringChallenges: [
        'Designing a schema flexible enough to handle disparate grant structures while maintaining strict type safety with Prisma & TypeScript.',
        'Implementing data provenance patterns to trace every generated insight back to its original source document.',
        'Preventing AI hallucination risks by enforcing deterministic fallback rules and requiring human verification on critical evaluation decisions.'
      ],
      whatIBuilt: [
        'Designed the relational database schema in PostgreSQL using Prisma ORM to represent opportunities, organizations, evaluations, and audit logs.',
        'Implemented backend Express endpoints with TypeScript for processing ingestion pipelines and managing approval states.',
        'Created a responsive React & TypeScript frontend interface with real-time status indicators, filtering, and audit inspection drawers.'
      ],
      whatILearned: [
        'Deepened expertise in data provenance, auditability standards, and human-in-the-loop AI governance.',
        'Refined full-stack TypeScript architecture patterns across API boundaries and relational database models.'
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
    title: 'Full-Stack & Cloud Infrastructure',
    subtitle: 'Scalable Software & AWS Deployments',
    description: 'Engineering production web software and cloud systems—TypeScript, React, Node.js, AWS ECS Fargate, Amazon RDS PostgreSQL, Docker containers, and Vercel Edge.',
    iconName: 'Cloud',
    keySkills: ['TypeScript / React', 'Node.js & Express', 'AWS (ECS / ECR / RDS)', 'Docker & Vercel']
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
    description: 'Core programming languages for web software, backend APIs, system scripting, and databases.',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript', featured: true, tag: 'ES6+' },
      { name: 'TypeScript', featured: true, tag: 'Strongly Typed' },
      { name: 'Python', featured: true, tag: 'Scripting / OpenCV' },
      { name: 'C++', featured: false, tag: 'Systems' },
      { name: 'SQL', featured: true, tag: 'PostgreSQL / Queries' }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Modern, responsive user interfaces built with performance, accessibility, and clean component systems.',
    iconName: 'Layout',
    skills: [
      { name: 'React', featured: true, tag: 'UI Framework' },
      { name: 'Next.js', featured: true, tag: 'SSR / Full-Stack' },
      { name: 'HTML5 & CSS3', featured: true, tag: 'Semantic Layout' },
      { name: 'Modern CSS Systems', featured: true, tag: 'Variables / Flex / Grid' },
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
    liveUrl: 'https://www.ocwaterfeaturesinc.com/'
  }
];
