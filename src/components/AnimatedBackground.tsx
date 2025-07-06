import { useEffect, useMemo, useState } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaTerminal,
  FaGitAlt,
  FaLaravel,
  FaBootstrap,
} from 'react-icons/fa';
import { useIsMobile } from '@/hooks/use-mobile';

const iconList = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaTerminal,
  FaGitAlt,
  FaLaravel,
  FaBootstrap,
];

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const AnimatedBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridSize = isMobile ? 80 : 140;
  const cols = Math.ceil(windowSize.width / gridSize);
  const rows = Math.ceil(windowSize.height / gridSize);
  const totalCells = cols * rows;

  const shuffledIconsWithSizePattern = useMemo(() => {
    const shuffled = shuffleArray(
      Array.from({ length: totalCells }, (_, i) => iconList[i % iconList.length])
    );

    return shuffled.map((Icon, idx) => {
      const sizePattern = idx % 3 === 0 ? 50 : idx % 3 === 1 ? 28 : 100;
      return { Icon, size: sizePattern };
    });
  }, [totalCells]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%),
            radial-gradient(circle at 30% 20%, rgba(30, 30, 30, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(20, 20, 20, 0.6) 0%, transparent 50%)
          `,
        }}
      />

      {/* Icon grid */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
        }}
      >
        {shuffledIconsWithSizePattern.map(({ Icon, size }, idx) => (
          <div key={idx} className="flex items-center justify-center opacity-10 text-white">
            <Icon size={size} />
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.01) 50%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(255, 255, 255, 0.01) 50%, transparent 55%)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
