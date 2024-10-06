import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ThemeBtn from './ThemeBtn';
import Languagetxt from './Languagetxt';
import Avatar from './Avatar';

function Content() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Dark Mode Toggle and Language Switcher */}
        <div className="flex justify-end mb-6">
          <ThemeBtn />
          <span className="mx-2 text-gray-800 dark:text-gray-200">|</span>
          <Languagetxt />
        </div>

        {/* Avatar and Info Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Avatar Component */}
            <Avatar />
          </div>

          {/* Skills, Projects, and Hire Me Section */}
          <div className="ml-6 text-left flex space-x-12">
            <p className="text-[#6B7280] dark:text-[#6B7280] mb-2 translate-y-[6px]">{translations.skills}</p>
            <p className="text-[#6B7280] dark:text-[#6B7280] mb-4 translate-y-[6px]">{translations.projects}</p>
            <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-white dark:text-white px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition">
              {translations.hireMe}
            </button>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Content;
