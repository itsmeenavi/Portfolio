// components/AboutMe.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaSchool } from 'react-icons/fa';

function AboutMe() {
  const educationHistory = [
    {
      institution: 'Sacred Heart Academy',
      degree: 'Elementary',
      years: '2008-2014',
    },
    {
      institution: 'Pasig Catholic College',
      degree: 'Junior High School',
      years: '2014-2018',
    },
    {
      institution: 'STI College',
      degree: 'Senior High School',
      years: '2018-2020',
    },
    {
      institution: 'PUP Manila',
      degree: 'College',
      years: '2020-2023',
    },
    {
      institution: 'LOA',
      degree: 'College',
      years: '2023-2024',
    },
  ];

  return (
    <section
      id="about-me"
      className="bg-custom-yellow text-custom-gray py-12 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-custom-teal-dark mb-5 text-3xl font-bold">
          About Me
        </h2>
        <div className="inline-block text-lg">
          <ReactTypingEffect
            text={[
              "Hello! I'm Navi, a passionate developer with experience in building web applications using React.js.",
            ]}
            speed={50}
            eraseDelay={100000} // Large value to prevent erasing
            cursor="_"
            displayTextRenderer={(text) => {
              return (
                <p className="inline m-0">
                  {text}
                  <span className="text-custom-teal-dark animate-blink">|</span>
                </p>
              );
            }}
          />
        </div>
      </div>
      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        <div className="border-l-2 border-custom-teal-dark">
          {educationHistory.map((item, index) => (
            <div key={index} className="mb-10 ml-4">
              
              <div className="absolute w-3 h-3 bg-custom-teal-dark rounded-full -left-1.5 mt-1.5"></div>
              <div className="absolute -left-5 mt-1.5 text-custom-teal-dark">
  <FaSchool size={24} />
</div>
              <p className="text-sm text-custom-gray">{item.years}</p>
              <h3 className="text-lg font-semibold text-custom-teal-dark">
                {item.institution}
              </h3>
              <p className="text-base">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
