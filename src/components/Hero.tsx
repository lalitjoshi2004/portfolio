import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Lalit Joshi', 'AI Developer', 'DevOps Engineer', 'Python Developer'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-pulse ${
              isDark ? 'bg-blue-400' : 'bg-purple-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className={`text-5xl lg:text-7xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className={`bg-gradient-to-r ${
                isDark 
                  ? 'from-blue-400 via-purple-500 to-cyan-400' 
                  : 'from-blue-600 via-purple-600 to-cyan-600'
              } bg-clip-text text-transparent`}>
                {text}
              </span>
              <span className="animate-blink">|</span>
            </h1>
            <p className={`text-xl lg:text-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              3rd Year B.Tech (AI-DS) Student • Vivekananda Global University
            </p>
          </div>

          <div className={`p-6 rounded-2xl border ${
            isDark 
              ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' 
              : 'bg-white/50 border-gray-200 backdrop-blur-sm'
          } shadow-xl`}>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Curious mind, tech enthusiast, and future-ready engineer passionate about 
              <span className="text-blue-500 font-semibold"> automation</span>, 
              <span className="text-purple-500 font-semibold"> AI</span>, and building 
              <span className="text-cyan-500 font-semibold"> creative digital solutions</span>.
            </p>
          </div>

          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 ${
            isDark 
              ? 'border-green-400 bg-green-400/10 text-green-400' 
              : 'border-green-600 bg-green-600/10 text-green-600'
          } font-semibold animate-pulse`}>
            <div className="w-3 h-3 bg-current rounded-full animate-ping"></div>
            Available for Work
          </div>

          <div className="flex flex-wrap gap-4">
            <button className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
            } shadow-lg hover:shadow-xl transform hover:scale-105`}>
              <Download className="w-5 h-5 inline mr-2" />
              Download Resume
            </button>
            
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Mail, href: 'mailto:lalit@example.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  } hover:scale-110 shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Animated Rings */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className={`w-80 h-80 rounded-full border-2 ${
                isDark ? 'border-blue-400/30' : 'border-purple-500/30'
              }`}></div>
            </div>
            <div className="absolute inset-4 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
              <div className={`w-72 h-72 rounded-full border-2 ${
                isDark ? 'border-purple-400/30' : 'border-blue-500/30'
              }`}></div>
            </div>
            
            {/* Photo */}
            <div className={`relative w-80 h-80 rounded-full overflow-hidden border-4 ${
              isDark ? 'border-gray-700' : 'border-gray-300'
            } shadow-2xl group`}>
              <img
                src="/passport .jpg"
                alt="Lalit Joshi"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`w-8 h-8 ${isDark ? 'text-white' : 'text-gray-900'}`} />
      </div>
    </section>
  );
};

export default Hero;