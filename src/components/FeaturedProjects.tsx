import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Layers, X, Info } from 'lucide-react';
import './FeaturedProjects.css';

export const FeaturedProjects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<string | null>(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} /> Featured Engineering
          </div>
          <h2 className="section-title">Systems & Full-Stack Projects</h2>
          <p className="section-description">
            A curated collection of full-stack web platforms, edge AI telemetry pipelines, industrial instrumentation tools, and embedded systems hardware builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGithubModal={(name) => setActiveModalProject(name)}
            />
          ))}
        </div>
      </div>

      {/* GitHub Repository Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <Info size={20} className="text-blue" />
                <h3>{activeModalProject} — Repository Note</h3>
              </div>
              <button className="modal-close" onClick={() => setActiveModalProject(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <p>
                The repository URL for <strong>{activeModalProject}</strong> is intentionally configured as private/configurable in the portfolio dataset.
              </p>
              <div className="modal-info-box font-mono">
                <code>src/data/portfolioData.ts -&gt; githubUrl</code>
              </div>
              <p className="text-muted">
                To update this link or make code publicly viewable, simply update the central project object in the dataset.
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-sm" onClick={() => setActiveModalProject(null)}>
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
