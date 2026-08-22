import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Box, 
  Wrench, 
  Terminal,
  Check,
  Cloud,
  Smartphone
} from 'lucide-react';
import './SkillsSection.css';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} />;
      case 'Layout':
      case 'Smartphone':
        return <Smartphone size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'Cloud':
        return <Cloud size={20} />;
      case 'Box':
        return <Box size={20} />;
      case 'Wrench':
        return <Wrench size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === selectedCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Terminal size={14} /> Technical Competencies
          </div>
          <h2 className="section-title">Categorized Engineering Skills</h2>
          <p className="section-description">
            Organized across full-stack web software, native Android development, containerized AWS infrastructure, AI/RAG systems, relational data platforms, edge computing, and industrial instrumentation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skill-category-filters">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              className={`filter-btn ${selectedCategory === cat.title ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.title)}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div className="category-title-group">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="category-skills-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-item-left">
                      <Check size={14} className="text-blue" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {skill.tag && (
                      <span className="skill-tag font-mono">{skill.tag}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
