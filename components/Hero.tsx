
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FileText, Linkedin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { PERSONAL_INFO, UI } = content;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 dark:bg-primary-900/10 rounded-bl-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-500/10 dark:bg-accent-500/5 rounded-tr-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4 tracking-wider uppercase">
              {UI.hero.hello}
            </h3>
            <h1 className="text-4xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              {UI.hero.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-10 py-4 bg-primary-600 text-white rounded-xl font-bold shadow-xl shadow-primary-600/30 hover:bg-primary-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                {UI.hero.ctaPrimary} <ArrowRight size={20} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin size={20} /> {UI.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-[450px] lg:h-[450px]">
              {/* Refined decorative border for finance/tech feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-accent-500 rounded-[2.5rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800">
                <img 
                  src={PERSONAL_INFO.heroImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
