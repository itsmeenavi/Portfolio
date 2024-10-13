// components/AboutMe.js
import React from 'react';
import { FaSchool, FaBriefcase } from 'react-icons/fa';

function AboutMe() {
  const timelineEvents = [
    // Education
    {
      type: 'education',
      institution: 'Sacred Heart Academy',
      degree: 'Elementary',
      years: '2008 - 2014',
    },
    {
      type: 'education',
      institution: 'Pasig Catholic College',
      degree: 'Junior High School',
      years: '2014 - 2018',
    },
    {
      type: 'education',
      institution: 'STI College',
      degree: 'Senior High School',
      years: '2018 - 2020',
    },
    {
      type: 'education',
      institution: 'PUP Manila',
      degree: 'College',
      years: '2020 - 2023',
    },
    {
      type: 'education',
      institution: 'LOA',
      degree: 'College',
      years: '2023 - 2024',
    },
    // Work Experience
    {
      type: 'work',
      company: 'Connected Technology',
      position: 'CSS NC2 OJT',
      years: 'Nov 2022',
      description:
        'Designed network layouts using Packet Tracer and set up peer-to-peer networking configurations. Additionally, I established server-to-user networks to ensure smooth data flow. Furthermore, I gained hands-on experience in computer assembling and disassembling, enhancing my hardware proficiency.',
    },
    {
      type: 'work',
      company: 'Avasia Information Systems Inc.',
      position: 'Web Developer Intern',
      years: 'March 2023 - July 2023',
      description:
        'Developed User Authentication using Cordova to ensure secure access and authentication processes. Created a Company Job Application Form that incorporated MySQL, Mustache JS, jQuery, Slim PHP, and Ajax, optimizing data handling and enhancing user interaction. Additionally, crafted comprehensive documentation for a Transport Route Project, leveraging Google Maps API and routing functionalities to provide clear implementation guidelines.',
    },
    {
      type: 'work',
      company: 'P.C.E.S Inc.',
      position: 'Mobile Application Developer',
      years: 'Sept 2023 - Feb 2024',
      description:
        'Developed websites using PHP and JavaScript. Designed websites using WordPress CMS with the help of HTML and JavaScript. Created professional presentations for B2B and B2C clients. Designed the full UI/UX of a mobile app using Figma. Initiated development of a mobile application version of the main company product using Flutter Dart. Managed the IT team to be more organized and systematic.',
    },
  ];

  return (
    <section id="about-me" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          <img
            src={require('../assets/my-photo.jpg')}
            alt="Navi"
            className="w-full h-full object-cover rounded-full border-4 border-teal"
          />
        </div>
        {/* About Me Text */}
        <div>
          <h2 className="text-teal mb-4 text-3xl font-bold">About Me</h2>
          <p className="text-lg leading-relaxed">
            An aspiring technopreneur with amazing communication skills and a great work ethic.
            Possesses excellent leadership and has a strategic mindset in managing tasks and
            responsibilities. A highly competitive individual who strives to produce the best possible
            output on a given task. Willingness to sacrifice other obligations in order to highly
            prioritize a given task/project.
          </p>
        </div>
      </div>
      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto mt-12">
        <div className="border-l-2 border-teal">
          {timelineEvents.map((item, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-4 mt-1.5 text-teal">
                {item.type === 'education' ? (
                  <FaSchool size={24} />
                ) : (
                  <FaBriefcase size={24} />
                )}
              </div>
              <p className="text-sm text-off-white">{item.years}</p>
              <h3 className="text-lg font-semibold text-teal">
                {item.type === 'education' ? item.institution : item.company}
              </h3>
              <p className="text-base text-off-white">
                {item.type === 'education' ? item.degree : item.position}
              </p>
              {item.description && (
                <p className="text-sm text-off-white mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
