import React from 'react';
import { MapPin, GraduationCap, Calendar, Award } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const stats = [
    { label: 'Years of Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '7+', icon: Award },
    { label: 'Technologies', value: '15+', icon: GraduationCap },
    { label: 'Certifications', value: '5+', icon: Award }
  ];

  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About{' '}
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Me
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-blue-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } mx-auto rounded-full`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } backdrop-blur-sm shadow-xl`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Education
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    B.Tech in Artificial Intelligence & Data Science (3rd Year)
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Vivekananda Global University, Jaipur
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } backdrop-blur-sm shadow-xl`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-purple-600/20' : 'bg-purple-100'
                }`}>
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Originally from Jodhpur, Rajasthan
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Currently in Jaipur, India
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            } backdrop-blur-sm shadow-xl`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                My Journey
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate technology enthusiast with a strong foundation in AI, Data Science, and DevOps. 
                My journey began with curiosity about automation and has evolved into expertise in building 
                scalable solutions using modern technologies. I love creating projects that solve real-world 
                problems and am always eager to learn and adapt to new challenges.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/50 border-gray-200'
                } backdrop-blur-sm shadow-xl text-center group hover:scale-105 transition-transform duration-300`}
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;