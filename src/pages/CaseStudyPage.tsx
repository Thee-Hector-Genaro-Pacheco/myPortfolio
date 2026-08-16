import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { featuredProjects } from '../data/portfolioData';
import { 
  ArrowLeft, 
  Github, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  BookOpen, 
  Image as ImageIcon,
  ExternalLink,
  Cloud,
  Smartphone,
  Server,
  Lock,
  ArrowRight,
  Clock,
  Compass
} from 'lucide-react';
import './CaseStudyPage.css';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = featuredProjects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Hector Pacheco`;
    } else {
      document.title = 'Project | Hector Pacheco';
    }
    window.scrollTo(0, 0);
  }, [project, slug]);

  if (!project) {
    return (
      <div className="container not-found-case-study">
        <h2>Project Not Found</h2>
        <p>The requested project case study could not be located.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Return Home
        </Link>
      </div>
    );
  }

  const { caseStudy } = project;

  const getStatusClass = (status: string) => {
    if (status.includes('Live') || status.includes('Client')) return 'live';
    if (status.includes('Active')) return 'active';
    return 'embedded';
  };

  return (
    <div 
      className="case-study-page"
      style={{
        '--case-accent': project.accentColor,
        '--case-accent-bg': project.accentBg,
        '--case-accent-border': project.accentBorder
      } as React.CSSProperties}
    >
      <div className="container">
        {/* Back Link */}
        <button onClick={() => navigate(-1)} className="btn btn-outline btn-sm back-btn">
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>

        {/* Case Study Header */}
        <header className="case-study-header">
          <div className="header-meta">
            <span className="case-category font-mono">{project.category}</span>
            <span className={`case-status-badge ${getStatusClass(project.status)}`}>
              {project.status}
            </span>
          </div>

          <h1 className="case-title">{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>

          <div className="case-header-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm live-app-btn"
                aria-label={`Open ${project.title} live link`}
              >
                <span>{project.liveUrlLabel || 'View Live App'}</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Overview Box */}
        <section className="case-section overview-card">
          <h2 className="case-section-title font-mono">
            <Layers size={18} className="text-blue" /> PROJECT OVERVIEW
          </h2>
          <p className="overview-text">{caseStudy.overview}</p>
        </section>

        {/* Problem vs Solution Grid */}
        <section className="case-section problem-solution-grid">
          <div className="problem-card">
            <div className="card-tag red font-mono">THE PROBLEM</div>
            <h3>Engineering Challenge</h3>
            <p>{caseStudy.problem}</p>
          </div>

          <div className="solution-card">
            <div className="card-tag green font-mono">THE SOLUTION</div>
            <h3>Architectural Solution</h3>
            <p>{caseStudy.solution}</p>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="case-section architecture-section">
          <h2 className="case-section-title font-mono">
            <Cpu size={18} className="text-blue" /> SYSTEM ARCHITECTURE
          </h2>
          
          {/* Visual Cloud Flow for CalTrack */}
          {caseStudy.architecture.cloudStack && (
            <div className="cloud-visual-diagram">
              <div className="diagram-title font-mono">PRODUCTION AWS CLOUD ARCHITECTURE FLOW</div>
              
              <div className="flow-nodes">
                <div className="flow-node">
                  <div className="node-box">
                    <span className="node-type font-mono">CLIENT LAYER</span>
                    <strong className="node-name">Web Browser / Mobile</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-cyan">
                    <span className="node-type font-mono">VERCEL EDGE</span>
                    <strong className="node-name">{caseStudy.architecture.cloudStack.frontend}</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-purple">
                    <span className="node-type font-mono">AWS ECS FARGATE</span>
                    <strong className="node-name">{caseStudy.architecture.cloudStack.backend}</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-emerald">
                    <span className="node-type font-mono">AMAZON RDS</span>
                    <strong className="node-name">{caseStudy.architecture.cloudStack.database}</strong>
                  </div>
                </div>
              </div>

              <div className="diagram-services-grid font-mono">
                <div className="service-badge">
                  <Server size={14} className="text-cyan" />
                  <span>CONTAINERS: Amazon ECR</span>
                </div>
                <div className="service-badge">
                  <Lock size={14} className="text-purple" />
                  <span>SECRETS: AWS Secrets Manager &amp; KMS</span>
                </div>
                <div className="service-badge">
                  <Cloud size={14} className="text-blue" />
                  <span>NETWORKING: AWS VPC Subnets</span>
                </div>
              </div>
            </div>
          )}

          {/* Visual Layered Flow for FieldTrack AI */}
          {caseStudy.architecture.layeredStack && (
            <div className="cloud-visual-diagram">
              <div className="diagram-title font-mono">LAYERED EDGE-TO-WEB ARCHITECTURE</div>
              
              <div className="flow-nodes">
                <div className="flow-node">
                  <div className="node-box">
                    <span className="node-type font-mono">HARDWARE SENSORS</span>
                    <strong className="node-name">{caseStudy.architecture.layeredStack.hardware}</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-emerald">
                    <span className="node-type font-mono">PYTHON / FASTAPI</span>
                    <strong className="node-name">{caseStudy.architecture.layeredStack.edgeAgent}</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-cyan">
                    <span className="node-type font-mono">NODE / TS / OPENCV</span>
                    <strong className="node-name">{caseStudy.architecture.layeredStack.apiServices}</strong>
                  </div>
                </div>

                <ArrowRight size={18} className="flow-arrow" />

                <div className="flow-node">
                  <div className="node-box accent-purple">
                    <span className="node-type font-mono">REACT DASHBOARD</span>
                    <strong className="node-name">{caseStudy.architecture.layeredStack.webUI}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="architecture-card">
            <h3 className="arch-title">{caseStudy.architecture.title}</h3>
            <p className="arch-desc">{caseStudy.architecture.description}</p>

            <div className="arch-components-list">
              {caseStudy.architecture.components.map((comp, idx) => (
                <div key={idx} className="arch-component-item">
                  <div className="component-index font-mono">0{idx + 1}</div>
                  <span className="component-name">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Roadmap Section (if present) */}
        {caseStudy.roadmapPhases && caseStudy.roadmapPhases.length > 0 && (
          <section className="case-section engineering-roadmap-section">
            <h2 className="case-section-title font-mono">
              <Compass size={18} className="text-cyan" /> ENGINEERING ROADMAP (PLANNED PHASES)
            </h2>
            <div className="roadmap-phases-grid">
              {caseStudy.roadmapPhases.map((phase, idx) => (
                <div key={idx} className="roadmap-phase-card">
                  <div className="phase-header">
                    <span className="phase-tag font-mono">{phase.phase}</span>
                    <span className="phase-status font-mono">{phase.status}</span>
                  </div>
                  <h4 className="phase-title">{phase.title}</h4>
                  <p className="phase-desc">{phase.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mobile & Field Engineering Roadmap Section (if present) */}
        {caseStudy.mobileRoadmap && (
          <section className="case-section mobile-roadmap-section">
            <h2 className="case-section-title font-mono">
              <Smartphone size={18} className="text-cyan" /> {caseStudy.mobileRoadmap.title.toUpperCase()}
            </h2>
            <div className="mobile-roadmap-card">
              <div className="roadmap-header">
                <h3>Offline Field Technician Suite</h3>
                <span className="roadmap-status-badge font-mono">{caseStudy.mobileRoadmap.status}</span>
              </div>
              <p className="roadmap-desc">{caseStudy.mobileRoadmap.description}</p>

              <div className="roadmap-features-grid">
                {caseStudy.mobileRoadmap.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="roadmap-feature-item planned">
                    <Clock size={15} className="text-cyan" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Verified Implemented Key Features */}
        <section className="case-section features-tech-grid">
          <div className="features-card">
            <h2 className="case-section-title font-mono">
              <ShieldCheck size={18} className="text-emerald" /> VERIFIED IMPLEMENTED FEATURES
            </h2>
            <ul className="features-list">
              {caseStudy.keyFeatures.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-stack-card">
            <h2 className="case-section-title font-mono">
              <Wrench size={18} className="text-blue" /> TECHNOLOGIES USED
            </h2>
            <div className="case-tech-badges">
              {caseStudy.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="case-section challenges-section">
          <h2 className="case-section-title font-mono">
            <AlertTriangle size={18} className="text-orange" /> ENGINEERING CHALLENGES OVERCOME
          </h2>
          <div className="challenges-list">
            {caseStudy.engineeringChallenges.map((challenge, idx) => (
              <div key={idx} className="challenge-item">
                <div className="challenge-index font-mono">CHALLENGE {idx + 1}</div>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Built & What I Learned */}
        <section className="case-section build-learn-grid">
          <div className="build-card">
            <h2 className="case-section-title font-mono">
              <Wrench size={18} className="text-blue" /> WHAT I BUILT
            </h2>
            <ul className="build-list">
              {caseStudy.whatIBuilt.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="learn-card">
            <h2 className="case-section-title font-mono">
              <BookOpen size={18} className="text-purple" /> WHAT I LEARNED
            </h2>
            <ul className="learn-list">
              {caseStudy.whatILearned.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery Section - Renders ONLY when actual images are provided */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="case-section gallery-section">
            <h2 className="case-section-title font-mono">
              <ImageIcon size={18} className="text-blue" /> SYSTEM GALLERY &amp; SCREENSHOTS
            </h2>
            <div className="gallery-grid">
              {caseStudy.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item font-mono">
                  <img src={img.src} alt={img.alt} />
                  {img.caption && <p className="gallery-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
