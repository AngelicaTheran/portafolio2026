import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { content } = useLanguage();
  const { PERSONAL_INFO, SKILLS, UI } = content;

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white inline-block border-b-4 border-primary-500 pb-2 transition-colors">
            {UI.about.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Bio & Details */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 transition-colors">
              {UI.about.subtitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Corrected path to email label */}
              <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4 transition-colors">
                <p className="text-sm text-slate-500 dark:text-slate-400">{UI.about.details.email}</p>
                <p className="font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.email}</p>
              </div>
              {/* Corrected path to phone label */}
              <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4 transition-colors">
                <p className="text-sm text-slate-500 dark:text-slate-400">{UI.about.details.phone}</p>
                <p className="font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.phone}</p>
              </div>
              {/* Corrected path to location label */}
              <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4 transition-colors">
                <p className="text-sm text-slate-500 dark:text-slate-400">{UI.about.details.location}</p>
                <p className="font-medium text-slate-900 dark:text-slate-200">{PERSONAL_INFO.location}</p>
              </div>
              {/* Corrected path to linkedin and viewProfile labels */}
              <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4 transition-colors">
                <p className="text-sm text-slate-500 dark:text-slate-400">{UI.about.details.linkedin}</p>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">
                  {UI.about.details.viewProfile}
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 transition-colors">{UI.about.keySkills}</h4>
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors">{skill.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 transition-colors">
                    <div 
                      className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;