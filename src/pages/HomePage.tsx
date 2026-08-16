import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ControlsToCode } from '../components/ControlsToCode';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ClientWorkSection } from '../components/ClientWorkSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle cross-route scroll to section if state was passed
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="home-page">
      <Hero />
      <FeaturedProjects />
      <ControlsToCode />
      <SkillsSection />
      <ExperienceSection />
      <ClientWorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};
