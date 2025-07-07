
import { useState, useEffect, useRef } from 'react';
import { Award, BookOpen } from 'lucide-react';
import CertificationCard from './CertificationCard';
import { useIsMobile } from '../hooks/use-mobile';

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

  const stats = [
    { label: 'Years of Study', value: '4+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '5+' },
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
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm a dynamic professional with a passion for learning and mastering new skills. 
              With a background in Bachelor of Science in Information Technology, I excel in 
              quickly grasping complex concepts and applying them to real-world scenarios.
            </p>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I thrive in fast-paced environments and possess strong analytical skills and a 
              collaborative mindset to tackle challenges and deliver innovative solutions. 
              My experience spans from web development to database management and system optimization.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {['Problem Solver', 'Fast Learner', 'Team Player'].map((skill, index) => (
                <div 
                  key={skill}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full hover:from-white/20 hover:to-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white text-sm md:text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl hover:border-white/30 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

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

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                {...cert}
                index={index}
              />
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
