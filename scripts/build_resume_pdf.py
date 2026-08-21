import os
import re
import subprocess
import sys

HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hector Genaro Pacheco - Software Engineer Resume</title>
  <style>
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
      font-size: 8.8pt;
      line-height: 1.28;
      padding: 0.28in 0.34in;
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
      margin-bottom: 5px;
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 4px;
    }
    .name {
      font-size: 16.5pt;
      font-weight: bold;
      color: #0f172a;
      text-transform: uppercase;
    }
    .title-line {
      font-size: 9.2pt;
      font-weight: bold;
      color: #2563eb;
      margin-top: 1px;
      margin-bottom: 2px;
    }
    .contact-row {
      font-size: 8pt;
      color: #475569;
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .contact-row a {
      color: #334155;
      font-weight: bold;
    }
    .section {
      margin-bottom: 5px;
    }
    .section-title {
      font-size: 8.8pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1px;
      margin-bottom: 2px;
    }
    .summary-text {
      font-size: 8.2pt;
      color: #334155;
      line-height: 1.26;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 12px;
      row-gap: 1.5px;
      font-size: 8pt;
    }
    .skill-category {
      line-height: 1.22;
    }
    .skill-label {
      font-weight: bold;
      color: #0f172a;
    }
    .skill-value {
      color: #334155;
    }
    .project-item {
      margin-bottom: 3px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 2px;
    }
    .item-title {
      font-weight: bold;
      font-size: 8.8pt;
      color: #0f172a;
    }
    .item-subtitle {
      font-size: 8pt;
      color: #475569;
      font-style: italic;
    }
    .item-date {
      font-size: 7.8pt;
      font-weight: bold;
      color: #475569;
      white-space: nowrap;
    }
    ul.bullet-list {
      list-style-type: disc;
      margin-left: 13px;
      margin-top: 1px;
    }
    ul.bullet-list li {
      font-size: 8.1pt;
      color: #334155;
      margin-bottom: 1px;
      line-height: 1.22;
    }
    .link-badge {
      font-size: 7pt;
      font-weight: bold;
      padding: 1px 4px;
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
    .additional-projects-line {
      font-size: 8pt;
      color: #334155;
      margin-top: 2px;
      line-height: 1.25;
    }
    .training-list {
      display: flex;
      flex-direction: column;
      gap: 1.5px;
      font-size: 8.1pt;
    }
    .training-item {
      line-height: 1.22;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <div class="name">Hector Genaro Pacheco</div>
    <div class="title-line">Software Engineer | Full-Stack • Cloud • AI • IoT • Embedded Systems</div>
    <div class="contact-row">
      <span>Southern California</span>
      <span>•</span>
      <a href="mailto:hector.genaro.pacheco@gmail.com">hector.genaro.pacheco@gmail.com</a>
      <span>•</span>
      <a href="https://www.linkedin.com/in/hectorgenaropacheco/" target="_blank">LinkedIn</a>
      <span>•</span>
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco" target="_blank">GitHub</a>
      <span>•</span>
      <a href="https://gitlab.com/hpache17" target="_blank">GitLab</a>
    </div>
  </div>

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Software Engineer with a physical-world engineering background spanning full-stack development, AWS cloud infrastructure, retrieval-augmented AI systems, IoT edge computing, and industrial instrumentation &amp; controls. Builds auditable software across cloud SaaS, native Android applications, GraphQL business platforms, governed RAG pipelines, and Raspberry Pi hardware-integrated systems.
    </p>
  </div>

  <!-- SKILLS -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-category">
        <span class="skill-label">Languages:</span> <span class="skill-value">TypeScript, JavaScript, Python, SQL, C++, Kotlin</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Cloud &amp; Infra:</span> <span class="skill-value">AWS ECS Fargate, ECR, RDS, Secrets Mgr, KMS, VPC, Docker, Vercel, Linux, Git</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Frontend &amp; Mobile:</span> <span class="skill-value">React, Next.js, Android (Kotlin), Jetpack Compose, HTML5, CSS3</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Data:</span> <span class="skill-value">PostgreSQL, Prisma, MongoDB, Supabase, Apollo, pgvector</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Backend &amp; APIs:</span> <span class="skill-value">Node.js, Express, GraphQL, REST APIs, FastAPI, WebSockets, Zod</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">AI / Retrieval:</span> <span class="skill-value">OpenAI API, RAG, Embeddings, pgvector, Semantic Retrieval, Structured LLM</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Embedded &amp; Industrial:</span> <span class="skill-value">Raspberry Pi 5, GPIO, GPS/NMEA, Sensors, 4–20 mA Loops, PLC I/O</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">AI &amp; Data Platforms:</span> <span class="skill-value">Palantir Foundry, Palantir AIP, AI Workflow Training, Data Governance</span>
      </div>
    </div>
  </div>

  <!-- FEATURED ENGINEERING PROJECTS -->
  <div class="section">
    <div class="section-title">Featured Deployed &amp; Engineering Projects</div>

    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">CalTrack</span> <span class="item-subtitle">— Industrial Calibration SaaS &amp; Mobile Platform</span>
          <a href="https://caltrack-web-six.vercel.app/login" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/caltrack" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        </div>
        <span class="item-date">React • TypeScript • Node • Express • PostgreSQL • AWS ECS • Kotlin / Android (Jetpack Compose)</span>
      </div>
      <ul class="bullet-list">
        <li>Architected and deployed a full-stack industrial calibration platform for instrument tags, calibration records, RBAC, and audit histories.</li>
        <li>Containerized Node/Express backend with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel.</li>
        <li>Engineered a native Android companion application in Kotlin using Jetpack Compose, Material 3, CameraX, and ML Kit for QR/barcode scanning.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">Procurement Tracking System</span> <span class="item-subtitle">— Enterprise Procurement Workflow Platform</span>
          <a href="https://procurement-tracking-xg87.vercel.app/" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        </div>
        <span class="item-date">React • TypeScript • GraphQL • Apollo • Express • Prisma • PostgreSQL</span>
      </div>
      <ul class="bullet-list">
        <li>Built a deployed procurement operations platform supporting purchase requests, approval workflows, vendor management, purchase orders, goods receiving, and multi-role RBAC.</li>
        <li>Implemented GraphQL APIs with Apollo Server/Client, Prisma/PostgreSQL persistence, JWT auth, and resolver permission enforcement.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">Thriveward Funding Intelligence</span> <span class="item-subtitle">— Retrieval-Augmented Funding Intelligence Platform</span>
        </div>
        <span class="item-date">TypeScript • Express • PostgreSQL • pgvector • OpenAI • RAG</span>
      </div>
      <ul class="bullet-list">
        <li>Built a governed RAG pipeline spanning PDF document ingestion, page-bounded chunking, OpenAI embeddings, pgvector cosine retrieval, grounded evidence construction, and structured gpt-4o-mini analysis.</li>
        <li>Engineered index-integrity controls using provider/model/configuration hashes and versioned indexes to prevent stale or incompatible embeddings from silently contaminating retrieval results.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">FieldTrack AI</span> <span class="item-subtitle">— Edge Computing &amp; Sensor Telemetry Platform</span>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        </div>
        <span class="item-date">Raspberry Pi 5 • Python • FastAPI • Node • React • WebSockets</span>
      </div>
      <ul class="bullet-list">
        <li>Built an edge-computing platform combining Python hardware services, GPS/NMEA parsing, PIR motion sensing, camera/computer-vision processing, and real-time React telemetry over WebSockets.</li>
      </ul>
    </div>
  </div>

  <!-- CLIENT WORK & ADDITIONAL PROJECTS -->
  <div class="section">
    <div class="section-title">Production Client Work &amp; Additional Projects</div>

    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">OC Water Features</span> <span class="item-subtitle">— Production Full-Stack Web Platform</span>
          <a href="https://www.ocwaterfeaturesinc.com/" target="_blank" class="link-badge live-badge">LIVE SITE ↗</a>
        </div>
        <span class="item-date">Next.js • TypeScript • Supabase PostgreSQL • Zod • Vercel</span>
      </div>
      <ul class="bullet-list">
        <li>Built and deployed a production web platform with SEO, lead intake workflows, customer-facing forms, administrative tooling, and persistent database-backed workflows.</li>
      </ul>
    </div>

    <div class="additional-projects-line">
      <span class="skill-label">Additional Engineering Repositories:</span>
      <strong>Pi Arcade OS</strong> — Embedded Hardware &amp; Software Gaming Platform (Raspberry Pi / Python / Pygame / GPIO)
      <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" class="link-badge live-badge">PROJECT SITE ↗</a>
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
      &nbsp;•&nbsp;
      <strong>E-Commerce Store</strong> — Full-Stack GraphQL Store (React / GraphQL / MongoDB / AWS S3)
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco/ecommerce-store" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
    </div>
  </div>

  <!-- EXPERIENCE -->
  <div class="section">
    <div class="section-title">Technical &amp; Industrial Experience</div>
    <div class="item-header">
      <div>
        <span class="item-title">Instrumentation &amp; Controls Technician</span> <span class="item-subtitle">— Process Control &amp; Industrial Systems</span>
      </div>
      <span class="item-date">Field Engineering Experience</span>
    </div>
    <ul class="bullet-list">
      <li>Calibrated, commissioned, and troubleshot 4–20 mA process transmitters (pressure, temperature, flow, level), PLC I/O wiring harnesses, terminal blocks, relays, and field instruments across 480VAC, 120VAC, and 24VDC power systems.</li>
      <li>Verified process control loop operation, signal integrity, and safety shutdowns while maintaining auditable calibration logs.</li>
    </ul>
  </div>

  <!-- EDUCATION & CREDENTIALS -->
  <div class="section">
    <div class="section-title">Education &amp; Professional Training</div>
    <div class="training-list">
      <div class="training-item">
        <span class="skill-label">Western Governors University (WGU)</span> — <span class="skill-value">B.S. Software Engineering (In Progress, 2026–Present)</span>
      </div>
      <div class="training-item">
        <span class="skill-label">Palantir Technologies</span> — <span class="skill-value">Foundry &amp; AIP Training (May 2026)</span>
      </div>
      <div class="training-item">
        <span class="skill-label">Mirion Technologies</span> — <span class="skill-value">SU-890 iCAM Operations &amp; Maintenance (March 2026, 16.00 Continued Education Credits)</span>
      </div>
    </div>
  </div>

</body>
</html>
"""

def generate_pdf():
    html_path = '/tmp/resume_build.html'
    pdf_path = '/Users/hectorpacheco/Desktop/Portfolio/public/resume.pdf'

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(HTML_CONTENT)

    cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path}",
        html_path
    ]

    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Chrome PDF error:", res.stderr)
        sys.exit(1)

    print(f"Generated PDF at {pdf_path}, size: {os.path.getsize(pdf_path)} bytes")

    # Run compiled Swift PDFKit text extraction for 100% authoritative text verification
    swift_res = subprocess.run(['/tmp/test_pdf_bin', pdf_path], capture_output=True, text=True)
    print("\n--- AUTHORITATIVE SWIFT PDFKIT VERIFICATION ---")
    print(swift_res.stdout)

if __name__ == '__main__':
    generate_pdf()
