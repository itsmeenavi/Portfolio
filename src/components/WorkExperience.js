// components/WorkExperience.js
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

function WorkExperience() {
  const workExperiences = [
    {
      company: 'Connected Technology',
      position: 'CSS NC2 OJT',
      years: 'Nov 2022',
      description:
        'Designed network layouts using Packet Tracer and set up peer-to-peer networking configurations. Additionally, I established server-to-user networks to ensure smooth data flow. Furthermore, I gained hands-on experience in computer assembling and disassembling, enhancing my hardware proficiency.',
    },
    {
      company: 'Avasia Information Systems Inc.',
      position: 'Web Developer Intern',
      years: 'March 2023 - July 2023',
      description:
        'Developed User Authentication using Cordova to ensure secure access and authentication processes. Created a Company Job Application Form that incorporated MySQL, Mustache JS, jQuery, Slim PHP, and Ajax, optimizing data handling and enhancing user interaction. Additionally, crafted comprehensive documentation for a Transport Route Project, leveraging Google Maps API and routing functionalities to provide clear implementation guidelines.',
    },
    {
      company: 'P.C.E.S Inc.',
      position: 'Mobile Application Developer',
      years: 'Sept 2023 - Feb 2024',
      description:
        'Developed websites using PHP and JavaScript. Designed websites using WordPress CMS with the help of HTML and JavaScript. Created professional presentations for B2B and B2C clients. Designed the full UI/UX of a mobile app using Figma. Initiated development of a mobile application version of the main company product using Flutter Dart. Managed the IT team to be more organized and systematic.',
    },{
      company: 'Philippine Statistics Authority',
      position: 'Systems Developmer Internship',
      years: 'October 2024 - Current',
      description:
        '',
    },
  ];

  return (
    <section id="work-experience" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Work Experience</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="border-l-2 border-teal">
          {workExperiences.map((item, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-4 mt-1.5 text-teal">
                <FaBriefcase size={24} />
              </div>
              <p className="text-sm text-off-white">{item.years}</p>
              <h3 className="text-lg font-semibold text-teal">{item.company}</h3>
              <p className="text-base text-off-white">{item.position}</p>
              <p className="text-sm text-off-white mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
