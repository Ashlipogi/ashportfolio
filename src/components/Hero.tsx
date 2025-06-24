
import { useState, useEffect } from 'react';
import { Code, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [nameComplete, setNameComplete] = useState(false);

  const fullName = "John Ashley Villanueva";
  const fullTitle = "Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const nameTimer = setInterval(() => {
      if (i < fullName.length) {
        setNameText(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(nameTimer);
        setNameComplete(true);
      }
    }, 100);

    return () => clearInterval(nameTimer);
  }, []);

  useEffect(() => {
    if (nameComplete) {
      let i = 0;
      const titleTimer = setInterval(() => {
        if (i < fullTitle.length) {
          setTitleText(fullTitle.slice(0, i + 1));
          i++;
        } else {
          clearInterval(titleTimer);
        }
      }, 100);

      return () => clearInterval(titleTimer);
    }
  }, [nameComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section 
      id="hero" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent min-h-[1.2em] block">
              {nameText}
              {!nameComplete && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>}
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 min-h-[2rem]">
            <span className="text-cyan-400">{titleText}</span>
            {nameComplete && <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>}
          </div>
          
          <p className="text-lg text-gray-400 max-w-md">
            Bachelor of Science in Information Technology graduate with expertise in web development, 
            database management, and modern programming frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              View My Work
            </button>
            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/144d392c-83e4-4ab9-8bf8-835966cd8bbe.png" 
                alt="John Ashley Villanueva"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
