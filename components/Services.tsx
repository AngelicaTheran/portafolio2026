import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { content } = useLanguage();
  const { SERVICES, UI } = content;

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white inline-block border-b-4 border-primary-500 pb-2">
            {UI.services.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {UI.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;