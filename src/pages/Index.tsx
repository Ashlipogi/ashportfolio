import { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import CustomCursor from '@/components/CustomCursor';
import ContactMe from '../components/ContactMe';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

useEffect(() => {
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const sectionElements = sections
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  const handleScroll = () => {
    let currentSection = sections[0];
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) { // 100px offset for navbar
        currentSection = section.id;
      }
    }
    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // set on mount

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      {/* <CustomCursor activeSection={activeSection} /> */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <ContactMe />
      </div>
    </div>
  );
};

export default Index;