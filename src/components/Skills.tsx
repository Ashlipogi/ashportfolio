
import { Code, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500', icon: Globe },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500', icon: Globe },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500', icon: Code },
        { name: 'PHP', level: 80, color: 'from-purple-500 to-indigo-500', icon: Code },
        { name: 'Python', level: 75, color: 'from-green-500 to-blue-500', icon: Code },
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Laravel', level: 85, color: 'from-red-500 to-pink-500' },
        { name: 'React.js', level: 80, color: 'from-cyan-500 to-blue-500' },
        { name: 'Bootstrap', level: 90, color: 'from-purple-500 to-violet-500' },
        { name: 'MySQL', level: 85, color: 'from-orange-500 to-amber-500' },
        { name: 'Git', level: 75, color: 'from-gray-500 to-slate-500' },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Database Management', level: 85, color: 'from-emerald-500 to-teal-500' },
        { name: 'Web Development', level: 90, color: 'from-indigo-500 to-purple-500' },
        { name: 'System Administration', level: 70, color: 'from-pink-500 to-rose-500' },
        { name: 'Technical Support', level: 80, color: 'from-violet-500 to-purple-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
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
            { name: 'HTML', color: 'text-orange-500', icon: Globe },
            { name: 'CSS', color: 'text-blue-500', icon: Globe },
            { name: 'JS', color: 'text-yellow-500', icon: Code },
          ].map((tech, index) => (
            <div
              key={index}
              className={`p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer group ${tech.color}`}
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
