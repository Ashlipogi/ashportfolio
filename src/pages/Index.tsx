import { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
// import Projects from '../components/Projects';
import Education from '../components/Education';
import CustomCursor from '@/components/CustomCursor';
import ContactMe from '../components/ContactMe';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

useEffect(() => {
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // prioritize largest visibility

      if (visibleSections.length > 0) {
        const topSection = visibleSections[0].target as HTMLElement;
        setActiveSection(topSection.id);
      }
    },
    {
      threshold: 0.1, // tweak as needed
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
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