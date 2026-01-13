
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { Menu, X, Globe, Sun, Moon, Linkedin } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { NAV_ITEMS, PERSONAL_INFO, UI } = content;

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      {/* Mobile Header / Toggle */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-slate-900 z-50 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
        <span className="font-heading font-bold text-xl text-slate-900 dark:text-white">
            <span className="text-primary-600">A</span>ngelica
        </span>
        <div className="flex items-center gap-3">
            <button 
                onClick={toggleTheme} 
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
                onClick={toggleLanguage} 
                className="px-2 py-1 text-sm font-bold bg-slate-100 dark:bg-slate-800 rounded text-primary-600 border border-slate-200 dark:border-slate-700"
            >
                {language.toUpperCase()}
            </button>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-700 dark:text-slate-200 focus:outline-none"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 bg-slate-900 dark:bg-slate-900 text-white z-40 transition-transform duration-300 ease-in-out
          lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          border-r border-slate-800 flex flex-col justify-between pt-16 lg:pt-0
        `}
      >
        <div>
          {/* Logo / Name */}
          <div className="p-8 text-center border-b border-slate-800 hidden lg:block">
            <div className="text-3xl font-heading font-bold tracking-wide">
              <span className="text-primary-500">A</span>ngelica
            </div>
            <p className="mt-2 text-xs text-slate-400 uppercase tracking-wider">{PERSONAL_INFO.titles[0]}</p>
          </div>

          {/* Nav Items */}
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center space-x-4 px-6 py-3 rounded-lg transition-colors duration-200
                      ${activeSection === item.id 
                        ? 'bg-primary-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                    `}
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer & Controls */}
        <div className="p-6 text-center">
            <div className="flex gap-2 mb-4">
                {/* Theme Toggle Desktop */}
                <button 
                    onClick={toggleTheme}
                    className="hidden lg:flex flex-1 items-center justify-center py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 text-slate-300 hover:text-primary-400"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                
                {/* Language Toggle Desktop */}
                <button 
                    onClick={toggleLanguage}
                    className="hidden lg:flex flex-1 items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                    <Globe size={16} className="text-primary-400" />
                </button>

                {/* LinkedIn Desktop */}
                <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden lg:flex flex-1 items-center justify-center py-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors border border-slate-700 text-slate-300 hover:text-white"
                >
                    <Linkedin size={18} />
                </a>
            </div>

            <div className="text-xs text-slate-600">
                <p>© 2024 Angelica Theran</p>
                <p className="mt-1">{UI.footer.available}</p>
            </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
