import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ThemeBtn from './ThemeBtn';
import Languagetxt from './Languagetxt';
import Avatar from './Avatar';
import Summary from './Summary';
import Skills from './Skills';
import Seperator from './Seperator';
import Profile from './Profile';
import Projects from './Projects';
import Footer from '../utils/Footer';

function Content(props) {
  const { translations } = useContext(LanguageContext);
  const {darkMode, setDarkMode} = props;

  return (
    <div className="min-h-screen  bg-white dark:bg-[#383838] transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Dark Mode Toggle and Language Switcher */}
        <div className="flex justify-end mb-6 pr-4 md:pr-12 lg:pr-16">
          <ThemeBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
          <span className="mx-2 text-gray-800 dark:text-gray-200">|</span>
          <Languagetxt />
        </div>

        {/* Avatar and Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center mb-6 md:mb-0">
            <Avatar />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-10 lg:space-x-14">
            <p className="text-[#6B7280] dark:text-[#6B7280] mb-2 md:mb-0 translate-y-[7px]">{translations.skills}</p>
            <p className="text-[#6B7280] dark:text-[#6B7280] mb-2 md:mb-0 translate-y-[7px]">{translations.projects}</p>
            <button className="border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] dark:text-[#B7AAFF] px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition">
              {translations.hireMe}
            </button>
          </div>
        </div>    
      </div>
      {/* Summary Component */}
      <Summary />
      {/* Skills Component */}
      <Skills />
      {/* Seperator Component */}
      <Seperator />
      {/*Profile Component */}
      <Profile />
      {/* Seperator Component */}
      <Seperator />
      {/* Projects Component */}
      <Projects />
      {/* Footer Component */}
      <Footer />

    </div>
  );
}

export default Content;