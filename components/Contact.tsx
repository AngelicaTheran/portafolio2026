import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { PERSONAL_INFO, UI } = content;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white inline-block border-b-4 border-primary-500 pb-2 transition-colors">
            {UI.contact.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{UI.contact.subtitle}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 transition-colors">
              {UI.contact.text}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{UI.contact.callMe}</p>
                <p className="text-slate-900 dark:text-white font-semibold">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                {/* Use email label from about details as it is not present in contact object */}
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{UI.about.details.email}</p>
                <p className="text-slate-900 dark:text-white font-semibold">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                {/* Use location label from about details as it is not present in contact object */}
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{UI.about.details.location}</p>
                <p className="text-slate-900 dark:text-white font-semibold">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{UI.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{UI.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{UI.contact.form.subject}</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder={UI.contact.form.subject}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{UI.contact.form.message}</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={UI.contact.form.message}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all flex items-center gap-2"
              >
                <Send size={18} /> {UI.contact.form.send}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;