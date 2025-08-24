import { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaPhp, FaPython, FaLaravel, FaReact, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import SpotlightCard from './SpotlightCard';

const techStack = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: IoLogoCss3 },
  { name: 'JavaScript', icon: DiJavascript },
  { name: 'PHP', icon: FaPhp },
  { name: 'Python', icon: FaPython },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'React.js', icon: FaReact },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const toolsData = [
    { 
      name: 'Visual Studio Code', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    { 
      name: 'XAMPP', 
      image: 'imgs/XAMPP_logo.svg.png'
    },
{ 
      name: 'Microsoft Office', 
      image: 'imgs/microsoft-office3327-removebg-preview.png'
    },
    { 
      name: 'Canva', 
      image: 'imgs/image2.webp'
    },
    { 
      name: 'ChatGPT', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    },
    { 
      name: 'Gmail', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'
    },
    { 
      name: 'Google Drive', 
      image: 'imgs/google-drive-logo-removebg-preview.png' 
    },
    { 
      name: 'GitHub', 
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
{
  name: 'Supabase',
  image: 'imgs/0_QzPzYLTNRX7p5Rsl.jpg'
},

    { 
      name: 'AnyDesk', 
      image: 'imgs/images__1_-removebg-preview.png'
    },
{ 
  name: 'Vercel', 
  image: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png'
},
{ 
  name: 'Cpanel', 
  image: '/imgs/cpanel-removebg-preview (1).png'
},
{ 
  name: 'FileZilla', 
  image: '/imgs/filezilla-removebg-preview (2).png'
},
{ 
  name: 'Laravel Cloud', 
  image: '/imgs/image-removebg-preview (2).png'
},
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedToolsData = [...toolsData, ...toolsData];

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className={`py-20 px-4 transition-opacity duration-700 ${
        visible ? 'animate-fade-in' : 'animate-fade-out'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto" />
          <p className="text-gray-400 max-w-2xl mt-4 mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {techStack.map((tech, idx) => (

             <SpotlightCard>
            <div key={idx} className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <tech.icon className="w-12 h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-gray-300 text-center font-medium">{tech.name}</span>
            </div>
              </SpotlightCard>
          ))}
        </div>
 
        {/* Tools I'm Familiar With Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            Tools I'm Familiar With
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto" />
          <div className="relative overflow-hidden mt-4">
            <div className="flex animate-slide-left-infinite space-x-8 whitespace-nowrap min-w-max">
              {duplicatedToolsData.map((tool, index) => (
                <SpotlightCard
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6 w-32 h-32 hover:bg-white/20 transition-all duration-300 group"
                >
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className={`object-contain mb-2 group-hover:scale-110 transition-transform duration-300 ${
                      tool.name === 'XAMPP'
                        ? 'w-10 h-10'
                        : tool.name === 'Microsoft Office' || tool.name === 'Canva'
                        ? 'w-20 h-20'
                        : 'w-12 h-12'
                    }`}
                  />
                  <span className="text-xs text-gray-300 text-center font-medium">
                    {tool.name}
                  </span>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
