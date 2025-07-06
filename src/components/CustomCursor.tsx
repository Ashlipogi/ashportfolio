import { useEffect, useState, useRef } from 'react';

const CustomCursor = ({ activeSection }: { activeSection: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const flames = useRef<Array<{ 
    x: number; 
    y: number; 
    opacity: number; 
    size: number; 
    offset: number;
    age: number;
    intensity: number;
  }>>([]);
  const lastTime = useRef(0);
  const cursorRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();
  const frameCount = useRef(0);

  // Create flame particles with flickering effect
  const updateFlames = (newX: number, newY: number) => {
    const time = Date.now();
    
    // Add new flame particles
    flames.current = [
      { 
        x: newX + (Math.random() - 0.5) * 8, 
        y: newY + Math.random() * 4, 
        opacity: 0.9 + Math.random() * 0.1,
        size: (isClicking ? 16 : 12) + Math.random() * 6,
        offset: Math.random() * Math.PI * 2,
        age: 0,
        intensity: 0.8 + Math.random() * 0.4
      },
      ...flames.current
        .map((flame, index) => ({
          ...flame,
          age: flame.age + 1,
          y: flame.y - 2 - Math.random() * 2, // Flames rise upward
          x: flame.x + Math.sin(flame.offset + time * 0.01) * 0.5, // Subtle horizontal flicker
          opacity: Math.max(0, flame.opacity - 0.08 - Math.random() * 0.04),
          size: Math.max(2, flame.size - 0.3),
          intensity: flame.intensity * 0.96
        }))
        .filter(flame => flame.age < 15 && flame.opacity > 0.1)
        .slice(0, 12) // Limit number of particles
    ];
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const animateCursor = (time: number) => {
      frameCount.current++;
      
      // Update at 60fps
      if (time - lastTime.current > 16) {
        setPosition(prev => {
          const dx = cursorRef.current.x - prev.x;
          const dy = cursorRef.current.y - prev.y;
          
          // Smoother movement
          const newX = prev.x + dx * 0.15;
          const newY = prev.y + dy * 0.15;

          // Update flames every frame for smooth animation
          updateFlames(newX, newY);

          return { x: newX, y: newY };
        });
        lastTime.current = time;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isClicking]);

  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0';

  return (
    <>
      {/* Flame particles */}
      {flames.current.map((flame, index) => (
        <div
          key={index}
          className={`fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-40 rounded-full transition-opacity duration-100 ease-out`}
          style={{
            transform: `translate(${flame.x}px, ${flame.y}px) translate(-50%, -50%)`,
            width: `${flame.size}px`,
            height: `${flame.size * 1.4}px`, // Taller for flame shape
            opacity: flame.opacity * flame.intensity * (isVisible ? 1 : 0),
            background: `radial-gradient(ellipse 50% 60% at 50% 70%, 
              rgba(255,255,255,${flame.intensity * 0.9}) 0%, 
              rgba(255,255,255,${flame.intensity * 0.7}) 30%, 
              rgba(200,200,200,${flame.intensity * 0.5}) 60%, 
              rgba(100,100,100,${flame.intensity * 0.3}) 80%, 
              transparent 100%)`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // Flame-like shape
            filter: `blur(${Math.max(0, 2 - flame.intensity)}px)`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Main cursor core - bright white center */}
      <div
        className={`fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-full transition-all duration-200 ease-out ${visibilityClass}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isClicking ? 1.3 : 1})`,
          width: isClicking ? '28px' : '22px',
          height: isClicking ? '28px' : '22px',
          background: `radial-gradient(circle, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0.8) 40%, 
            rgba(200,200,200,0.6) 70%, 
            rgba(100,100,100,0.4) 90%, 
            transparent 100%)`,
          boxShadow: `
            0 0 12px rgba(255,255,255,0.6),
            0 0 24px rgba(255,255,255,0.3),
            inset 0 0 8px rgba(255,255,255,0.2)
          `,
          willChange: 'transform',
        }}
      />

      {/* Outer glow effect */}
      <div
        className={`fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-45 rounded-full transition-all duration-300 ease-out ${visibilityClass}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: isClicking ? '60px' : '50px',
          height: isClicking ? '60px' : '50px',
          background: `radial-gradient(circle, 
            transparent 0%, 
            rgba(255,255,255,0.1) 50%, 
            rgba(200,200,200,0.05) 80%, 
            transparent 100%)`,
          willChange: 'transform',
        }}
      />

    </>
  );
};

export default CustomCursor;