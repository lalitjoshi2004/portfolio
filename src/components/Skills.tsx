import React from 'react';
import { Code, Database, Server, Wrench, Brain, Globe } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'C', level: 85, color: 'bg-green-500' },
        { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
        { name: 'SQL', level: 75, color: 'bg-purple-500' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML/CSS', level: 85, color: 'bg-orange-500' },
        { name: 'React', level: 80, color: 'bg-cyan-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'Streamlit', level: 90, color: 'bg-red-500' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Server,
      skills: [
        { name: 'Docker', level: 85, color: 'bg-blue-600' },
        { name: 'Jenkins', level: 80, color: 'bg-gray-600' },
        { name: 'Kubernetes', level: 75, color: 'bg-indigo-500' },
        { name: 'Linux', level: 90, color: 'bg-yellow-600' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: Database,
      skills: [
        { name: 'Pywhatkit', level: 95, color: 'bg-green-600' },
        { name: 'Pyautokit', level: 90, color: 'bg-purple-600' },
        { name: 'Twilio', level: 85, color: 'bg-pink-500' },
        { name: 'Scikit-learn', level: 80, color: 'bg-orange-600' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Linear Regression', level: 85, color: 'bg-blue-700' },
        { name: 'Data Analysis', level: 80, color: 'bg-green-700' },
        { name: 'Model Deployment', level: 75, color: 'bg-purple-700' },
        { name: 'Recommendation Systems', level: 80, color: 'bg-pink-600' }
      ]
    },
    {
      title: 'Other Tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-700' },
        { name: 'VS Code', level: 95, color: 'bg-blue-800' },
        { name: 'API Development', level: 80, color: 'bg-green-800' },
        { name: 'Automation', level: 95, color: 'bg-yellow-700' }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical{' '}
            <span className={`bg-gradient-to-r ${
              isDark 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Skills
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-blue-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } mx-auto rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-gray-900/50 border-gray-700' 
                  : 'bg-gray-50/50 border-gray-200'
              } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Neon Skill Badges */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'Docker', 'Linux', 'Streamlit', 'React', 'DevOps', 'AI/ML', 'Automation'].map((tech, index) => (
              <span
                key={index}
                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/25'
                    : 'border-blue-600 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25'
                }`}
                style={{
                  boxShadow: isDark ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 0 20px rgba(37, 99, 235, 0.3)',
                  textShadow: isDark ? '0 0 10px rgba(59, 130, 246, 0.5)' : '0 0 10px rgba(37, 99, 235, 0.5)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;