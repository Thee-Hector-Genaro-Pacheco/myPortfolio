import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, experienceItems, skillCategories } from '../data/portfolioData';
import { 
  Download, 
  ArrowLeft, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import './ResumePage.css';

export const ResumePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page">
      <div className="container">
        {/* Header Bar */}
        <div className="resume-top-bar">
          <Link to="/" className="btn btn-outline btn-sm">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="resume-actions">
            <a
              href={personalInfo.resumePath}
              download="Hector_Pacheco_Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download Resume PDF"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* PDF Placeholder Configuration Banner */}
        <div className="resume-config-banner">
          <div className="banner-icon">
            <Info size={20} className="text-blue" />
          </div>
          <div className="banner-text">
            <h4 className="font-mono">RESUME FILE SETUP INSTRUCTIONS</h4>
            <p>
              To enable direct PDF download, place your compiled resume file at <code>public/resume.pdf</code> inside the project root. The button above and link targets will automatically serve the document.
            </p>
          </div>
        </div>

        {/* Structured Resume Document Preview */}
        <div className="resume-document">
          {/* Header */}
          <header className="resume-doc-header">
            <h1 className="doc-name">{personalInfo.name}</h1>
            <p className="doc-title">{personalInfo.title} • {personalInfo.subTitle}</p>
            <div className="doc-contact-row font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">PROFESSIONAL SUMMARY</h2>
            <p className="doc-text">{personalInfo.aboutText}</p>
          </section>

          {/* Experience */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL & FIELD EXPERIENCE</h2>
            {experienceItems.map((item) => (
              <div key={item.id} className="doc-experience-item">
                <div className="doc-exp-top">
                  <div className="doc-exp-title-group">
                    <strong className="doc-exp-role">{item.title}</strong> — <span className="doc-exp-company">{item.companyOrContext}</span>
                  </div>
                  <span className="doc-exp-period font-mono">{item.period}</span>
                </div>
                <p className="doc-exp-summary">{item.summary}</p>
                <ul className="doc-bullet-list">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills Overview */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">TECHNICAL SKILLS</h2>
            <div className="doc-skills-grid">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="doc-skill-group">
                  <strong className="doc-skill-cat-title">{cat.title}:</strong>{' '}
                  <span className="doc-skill-names">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="doc-section">
            <h2 className="doc-section-title font-mono">EDUCATION & TRAINING</h2>
            {personalInfo.education.map((edu, idx) => (
              <div key={idx} className="doc-edu-item">
                <div className="doc-edu-top">
                  <strong>{edu.degree}</strong> ({edu.field})
                  <span className="font-mono text-muted">{edu.status}</span>
                </div>
                <span className="doc-edu-inst text-muted">{edu.institution}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
