import { useState, useEffect, useRef } from 'react';
import { Award, BookOpen } from 'lucide-react';
import CertificationCard from './CertificationCard';
import { useIsMobile } from '../hooks/use-mobile';
import SpotlightCard from './SpotlightCard';
import Stack from './Stack';

const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: isMobile ? 0.1 : 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [isMobile]);

  const stackImages = [
    { id: 1, img: "/imgs/stack/1.jpg" },
    { id: 2, img: "/imgs/stack/2.jpg" },
    { id: 3, img: "/imgs/stack/3.jpg" },
    { id: 4, img: "/imgs/stack/4.jpg" },
    { id: 5, img: "/imgs/stack/5.jpg" },
    { id: 6, img: "/imgs/stack/6.jpg" },
    { id: 7, img: "/imgs/stack/7.jpg" }
  ];

  const certifications = [
    {
      title: 'HTML Essentials',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Web Development Certification',
      icon: BookOpen,
      image: '/imgs/cert/HTML Essential Cert.jpg',
      link: 'https://www.credly.com/badges/69f8b5cb-05a2-42df-964b-90ea81e51e05',
    },
    {
      title: 'CSS Essentials',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Web Development Certification',
      icon: BookOpen,
      image: '/imgs/cert/CSS Essentials.jpg',
      link: 'https://www.credly.com/badges/79672d10-24af-4588-a0a9-e533095071d1',
    },
    {
      title: 'JavaScript Essentials 1',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Programming Certification',
      icon: Award,
      image: '/imgs/cert/JavaScript Essential 1 Cert.jpg',
      link: 'https://www.credly.com/badges/aa1dfaea-5b2f-4f19-803a-d3369bbe5660',
    },
    {
      title: 'JavaScript Essentials 2',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Programming Certification',
      icon: Award,
      image: '/imgs/cert/JavaScript Essential 2 Cert.jpg',
      link: 'https://www.credly.com/badges/c6689405-2f10-4bb3-aeed-1a2cbf016d66',
    },
    {
      title: 'Web Development (Full-Stack)',
      organization: 'Sto. Domingo Associates - AIA Philippines',
      duration: '600 hours',
      period: 'Aug - Nov 2025',
      type: 'On-the-Job Training',
      icon: BookOpen,
      image: '/imgs/cert/AIA Cert.png',
    },
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className={`min-h-screen pt-32 pb-20 px-4 transition-opacity duration-700 ${
        visible ? 'animate-fade-in' : 'animate-fade-out'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <p
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              style={{ textAlign: 'justify' }}
            >
              I'm a passionate mobile app and web developer with a Bachelor of Science in Information Technology (BSIT) degree and hands-on experience using React Native (Expo), React with TypeScript, Tailwind CSS, Laravel, PHP, and SQLite. I specialize in building end-to-end solutions — from sleek user interfaces to back-end systems like inventory, costing, and purchase order tools. Whether it's a business automation app or a responsive website, I deliver clean, scalable code and modern UI/UX design. I thrive on challenges and love turning ideas into fully functional, real-world applications.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {['Problem Solver', 'Fast Learner', 'Team Player'].map((skill, index) => (
                <SpotlightCard 
                  key={skill}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full hover:from-white/20 hover:to-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white text-sm md:text-base">{skill}</span>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 350, height: 300 }}
              cardsData={stackImages}
            />
          </div>
        </div>

        {/* Certifications Section */}
{/* Certifications Section */}
<div className="mt-16 md:mt-20">
  <div className="text-center mb-8 md:mb-12">
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
      Certifications & Training
    </h3>
    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full mx-auto" />
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
      Professional certifications and specialized training that demonstrate my commitment to continuous learning and technical excellence.
    </p>
  </div>

  {/* Modified grid to match Work Experience style */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {certifications.map((cert, index) => (
      <SpotlightCard
        key={index}
        className="group relative p-0 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Certification Image */}
        {cert.image && (
          <div className="h-48 w-full overflow-hidden rounded-t-xl">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6">
          {/* Title and Organization */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
            <p className="text-gray-300 font-medium">{cert.organization}</p>
          </div>

          {/* Type and Duration */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <cert.icon className="w-4 h-4" />
            <span>{cert.type}</span>
            {cert.duration && <span>• {cert.duration}</span>}
          </div>

          {/* Skills/Topics Covered - Using type as fallback */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[cert.type, ...(cert.skills || [])].slice(0, 4).map((skill, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom section with period and button */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-xs text-gray-400">
              {cert.period}
            </span>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all text-sm flex items-center gap-1"
              >
                <span>View</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    ))}
  </div>

  {/* Call to action */}
  <div className="text-center mt-8 md:mt-12">
    <p className="text-gray-400 text-xs md:text-sm">
      Click on certification cards to view official credentials
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;