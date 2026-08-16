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
  githubUrl?: string; // Optional/Placeholder
  liveUrl?: string; // Production live URL
  liveUrlLabel?: string; // e.g. "Live App" or "Live Demo"
  featured: boolean;
  status: 'Production Live' | 'Active Development' | 'Prototype' | 'Embedded Build' | 'Production Client Work';
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
  };
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
  resumePath: string; // Documented path where resume PDF should be placed
  resumeConfigured: boolean;
  aboutText: string;
  corePrinciples: { title: string; desc: string }[];
  education: {
    degree: string;
    field: string;
    institution: string;
    status: string;
    highlights: string[];
  }[];
}

export const personalInfo: PersonalInfo = {
  name: 'Hector Pacheco',
  title: 'Software Engineer',
  subTitle: 'Full-Stack • Cloud Infrastructure • AI • IoT • Embedded Systems',
  tagline: 'Building software across web, cloud infrastructure, AI, IoT, and real-world hardware.',
  location: 'Southern California, USA',
  email: 'hectorpacheco.engineering@gmail.com',
  github: 'https://github.com/Thee-Hector-Genaro-Pacheco',
  linkedin: 'https://linkedin.com/in/hector-pacheco',
  resumePath: '/resume.pdf',
  resumeConfigured: false,
  aboutText: `I am a Software Engineer with a distinct engineering background spanning industrial instrumentation and controls, electrical systems, full-stack software development, cloud infrastructure, AI platforms, and IoT edge computing. 

Having worked directly with PLC-connected devices, 4–20 mA loop instrumentation, calibration protocols, and industrial troubleshooting in field environments, I bring a physical-world systems mindset to modern software engineering. I engineer deterministic, auditable, and resilient software applications—ranging from AWS-backed industrial SaaS platforms and AI-assisted data pipelines to edge vision telemetry on Raspberry Pi.`,
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
      degree: 'Software Engineering Studies',
      field: 'Computer Science & Software Engineering',
      institution: 'Higher Education Program',
      status: 'In Progress',
      highlights: [
        'Focusing on Data Structures, Algorithms, Cloud Architecture, Distributed Systems, Software Design Patterns, and Operating Systems',
        'Hands-on research and development in Cloud SaaS, Edge AI, Embedded Linux, and Full-Stack web architecture'
      ]
    },
    {
      degree: 'Instrumentation & Industrial Electrical Controls Training',
      field: 'Industrial Automation & Process Controls',
      institution: 'Technical Vocational / Field Certifications',
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
    shortDescription: 'A full-stack industrial calibration platform deployed to AWS ECS Fargate and Vercel. Engineered to manage process plant instruments, 4–20 mA loop tolerances, NIST calibration histories, and compliance reporting.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS ECS Fargate', 'Amazon RDS PostgreSQL', 'Amazon ECR', 'AWS Secrets Manager', 'Docker', 'Vercel'],
    githubUrl: undefined,
    liveUrl: 'https://caltrack-web-six.vercel.app/login',
    liveUrlLabel: 'Live App',
    featured: true,
    status: 'Production Live',
    caseStudy: {
      overview: 'CalTrack applies industrial instrumentation calibration protocols to modern cloud software architecture. Deployed in production with a React/TypeScript frontend on Vercel Edge and a containerized Node.js API on AWS ECS Fargate, it models real-world plant workflows—tracking 4–20 mA pressure, temperature, and flow transmitter zero/span tolerances, calibration schedules, NIST traceability, and compliance records.',
      problem: 'Industrial facilities frequently rely on disconnected spreadsheets or paper logbooks for recording instrument calibrations. This introduces compliance risks, unmonitored sensor drift in critical 4–20 mA process loops, and missed calibration windows across operating process units.',
      solution: 'CalTrack provides a secure, cloud-hosted SaaS system for instrument tag indexing, automated multi-point tolerance calculation (0%, 25%, 50%, 75%, 100% span), pass/fail verification, NIST reference mapping, and audit-ready report generation.',
      architecture: {
        title: 'Production AWS Cloud & Full-Stack Architecture',
        description: 'Multi-tier cloud deployment separating high-performance Vercel edge frontend delivery from containerized AWS backend microservices and managed relational storage.',
        components: [
          'Frontend Layer: React & TypeScript SPA deployed on Vercel Edge Network',
          'API Microservices: Node.js & Express application containerized via Docker and deployed on AWS ECS Fargate',
          'Container Registry: Amazon ECR for secure container image storage and automated deployment tagging',
          'Managed Relational DB: Amazon RDS PostgreSQL configured with isolated subnets and connection pooling',
          'Security & Secrets: AWS Secrets Manager & AWS KMS for secure database credentials and application keys',
          'Networking: AWS VPC with isolated container subnets and security group boundary rules'
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
      mobileRoadmap: {
        title: 'Mobile & Field Engineering Roadmap',
        status: 'In Engineering Design / Development Phase',
        description: 'An offline-first mobile suite engineered for field calibration technicians operating in remote facilities with low or zero cellular connectivity.',
        plannedFeatures: [
          'Offline-First Field Workflows with Progressive Web App (PWA) support',
          'Native Mobile Technician Application optimized for rugged tablets',
          'Local SQLite Database Synchronization for zero-latency offline data entry',
          'Auto-Reconnect Sync Protocol to push queued calibration runs upon network restoration',
          'Future Bluetooth Low Energy (BLE) integration for direct digital calibrator data capture'
        ]
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS ECS Fargate', 'Amazon RDS PostgreSQL', 'Amazon ECR', 'AWS Secrets Manager', 'AWS KMS', 'Docker', 'Vercel', 'Prisma ORM'],
      keyFeatures: [
        'Instrument Tag Database (Pressure, Temperature, Level, Flow, Control Valves)',
        'Automatic 4–20 mA Span & Error Math (% URV / LRV Tolerance Verification)',
        'Traceable Reference Standard Mapping & NIST Tracking IDs',
        'Automated Calibration Due-Date Alerting & Maintenance Dashboard',
        'Exportable Audit Logs & Equipment Calibration Certificates',
        'Live Deployed Production Web Application'
      ],
      engineeringChallenges: [
        'Deploying a containerized Node.js API to AWS ECS Fargate while ensuring secure runtime secret injection via AWS Secrets Manager.',
        'Structuring relational database tables in PostgreSQL to maintain historic calibration snapshots even when physical instrument parameters are modified.',
        'Accurately modeling industrial instrumentation math (e.g., converting 4–20 mA signals to engineering units with square-root extraction for differential pressure flow elements).'
      ],
      whatIBuilt: [
        'Architected and containerized the Node.js backend using Docker and deployed to AWS ECS Fargate with Amazon ECR image hosting.',
        'Configured Amazon RDS PostgreSQL for persistent relational data storage with Prisma ORM data modeling.',
        'Built precision frontend calculation components in React/TypeScript to provide instant tolerance feedback for field technicians.',
        'Deployed the production web application on Vercel at caltrack-web-six.vercel.app/login.'
      ],
      whatILearned: [
        'Mastered production AWS container orchestration (ECS Fargate), ECR workflows, Secrets Manager integration, and RDS database management.',
        'Directly translated real-world process instrumentation standards (NIST, ISA-5.1) into scalable cloud SaaS software.'
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
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'REST APIs'],
    githubUrl: undefined,
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
    id: 'fieldtrack-ai',
    slug: 'fieldtrack-ai',
    title: 'FieldTrack AI',
    subtitle: 'Edge AI & Telemetry IoT Platform',
    category: 'IoT / Edge AI / Embedded',
    accentColor: '#10B981',
    accentGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(52, 211, 153, 0.05) 100%)',
    accentBg: 'rgba(16, 185, 129, 0.1)',
    accentBorder: 'rgba(16, 185, 129, 0.3)',
    shortDescription: 'A Raspberry Pi edge-computing platform combining real-time computer vision, GPS tracking, motion sensing, system telemetry, networking, and a browser-based monitoring dashboard.',
    technologies: ['Raspberry Pi 5', 'Python', 'Node.js', 'TypeScript', 'React', 'Computer Vision', 'WebSockets', 'GPS / Sensors'],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    status: 'Active Development',
    caseStudy: {
      overview: 'FieldTrack AI bridges physical edge sensing with modern web browser interfaces. Running locally on a Raspberry Pi 5, it collects multi-sensor telemetry, runs lightweight computer vision inference, and streams real-time status data to a remote or local web dashboard.',
      problem: 'Remote physical monitoring systems often depend heavily on continuous cloud availability and high-bandwidth video streaming, leading to bandwidth bottlenecks, high latency, and vulnerability during network drops.',
      solution: 'FieldTrack AI performs edge processing directly on device hardware (Raspberry Pi 5). Sensor events, GPS coordinate streams, PIR motion detection, and computer vision detections are processed on-device and pushed as lightweight WebSocket telemetry frames to a low-latency dashboard.',
      architecture: {
        title: 'Edge-to-Web Telemetry Architecture',
        description: 'On-device hardware integration communicating via WebSockets with a web-based command node.',
        components: [
          'Edge Sensing Layer: Raspberry Pi 5, Camera Module, GPS Module, PIR Motion Sensors',
          'Edge Daemon (Python): OpenCV vision detection pipeline & hardware interrupt handling',
          'Telemetry Server (Node.js/TS): WebSocket server broadcasting state updates and metrics',
          'Web Command Interface (React): Low-latency real-time map, telemetry gauge, and alert visualizer'
        ]
      },
      technologies: ['Raspberry Pi 5', 'Python (OpenCV, PySerial, GPIO)', 'Node.js', 'TypeScript', 'React', 'WebSockets', 'GPS NMEA Stream', 'PIR Motion Hardware'],
      keyFeatures: [
        'Real-Time Camera Feed & Edge Computer Vision Detection Overlay',
        'Live GPS Tracking with NMEA Sentence Parsing and Dynamic Map Plotting',
        'PIR Motion Hardware Interrupt Triggering & Event Logging',
        'Low-Latency Bidirectional WebSocket Data Stream',
        'System Diagnostics Gauge Panel (CPU Temp, RAM Usage, Network Signal, Voltages)'
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
        'Mastered physical hardware interfacing, GPIO event loops, serial protocol communication, and ARM Linux optimization.',
        'Engineered resilient WebSocket communication protocols tailored for intermittent network conditions.'
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
    shortDescription: 'A Raspberry Pi-based embedded gaming platform demonstrating physical controller integration, GPIO input mapping, custom Linux system configuration, application logic, and hardware/software interaction.',
    technologies: ['Raspberry Pi', 'Linux', 'GPIO', 'Physical Controls', 'Hardware Integration', 'Python / C++'],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    status: 'Embedded Build',
    caseStudy: {
      overview: 'Pi Arcade OS is a custom hardware and software embedded project. It combines physical arcade controls (joysticks, microswitch buttons, coin acceptors) with a tailored Linux operating environment running on Raspberry Pi hardware.',
      problem: 'Off-the-shelf gaming setups lack low-level physical control customization and often introduce input latency when translating physical switch closures through generic USB wrappers.',
      solution: 'Pi Arcade OS connects physical microswitches directly to Raspberry Pi GPIO headers, utilizing kernel-level GPIO polling and custom daemon scripts for direct input mapping, resulting in near-zero input latency and direct hardware feedback.',
      architecture: {
        title: 'Hardware Switch to OS Input Stack',
        description: 'Physical switch closure translated through GPIO interrupts directly to Linux system input events.',
        components: [
          'Physical Hardware Layer: Microswitch joysticks, pushbuttons, coin mechanism, wiring harness',
          'GPIO Interfacing: Direct pin wire termination with pull-up/pull-down resistor logic',
          'System Input Daemon: Low-level driver mapping pin state changes to Linux kernel virtual key events',
          'User Interface Layer: Lightweight frontend shell launcher optimized for low memory usage'
        ]
      },
      technologies: ['Raspberry Pi', 'Linux (Debian / Custom Systemd Services)', 'GPIO Hardware Wiring', 'Physical Arcade Controls', 'Python / C++', 'Shell Scripting'],
      keyFeatures: [
        'Direct GPIO Microswitch Wiring & Pull-Up Resistor Configuration',
        'Low-Latency Hardware Interrupt Driver for Switch State Changes',
        'Custom Systemd Linux Service for Autostart & Headless Boot Management',
        'Physical Coin Acceptor Pulse Decoding & Credit Management',
        'Thermal Management & Custom Enclosure Integration'
      ],
      engineeringChallenges: [
        'Mitigating mechanical switch contact chatter (debouncing) both in physical hardware RC circuits and software timing logic.',
        'Configuring custom Linux systemd daemons for instant headless booting without unnecessary desktop manager overhead.'
      ],
      whatIBuilt: [
        'Designed and wired the complete physical electrical harness connecting arcade controls to the Raspberry Pi GPIO expansion headers.',
        'Wrote custom software input daemons to debouncing signals and map switch states directly to system inputs.',
        'Configured the custom Linux shell boot environment for smooth, reliable system startup.'
      ],
      whatILearned: [
        'Solidified low-level hardware/software integration skills, mechanical switch debouncing techniques, and Linux system administration.'
      ]
    }
  }
];

export const controlsToCodeSteps: ProgressionStep[] = [
  {
    stepNumber: 1,
    title: 'Instrumentation & Controls',
    subtitle: 'Physical Hardware Foundation',
    description: 'Hands-on field experience with industrial sensors, 4–20 mA current loops, process transmitters, electrical wiring, and physical measurement devices.',
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
    title: 'Hardware, Embedded & Industrial',
    description: 'Physical systems integration, process instrumentation, edge devices, and field engineering.',
    iconName: 'Wrench',
    skills: [
      { name: 'Raspberry Pi 5', featured: true, tag: 'Edge Hardware' },
      { name: 'GPIO & Pin Interfacing', featured: true, tag: 'Embedded I/O' },
      { name: 'Sensors & GPS', featured: true, tag: 'NMEA / Telemetry' },
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
    companyOrContext: 'Industrial Controls & Process Systems',
    location: 'Southern California',
    period: 'Professional Engineering Experience',
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
    technologies: ['Next.js', 'TypeScript', 'Supabase PostgreSQL', 'Zod Validation', 'Auth', 'Lead Intake', 'SEO', 'Vercel'],
    status: 'Live / Deployed Production',
    liveUrl: 'https://www.ocwaterfeaturesinc.com/'
  },
  {
    id: 'client-2',
    clientName: 'West Harbor Painting',
    industry: 'Commercial & Residential Contracting',
    focusAreas: ['Web Development', 'Digital Presence', 'Service Portfolio Showcase'],
    description: 'Client web development, digital branding, and customer inquiry management platform currently under active development.',
    deliverables: [
      'Service offering architecture and project gallery layout',
      'Customer inquiry intake workflow',
      'Mobile-optimized performance and layout'
    ],
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Web Forms'],
    status: 'In Development'
  }
];
