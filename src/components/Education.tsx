
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();
  const educationData = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Caraga State University',
      location: 'Cabadbaran City',
      period: '2021-2025',
      status: 'Graduated',
      description: 'Specialized in software development, database management, and information systems.',
      achievements: [
        'Completed thesis on web application development',
      ]
    },
    {
      degree: 'Senior High School (Computer System Services)',
      school: 'National Senior High School',
      location: 'Cabadbaran City',
      period: '2019-2021',
      status: 'Completed',
      description: 'Focused on Computer System Services(CSS) track, gaining hands-on experience in computer hardware, and networking before pursuing further studies in IT.',
      achievements: [
        'With Honor roll student',
      ]
    },
    {
      degree: 'Junior High School',
      school: 'National High School',
      location: 'Cabadbaran City',
      period: '2015-2018',
      status: 'Completed',
      description: 'Built strong foundation in mathematics, science, and early exposure to computer studies.',
      achievements: [
        'Honor roll Student',
        'Participated in Regional Festival of Talents',
      ]
    }
  ];

  return (
    <section 
      id="education" 
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
            Education
          </h2>
          <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that drives my passion for technology
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium text-lg">{edu.school}</p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white">
                      {edu.period}
                    </span>
                    <span className="inline-block px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-white">
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-white/10 border border-white/20 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
            <p className="text-gray-400 mb-6">
              Interested in collaborating or learning more about my work? I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=villanuevajohn519@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                title="Email"
              >
                <FaEnvelope size={20} /> Gmail
              </a>
              <a
                href="tel:09478294412"
                className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                title="Call"
              >
                <FaPhone size={20} /> Call
              </a>
              <a
                href="https://www.facebook.com/AZHLEEH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                title="Facebook"
              >
                <FaFacebook size={20} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/ashzyed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                title="Instagram"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
          <footer className="w-full py-6 mt-10 -mb-10 flex justify-center">
            <div className="w-full max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-xl text-center text-gray-300 shadow-lg transition-all duration-300 hover:border-white/30">
              <span className="block py-4 px-6 text-sm md:text-base font-medium">
                © 2025 John Ashley Villanueva. All Rights Reserved.
              </span>
            </div>
          </footer>
      </div>
    </section>
  );
};

export default Education;

