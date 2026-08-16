import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Github, 
  Mail, 
  Cpu, 
  Layers, 
  Activity, 
  Radio, 
  ShieldCheck, 
  Cloud 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export const Hero: React.FC = () => {
  const [telemetryCount, setTelemetryCount] = useState(1048);
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
            <span className="font-mono">Available for Software & Cloud Engineering Roles</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">{personalInfo.name}</span>
            <span className="hero-headline">{personalInfo.tagline}</span>
          </h1>

          <p className="hero-description">
            I build software across web, cloud infrastructure, AI platforms, IoT edge computing, and industrial technology. Bringing physical-world systems thinking to scalable full-stack software development.
          </p>

          <div className="hero-key-differentiator">
            <span className="differentiator-tag">
              <Cpu size={14} /> Full-Stack Software
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Cloud size={14} /> Cloud & AWS Infrastructure
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Layers size={14} /> Industrial Controls
            </span>
            <span className="differentiator-divider">•</span>
            <span className="differentiator-tag">
              <Activity size={14} /> IoT & Edge AI
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

        {/* Right Column: Engineering Visual Panel */}
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
                  className={`tab-btn ${activeTab === 'telemetry' ? 'active' : ''}`}
                  onClick={() => setActiveTab('telemetry')}
                >
                  System Telemetry
                </button>
              </div>
            </div>

            {/* Card Body - Content View */}
            {activeTab === 'architecture' ? (
              <div className="telemetry-card-body">
                <div className="system-node-row">
                  <div className="node-icon bg-cyan">
                    <Cloud size={16} />
                  </div>
                  <div className="node-info">
                    <span className="node-title">CalTrack Cloud Platform</span>
                    <span className="node-subtitle">AWS ECS Fargate • RDS PostgreSQL • ECR • Vercel</span>
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
                    <span className="node-subtitle">PostgreSQL • Prisma • Express • Provenance</span>
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
                    <span className="node-title">FieldTrack AI Edge</span>
                    <span className="node-subtitle">Raspberry Pi 5 • OpenCV • WebSockets • GPS</span>
                  </div>
                  <span className="node-badge green">STREAMING</span>
                </div>
              </div>
            ) : (
              <div className="telemetry-card-body font-mono">
                <div className="telemetry-line">
                  <span className="text-muted">[00:00:01]</span>{' '}
                  <span className="text-emerald">AWS ECS</span> Container Tasks Healthy (Fargate)
                </div>
                <div className="telemetry-line">
                  <span className="text-muted">[00:00:02]</span>{' '}
                  <span className="text-cyan">STATUS</span> Amazon RDS PostgreSQL Operational
                </div>
                <div className="telemetry-line">
                  <span className="text-muted">[00:00:03]</span>{' '}
                  <span className="text-purple">SECRETS</span> AWS Secrets Manager Injected
                </div>
                <div className="telemetry-line">
                  <span className="text-muted">[LIVE]</span> Telemetry Frames:{' '}
                  <span className="text-bright">{telemetryCount}</span> | Latency: 4.2ms
                </div>
                <div className="telemetry-line">
                  <span className="text-muted">[STATUS]</span> Zero Dropped Packets | 100% Signal Integrity
                </div>
              </div>
            )}

            {/* Card Footer */}
            <div className="telemetry-card-footer font-mono">
              <div className="footer-status font-mono">
                <ShieldCheck size={14} className="text-emerald" />
                <span>FAULT TOLERANT CLOUD ARCHITECTURE</span>
              </div>
              <div className="footer-metrics font-mono">
                <span>PKTS: {telemetryCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
