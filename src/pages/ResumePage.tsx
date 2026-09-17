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
            <p className="doc-title">Software Engineer | Full-Stack • Cloud &amp; APIs • Embedded Systems &amp; IoT • Deterministic Systems</p>
            <div className="doc-contact-row font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span>•</span>
              <a href="https://my-portfolio-sigma-lac-94.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">PROFESSIONAL SUMMARY</h2>
            <p className="doc-text">
              Software Engineer with a strong physical-world systems background spanning full-stack web applications, REST &amp; GraphQL APIs, AWS cloud infrastructure, PostgreSQL/Prisma data models, and Linux/Raspberry Pi embedded hardware integration. Experienced in delivering auditable, production-grade systems ranging from industrial calibration SaaS and real-estate investment analysis engines to custom kiosk client hardware solutions.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL SKILLS</h2>
            <div className="doc-skills-grid font-sans">
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Languages:</strong>{' '}
                <span className="doc-skill-names">TypeScript, JavaScript, Python, SQL, C++</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Frontend:</strong>{' '}
                <span className="doc-skill-names">React, Next.js, HTML5, CSS3, Responsive Design</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Backend &amp; APIs:</strong>{' '}
                <span className="doc-skill-names">Node.js, Express, REST APIs, GraphQL, Zod, FastAPI, WebSockets</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Data &amp; Storage:</strong>{' '}
                <span className="doc-skill-names">PostgreSQL, Prisma, Supabase, MongoDB</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Cloud &amp; DevOps:</strong>{' '}
                <span className="doc-skill-names">AWS (ECS Fargate, ECR, RDS, Secrets Manager), Docker, Linux, Vercel, Git/GitHub</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Systems &amp; IoT:</strong>{' '}
                <span className="doc-skill-names">Raspberry Pi 5, Linux systemd, GPIO, GPS/NMEA, Hardware/Software Integration</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Industrial Systems:</strong>{' '}
                <span className="doc-skill-names">PLC I/O, 4–20 mA Current Loops, Instrumentation Commissioning, Fault Isolation</span>
              </div>
              <div className="doc-skill-group">
                <strong className="doc-skill-cat-title">Platforms:</strong>{' '}
                <span className="doc-skill-names">Palantir Foundry, Palantir AIP</span>
              </div>
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">FEATURED ENGINEERING PROJECTS</h2>
            
            {/* CalTrack */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">CalTrack — Industrial Calibration SaaS Platform</strong>
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
                <span className="doc-project-tech font-mono">React • TypeScript • Node.js • Express • PostgreSQL • Prisma • Docker • AWS ECS Fargate</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Architected and deployed a full-stack industrial calibration platform for tracking instrument tags, calibration records, scheduled recertifications, and audit histories.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Containerized backend services with Docker on AWS ECS Fargate, ECR, RDS PostgreSQL, Secrets Manager, KMS, and Vercel for scalable industrial workflows.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Enforced strict validation schemas, multi-role RBAC, and automated integration test suites for high-reliability operational compliance.</span>
                </li>
              </ul>
            </div>

            {/* EstateOS */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">EstateOS — Real Estate Investment Intelligence Platform</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://my-portfolio-sigma-lac-94.vercel.app/projects/estateos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn live"
                      aria-label="EstateOS Case Study"
                    >
                      <span>CASE STUDY</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">Next.js • React • TypeScript • PostgreSQL • Prisma • Tailwind CSS • Automated Testing</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Engineered a full-stack real-estate investment analysis platform combining property/distress data ingestion with deterministic financial underwriting algorithms.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Implemented capital-stack modeling (debt, equity, senior/subordinate loans, LTV/CLTV) and investment strategy evaluation (Buy &amp; Hold, BRRRR, Fix &amp; Flip).</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built evidence-governed research workflows surfacing provenance-aware citations, assumptions, and risk guardrails backed by comprehensive test suites.</span>
                </li>
              </ul>
            </div>

            {/* Interactive Photo Booth System */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">Interactive Photo Booth System — Event Hardware &amp; Kiosk Integration</strong>
                  <div className="doc-project-links">
                    <a
                      href="https://my-portfolio-sigma-lac-94.vercel.app/projects/photo-booth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-link-btn live"
                      aria-label="Interactive Photo Booth Case Study"
                    >
                      <span>CASE STUDY</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <span className="doc-project-tech font-mono">Raspberry Pi 5 • Linux (Debian) • Python • gphoto2 • Canon DSLR • systemd • Touchscreen UI</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Engineered and deployed a custom commercial photo booth kiosk on Raspberry Pi 5 integrating high-resolution Canon DSLR capture via gphoto2 and Linux systemd.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built responsive touchscreen user workflows with automated session management, camera tethering, error recovery, peripheral integration, and automated service startup for reliable event operation.</span>
                </li>
              </ul>
            </div>

            {/* FieldTrack AI */}
            <div className="doc-project-item">
              <div className="doc-project-header">
                <div className="doc-project-title-group">
                  <strong className="doc-project-name">FieldTrack AI — Edge Telemetry &amp; Sensor Processing</strong>
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
                <span className="doc-project-tech font-mono">Raspberry Pi 5 • Python • FastAPI • Node.js • React • WebSockets • GPS/NMEA</span>
              </div>
              <ul className="doc-bullet-list">
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Built an edge-computing telemetry platform integrating Python sensor daemons, GPS/NMEA stream parsing, motion detection, and real-time React dashboard updates over WebSockets.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Production Client Work & Additional Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">ADDITIONAL ENGINEERING &amp; CLIENT WORK</h2>

            <div className="additional-projects-card font-sans">
              <div className="additional-items">
                <div className="additional-item">
                  <strong>Procurement Tracking System</strong> <span className="text-muted">— Full-Stack GraphQL Workflow Platform (React • TypeScript • GraphQL • Apollo • Express • Prisma • PostgreSQL)</span>
                  <a href="https://procurement-tracking-xg87.vercel.app/" target="_blank" rel="noopener noreferrer" className="doc-link-btn live" aria-label="Procurement Tracking System Live App">LIVE APP</a>
                  <a href="https://github.com/Thee-Hector-Genaro-Pacheco/procurementTracking" target="_blank" rel="noopener noreferrer" className="doc-link-btn github" aria-label="Procurement Tracking System GitHub Repository">GITHUB</a>
                </div>
                <div className="additional-item">
                  <strong>OC Water Features</strong> <span className="text-muted">— Production Web Platform (Next.js • TypeScript • Supabase • PostgreSQL • Vercel)</span>
                  <a href="https://www.ocwaterfeaturesinc.com/" target="_blank" rel="noopener noreferrer" className="doc-link-btn live" aria-label="OC Water Features Production Site">LIVE SITE</a>
                </div>
                <div className="additional-item">
                  <strong>Pi Arcade OS</strong> <span className="text-muted">— Embedded Gaming Platform (Raspberry Pi • Python • Pygame • GPIO)</span>
                  <a href="https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/" target="_blank" rel="noopener noreferrer" className="doc-link-btn live" aria-label="Pi Arcade OS Project Site">PROJECT SITE</a>
                  <a href="https://github.com/Thee-Hector-Genaro-Pacheco/pi-arcade-os" target="_blank" rel="noopener noreferrer" className="doc-link-btn github" aria-label="Pi Arcade OS GitHub Repository">GITHUB</a>
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
                  <span>Calibrated, commissioned, and troubleshot 4–20 mA process instrumentation, PLC I/O, relays, and industrial control circuits across 480VAC, 120VAC, and 24VDC environments.</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Applied systematic fault isolation, signal validation, and root-cause diagnosis in high-reliability operating environments with strict documentation compliance.</span>
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
