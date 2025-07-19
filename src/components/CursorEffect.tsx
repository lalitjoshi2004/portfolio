import React, { useEffect, useState } from 'react';

interface CursorEffectProps {
  isDark: boolean;
}

const CursorEffect: React.FC<CursorEffectProps> = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor effect */}
      <div
        className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-100 ease-out ${
          isDark 
            ? 'border-blue-400 bg-blue-400/20' 
            : 'border-blue-600 bg-blue-600/20'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Trailing effect */}
      <div
        className={`absolute w-12 h-12 rounded-full border transition-all duration-300 ease-out ${
          isDark 
            ? 'border-purple-400/30 bg-purple-400/10' 
            : 'border-purple-600/30 bg-purple-600/10'
        }`}
        style={{
          left: position.x - 24,
          top: position.y - 24,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};

export default CursorEffect;