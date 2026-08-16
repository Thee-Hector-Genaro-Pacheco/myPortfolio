import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';
import './FeaturedProjects.css';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} /> Featured Engineering
          </div>
          <h2 className="section-title">Systems &amp; Full-Stack Projects</h2>
          <p className="section-description">
            A curated collection of industrial SaaS platforms, AWS cloud deployments, edge AI telemetry pipelines, and embedded hardware builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
