#!/usr/bin/env python3
import os
import shutil
import subprocess
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CONTACT_HEADER_HTML = """
  <div class="header">
    <div class="name">Hector Genaro Pacheco</div>
    <div class="title-line">{doc_title}</div>
    <div class="contact-row">
      <span>Southern California</span>
      <span>•</span>
      <a href="mailto:hector.genaro.pacheco@gmail.com">hector.genaro.pacheco@gmail.com</a>
      <span>•</span>
      <a href="https://my-portfolio-sigma-lac-94.vercel.app" target="_blank">Portfolio</a>
      <span>•</span>
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco" target="_blank">GitHub</a>
      <span>•</span>
      <a href="https://www.linkedin.com/in/hectorgenaropacheco/" target="_blank">LinkedIn</a>
    </div>
  </div>
"""

CSS_STYLES = """
    @page {
      size: letter;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #1e293b;
      background: #ffffff;
      font-size: 8.5pt;
      line-height: 1.25;
      padding: 0.25in 0.32in;
      width: 8.5in;
      height: 11in;
      text-rendering: geometricPrecision;
      -webkit-font-smoothing: antialiased;
    }
    a {
      color: #2563eb;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .header {
      text-align: center;
      margin-bottom: 3.5px;
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 2.5px;
    }
    .name {
      font-size: 15.5pt;
      font-weight: bold;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .title-line {
      font-size: 8.8pt;
      font-weight: bold;
      color: #2563eb;
      margin-top: 1px;
      margin-bottom: 2px;
    }
    .contact-row {
      font-size: 7.9pt;
      color: #475569;
      display: flex;
      justify-content: center;
      gap: 7px;
      flex-wrap: wrap;
    }
    .contact-row a {
      color: #334155;
      font-weight: bold;
    }
    .section {
      margin-bottom: 3.5px;
    }
    .section-title {
      font-size: 8.5pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1px;
      margin-bottom: 2px;
    }
    .summary-text {
      font-size: 7.9pt;
      color: #334155;
      line-height: 1.23;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 12px;
      row-gap: 1.5px;
      font-size: 7.8pt;
    }
    .skill-category {
      line-height: 1.2;
    }
    .skill-label {
      font-weight: bold;
      color: #0f172a;
    }
    .skill-value {
      color: #334155;
    }
    .project-item {
      margin-bottom: 2.5px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 1px;
    }
    .item-title {
      font-weight: bold;
      font-size: 8.5pt;
      color: #0f172a;
    }
    .item-subtitle {
      font-size: 7.8pt;
      color: #475569;
      font-style: italic;
    }
    .item-period {
      font-family: 'SF Mono', SFMono-Regular, ui-monospace, Menlo, monospace;
      font-size: 7.2pt;
      color: #64748b;
      margin-left: 2px;
      margin-right: 3px;
    }
    .item-date {
      font-size: 7.5pt;
      font-weight: bold;
      color: #475569;
      white-space: nowrap;
    }
    ul.bullet-list {
      list-style-type: disc;
      margin-left: 12px;
      margin-top: 1px;
    }
    ul.bullet-list li {
      font-size: 7.9pt;
      color: #334155;
      margin-bottom: 0.5px;
      line-height: 1.19;
    }
    .link-badge {
      font-size: 6.8pt;
      font-weight: bold;
      padding: 0.8px 3.5px;
      border-radius: 3px;
      text-decoration: none;
      display: inline-block;
      margin-left: 2px;
      line-height: 1.1;
      letter-spacing: 0.02em;
    }
    .live-badge {
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
    }
    .github-badge {
      background: #f8fafc;
      color: #334155;
      border: 1px solid #cbd5e1;
    }
    .case-badge {
      background: #f0fdf4;
      color: #15803d;
      border: 1px solid #bbf7d0;
    }
    .additional-projects-line {
      font-size: 7.7pt;
      color: #334155;
      margin-top: 1.5px;
      line-height: 1.21;
    }
    .training-list {
      display: flex;
      flex-direction: column;
      gap: 0.8px;
      font-size: 7.8pt;
    }
    .training-item {
      line-height: 1.18;
    }
"""

RESUMES = [
    {
        "id": "general",
        "output_pdf": "resume-software-engineer.pdf",
        "doc_title": "Software Engineer | Full-Stack • Backend & APIs • Cloud Infrastructure • Mobile Systems",
        "summary": "Versatile Software Engineer with experience delivering standalone systems and collaborative contributions in shared codebases. Background spans full-stack web platforms, containerized cloud infrastructure on AWS ECS Fargate, type-safe REST/GraphQL APIs, relational database modeling (PostgreSQL/Prisma), native Android mobile apps (Kotlin/Jetpack Compose), embedded Linux daemons, and Jira/GitLab-driven team workflows with automated testing.",
        "skills": [
            ("Languages:", "TypeScript, JavaScript, Python, SQL, C++, Kotlin"),
            ("Cloud & DevOps:", "AWS (ECS Fargate, ECR, RDS, Secrets Mgr), Docker, Linux, Git, GitLab, Jira, Vercel"),
            ("Frontend & Mobile:", "React, Next.js 16, Android (Kotlin), Jetpack Compose, HTML5, CSS3, Tailwind CSS"),
            ("Data & Databases:", "PostgreSQL, Prisma ORM, MongoDB, Supabase"),
            ("Backend & APIs:", "Node.js, Express, REST APIs, GraphQL, FastAPI, Zod"),
            ("Systems & Hardware:", "Raspberry Pi 5, gphoto2, systemd, GPIO, 4–20 mA, PLC"),
            ("AI & Platforms:", "Palantir Foundry, Palantir AIP, OpenAI API, RAG"),
            ("Quality & Testing:", "Vitest, Unit & Integration Testing, Automated Testing, Audit Logging")
        ],
        "featured_projects": [
            {
                "title": "EstateOS",
                "subtitle": "Agentic Real Estate Investment Intelligence Platform",
                "period": "Aug 2026 – Sep 2026",
                "tech": "Next.js 16 • TypeScript • Claude API • Multi-Agent • PostgreSQL • Prisma • Vitest",
                "links": [
                    ("CASE STUDY ↗", "https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos", "case-badge")
                ],
                "bullets": [
                    "Built a full-stack real-estate intelligence platform combining Claude-powered research and multi-agent orchestration with deterministic TypeScript underwriting.",
                    "Implemented cash flow, cap rate, cash-on-cash return, LTV/CLTV, debt/equity analysis, multi-strategy screening, and evidence provenance/source-authority guardrails.",
                    "Validated core logic, agent behavior, repositories, and integrations with 1,234 passing automated tests across 76 tracked Vitest suites, including PostgreSQL/Prisma integration coverage."
                ]
            },
            {
                "title": "CalTrack",
                "subtitle": "Industrial Calibration SaaS & Mobile Platform",
                "period": "Jun 2026 – Jul 2026",
                "tech": "React • TypeScript • Node.js • Express • PostgreSQL • Docker • AWS ECS Fargate • Kotlin / Android",
                "links": [
                    ("LIVE APP ↗", "https://caltrack-web-six.vercel.app/login", "live-badge"),
                    ("GITHUB ↗", "https://github.com/Thee-Hector-Genaro-Pacheco/caltrack", "github-badge")
                ],
                "bullets": [
                    "Architected and deployed a full-stack industrial calibration SaaS platform managing instrument tags, calibration logs, RBAC, and auditable history snapshots.",
                    "Containerized Node/Express backend with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel Edge.",
                    "Engineered a native Android field companion application in Kotlin with Jetpack Compose, ViewModels, CameraX, and ML Kit barcode scanning."
                ]
            },
            {
                "title": "Interactive Photo Booth System",
                "subtitle": "Client Hardware/Software Integration",
                "tech": "Raspberry Pi 5 • Linux • Python • photobooth-app • gphoto2 • Canon DSLR • systemd",
                "links": [
                    ("CASE STUDY ↗", "https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth", "case-badge")
                ],
                "bullets": [
                    "Built an event photo booth system for a nonprofit client, integrating Raspberry Pi 5, active cooling, an Acer 15.6\" touchscreen, and tethered Canon DSLR.",
                    "Automated camera capture via gphoto2 over USB PTP and configured systemd user services with kiosk startup scripts for reliable event operation."
                ]
            }
        ],
        "additional_line": """
          <span class="skill-label">Additional Repositories &amp; Deployments:</span>
          <strong>Procurement Tracking</strong> — Full-Stack GraphQL App (React/Apollo/Prisma/PostgreSQL)
          <a href="https://procurement-tracking-xg87.vercel.app/" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
          &nbsp;•&nbsp;
          <strong>FieldTrack AI</strong> — Edge Telemetry (Raspberry Pi/Python/React)
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
          &nbsp;•&nbsp;
          <strong>OC Water Features</strong> — Production Web (Next.js/Supabase/Vercel)
          <a href="https://www.ocwaterfeaturesinc.com/" target="_blank" class="link-badge live-badge">LIVE SITE ↗</a>
        """,
        "experience": [
            {
                "title": "Software Engineering Contributor",
                "subtitle": "Nonprofit serving underserved communities",
                "date": "Collaborative Contribution",
                "bullets": [
                    "Contributed to an existing nonprofit software platform using Jira-based development workflows, Git/GitLab version control, API investigation, and collaborative debugging within a shared codebase."
                ]
            },
            {
                "title": "Instrumentation & Controls Technician",
                "subtitle": "Process Control & Industrial Systems",
                "date": "Field Engineering Experience",
                "bullets": [
                    "Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation, PLC I/O wiring, relays, and field sensors across 480VAC, 120VAC, and 24VDC power systems with systematic fault isolation and auditable logs."
                ]
            }
        ],
        "education": [
            ("Western Governors University (WGU)", "B.S. Software Engineering (In Progress, 2026–Present)"),
            ("Palantir Technologies", "Foundry & AIP Learning Credentials (May 2026)"),
            ("Mirion Technologies", "SU-890 iCAM Operations & Maintenance (March 2026, 16.00 Continued Education Credits)")
        ]
    },

    {
        "id": "backend-cloud",
        "output_pdf": "resume-backend-cloud.pdf",
        "doc_title": "Software Engineer | Backend • Cloud Infrastructure • DevOps",
        "summary": "Backend and cloud-focused software engineer with experience across standalone cloud architectures and collaborative team development in shared codebases. Hands-on experience building containerized REST & GraphQL microservices, relational PostgreSQL/Prisma schemas, AWS ECS Fargate deployments, zero-secret runtime configuration (AWS Secrets Manager/KMS), Jira-driven ticket workflows, Git/GitLab version control, and automated testing.",
        "skills": [
            ("Languages:", "TypeScript, JavaScript, Python, SQL, Bash/Shell"),
            ("Backend & APIs:", "Node.js, Express, REST APIs, GraphQL, Apollo Server, FastAPI, Zod, RBAC"),
            ("Cloud & Infra:", "AWS (ECS Fargate, ECR, RDS, Secrets Mgr, KMS, VPC, IAM), Vercel"),
            ("Containers & OS:", "Docker, Multi-Stage Builds, Container Registries (ECR), Linux, systemd"),
            ("Databases:", "PostgreSQL, Prisma ORM, Neon, Supabase, Relational Modeling, Indexing"),
            ("DevOps & Testing:", "Git, GitLab, GitHub, Jira, Docker CLI, Vitest, Integration Testing, Build Verification"),
            ("Architecture:", "Microservices, API Contract Design, Data Isolation, Deterministic Math"),
            ("Security & Auth:", "JWT Authentication, HTTP-only Cookies, Secrets Injection, Least Privilege")
        ],
        "featured_projects": [
            {
                "title": "CalTrack",
                "subtitle": "Industrial Calibration SaaS & API Platform",
                "period": "Jun 2026 – Jul 2026",
                "tech": "Node.js • Express • TypeScript • PostgreSQL • Prisma • Docker • AWS ECS Fargate • ECR",
                "links": [
                    ("LIVE APP ↗", "https://caltrack-web-six.vercel.app/login", "live-badge"),
                    ("GITHUB ↗", "https://github.com/Thee-Hector-Genaro-Pacheco/caltrack", "github-badge")
                ],
                "bullets": [
                    "Architected and deployed containerized Node/Express REST API on AWS ECS Fargate with Amazon RDS PostgreSQL in isolated VPC subnets.",
                    "Built multi-stage Docker pipeline compiling shared TypeScript packages, generating Prisma client, running automated tests, and building linux/amd64 images.",
                    "Configured Amazon ECR image hosting and injected runtime environment credentials securely using AWS Secrets Manager and AWS KMS.",
                    "Enforced role-based access control (RBAC), database foreign-key constraints, and historical snapshot preservation for compliance auditing."
                ]
            },
            {
                "title": "EstateOS",
                "subtitle": "Agentic Real Estate Investment Intelligence Platform",
                "period": "Aug 2026 – Sep 2026",
                "tech": "TypeScript • Node.js • Next.js 16 • Claude API • PostgreSQL • Prisma ORM • Vitest",
                "links": [
                    ("CASE STUDY ↗", "https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos", "case-badge")
                ],
                "bullets": [
                    "Architected multi-agent orchestration service integrating Claude API research with deterministic underwriting engines and real-time SSE progress streaming.",
                    "Engineered server-side evidence snapshot repositories in PostgreSQL/Prisma, enforcing source-authority tiers and cryptographic deduplication to isolate trusted data.",
                    "Achieved 1,234 passing automated tests across 76 tracked Vitest suites, validating financial invariant math, agent workflows, and database repository transactions."
                ]
            },
            {
                "title": "Procurement Tracking System",
                "subtitle": "Enterprise GraphQL Platform",
                "period": "May 2026 – Jul 2026",
                "tech": "Node.js • Express 5 • GraphQL • Apollo Server 4 • Prisma ORM 6 • PostgreSQL • JWT",
                "links": [
                    ("LIVE APP ↗", "https://procurement-tracking-xg87.vercel.app/", "live-badge"),
                    ("GITHUB ↗", "https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking", "github-badge")
                ],
                "bullets": [
                    "Designed and deployed a type-safe GraphQL purchasing API on Render with PostgreSQL on Neon, modeling complex purchase-order and multi-stage receiving state transitions.",
                    "Implemented Apollo Server 4 query/mutation resolvers with JWT authentication, HTTP-only session cookies, and multi-role RBAC resolver permission guards."
                ]
            }
        ],
        "additional_line": """
          <span class="skill-label">Additional Repositories &amp; Deployments:</span>
          <strong>Interactive Photo Booth</strong> — Linux systemd Daemon (Raspberry Pi 5/Python)
          <a href="https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth" target="_blank" class="link-badge case-badge">CASE STUDY ↗</a>
          &nbsp;•&nbsp;
          <strong>OC Water Features</strong> — Production Web Platform (Next.js/Supabase/Vercel)
          <a href="https://www.ocwaterfeaturesinc.com/" target="_blank" class="link-badge live-badge">LIVE SITE ↗</a>
          &nbsp;•&nbsp;
          <strong>Pi Arcade OS</strong> — Embedded Linux System (Python/GPIO)
          <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" class="link-badge live-badge">SITE ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        """,
        "experience": [
            {
                "title": "Software Engineering Contributor",
                "subtitle": "Nonprofit serving underserved communities",
                "date": "Collaborative Contribution",
                "bullets": [
                    "Collaborated on an existing nonprofit codebase using Jira-driven ticket workflows, Git/GitLab version control, API integration investigation, local environment configuration, and shared build and test workflows."
                ]
            },
            {
                "title": "Instrumentation & Controls Technician",
                "subtitle": "Process Control & Industrial Systems",
                "date": "Field Engineering Experience",
                "bullets": [
                    "Maintained high-availability industrial control infrastructure, diagnosing electrical loops, PLC I/O wiring, relays, and field instrumentation across 480VAC, 120VAC, and 24VDC systems with systematic root-cause isolation."
                ]
            }
        ],
        "education": [
            ("Western Governors University (WGU)", "B.S. Software Engineering (In Progress, 2026–Present)"),
            ("Palantir Technologies", "Foundry & AIP Learning Credentials (May 2026)"),
            ("Mirion Technologies", "SU-890 iCAM Operations & Maintenance (March 2026)")
        ]
    },

    {
        "id": "embedded-iot",
        "output_pdf": "resume-embedded-iot.pdf",
        "doc_title": "Software Engineer | Embedded Systems • IoT • Physical Systems",
        "summary": "Software Engineer combining computer science with a professional industrial Instrumentation & Controls background, experienced in both hardware systems engineering and collaborative software development. Track record includes embedded Linux systems on Raspberry Pi 5, programmatic camera control via gphoto2, real-time sensor telemetry pipelines, industrial calibration software, Jira/GitLab workflows, and systematic physical-world troubleshooting.",
        "skills": [
            ("Languages:", "Python, C++, TypeScript, JavaScript, SQL, Bash"),
            ("Embedded & Linux:", "Raspberry Pi 5, Debian/Linux, systemd Services, Kiosk Mode, GPIO, Active Cooling"),
            ("Hardware Protocols:", "gphoto2, USB PTP, GPS/NMEA (UART/Serial), PIR Motion, 4–20 mA Loops, HART"),
            ("Industrial Controls:", "PLC Systems & I/O, Relay Logic, 480VAC/120VAC/24VDC, Fluke 789, Trex HART"),
            ("Networking & APIs:", "FastAPI, WebSockets, REST APIs, Node.js, Express, Docker"),
            ("Software & Tools:", "Git, GitLab, Jira, React, PostgreSQL, Prisma ORM, Systematic Fault Isolation, Calibration Logs"),
            ("Platforms:", "Palantir Foundry, Palantir AIP"),
            ("Quality & Standards:", "Signal Validation, Preventative Maintenance, MPE Tolerances, Industrial Auditing")
        ],
        "featured_projects": [
            {
                "title": "Interactive Photo Booth System",
                "subtitle": "Client Hardware/Software Integration",
                "tech": "Raspberry Pi 5 • Linux (Debian) • Python • photobooth-app • gphoto2 • Canon DSLR • systemd",
                "links": [
                    ("CASE STUDY ↗", "https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth", "case-badge")
                ],
                "bullets": [
                    "Architected and built an event photo kiosk powered by an active-cooled Raspberry Pi 5 and 15.6\" Acer touchscreen for a nonprofit client.",
                    "Automated tethered Canon Rebel T100 DSLR control over USB PTP using gphoto2, managing camera state, shutter triggers, and photo transfers.",
                    "Authored systemd user service definitions and kiosk boot scripts ensuring hands-off reboot recovery, persistent logging, and reliable event operation."
                ]
            },
            {
                "title": "FieldTrack AI",
                "subtitle": "Edge Computing & Sensor Telemetry Platform",
                "period": "Jul 2026 – Aug 2026",
                "tech": "Raspberry Pi 5 • Python • FastAPI • Node.js • React • WebSockets • GPS/NMEA",
                "links": [
                    ("GITHUB ↗", "https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai", "github-badge")
                ],
                "bullets": [
                    "Built an edge telemetry platform on Raspberry Pi 5 integrating GPS/NMEA serial stream parsing, PIR motion hardware interrupts, and system diagnostics.",
                    "Implemented Python/FastAPI hardware services streaming low-latency JSON telemetry frames over bidirectional WebSockets to a real-time React dashboard."
                ]
            },
            {
                "title": "CalTrack",
                "subtitle": "Industrial Calibration SaaS & Mobile Platform",
                "period": "Jun 2026 – Jul 2026",
                "tech": "React • TypeScript • Node.js • Express • PostgreSQL • Docker • AWS ECS Fargate",
                "links": [
                    ("LIVE APP ↗", "https://caltrack-web-six.vercel.app/login", "live-badge"),
                    ("GITHUB ↗", "https://github.com/Thee-Hector-Genaro-Pacheco/caltrack", "github-badge")
                ],
                "bullets": [
                    "Bridged physical industrial instrumentation workflows with modern cloud software, engineering an equipment calibration platform for process plant compliance.",
                    "Modeled database schemas for 4–20 mA transmitters (pressure, temperature, flow, level), tracking calibration histories, tolerances, and calibration cycles."
                ]
            }
        ],
        "additional_line": """
          <span class="skill-label">Additional Repositories &amp; Deployments:</span>
          <strong>Pi Arcade OS</strong> — Embedded Gaming Platform (Raspberry Pi/Python/GPIO/Pygame)
          <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" class="link-badge live-badge">SITE ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
          &nbsp;•&nbsp;
          <strong>EstateOS</strong> — Agentic Real Estate Platform (Multi-Agent Orchestration & Underwriting)
          <a href="https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos" target="_blank" class="link-badge case-badge">CASE STUDY ↗</a>
          &nbsp;•&nbsp;
          <strong>Procurement Tracking</strong> — Full-Stack GraphQL Workflow Platform
          <a href="https://procurement-tracking-xg87.vercel.app/" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        """,
        "experience": [
            {
                "title": "Software Engineering Contributor",
                "subtitle": "Nonprofit serving underserved communities",
                "date": "Collaborative Contribution",
                "bullets": [
                    "Contributed to an existing codebase within a collaborative team environment, utilizing Jira issue tracking, Git/GitLab workflows, and peer technical communication."
                ]
            },
            {
                "title": "Instrumentation & Controls Technician",
                "subtitle": "Process Control & Industrial Systems",
                "date": "Field Engineering Experience",
                "bullets": [
                    "Calibrated and commissioned 4–20 mA process transmitters (pressure, temperature, flow, level) and troubleshot PLC I/O wiring, relays, and industrial power loops with systematic fault isolation and auditable logs."
                ]
            }
        ],
        "education": [
            ("Western Governors University (WGU)", "B.S. Software Engineering (In Progress, 2026–Present)"),
            ("Mirion Technologies", "SU-890 iCAM Operations & Maintenance (March 2026, 16.00 Continued Education Credits)"),
            ("Palantir Technologies", "Foundry & AIP Learning Credentials (May 2026)")
        ]
    }
]

def render_html(data):
    header = CONTACT_HEADER_HTML.format(doc_title=data["doc_title"])
    
    # Skills HTML
    skills_items = ""
    for label, value in data["skills"]:
        skills_items += f'''
      <div class="skill-category">
        <span class="skill-label">{label}</span> <span class="skill-value">{value}</span>
      </div>'''

    # Projects HTML
    projects_items = ""
    for p in data["featured_projects"]:
        links_html = ""
        for label, url, badge_cls in p["links"]:
            links_html += f'<a href="{url}" target="_blank" class="link-badge {badge_cls}">{label}</a> '

        bullets_html = ""
        for b in p["bullets"]:
            bullets_html += f'<li>{b}</li>'

        period_html = f'<span class="item-period">({p["period"]})</span> ' if p.get("period") else ""
        projects_items += f'''
    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">{p["title"]}</span> <span class="item-subtitle">— {p["subtitle"]}</span>
          {period_html}{links_html}
        </div>
        <span class="item-date">{p["tech"]}</span>
      </div>
      <ul class="bullet-list">
        {bullets_html}
      </ul>
    </div>'''

    # Additional line
    add_line_html = f'''
    <div class="additional-projects-line">
      {data["additional_line"]}
    </div>'''

    # Experience
    exp_items = ""
    for exp in data["experience"]:
        exp_bullets = "".join([f'<li>{b}</li>' for b in exp["bullets"]])
        exp_items += f'''
    <div class="project-item" style="margin-bottom: 2px;">
      <div class="item-header">
        <div>
          <span class="item-title">{exp["title"]}</span> <span class="item-subtitle">— {exp["subtitle"]}</span>
        </div>
        <span class="item-date">{exp["date"]}</span>
      </div>
      <ul class="bullet-list">
        {exp_bullets}
      </ul>
    </div>'''

    exp_html = f'''
  <div class="section">
    <div class="section-title">Technical &amp; Industrial Experience</div>
    {exp_items}
  </div>'''

    # Education
    edu_items = ""
    for inst, detail in data["education"]:
        edu_items += f'''
      <div class="training-item">
        <span class="skill-label">{inst}</span> — <span class="skill-value">{detail}</span>
      </div>'''

    edu_html = f'''
  <div class="section">
    <div class="section-title">Education &amp; Professional Training</div>
    <div class="training-list">
      {edu_items}
    </div>
  </div>'''

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hector Genaro Pacheco - {data['doc_title']}</title>
  <style>
{CSS_STYLES}
  </style>
</head>
<body>
{header}

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">{data['summary']}</p>
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
{skills_items}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Featured Software &amp; Systems Engineering Projects</div>
{projects_items}
{add_line_html}
  </div>

{exp_html}
{edu_html}
</body>
</html>
"""

def generate_pdf(html_content, dest_pdf_path):
    temp_html = f"/tmp/resume_build_{os.path.basename(dest_pdf_path)}.html"
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)

    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={dest_pdf_path}",
        temp_html
    ]

    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error generating {dest_pdf_path}: {res.stderr}")
        sys.exit(1)

    print(f"✓ Generated {dest_pdf_path} ({os.path.getsize(dest_pdf_path)} bytes)")

def verify_all_pdfs(pdf_paths):
    import json
    paths_json = json.dumps(pdf_paths)
    swift_code = f'''
import PDFKit
import Foundation

let paths = {paths_json}
var hasFailure = false

for p in paths {{
    let url = URL(fileURLWithPath: p)
    guard let doc = PDFDocument(url: url) else {{
        print("ERROR: Could not load \\(p)")
        hasFailure = true
        continue
    }}
    let basename = URL(fileURLWithPath: p).lastPathComponent
    let pages = doc.pageCount
    print("--------------------------------------------------")
    print("VERIFYING: \\(basename)")
    print("PAGE_COUNT: \\(pages)")
    if pages != 1 {{
        print("❌ FAILED: \\(basename) has \\(pages) pages (MUST BE EXACTLY 1)")
        hasFailure = true
    }} else {{
        print("✅ PASSED: Strictly 1 page")
    }}
    if let page = doc.page(at: 0) {{
        let linkCount = page.annotations.count
        print("CLICKABLE_LINKS_COUNT: \\(linkCount)")
        for annot in page.annotations {{
            if let u = annot.url {{
                print("  LINK: \\(u.absoluteString)")
            }}
        }}
        let textLen = (page.string ?? "").count
        print("TEXT_CHARACTER_COUNT: \\(textLen)")
        if textLen < 500 {{
            print("❌ WARNING: Suspiciously low text length")
            hasFailure = true
        }}
    }}
}}

if hasFailure {{
    exit(1)
}}
'''
    swift_res = subprocess.run(['swift', '-e', swift_code], capture_output=True, text=True)
    print("\n--- AUTHORITATIVE SWIFT PDFKIT VERIFICATION ---")
    print(swift_res.stdout)
    if swift_res.stderr:
        print("Swift stderr:", swift_res.stderr)
    if swift_res.returncode != 0:
        print("Verification FAILED.")
        sys.exit(1)

def main():
    generated_paths = []
    
    for r in RESUMES:
        html = render_html(r)
        dest = os.path.join(PUBLIC_DIR, r["output_pdf"])
        generate_pdf(html, dest)
        generated_paths.append(dest)
        
        # If this is general software engineer, also write/copy to resume.pdf for backward compatibility
        if r["id"] == "general":
            legacy_dest = os.path.join(PUBLIC_DIR, "resume.pdf")
            shutil.copyfile(dest, legacy_dest)
            print(f"✓ Copied general resume to {legacy_dest} for backward compatibility")
            generated_paths.append(legacy_dest)

    verify_all_pdfs(generated_paths)
    print("All resume PDFs generated and verified successfully!")

if __name__ == "__main__":
    main()
