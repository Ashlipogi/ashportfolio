
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { label: 'Years of Study', value: '4+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '1+' },
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  );
};

export default About;
