import { useState, useEffect, useRef } from 'react';
import { Code, ArrowDown,Github,Linkedin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const [nameText, setNameText] = useState('');
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useIsMobile();
    const heroRef = useRef(null);
   const [visible, setVisible] = useState(false);
useEffect(() => {
  const names = ["John Ashley Villanueva"];
  let nameIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeName = () => {
    const currentName = names[nameIndex];
    const updatedText = isDeleting
      ? currentName.slice(0, charIndex--)
      : currentName.slice(0, charIndex++);

    setNameText(updatedText);

    if (!isDeleting && charIndex === currentName.length + 1) {
      setTimeout(() => isDeleting = true, 1000); // wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      nameIndex = (nameIndex + 1) % names.length;
    }

    setTimeout(typeName, isDeleting ? 50 : 100);
  };

  typeName();
}, []);

useEffect(() => {
const titles = [
  "Aspiring Web Developer",
  "Web Design Learner",
  "Frontend Enthusiast",
  "Backend Beginner"
];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentTitle = titles[titleIndex];
    const updatedText = isDeleting
      ? currentTitle.slice(0, charIndex--)
      : currentTitle.slice(0, charIndex++);

    setText(updatedText);

    if (!isDeleting && charIndex === currentTitle.length + 1) {
      setTimeout(() => isDeleting = true, 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  };

  type();
}, []);
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
  id="hero"
  ref={heroRef}
  className={`min-h-screen flex items-center justify-center relative px-4 transition-opacity duration-700 ${
    isMobile ? 'pt-20 pb-16' : ''
  } ${visible ? 'animate-fade-in' : 'animate-fade-out'}`}
>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Left Side Content */}
          <div className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 z-20 max-w-md">
            <div className={`text-left space-y-4 transition-all duration-700 ${visible ? 'animate-fade-in-left' : 'animate-fade-out-left'}`}>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">Available for work</span>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-400 mb-2">Hey there! I'm</h3>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight min-h-[3.5rem]">
                <span>{nameText}</span>
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </h1>

              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Crafting digital experiences with clean code and innovative solutions
              </p>
            </div>
          </div>

          {/* Center Photo with Shape Background */}
          <div className="flex justify-center items-center relative">
            {/* Large circular background shape */}
            <div className="absolute w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 animate-glow-pulse"></div>
            
            {/* Secondary circular accent */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-white/20 animate-glow-pulse"></div>
            
            {/* Photo container */}
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500">
<img 
  src="/imgs/144d392c-83e4-4ab9-8bf8-835966cd8bbe.png" 
  alt="John Ashley Villanueva - Software Engineer"
  className="w-max h-max object-cover object-center -mt-10 ml-2"
/>

              </div>
              
              {/* Floating accent dots */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
              <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-white/70 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 max-w-md">
            <div className={`text-right space-y-4 transition-all duration-700 ${visible ? 'animate-fade-in-right' : 'animate-fade-out-right'}`}>

              <div className="space-y-2">
                <div className="text-2xl md:text-4xl text-white font-bold min-h-[2.5rem]">
                  <span>{text}</span>
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </div>
                <div className="gap-3">
                <p className="text-gray-400 text-sm">
                  Bachelor of Science in Information Technology graduate
                </p>
                <p className="text-gray-400 text-sm">
                with expertise in web development and modern frameworks.
                </p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-3">
                <button 
                  onClick={scrollToExperience}
                  className="px-6 py-2 bg-white md:w-[350px] rounded-lg border border-black text-black font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm"
                >
                  View My Work
                </button>
                <a
                  href="/Villanueva, John Ashley D. CV2Resume.pdf"
                  download
                  className="px-6 py-2 border md:w-[350px] rounded-lg border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-center text-sm"
                >
                  Download CV
                </a>
              </div>
              
<div className="flex items-center justify-end gap-4 mt-6">
  <a
    href="https://github.com/Ashlipogi"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-white rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
    aria-label="GitHub"
  >
    <Github className="w-6 h-6" />
  </a>

  <a
    href="https://www.linkedin.com/in/john-ashley-villanueva-29b607265"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-white rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-6 h-6" />
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300">Available for work</span>
          </div>
          
          {/* Photo with Background Effects */}
          <div className="relative flex justify-center items-center mb-6">
            {/* Background circles */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 animate-pulse"></div>
            <div className="absolute w-56 h-56 rounded-full border-2 border-white/20 animate-glow-pulse"></div>
            
            {/* Photo container */}
            <div className="relative z-10">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src="/imgs/144d392c-83e4-4ab9-8bf8-835966cd8bbe.png" 
                  alt="John Ashley Villanueva - Software Engineer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating accent dots */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
              <div className="absolute -bottom-4 -left-4 w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
          
          {/* Name and Introduction */}
          <div className="space-y-3">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Hey there! I'm</h3>
            <h1 className="text-2xl font-bold text-white leading-tight min-h-[2.5rem]">
              <span>{nameText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h1>

            </div>
            
            {/* Animated Title */}
            <div className="text-xl text-white font-bold min-h-[1.5rem]">
              <span>{text}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>
            
            <p className="text-gray-400 text-sm px-4 leading-relaxed">
              Bachelor of Science in Information Technology graduate with expertise in web development and modern frameworks.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full px-4 max-w-sm">
            <button 
              onClick={scrollToExperience}
              className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 text-sm"
            >
              View My Work
            </button>
            <a
              href="/Villanueva, John Ashley D. CV2Resume.pdf"
              download
              className="w-full px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 text-center text-sm"
            >
              Download CV
            </a>
          </div>
          
<div className="flex items-center justify-end gap-4 mt-6">
  <a
    href="https://github.com/Ashlipogi"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-white rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
    aria-label="GitHub"
  >
    <Github className="w-6 h-6" />
  </a>

  <a
    href="https://www.linkedin.com/in/john-ashley-villanueva-29b607265"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-white rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-6 h-6" />
  </a>
</div>
        </div>
      </div>

      {/* Scroll Indicator */}
<div className="absolute -bottom-5 md:bottom-6 animate-bounce z-30">
  <ArrowDown className="w-6 h-6 text-white/60" />
</div>

    </section>
  );
};

export default Hero;