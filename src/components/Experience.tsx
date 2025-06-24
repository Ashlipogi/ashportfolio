import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();
  const experiences = [
    {
      title: 'Photocopy Shop Assistant',
      company: 'Local Business',
      period: '2022 - Present',
      description: 'Assisted customers with photocopy, printing, and scanning needs. Ensured high-quality service and customer satisfaction.',
      achievements: [
        'Maintained excellent customer service standards',
        'Managed equipment maintenance and troubleshooting',
        'Processed high-volume orders efficiently'
      ]
    },
    {
      title: 'Web Developer',
      company: 'AIA Philippines',
      period: 'August 2024 - November 2024',
      description: 'Assisted in developing and maintaining the company website, improving user experience and functionality.',
      achievements: [
        'Worked with HTML, CSS, JavaScript, and PHP to build dynamic web pages',
        'Contributed to backend development using Laravel and managed databases',
        'Tested and debugged applications to ensure optimal performance'
      ]
    },
    {
      title: 'System Developer',
      company: 'T-Mobelli Kitchens & Closets Inc.',
      period: 'August 2024 - November 2024',
      description: 'Developed an automated system to streamline product management, including inventory, costing, and purchase order systems.',
      achievements: [
        'Utilized the Laravel framework to build and deploy the system locally for internal use',
        'Created user-friendly interfaces to simplify data entry and improve efficiency for employees',
        'Collaborated with the team to ensure smooth implementation and functionality'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made in various roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
