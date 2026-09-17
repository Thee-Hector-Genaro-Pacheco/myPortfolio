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
      font-size: 8.6pt;
      line-height: 1.26;
      padding: 0.26in 0.32in;
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
      margin-bottom: 4px;
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 3px;
    }
    .name {
      font-size: 16pt;
      font-weight: bold;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .title-line {
      font-size: 9pt;
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
      margin-bottom: 4px;
    }
    .section-title {
      font-size: 8.6pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1px;
      margin-bottom: 2px;
    }
    .summary-text {
      font-size: 8pt;
      color: #334155;
      line-height: 1.24;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 12px;
      row-gap: 1.5px;
      font-size: 7.9pt;
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
      margin-top: 1.5px;
    }
    .item-title {
      font-weight: bold;
      font-size: 8.6pt;
      color: #0f172a;
    }
    .item-subtitle {
      font-size: 7.9pt;
      color: #475569;
      font-style: italic;
    }
    .item-date {
      font-size: 7.6pt;
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
      font-size: 8pt;
      color: #334155;
      margin-bottom: 0.5px;
      line-height: 1.2;
    }
    .link-badge {
      font-size: 6.8pt;
      font-weight: bold;
      padding: 1px 3.5px;
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
      font-size: 7.8pt;
      color: #334155;
      margin-top: 2px;
      line-height: 1.22;
    }
    .training-list {
      display: flex;
      flex-direction: column;
      gap: 1px;
      font-size: 7.9pt;
    }
    .training-item {
      line-height: 1.2;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <div class="name">Hector Genaro Pacheco</div>
    <div class="title-line">Software Engineer | Full-Stack • Cloud Infrastructure • AI • IoT • Embedded Systems</div>
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

  <!-- SUMMARY -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Software Engineer with a physical-world systems background spanning full-stack development, AWS cloud infrastructure, deterministic underwriting engines, retrieval-augmented AI systems, embedded Linux (Raspberry Pi), and industrial instrumentation &amp; controls. Builds auditable, production-grade software across containerized cloud SaaS, native Android applications, and hardware-integrated event kiosk platforms.
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
        <span class="skill-label">Cloud &amp; DevOps:</span> <span class="skill-value">AWS (ECS Fargate, ECR, RDS, Secrets Mgr, KMS, VPC), Docker, Linux, Git, Vercel</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Frontend &amp; Mobile:</span> <span class="skill-value">React, Next.js, Android (Kotlin), Jetpack Compose, HTML5, CSS3</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Data &amp; Databases:</span> <span class="skill-value">PostgreSQL, Prisma ORM, MongoDB, Supabase, pgvector</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Backend &amp; APIs:</span> <span class="skill-value">Node.js, Express, REST APIs, GraphQL, FastAPI, WebSockets, Zod</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">AI &amp; Data Platforms:</span> <span class="skill-value">OpenAI API, RAG, Embeddings, pgvector, Palantir Foundry, Palantir AIP</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Systems &amp; Hardware:</span> <span class="skill-value">Raspberry Pi 5, gphoto2, DSLR Automation, Touchscreen, systemd, GPIO, 4–20 mA, PLC</span>
      </div>
      <div class="skill-category">
        <span class="skill-label">Quality &amp; Testing:</span> <span class="skill-value">Vitest, Unit Testing, Integration Testing, Fault Isolation, Calibration Auditing</span>
      </div>
    </div>
  </div>

  <!-- FEATURED ENGINEERING PROJECTS -->
  <div class="section">
    <div class="section-title">Featured Software &amp; Systems Engineering Projects</div>

    <!-- CALTRACK -->
    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">CalTrack</span> <span class="item-subtitle">— Industrial Calibration SaaS &amp; Mobile Platform</span>
          <a href="https://caltrack-web-six.vercel.app/login" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/caltrack" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        </div>
        <span class="item-date">React • TypeScript • Node • Express • PostgreSQL • AWS ECS • Kotlin / Android</span>
      </div>
      <ul class="bullet-list">
        <li>Architected and deployed a full-stack industrial calibration SaaS platform managing instrument tags, calibration logs, RBAC, and auditable history snapshots.</li>
        <li>Containerized Node/Express backend with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel Edge.</li>
        <li>Engineered a native Android field companion application in Kotlin with Jetpack Compose, ViewModels, CameraX, and ML Kit barcode scanning.</li>
      </ul>
    </div>

    <!-- ESTATEOS -->
    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">EstateOS</span> <span class="item-subtitle">— Real Estate Investment Intelligence Platform</span>
          <a href="https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos" target="_blank" class="link-badge case-badge">CASE STUDY ↗</a>
        </div>
        <span class="item-date">Next.js 16 • React • TypeScript • PostgreSQL • Prisma ORM • Vitest • TailwindCSS</span>
      </div>
      <ul class="bullet-list">
        <li>Built a full-stack real estate analysis platform featuring deterministic financial underwriting, debt capital stacks, LTV/CLTV, and equity calculations.</li>
        <li>Engineered multi-strategy screening (Wholesale, Fix &amp; Flip, BRRRR, Buy &amp; Hold) with pure TypeScript calculators and strict input validation.</li>
        <li>Architected identity-bound evidence snapshots (PropertyEvidenceSnapshot) and source authority classifiers, verified by an 804-test suite in Vitest.</li>
      </ul>
    </div>

    <!-- INTERACTIVE PHOTO BOOTH SYSTEM -->
    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">Interactive Photo Booth System</span> <span class="item-subtitle">— Client Hardware/Software Integration</span>
          <a href="https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth" target="_blank" class="link-badge case-badge">CASE STUDY ↗</a>
        </div>
        <span class="item-date">Raspberry Pi 5 • Linux • Python • photobooth-app • gphoto2 • Canon DSLR • systemd</span>
      </div>
      <ul class="bullet-list">
        <li>Built an event photo booth system for a nonprofit client, integrating Raspberry Pi 5, active cooling, an Acer 15.6" touchscreen, and tethered Canon DSLR.</li>
        <li>Automated camera capture via gphoto2 over USB PTP and configured systemd user services with kiosk startup scripts for reliable event operation.</li>
      </ul>
    </div>

    <!-- FIELDTRACK AI -->
    <div class="project-item">
      <div class="item-header">
        <div>
          <span class="item-title">FieldTrack AI</span> <span class="item-subtitle">— Edge Computing &amp; Sensor Telemetry Platform</span>
          <a href="https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
        </div>
        <span class="item-date">Raspberry Pi 5 • Python • FastAPI • Node.js • React • WebSockets • GPS/NMEA</span>
      </div>
      <ul class="bullet-list">
        <li>Built an edge telemetry platform integrating Python sensor daemons, GPS/NMEA stream parsing, motion detection, and real-time React dashboard updates over WebSockets.</li>
      </ul>
    </div>

    <!-- ADDITIONAL ENGINEERING PROJECTS -->
    <div class="additional-projects-line">
      <span class="skill-label">Additional Repositories &amp; Deployments:</span>
      <strong>Procurement Tracking</strong> — Full-Stack GraphQL Enterprise App (React/Apollo/Prisma/PostgreSQL)
      <a href="https://procurement-tracking-xg87.vercel.app/" target="_blank" class="link-badge live-badge">LIVE APP ↗</a>
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
      &nbsp;•&nbsp;
      <strong>OC Water Features</strong> — Production Web Platform (Next.js/Supabase/Vercel)
      <a href="https://www.ocwaterfeaturesinc.com/" target="_blank" class="link-badge live-badge">LIVE SITE ↗</a>
      &nbsp;•&nbsp;
      <strong>Pi Arcade OS</strong> — Embedded System (Python/GPIO)
      <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" class="link-badge live-badge">SITE ↗</a>
      <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" class="link-badge github-badge">GITHUB ↗</a>
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
      <li>Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation (pressure, temperature, flow, level), PLC I/O wiring harnesses, relays, and field sensors across 480VAC, 120VAC, and 24VDC power systems.</li>
      <li>Applied systematic fault isolation, signal integrity validation, and root-cause diagnosis in operating industrial plant facilities while maintaining auditable calibration logs.</li>
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
        <span class="skill-label">Palantir Technologies</span> — <span class="skill-value">Foundry &amp; AIP Learning Credentials (May 2026)</span>
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

    # Authoritative Swift PDFKit verification
    swift_code = f'''
import PDFKit
import Foundation

let url = URL(fileURLWithPath: "{pdf_path}")
if let doc = PDFDocument(url: url) {{
    print("PDF_PAGE_COUNT:\\(doc.pageCount)")
    for i in 0..<doc.pageCount {{
        if let page = doc.page(at: i) {{
            print("--- PAGE \\(i+1) OF \\(doc.pageCount) ---")
            print(page.string ?? "")
            print("PAGE_\\(i+1)_ANNOTATION_COUNT:\\(page.annotations.count)")
            for annot in page.annotations {{
                if let u = annot.url {{
                    print("  LINK: \\(u.absoluteString)")
                }}
            }}
        }}
    }}
}}
'''
    swift_res = subprocess.run(['swift', '-e', swift_code], capture_output=True, text=True)
    print("\n--- AUTHORITATIVE SWIFT PDFKIT VERIFICATION ---")
    print(swift_res.stdout)

if __name__ == '__main__':
    generate_pdf()
