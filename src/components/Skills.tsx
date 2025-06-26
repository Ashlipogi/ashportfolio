
import { Code, Database, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML', level: 90, icon: Globe },
        { name: 'CSS', level: 90, icon: Globe },
        { name: 'JavaScript', level: 85, icon: Code },
        { name: 'PHP', level: 80, icon: Code },
        { name: 'Python', level: 45, icon: Code },
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'React.js', level: 80 },
        { name: 'Bootstrap', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Git', level: 75 },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Prompt Engineering', level: 90 },
        { name: 'Database Management', level: 85 },
        { name: 'Web Development', level: 90 },
        { name: 'System Administration', level: 50 },
        { name: 'Technical Support', level: 50 },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 px-4 bg-white/5 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-white text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-4 h-4 text-white" />}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Programming Icons */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          {[
            { name: 'HTML', icon: Globe },
            { name: 'CSS', icon: Globe },
            { name: 'JS', icon: Code },
          ].map((tech, index) => (
            <div
              key={index}
              className="p-4 rounded-full bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer group text-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <tech.icon className="w-8 h-8 group-hover:animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
