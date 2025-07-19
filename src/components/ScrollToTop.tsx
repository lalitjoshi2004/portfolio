import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  isDark: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full transition-all duration-300 z-40 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } ${
        isDark
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
      } shadow-lg hover:shadow-xl hover:scale-110`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;