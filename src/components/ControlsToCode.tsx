import React from 'react';
import { controlsToCodeSteps } from '../data/portfolioData';
import { 
  GitCommit, 
  Cpu, 
  Activity, 
  Terminal, 
  Layers, 
  Network, 
  ArrowRight, 
  CheckCircle,
  Cloud 
} from 'lucide-react';
import './ControlsToCode.css';

export const ControlsToCode: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Activity':
        return <Activity size={22} />;
      case 'Terminal':
        return <Terminal size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'Cloud':
        return <Cloud size={22} />;
      case 'Network':
        return <Network size={22} />;
      default:
        return <Cpu size={22} />;
    }
  };

  return (
    <section className="controls-section" id="controls-to-code">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <GitCommit size={14} /> Engineering Progression
          </div>
          <h2 className="section-title">From Controls to Code</h2>
          <p className="section-description">
            My background in industrial instrumentation and process controls provided a rigorous foundation in physical systems, signal measurement, loop wiring, calibration, commissioning, and real-world troubleshooting. I apply that exact systems mindset to modern full-stack software and cloud infrastructure.
          </p>
        </div>

        {/* Advantage Banner */}
        <div className="advantage-banner">
          <div className="advantage-title font-mono">
            <span className="text-blue">THE SYSTEMS ADVANTAGE</span>
          </div>
          <div className="advantage-grid">
            <div className="advantage-item">
              <CheckCircle size={18} className="text-emerald" />
              <span><strong>Hardware Fault Isolation:</strong> Isolating root causes across software logic, cloud infrastructure, and physical signal loops.</span>
            </div>
            <div className="advantage-item">
              <CheckCircle size={18} className="text-emerald" />
              <span><strong>Deterministic Thinking:</strong> Designing state machines, database models, and AWS deployments with strict fail-safes and auditability.</span>
            </div>
            <div className="advantage-item">
              <CheckCircle size={18} className="text-emerald" />
              <span><strong>Production Resiliency:</strong> Building software ready for containerized AWS cloud infrastructure, edge networks, and physical environments.</span>
            </div>
          </div>
        </div>

        {/* Progression Stepper */}
        <div className="progression-container">
          {controlsToCodeSteps.map((step, idx) => (
            <React.Fragment key={step.stepNumber}>
              <div className="progression-card">
                <div className="step-header">
                  <div className="step-number-badge font-mono">
                    0{step.stepNumber}
                  </div>
                  <div className="step-icon-container">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <span className="step-subtitle font-mono">{step.subtitle}</span>
                  <p className="step-desc">{step.description}</p>
                  
                  <div className="step-skills">
                    {step.keySkills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {idx < controlsToCodeSteps.length - 1 && (
                <div className="progression-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
