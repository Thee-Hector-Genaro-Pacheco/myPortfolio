import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  Download, 
  ArrowLeft, 
  CheckCircle2,
  ExternalLink,
  Github
} from 'lucide-react';
import './ResumePage.css';

export const ResumePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Resume | Hector Pacheco';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page">
      <div className="container">
        {/* Top Header Navigation Bar */}
        <div className="resume-top-bar">
          <Link to="/" className="btn btn-outline btn-sm">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          {personalInfo.resumeConfigured && (
            <div className="resume-actions">
              <a
                href={personalInfo.resumePath}
                download="Hector_Pacheco_Software_Engineer_Resume.pdf"
                className="btn btn-primary btn-sm"
                title="Download Resume PDF"
              >
                <Download size={16} />
                <span>Download PDF Resume</span>
              </a>
            </div>
          )}
        </div>

        {/* Structured Web Resume Document */}
        <div className="resume-document">
          {/* Header */}
          <header className="resume-doc-header">
            <h1 className="doc-name">{personalInfo.name}</h1>
            <p className="doc-title">Software Engineer | Full-Stack • Cloud • AI • IoT • Embedded Systems</p>
            <div className="doc-contact-row font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
              <span>•</span>
              <a href={personalInfo.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab Profile">GitLab</a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">PROFESSIONAL SUMMARY</h2>
            <p className="doc-text">
              Software Engineer with a physical-world engineering background spanning full-stack development, AWS cloud infrastructure, retrieval-augmented AI systems, native Android development, IoT edge computing, and industrial instrumentation &amp; controls. Builds auditable software across cloud SaaS, GraphQL business systems, governed RAG pipelines, mobile applications, and Raspberry Pi hardware-integrated systems.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL SKILLS</h2>
            <div className="doc-skills-grid font-sans">
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Languages:</strong>{' '}
                <span className="doc-skill-names">TypeScript, JavaScript, Python, SQL, C++, Kotlin</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Frontend &amp; Mobile:</strong>{' '}
                <span className="doc-skill-names">React, Next.js, Android, Jetpack Compose, HTML5, CSS3</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Backend &amp; APIs:</strong>{' '}
                <span className="doc-skill-names">Node.js, Express, GraphQL, REST APIs, FastAPI, WebSockets, Zod</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">AI &amp; Retrieval:</strong>{' '}
                <span className="doc-skill-names">OpenAI API, RAG, Embeddings, pgvector, Semantic Retrieval, Structured LLM Output</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Cloud &amp; Infrastructure:</strong>{' '}
                <span className="doc-skill-names">AWS ECS Fargate, ECR, RDS, Secrets Manager, KMS, VPC, Docker, Vercel, Linux, Git/GitHub</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Data:</strong>{' '}
                <span className="doc-skill-names">PostgreSQL, Prisma, MongoDB, Supabase, Apollo</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Embedded &amp; Industrial:</strong>{' '}
                <span className="doc-skill-names">Raspberry Pi 5, GPIO, GPS/NMEA, Sensors, 4–20 mA Instrumentation, PLC I/O</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">AI &amp; Data Platforms:</strong>{' '}
                <span className="doc-skill-names">Palantir Foundry, Palantir AIP, Data Governance</span>
              </div>
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">FEATURED DEPLOYED &amp; ENGINEERING PROJECTS</h2>
            
            {/* CalTrack */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">CalTrack — Industrial Calibration SaaS &amp; Mobile Platform</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://caltrack-web-six.vercel.app/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn live"
                      aria-label="CalTrack Live App"
                    >
                      <span>LIVE APP</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://github.com/Thee-Hector-Genaro-Pacheco/caltrack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn github"
                      aria-label="CalTrack GitHub Repository"
                    >
                      <Github size={12} />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">React • TypeScript • Node • PostgreSQL • AWS • Kotlin • Jetpack Compose</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Architected and deployed a full-stack industrial calibration platform for instrument tags, calibration records, RBAC, and audit histories.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Containerized Node/Express backend with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Engineered a native Android companion application in Kotlin using Jetpack Compose, Material 3, CameraX, and ML Kit for QR/barcode scanning.</span>
                </li>
              </ul>
            </div>

            {/* Procurement Tracking System */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">Procurement Tracking System — Enterprise Procurement Workflow Platform</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://procurement-tracking-xg87.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn live"
                      aria-label="Procurement Tracking System Live App"
                    >
                      <span>LIVE APP</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn github"
                      aria-label="Procurement Tracking System GitHub Repository"
                    >
                      <Github size={12} />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">React • TypeScript • GraphQL • Apollo • Express • Prisma • PostgreSQL</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built a deployed procurement operations platform supporting purchase requests, approval workflows, vendor management, purchase orders, goods receiving, and multi-role RBAC.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Implemented GraphQL APIs with Apollo Server/Client, Prisma/PostgreSQL persistence, JWT auth, and resolver permission enforcement.</span>
                </li>
              </ul>
            </div>

            {/* Thriveward Funding Intelligence */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">Thriveward Funding Intelligence — Retrieval-Augmented Funding Intelligence Platform</strong>
                </div>
                <span className="doc-project-tech font-mono">TypeScript • Express • PostgreSQL • pgvector • OpenAI • RAG</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built a governed RAG pipeline spanning PDF document ingestion, deterministic page-bounded chunking, OpenAI embeddings, pgvector cosine retrieval, grounded evidence construction, and structured gpt-4o-mini analysis.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Engineered index-integrity controls using provider/model/configuration hashes and versioned indexes to prevent stale or incompatible embeddings from contaminating semantic retrieval.</span>
                </li>
              </ul>
            </div>

            {/* FieldTrack AI */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">FieldTrack AI — Edge Computing &amp; Sensor Telemetry Platform</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://github.com/Thee-Hector-Genaro-Pacheco/fieldtrack-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn github"
                      aria-label="FieldTrack AI GitHub Repository"
                    >
                      <Github size={12} />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">Raspberry Pi 5 • Python • FastAPI • Node • React • WebSockets</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built an edge-computing platform combining Python hardware services, GPS/NMEA parsing, PIR motion sensing, camera/computer-vision processing, and real-time React telemetry over WebSockets.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Production Client Work & Additional Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">PRODUCTION CLIENT WORK &amp; ADDITIONAL PROJECTS</h2>

            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">OC Water Features — Production Full-Stack Web Platform</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://www.ocwaterfeaturesinc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn live"
                      aria-label="OC Water Features Production Site"
                    >
                      <span>LIVE SITE</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">Next.js • TypeScript • Supabase • PostgreSQL • Vercel</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built and deployed a production business platform combining SEO, lead intake workflows, customer forms, administrative tooling, and persistent database-backed workflows.</span>
                </li>
              </ul>
            </div>

            <div className="additional-projects-card font-sans">
              <strong className="additional-label font-mono">Additional Engineering Repositories:</strong>
              <div className="additional-items">
                <div className="additional-item">
                  <strong>Pi Arcade OS</strong> <span className="text-muted">— Embedded Gaming Platform (Raspberry Pi • Python • Pygame • GPIO)</span>
                  <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" rel="noopener noreferrer" className="doc-link-btn live" aria-label="Pi Arcade OS Project Site">PROJECT SITE</a>
                  <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" rel="noopener noreferrer" className="doc-link-btn github" aria-label="Pi Arcade OS GitHub Repository">GITHUB</a>
                </div>
                <div className="additional-item">
                  <strong>E-Commerce Store</strong> <span className="text-muted">— Full-Stack GraphQL Store (React • GraphQL • MongoDB • AWS S3)</span>
                  <a href="https://github.com/Thee-Hector-Genaro-Pacheco/ecommerce-store" target="_blank" rel="noopener noreferrer" className="doc-link-btn github" aria-label="E-Commerce Store GitHub Repository">GITHUB</a>
                </div>
              </div>
            </div>
          </section>

          {/* Technical & Industrial Experience */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL &amp; INDUSTRIAL EXPERIENCE</h2>
            <div className="doc-experience-item">
              <div className="doc-exp-top">
                <div className="doc-exp-title-group">
                  <strong className="doc-exp-role">Instrumentation &amp; Controls Technician</strong> — <span className="doc-exp-company">Process Control &amp; Industrial Systems</span>
                </div>
                <span className="doc-exp-period font-mono">Field Engineering Experience</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation, PLC I/O, terminal blocks, relays, and industrial control systems across 480VAC, 120VAC, and 24VDC environments.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Applied systematic fault isolation while maintaining traceable calibration and maintenance documentation.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education & Professional Training */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">EDUCATION &amp; PROFESSIONAL TRAINING</h2>
            <div className="doc-edu-grid">
              <div className="doc-edu-item">
                <div className="doc-edu-top">
                  <strong>Western Governors University (WGU)</strong>
                  <span className="font-mono text-muted">In Progress (2026–Present)</span>
                </div>
                <span className="doc-edu-inst text-muted">B.S. Software Engineering</span>
              </div>
              <div className="doc-edu-item">
                <div className="doc-edu-top">
                  <strong>Palantir Technologies</strong>
                  <span className="font-mono text-muted">May 2026</span>
                </div>
                <span className="doc-edu-inst text-muted">Foundry &amp; AIP Training</span>
              </div>
              <div className="doc-edu-item">
                <div className="doc-edu-top">
                  <strong>Mirion Technologies</strong>
                  <span className="font-mono text-muted">March 2026</span>
                </div>
                <span className="doc-edu-inst text-muted">SU-890 iCAM Operations &amp; Maintenance (16.00 Continued Education Credits)</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
