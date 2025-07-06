import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // Set whether current screen is desktop
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop(); // Initial check
    window.addEventListener('resize', checkIsDesktop);
    
    const handleScroll = () => {
      if (window.scrollY > 50 && isDesktop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);

  const backgroundClass = isDesktop
    ? scrolled
      ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
      : 'bg-transparent'
    : 'bg-black/80 backdrop-blur-lg border-b border-white/10';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${backgroundClass}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<div
  className="flex items-center space-x-2 cursor-pointer"
  onClick={() => scrollToSection('hero')}
>
  <div className="p-1 bg-white/10 border bg-white/100 border-black/50 rounded-lg">
    <img
      src="imgs/Logo Ash.png"
      alt="AshDev Logo"
      className="w-8 h-8 object-contain"
  
    />
  </div>
  <span className="text-xl font-bold text-white">
    AshDev
  </span>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
{navItems.map((item) => {
  const isActive = activeSection === item.id;
  const isContact = item.id === 'contact';

  return (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'} 
        ${isContact ? 'border border-white hover:bg-white/10' : ''}
      `}
    >
      {item.label}
      {isActive && !isContact && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
      )}
    </button>
  );
})}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <div className={`w-5 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-5 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
