import { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

useEffect(() => {
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education'];
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
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default Index;