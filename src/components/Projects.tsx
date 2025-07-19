import React from 'react';
import { Github, ExternalLink, Code, Database, Bot, Film, Navigation, Camera, Brain } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: 'Automated Messaging Suite',
      description: 'Complete automation solution for WhatsApp, SMS, calls, and email using Python libraries like Pywhatkit, Twilio, and Pyautokit.',
      icon: Bot,
      tags: ['Python', 'Pywhatkit', 'Twilio', 'Pyautokit', 'Automation'],
      color: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Automation Bot',
      description: 'Multi-platform automation bot for Instagram, Twitter (X), and Facebook with scheduled posting and engagement features.',
      icon: Bot,
      tags: ['Python', 'API Integration', 'Social Media', 'Automation'],
      color: 'from-purple-500 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Docker Linux Command Menu',
      description: 'Interactive menu system that executes Linux commands through Docker containers with a user-friendly interface.',
      icon: Code,
      tags: ['Docker', 'Linux', 'Shell Scripting', 'UI'],
      color: 'from-green-500 to-blue-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Movie Recommendation System',
      description: 'ML-powered movie recommendation app built with Streamlit, featuring Multiple Linear Regression for personalized suggestions.',
      icon: Film,
      tags: ['Machine Learning', 'Streamlit', 'Python', 'Data Science'],
      color: 'from-orange-500 to-red-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Jaipur Bus Route Finder',
      description: 'Comprehensive Streamlit application providing real-time bus route information and fare details for Jaipur city transportation.',
      icon: Navigation,
      tags: ['Streamlit', 'Data Processing', 'Transportation', 'Python'],
      color: 'from-teal-500 to-green-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'JavaScript Webcam App',
      description: 'Browser-based webcam application for photo capture with real-time preview and image processing features.',
      icon: Camera,
      tags: ['JavaScript', 'WebRTC', 'HTML5', 'CSS3'],
      color: 'from-yellow-500 to-orange-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'ML Model in Docker',
      description: 'Containerized machine learning model using Linear Regression, demonstrating MLOps practices and model deployment.',
      icon: Brain,
      tags: ['Docker', 'Machine Learning', 'MLOps', 'Python'],
      color: 'from-indigo-500 to-purple-500',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured{' '}
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Projects
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-blue-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } mx-auto rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/50 border-gray-200'
              } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              style={{
                boxShadow: isDark 
                  ? '0 0 30px rgba(59, 130, 246, 0.1)' 
                  : '0 0 30px rgba(37, 99, 235, 0.1)'
              }}
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className={`absolute inset-[1px] rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${project.color} mb-4 w-fit`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 flex-grow ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                      } hover:scale-105`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white transition-all duration-300 hover:scale-105 shadow-lg`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;