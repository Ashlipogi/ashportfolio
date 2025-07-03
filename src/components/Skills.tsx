import { Code, Database, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML', level: 90, icon: FaHtml5  },
        { name: 'CSS', level: 90, icon: IoLogoCss3  },
        { name: 'JavaScript', level: 85, icon: DiJavascript  },
        { name: 'PHP', level: 80, icon: FaPhp  },
        { name: 'Python', level: 45, icon: FaPython  },
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Laravel', level: 90, icon: FaLaravel   },
        { name: 'React.js', level: 80, icon: FaReact  },
        { name: 'Bootstrap', level: 90, icon: FaBootstrap  },
        { name: 'MySQL', level: 85, icon: SiMysql  },
        { name: 'Git', level: 75, icon: FaGitAlt  },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Prompt Engineering', level: 90, icon:TbPrompt  },
        { name: 'Database Management', level: 85, icon:FaDatabase  },
        { name: 'Web Development', level: 90, icon:MdWeb  },
        { name: 'System Administration', level: 50, icon:GrSystem  },
        { name: 'Technical Support', level: 50, icon:FaTools  },
      ]
    }
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
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto animate-scale-in" />
          <p className="text-gray-400 max-w-2xl mt-4 mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Tools I'm Familiar With Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            Tools I'm Familiar With
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto animate-scale-in" />
          <div className="relative overflow-hidden mt-4">
            <div className="flex animate-slide-left-infinite space-x-8 whitespace-nowrap min-w-max">
              {duplicatedToolsData.map((tool, index) => (
                <div
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
