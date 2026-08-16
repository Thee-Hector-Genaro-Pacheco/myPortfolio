import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare 
} from 'lucide-react';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback generator for clean client handling
    const mailtoSubject = encodeURIComponent(formData.subject || 'Engineering Inquiry from Portfolio');
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <MessageSquare size={14} /> Contact
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            I’m open to software engineering opportunities, technical collaborations, and conversations around full-stack development, cloud infrastructure, AI, IoT, and embedded systems.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Action Card */}
            <div className="contact-card">
              <div className="contact-icon bg-blue font-mono">
                <Mail size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-label font-mono">PRIMARY EMAIL</span>
                <span className="contact-value">{personalInfo.email}</span>
              </div>
              <button 
                onClick={handleCopyEmail} 
                className="btn btn-secondary btn-sm copy-btn"
                title="Copy Email Address"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-icon bg-emerald font-mono">
                <MapPin size={20} />
              </div>
              <div className="contact-card-content">
                <span className="contact-label font-mono">LOCATION & REGION</span>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="contact-card social-card">
              <div className="social-column">
                <span className="contact-label font-mono">ENGINEERING PROFILES</span>
                <div className="social-links-group">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-desc">
              Fills your default email client with formatted message details.
            </p>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="font-mono">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="font-mono">YOUR EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="font-mono">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Software Engineering Inquiry / Project Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="font-mono">MESSAGE</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <Send size={16} />
                <span>Launch Mail Client</span>
              </button>

              {formSubmitted && (
                <p className="form-success-note text-emerald font-mono">
                  ✓ Opening mail client with your inquiry details...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
