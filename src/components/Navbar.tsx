import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Terminal, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  FileText, 
  ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
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
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <Link to="/resume" className="btn btn-outline btn-sm resume-nav-btn">
            <FileText size={15} />
            <span>Resume</span>
          </Link>
          
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
              <Link 
                to="/resume" 
                className="mobile-nav-link highlight" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>View Resume</span>
                <FileText size={18} />
              </Link>
            </div>
            
            <div className="mobile-menu-footer">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
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
