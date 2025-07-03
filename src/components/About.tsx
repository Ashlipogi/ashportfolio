
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, BookOpen, Image } from 'lucide-react';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { label: 'Years of Study', value: '4+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '4+' },
  ];

  const certifications = [
    {
      title: 'Web Development (Full-Stack)',
      organization: 'Sto. Domingo Associates - AIA Philippines',
      duration: '600 hours',
      period: 'Aug - Nov 2025',
      type: 'On-the-Job Training',
      icon: BookOpen,
      image: '/imgs/cert/AIA Cert.png',
    },
    {
      title: 'HTML Essentials',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Technical Certification',
      icon: BookOpen,
      image: '/imgs/cert/HTML Essential Cert.jpg',
    },
    {
      title: 'JavaScript Essentials 1',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Programming Certification',
      icon: Award,
      image: '/imgs/cert/JavaScript Essential 1 Cert.jpg',
    },
    {
      title: 'JavaScript Essentials 2',
      organization: 'Cisco Networking Academy',
      period: 'Jul 2025',
      type: 'Advanced Programming',
      icon: Award,
      image: '/imgs/cert/JavaScript Essential 2 Cert.jpg',
    },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dynamic professional with a passion for learning and mastering new skills. 
              With a background in Bachelor of Science in Information Technology, I excel in 
              quickly grasping complex concepts and applying them to real-world scenarios.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in fast-paced environments and possess strong analytical skills and a 
              collaborative mindset to tackle challenges and deliver innovative solutions. 
              My experience spans from web development to database management and system optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white">Fast Learner</span>
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white">Team Player</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Certifications & Training
            </h3>
            <div className="w-16 h-1 bg-white/60 rounded-full mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Professional certifications and specialized training that demonstrate my commitment to continuous learning and technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5"
                >
                  {/* Certificate Image */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90">
                          {cert.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {cert.organization}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20">
                            {cert.type}
                          </span>
                          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20">
                            {cert.period}
                          </span>
                          {cert.duration && (
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/20">
                              {cert.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
