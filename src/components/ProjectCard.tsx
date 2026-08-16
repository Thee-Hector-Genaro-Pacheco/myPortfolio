import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Activity, Terminal, Shield, Layers, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onOpenGithubModal?: (projectName: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenGithubModal }) => {
  // Select icon based on slug
  const renderIcon = () => {
    switch (project.slug) {
      case 'caltrack':
        return <Shield size={20} />;
      case 'bridge-ai':
        return <Layers size={20} />;
      case 'fieldtrack-ai':
        return <Activity size={20} />;
      case 'pi-arcade-os':
        return <Terminal size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    if (!project.githubUrl) {
      e.preventDefault();
      if (onOpenGithubModal) {
        onOpenGithubModal(project.title);
      }
    }
  };

  return (
    <div 
      className="project-card"
      style={{
        '--card-accent': project.accentColor,
        '--card-accent-bg': project.accentBg,
        '--card-accent-border': project.accentBorder,
        '--card-accent-gradient': project.accentGradient
      } as React.CSSProperties}
    >
      {/* Top Banner / Identity Bar */}
      <div className="card-top-bar">
        <span className="project-category">{project.category}</span>
        <span className={`project-status-badge ${project.status.includes('Live') ? 'live' : ''}`}>
          {project.status}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="card-body">
        <div className="card-header">
          <div className="project-icon-wrapper">
            {renderIcon()}
          </div>
          <div className="project-title-group">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-subtitle">{project.subtitle}</span>
          </div>
        </div>

        <p className="project-description">{project.shortDescription}</p>

        {/* Tech Badges */}
        <div className="project-tech-stack">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="tech-badge font-mono">+{project.technologies.length - 6} more</span>
          )}
        </div>
      </div>

      {/* Card Footer / Action Links */}
      <div className="card-footer">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm live-app-btn"
            aria-label={`Open ${project.title} live application`}
          >
            <span>{project.liveUrlLabel || 'View Live App'}</span>
            <ExternalLink size={14} />
          </a>
        )}

        <Link to={`/projects/${project.slug}`} className="btn btn-secondary btn-sm case-study-btn">
          <span>Case Study</span>
          <ArrowRight size={14} />
        </Link>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm github-card-btn"
            aria-label={`View ${project.title} GitHub repository`}
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        ) : (
          <button
            onClick={handleGithubClick}
            className="btn btn-outline btn-sm github-card-btn placeholder"
            title="Repository status"
          >
            <Github size={14} />
            <span>Repo</span>
          </button>
        )}
      </div>
    </div>
  );
};
