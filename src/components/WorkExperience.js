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
    },
    {
      company: 'Philippine Statistics Authority',
      position: 'Systems Developer Internship',
      years: 'October 2024 - December 2024',
      description:
        'Gained in-depth exposure to PSA’s operations and the BRAMS/BRAP Project through multiple workshops and meetings. Strengthened JavaScript proficiency by completing a full course, which covered essential concepts such as HTTP vs. HTTPS, encryption, and hashing. Simultaneously, advanced skills in Golang by studying various courses and setting up local client-server connections. Contributed to UI/UX design discussions for the BRAP application and documented technical insights during project sessions. Expanded front-end capabilities by learning ReactJS (including API fetching) and explored modern web technologies such as Next.js and Supabase for streamlined development workflows. Enhanced mobile development expertise with Flutter while gaining hands-on experience initializing projects with PostgreSQL and npm-based toolchains.',
    },
    {
      company: 'Fundamental IT Solutions',
      position: 'Junior Frontend Developer',
      years: 'April 2025 - Current',
      description:
        '',
    },
  ];

  return (
    <section id="work-experience" className="bg-rich-black text-off-white py-12 px-4">
      <h2 className="text-3xl font-bold text-teal text-center mb-10">Work Experience</h2>

      <div className="timeline">
        {workExperiences.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="years">{item.years}</span>
            <h3>{item.company}</h3>
            <p>{item.position}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;