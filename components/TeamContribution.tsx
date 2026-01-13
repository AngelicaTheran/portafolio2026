
import React from 'react';
import { useLanguage } from '../LanguageContext';

const TeamContribution: React.FC = () => {
  const { content } = useLanguage();
  const { TEAM_VALUE, UI } = content;

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white inline-block border-b-4 border-primary-500 pb-2">
            {UI.team.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            {UI.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_VALUE.map((item) => (
            <div key={item.title} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContribution;
