import React from 'react';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const experiences = [
    {
      title: 'Research & Development Intern',
      company: 'LinuxWorld',
      type: 'Internship',
      duration: '2024',
      location: 'Remote',
      description: 'Worked on research-based projects focusing on Linux systems, automation, and DevOps practices. Contributed to various open-source projects and gained hands-on experience with containerization technologies.',
      achievements: [
        'Developed automation scripts for system administration',
        'Contributed to Docker-based deployment solutions',
        'Collaborated with senior developers on Linux kernel projects',
        'Implemented CI/CD pipelines using Jenkins'
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const achievements = [
    {
      title: 'Science Exhibition Participant',
      organization: 'School/College Level',
      year: '2023',
      description: 'Participated in science exhibition showcasing innovative projects in AI and automation',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Technical Project Lead',
      organization: 'University Projects',
      year: '2024',
      description: 'Led multiple technical projects including ML models and automation systems',
      icon: Award,
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience &{' '}
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Achievements
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-blue-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } mx-auto rounded-full`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-700' 
                      : 'bg-gray-50/50 border-gray-200'
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h4>
                        <p className={`font-semibold ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className={`flex items-start gap-2 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Achievements & Recognition
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border ${
                    isDark 
                      ? 'bg-gray-900/50 border-gray-700' 
                      : 'bg-gray-50/50 border-gray-200'
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`font-semibold ${
                          isDark ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          {achievement.organization}
                        </p>
                        <p className={`text-sm mb-2 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {achievement.year}
                        </p>
                        <p className={`${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Additional Skills Card */}
              <div className={`relative p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-700' 
                  : 'bg-gray-50/50 border-gray-200'
              } backdrop-blur-sm shadow-xl`}>
                <h4 className={`text-lg font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Continuous Learning
                </h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Actively learning new technologies and staying updated with industry trends. 
                  Currently exploring advanced AI/ML concepts, cloud computing, and microservices architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;