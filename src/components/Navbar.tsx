import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Terminal, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  FileText, 
  ChevronRight,
  ChevronDown,
  Download,
  Layers,
  Server,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { resumeVariantsData, ResumeVariantId } from '../data/resumeData';
import { GitlabIcon } from './GitlabIcon';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const getVariantIcon = (id: ResumeVariantId) => {
    switch (id) {
      case 'general':
        return <Layers size={15} />;
      case 'backend-cloud':
        return <Server size={15} />;
      case 'embedded-iot':
        return <Cpu size={15} />;
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-icon">
            <Terminal size={18} className="terminal-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-name">{personalInfo.name}</span>
            <span className="logo-title">Systems & Software</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <button onClick={() => handleNavClick('projects')} className="nav-link">
            Projects
          </button>
          <button onClick={() => handleNavClick('controls-to-code')} className="nav-link">
            Controls to Code
          </button>
          <button onClick={() => handleNavClick('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => handleNavClick('experience')} className="nav-link">
            Experience
          </button>
          <button onClick={() => handleNavClick('client-work')} className="nav-link">
            Client Work
          </button>
          <button onClick={() => handleNavClick('about')} className="nav-link">
            About
          </button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">
            Contact
          </button>
        </nav>

        {/* Right Actions (Socials & Resume) */}
        <div className="navbar-actions">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitLab Profile"
            aria-label="View Hector Pacheco on GitLab"
          >
            <GitlabIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Resume Navigation Group */}
          <div className="resume-nav-group" ref={dropdownRef}>
            <Link 
              to="/resume" 
              className="btn btn-outline btn-sm resume-nav-btn"
              title="View General Software Engineer Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </Link>

            <button
              type="button"
              className={`btn btn-outline btn-sm resume-versions-btn ${dropdownOpen ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-label="Resume Versions Selector"
              title="View Tailored Resume Versions"
            >
              <span>Versions</span>
              <ChevronDown size={14} className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="resume-dropdown-menu" role="menu" aria-label="Resume Versions">
                <div className="resume-dropdown-header">
                  <span className="resume-dropdown-title">Tailored Resumes</span>
                  <span className="resume-dropdown-tag">1-Page ATS</span>
                </div>

                {(Object.keys(resumeVariantsData) as ResumeVariantId[]).map((vId) => {
                  const variant = resumeVariantsData[vId];
                  return (
                    <div key={variant.id} className="resume-dropdown-item">
                      <div className="resume-dropdown-item-top">
                        <div className="dropdown-item-icon">
                          {getVariantIcon(variant.id)}
                        </div>
                        <div className="dropdown-item-info">
                          <span className="dropdown-item-name">{variant.label}</span>
                          <span className="dropdown-item-badge">{variant.badge}</span>
                        </div>
                      </div>
                      <div className="resume-dropdown-actions">
                        <Link
                          to={`/resume?variant=${variant.id}`}
                          className="dropdown-action-view"
                          onClick={() => setDropdownOpen(false)}
                        >
                          View
                        </Link>
                        <a
                          href={variant.pdfPath}
                          download={variant.downloadFilename}
                          className="dropdown-action-download"
                          title={`Download ${variant.label} PDF`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <Download size={12} />
                          <span>PDF</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-container">
            <div className="mobile-menu-links">
              <button onClick={() => handleNavClick('projects')} className="mobile-nav-link">
                <span>Projects</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('controls-to-code')} className="mobile-nav-link">
                <span>Controls to Code</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('skills')} className="mobile-nav-link">
                <span>Skills</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('experience')} className="mobile-nav-link">
                <span>Experience</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('client-work')} className="mobile-nav-link">
                <span>Client Work</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('about')} className="mobile-nav-link">
                <span>About</span>
                <ChevronRight size={18} />
              </button>
              <button onClick={() => handleNavClick('contact')} className="mobile-nav-link">
                <span>Contact</span>
                <ChevronRight size={18} />
              </button>
              
              {/* Mobile Resume Section with All 3 Versions */}
              <div className="mobile-resume-group">
                <Link 
                  to="/resume" 
                  className="mobile-nav-link highlight" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Resume (General SWE)</span>
                  <FileText size={18} />
                </Link>

                <div className="mobile-resume-versions-label">Other Resume Versions:</div>
                
                {(Object.keys(resumeVariantsData) as ResumeVariantId[]).map((vId) => {
                  const variant = resumeVariantsData[vId];
                  return (
                    <div key={variant.id} className="mobile-resume-item">
                      <Link
                        to={`/resume?variant=${variant.id}`}
                        className="mobile-resume-item-title"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {getVariantIcon(variant.id)}
                        <span>{variant.label}</span>
                      </Link>
                      <a
                        href={variant.pdfPath}
                        download={variant.downloadFilename}
                        className="mobile-resume-dl"
                        title={`Download ${variant.label} PDF`}
                      >
                        <Download size={12} />
                        <span>PDF</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mobile-menu-footer">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" aria-label="GitHub Profile">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.gitlab} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" aria-label="View Hector Pacheco on GitLab">
                <GitlabIcon size={16} />
                <span>GitLab</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" aria-label="LinkedIn Profile">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
