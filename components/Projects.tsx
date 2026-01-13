
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Target, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { PROJECTS, UI } = content;

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            {UI.projects.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {UI.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 hover:border-primary-500/30 transition-all group">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="mt-1 text-slate-400"><Target size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{UI.projects.labels.context}</p>
                      <p className="text-slate-700 dark:text-slate-300">{project.context}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 text-amber-500"><AlertCircle size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{UI.projects.labels.problem}</p>
                      <p className="text-slate-700 dark:text-slate-300 italic">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 text-primary-500"><CheckCircle2 size={20} /></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{UI.projects.labels.solution}</p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlight section for Business Impact - Important for Finance profiles */}
                <div className="p-5 bg-accent-500/10 dark:bg-accent-500/5 rounded-2xl border border-accent-500/20 flex items-center gap-4 group-hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-accent-500/20">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-accent-600 dark:text-accent-500 uppercase tracking-widest">{UI.projects.labels.impact}</p>
                        <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{project.impact}</p>
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
