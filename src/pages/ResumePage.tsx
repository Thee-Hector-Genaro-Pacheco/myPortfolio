import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import { 
  resumeVariantsData, 
  ResumeVariantId 
} from '../data/resumeData';
import { 
  Download, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Github,
  Layers,
  Server,
  Cpu
} from 'lucide-react';
import './ResumePage.css';

export const ResumePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialVariant = (searchParams.get('variant') as ResumeVariantId) || 'general';
  const [selectedVariant, setSelectedVariant] = useState<ResumeVariantId>(
    resumeVariantsData[initialVariant] ? initialVariant : 'general'
  );

  useEffect(() => {
    const variantFromUrl = searchParams.get('variant') as ResumeVariantId;
    if (variantFromUrl && resumeVariantsData[variantFromUrl] && variantFromUrl !== selectedVariant) {
      setSelectedVariant(variantFromUrl);
    }
  }, [searchParams, selectedVariant]);

  useEffect(() => {
    document.title = `${resumeVariantsData[selectedVariant].label} Resume | Hector Pacheco`;
    window.scrollTo(0, 0);
  }, [selectedVariant]);

  const handleSelectVariant = (variantId: ResumeVariantId) => {
    setSelectedVariant(variantId);
    setSearchParams({ variant: variantId });
  };

  const currentData = resumeVariantsData[selectedVariant];

  const getVariantIcon = (id: ResumeVariantId) => {
    switch (id) {
      case 'general':
        return <Layers size={18} />;
      case 'backend-cloud':
        return <Server size={18} />;
      case 'embedded-iot':
        return <Cpu size={18} />;
    }
  };

  return (
    <div className="resume-page">
      <div className="container">
        {/* Top Header Navigation Bar */}
        <div className="resume-top-bar">
          <Link to="/" className="btn btn-outline btn-sm">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="resume-actions">
            <a
              href={currentData.pdfPath}
              download={currentData.downloadFilename}
              className="btn btn-primary btn-sm"
              title={`Download ${currentData.label} PDF`}
            >
              <Download size={16} />
              <span>Download PDF ({currentData.badge})</span>
            </a>
          </div>
        </div>

        {/* Resume Focus / Variant Selector Card */}
        <section className="resume-variants-card" aria-label="Resume Variant Selector">
          <div className="resume-variants-header">
            <h2 className="variants-title">Select Resume Focus</h2>
            <p className="variants-subtitle">
              Choose an ATS-friendly single-page resume tailored for specific engineering role categories.
            </p>
          </div>

          <div className="resume-variants-grid">
            {(Object.keys(resumeVariantsData) as ResumeVariantId[]).map((variantId) => {
              const variant = resumeVariantsData[variantId];
              const isSelected = selectedVariant === variantId;

              return (
                <div
                  key={variant.id}
                  className={`resume-variant-card ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectVariant(variant.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectVariant(variant.id);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={`${variant.label} resume focus`}
                >
                  <div className="variant-card-top">
                    <span className="variant-badge">
                      {getVariantIcon(variant.id)}
                      <span style={{ marginLeft: '4px' }}>{variant.badge}</span>
                    </span>
                    <span className="variant-page-pill">1 Page ATS</span>
                  </div>

                  <h3 className="variant-name">{variant.label}</h3>

                  <p className="variant-target font-mono">
                    {variant.targetRoles.slice(0, 2).join(' • ')}
                  </p>

                  <div className="variant-card-actions">
                    <button
                      type="button"
                      className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectVariant(variant.id);
                      }}
                    >
                      {isSelected ? 'Viewing' : 'View Resume'}
                    </button>

                    <a
                      href={variant.pdfPath}
                      download={variant.downloadFilename}
                      className="btn btn-outline btn-sm variant-download-btn"
                      title={`Download ${variant.label} PDF`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download size={14} />
                      <span>PDF</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Structured Web Resume Document */}
        <div className="resume-document">
          {/* Header */}
          <header className="resume-doc-header">
            <h1 className="doc-name">{personalInfo.name}</h1>
            <p className="doc-title">{currentData.docTitle}</p>
            <div className="doc-contact-row font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span>•</span>
              <a href="https://my-portfolio-sigma-lac-94.vercel.app" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                LinkedIn
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">PROFESSIONAL SUMMARY</h2>
            <p className="doc-text">{currentData.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL SKILLS</h2>
            <div className="doc-skills-grid font-sans">
              {currentData.skills.map((skill, idx) => (
                <div key={idx} className="doc-skill-group">
                  <strong className="doc-skill-cat-title">{skill.label}</strong>{' '}
                  <span className="doc-skill-names">{skill.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">FEATURED ENGINEERING PROJECTS</h2>

            {currentData.featuredProjects.map((project, idx) => (
              <div key={idx} className="doc-project-item">
                <div className="doc-project-header">
                  <div className="doc-project-title-group">
                    <strong className="doc-project-name">
                      {project.title} — {project.subtitle}
                    </strong>
                    {project.period && (
                      <span className="doc-project-period font-mono">{project.period}</span>
                    )}
                    <div className="doc-project-links">
                      {project.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`doc-link-btn ${link.type === 'live' ? 'live' : link.type === 'github' ? 'github' : 'live'}`}
                          aria-label={`${project.title} ${link.label}`}
                        >
                          {link.type === 'github' ? <Github size={12} /> : null}
                          <span>{link.label}</span>
                          {link.type !== 'github' ? <ExternalLink size={12} /> : null}
                        </a>
                      ))}
                    </div>
                  </div>
                  <span className="doc-project-tech font-mono">{project.tech}</span>
                </div>
                <ul className="doc-bullet-list">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Additional Projects */}
          {currentData.additionalProjects && currentData.additionalProjects.length > 0 && (
            <section className="doc-section">
              <h2 className="doc-section-title font-mono">ADDITIONAL ENGINEERING &amp; CLIENT WORK</h2>
              <div className="additional-projects-card font-sans">
                <div className="additional-items">
                  {currentData.additionalProjects.map((addProj, idx) => (
                    <div key={idx} className="additional-item">
                      <strong>{addProj.title}</strong>{' '}
                      <span className="text-muted">— {addProj.desc}</span>
                      {addProj.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`doc-link-btn ${link.type === 'live' ? 'live' : 'github'}`}
                          aria-label={`${addProj.title} ${link.label}`}
                        >
                          {link.type === 'github' ? <Github size={12} /> : null}
                          <span>{link.label}</span>
                          {link.type !== 'github' ? <ExternalLink size={12} /> : null}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Technical & Industrial Experience */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL &amp; INDUSTRIAL EXPERIENCE</h2>
            {currentData.experience.map((exp, idx) => (
              <div key={idx} className="doc-experience-item">
                <div className="doc-exp-top">
                  <div className="doc-exp-title-group">
                    <strong className="doc-exp-role">{exp.role}</strong> —{' '}
                    <span className="doc-exp-company">{exp.company}</span>
                  </div>
                  <span className="doc-exp-period font-mono">{exp.period}</span>
                </div>
                <ul className="doc-bullet-list">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education & Professional Training */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">EDUCATION &amp; PROFESSIONAL TRAINING</h2>
            <div className="doc-edu-grid">
              {currentData.education.map((edu, idx) => (
                <div key={idx} className="doc-edu-item">
                  <div className="doc-edu-top">
                    <strong>{edu.institution}</strong>
                    <span className="font-mono text-muted">{edu.dateOrStatus}</span>
                  </div>
                  <span className="doc-edu-inst text-muted">{edu.credential}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
