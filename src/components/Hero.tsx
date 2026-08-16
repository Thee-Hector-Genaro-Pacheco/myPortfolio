import React, { useState } from 'react';
import { 
  ArrowDown, 
  Github, 
  Mail, 
  Cpu, 
  Layers, 
  Activity, 
  Radio, 
  ShieldCheck, 
  Cloud,
  Terminal,
  Database
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'systems'>('architecture');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span className="font-mono">Available for Software &amp; Cloud Engineering Roles</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">{personalInfo.name}</span>
            <span className="hero-headline">{personalInfo.tagline}</span>
          </h1>

          <p className="hero-description">
            I build software across web applications, cloud infrastructure (AWS / Vercel), AI platforms, IoT edge computing, and industrial technology. Bringing a physical-world systems mindset to scalable full-stack development.
          </p>

          <div className="hero-key-differentiator">
            <span className="differentiator-tag">
              <Cpu size={14} /> Full-Stack Software
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Cloud size={14} /> Cloud &amp; AWS Infrastructure
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Layers size={14} /> Industrial Controls
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Activity size={14} /> IoT &amp; Edge AI
            </span>
          </div>

          <div className="hero-ctas">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="btn btn-primary"
            >
              <span>View My Work</span>
              <ArrowDown size={16} />
            </button>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-outline"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Column: Factual Engineering Overview Panel */}
        <div className="hero-visual">
          <div className="telemetry-card">
            {/* Card Header */}
            <div className="telemetry-card-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="telemetry-tabs">
                <button
                  className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  Architecture Stack
                </button>
                <button
                  className={`tab-btn ${activeTab === 'systems' ? 'active' : ''}`}
                  onClick={() => setActiveTab('systems')}
                >
                  Engineering Systems
                </button>
              </div>
            </div>

            {/* Card Body */}
            {activeTab === 'architecture' ? (
              <div className="telemetry-card-body">
                <div className="system-node-row">
                  <div className="node-icon bg-cyan">
                    <Cloud size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">CalTrack Cloud Platform</span>
                    <span className="node-subtitle">Vercel Edge → AWS ECS Fargate → Amazon RDS</span>
                  </div>
                  <span className="node-badge green">LIVE APP</span>
                </div>

                <div className="node-connector">
                  <div className="connector-line"></div>
                </div>

                <div className="system-node-row">
                  <div className="node-icon bg-purple">
                    <Layers size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">Bridge AI Ingestion</span>
                    <span className="node-subtitle">React → Express → Prisma → PostgreSQL</span>
                  </div>
                  <span className="node-badge blue">ACTIVE</span>
                </div>

                <div className="node-connector">
                  <div className="connector-line"></div>
                </div>

                <div className="system-node-row">
                  <div className="node-icon bg-emerald">
                    <Radio size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">FieldTrack AI Edge Agent</span>
                    <span className="node-subtitle">RPi 5 → Python/FastAPI → Node/TS → React</span>
                  </div>
                  <span className="node-badge green">EDGE SYSTEM</span>
                </div>
              </div>
            ) : (
              <div className="telemetry-card-body">
                <div className="system-node-row">
                  <div className="node-icon bg-cyan">
                    <Cloud size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">CLOUD INFRASTRUCTURE</span>
                    <span className="node-subtitle">AWS ECS Fargate • Amazon RDS • ECR • Vercel</span>
                  </div>
                </div>

                <div className="system-node-row margin-top-sm">
                  <div className="node-icon bg-emerald">
                    <Cpu size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">EDGE &amp; EMBEDDED</span>
                    <span className="node-subtitle">Raspberry Pi 5 • Python FastAPI • GPIO • Linux</span>
                  </div>
                </div>

                <div className="system-node-row margin-top-sm">
                  <div className="node-icon bg-purple">
                    <Database size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">FULL-STACK WEB &amp; APIS</span>
                    <span className="node-subtitle">React • TypeScript • Node.js • Express • PostgreSQL</span>
                  </div>
                </div>

                <div className="system-node-row margin-top-sm">
                  <div className="node-icon bg-orange">
                    <Terminal size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">INDUSTRIAL CONTROLS</span>
                    <span className="node-subtitle">PLC I/O • 4–20 mA Loops • Instrument Calibration</span>
                  </div>
                </div>
              </div>
            )}

            {/* Card Footer */}
            <div className="telemetry-card-footer font-mono">
              <div className="footer-status font-mono">
                <ShieldCheck size={14} className="text-emerald" />
                <span>MULTI-DOMAIN ENGINEERING SYSTEMS</span>
              </div>
              <div className="footer-metrics font-mono">
                <span>FULL-STACK • CLOUD • EDGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
