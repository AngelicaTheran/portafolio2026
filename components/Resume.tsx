import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
  const { content } = useLanguage();
  const { EXPERIENCE, EDUCATION, UI } = content;

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white inline-block border-b-4 border-primary-500 pb-2 transition-colors">
            {UI.resume.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary-600 dark:text-primary-400" size={28} />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{UI.resume.experience}</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 pb-4 relative transition-colors">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 transition-colors"></span>
                  
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-slate-700 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold mb-3">
                      {job.period}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">{job.company}</p>
                    <div className="flex items-center text-slate-400 dark:text-slate-500 text-sm mb-4">
                      <MapPin size={14} className="mr-1" /> {job.location}
                    </div>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary-600 dark:text-primary-400" size={28} />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{UI.resume.education}</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 pb-4 relative transition-colors">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 transition-colors"></span>
                  
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold mb-3">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
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

export default Resume;