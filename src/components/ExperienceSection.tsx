import React from 'react';
import { experienceItems } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './ExperienceSection.css';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={14} /> Technical History
          </div>
          <h2 className="section-title">Field & Engineering Experience</h2>
          <p className="section-description">
            Hands-on technical background demonstrating real-world hardware integration, field troubleshooting, and systems verification.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experienceItems.map((item) => (
            <div key={item.id} className="timeline-card">
              <div className="timeline-badge font-mono">
                <Briefcase size={14} />
                <span>{item.type}</span>
              </div>

              <div className="timeline-header">
                <div className="timeline-title-group">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-company">{item.companyOrContext}</span>
                </div>

                <div className="timeline-meta font-mono">
                  <div className="meta-item">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="meta-item">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="timeline-summary">{item.summary}</p>

              <div className="timeline-highlights">
                <h4 className="highlights-title font-mono">KEY RESPONSIBILITIES & FIELD ACHIEVEMENTS</h4>
                <ul className="highlights-list">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-tech-tags">
                {item.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
