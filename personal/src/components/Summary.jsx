import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import cetinImage from '../assets/cetin.jpg';

function Summary() {
    const { translations } = useContext(LanguageContext);
    return (
        <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 pr-0 md:pr-8">
                    <h3 className="text-lg font-inter text-[#3730A3] dark:text-[#B7AAFF] mb-2">Cetin Erdem</h3>
                    <h2 className="text-5xl md:text-7xl font-inter font-bold mb-4 text-[#1F2937] dark:text-[#AEBCCF]">
                        {translations.headFirst}<br />
                        {translations.headSecond}
                    </h2>
                    <p className="mb-6 text-[#6B7280] dark:text-[#FFFFFF] text-base md:text-lg font-inter">
                        {translations.hero}
                    </p>
                    <div className="flex flex-wrap space-x-2 md:space-x-4">
                        <button className="mb-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] dark:text-[#B7AAFF] px-4 md:px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-gray-900 transition">
                            {translations.hireMe}
                        </button>
                        <button className="mb-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] dark:text-[#B7AAFF] px-4 md:px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-gray-900 transition">
                            <i className="fa-brands fa-github mr-2"></i>Github
                        </button>
                        <button className="mb-2 border-2 border-[#3730A3] text-[#3730A3] dark:border-[#B7AAFF] dark:text-[#B7AAFF] px-4 md:px-6 py-2 rounded-md hover:bg-[#3730A3] hover:text-white dark:hover:bg-[#E1E1FF] dark:hover:text-gray-900 transition">
                        <i className="fa-brands fa-linkedin-in mr-2"></i>Linkedin
                        </button>   
                    </div>
                </div>
                <div className="md:w-2/5 mt-6 md:mt-0 flex justify-center md:justify-end">
                    <img 
                        src={cetinImage} 
                        alt="Cetin Erdem"
                        className="w-4/5 md:w-full max-w-sm h-auto rounded-xl object-cover shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Summary