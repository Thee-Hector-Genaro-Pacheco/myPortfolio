import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, GraduationCap, Compass, ShieldCheck, Award } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  // Partition education data cleanly into Academic/AI Training vs Technical/Industrial Training
  const primaryEducation = personalInfo.education.slice(0, 2);
  const technicalTraining = personalInfo.education.slice(2);

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <User size={14} /> Background &amp; Philosophy
          </div>
          <h2 className="section-title">About Hector Pacheco</h2>
          <p className="section-description">
            Software Engineer building software across web, cloud, AI, native mobile, IoT, and real-world hardware.
          </p>
        </div>

        {/* Upper Two-Column Layout */}
        <div className="about-grid">
          {/* Left Column: Bio & Core Principles */}
          <div className="about-bio-column">
            <div className="bio-card">
              <h3 className="bio-card-title">Engineering Mindset</h3>
              <div className="bio-paragraphs">
                {personalInfo.aboutText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Principles Cards */}
            <div className="principles-section">
              <h4 className="principles-header font-mono">
                <Compass size={16} className="text-blue" /> CORE ENGINEERING PRINCIPLES
              </h4>
              <div className="principles-grid">
                {personalInfo.corePrinciples.map((principle, idx) => (
                  <div key={idx} className="principle-card">
                    <div className="principle-icon">
                      <ShieldCheck size={18} className="text-cyan" />
                    </div>
                    <div>
                      <h5 className="principle-title">{principle.title}</h5>
                      <p className="principle-desc">{principle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Education & AI Platform Training */}
          <div className="about-education-column">
            <div className="education-card-header font-mono">
              <GraduationCap size={18} className="text-purple" />
              <span>EDUCATION &amp; AI TRAINING</span>
            </div>

            <div className="education-list">
              {primaryEducation.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <div className="edu-top">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-status font-mono">
                      {edu.period ? `${edu.status} (${edu.period})` : edu.status}
                    </span>
                  </div>
                  <span className="edu-field font-mono">{edu.field}</span>
                  <span className="edu-institution">{edu.institution}</span>

                  <ul className="edu-highlights">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Full-Width Section: Professional & Technical Training */}
        {technicalTraining.length > 0 && (
          <div className="about-training-section">
            <h4 className="principles-header font-mono margin-bottom-md">
              <Award size={16} className="text-emerald" /> PROFESSIONAL &amp; TECHNICAL TRAINING
            </h4>

            <div className="training-grid">
              {technicalTraining.map((item, idx) => (
                <div key={idx} className="training-card">
                  <div className="training-card-top">
                    <h5 className="training-title">{item.degree}</h5>
                    <span className="training-status font-mono">{item.status}</span>
                  </div>
                  <span className="training-field font-mono">{item.field}</span>
                  <span className="training-institution">{item.institution}</span>

                  <ul className="training-highlights">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
