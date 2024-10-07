import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Profile() {
  const { translations } = useContext(LanguageContext);

  const profile = {
    birthday: "26.11.1993",
    residenceCity: "Abu Dhabi",
    education: "Marmara University,PR BA, 2016",
    preferedRole: "Frontend, UI",
  };

  const profileFields = {
    birthday: translations.birthday,
    residenceCity: translations.residenceCity,
    education: translations.education,
    preferedRole: translations.preferedRole,
  };

  return (
    <div className='flex justify-around'>
      <div>
        <h2 className="text-4xl font-bold text-left mb-8  text-[#1F2937] dark:text-[#6B7280]">Profile</h2>
        <div>
          <h3 className="text-2xl font-semibold text-[#3730A3] dark:text-indigo-300 mb-4">Profile</h3>
          <div className='flex '>
            <div className='w-32 '>
                {/* Mapping profileFields */}
                {Object.keys(profileFields).map((key) => (
                <p key={key}>
                    <span className="font-bold text-[#1F2937] dark:text-white">
                    {profileFields[key]}:
                    </span>
                </p>
                ))}
            </div>
            <div className='w-60 '>
                {/* Mapping profile */}
                {Object.keys(profile).map((key) => (
                <p key={key}>
                    <span className="text-[#1F2937] dark:text-white">{profile[key]}</span>
                </p>
                ))}
            </div>
          </div>

        </div>
      </div>
      <div className='mt-16'>
        <h3 className="text-2xl font-semibold text-[#3730A3] dark:text-indigo-300 mb-4">About Me</h3>
        <p className='flex-wrap text-sm text-[#6B7280] dark:text-white mb-4'>
          I am an aspiring full-stack developer with a growth mindset to acquire <br />
          new skills and continuously develop myself with new challenges.<br />
          After working as a customer support specialist for over 8 years,<br />
          <br />
          I decided to fulfill my childhood dream to become a software developer<br />
          and improve myself in front end, back end and CS by completing<br />
          a 6-month intensive Workintech full-stack development program.
        </p>
      </div>
    </div>
  );
}

export default Profile;



/*
          {Object.keys(profile).map((key) => (
            <p key={key}>
              <span className="font-bold text-[#1F2937] dark:text-white">
                {profileFields[key]}
              </span>
              <span className="text-[#1F2937] dark:text-white">: &nbsp; &nbsp; {profile[key]}</span>
            </p>
          ))}
*/
