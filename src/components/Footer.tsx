import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Github, Linkedin, ShieldCheck } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <Terminal size={16} className="text-blue" />
            <span className="footer-name">{personalInfo.name}</span>
          </div>
          <p className="footer-tagline">
            Software Engineer • Full-Stack • AI • IoT • Embedded Systems
          </p>
        </div>

        <div className="footer-right">
          <div className="system-status font-mono">
            <span className="status-dot"></span>
            <ShieldCheck size={14} className="text-emerald" />
            <span>PORTFOLIO V1 • STABLE</span>
          </div>

          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="footer-copyright font-mono">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
