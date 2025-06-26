
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const elements: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'circle' | 'line' | 'dot';
      rotation?: number;
      rotationSpeed?: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createElements = () => {
      const elementCount = isMobile ? 8 : 12;
      
      // Create floating circles
      for (let i = 0; i < elementCount / 3; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 80 + 40,
          opacity: Math.random() * 0.08 + 0.02,
          type: 'circle'
        });
      }

      // Create floating lines
      for (let i = 0; i < elementCount / 3; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 100 + 50,
          opacity: Math.random() * 0.06 + 0.01,
          type: 'line',
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005
        });
      }

      // Create small dots
      for (let i = 0; i < elementCount / 3; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.15 + 0.05,
          type: 'dot'
        });
      }
    };

    const drawElement = (element: typeof elements[0]) => {
      ctx.save();
      ctx.globalAlpha = element.opacity;
      
      switch (element.type) {
        case 'circle':
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(element.x, element.y, element.size / 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        case 'line':
          ctx.translate(element.x, element.y);
          if (element.rotation !== undefined) {
            ctx.rotate(element.rotation);
          }
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(-element.size / 2, 0);
          ctx.lineTo(element.size / 2, 0);
          ctx.stroke();
          break;
          
        case 'dot':
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(element.x, element.y, element.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas with slight fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        // Update position
        element.x += element.vx;
        element.y += element.vy;

        // Update rotation for lines
        if (element.type === 'line' && element.rotationSpeed !== undefined) {
          element.rotation = (element.rotation || 0) + element.rotationSpeed;
        }

        // Wrap around edges
        if (element.x < -element.size) element.x = canvas.width + element.size;
        if (element.x > canvas.width + element.size) element.x = -element.size;
        if (element.y < -element.size) element.y = canvas.height + element.size;
        if (element.y > canvas.height + element.size) element.y = -element.size;

        // Subtle opacity pulsing
        const baseOpacity = element.type === 'circle' ? 0.05 : element.type === 'line' ? 0.035 : 0.1;
        element.opacity = baseOpacity + Math.sin(Date.now() * 0.001 + element.x * 0.01) * baseOpacity * 0.5;

        drawElement(element);
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createElements();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      elements.length = 0;
      createElements();
    });
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      {/* Clean black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;
