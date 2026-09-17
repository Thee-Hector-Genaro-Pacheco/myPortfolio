import React from 'react';
import { Link } from 'react-router-dom';
import { clientWorkItems } from '../data/portfolioData';
import { Building2, Check, ExternalLink, Globe, ShieldCheck, Camera, ArrowRight } from 'lucide-react';
import './ClientWorkSection.css';

export const ClientWorkSection: React.FC = () => {
  return (
    <section className="client-work-section" id="client-work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Building2 size={14} /> Production Engineering
          </div>
          <h2 className="section-title">Real-World Client Work</h2>
          <p className="section-description">
            Production web platforms and embedded hardware systems engineered for real-world client operations—combining full-stack architecture, cloud databases, edge computing, Linux automation, and unattended kiosk reliability.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="client-grid">
          {clientWorkItems.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-card-header">
                <div className="client-identity">
                  <div className={`client-icon font-mono ${client.iconName === 'Camera' ? 'camera-icon' : ''}`}>
                    {client.iconName === 'Camera' ? <Camera size={20} /> : <Globe size={20} />}
                  </div>
                  <div>
                    <div className="client-title-row">
                      <h3 className="client-name">{client.clientName}</h3>
                      <span className="production-tag font-mono">
                        <ShieldCheck size={12} /> {client.tag || 'PRODUCTION CLIENT WORK'}
                      </span>
                    </div>
                    <span className="client-industry font-mono">{client.industry}</span>
                  </div>
                </div>
                <span className={`client-status-badge ${client.status.includes('Live') ? 'live' : 'active'}`}>
                  {client.status}
                </span>
              </div>

              <p className="client-description">{client.description}</p>

              {/* Deliverables Checklist */}
              <div className="client-deliverables">
                <span className="deliverables-heading font-mono">KEY PRODUCTION DELIVERABLES &amp; STACK</span>
                <ul className="deliverables-list">
                  {client.deliverables.map((deliv, idx) => (
                    <li key={idx}>
                      <Check size={14} className="text-cyan" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Actions */}
              <div className="client-footer">
                <div className="client-tech-stack">
                  {client.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="client-action-buttons">
                  {client.caseStudySlug && (
                    <Link
                      to={`/projects/${client.caseStudySlug}`}
                      className="btn btn-secondary btn-sm case-study-btn"
                      aria-label={`View case study for ${client.clientName}`}
                    >
                      <span>Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}

                  {client.liveUrl && (
                    <a
                      href={client.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm visit-site-btn"
                      aria-label={`Visit live website for ${client.clientName}`}
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
