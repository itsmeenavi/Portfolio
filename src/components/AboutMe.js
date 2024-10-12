// components/AboutMe.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaSchool } from 'react-icons/fa';
import TimelineItem from './TimelineItem';

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
    <section id="about-me" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-teal mb-5 text-3xl font-bold">About Me</h2>
        <div className="inline-block text-lg">
          <ReactTypingEffect
            text={[
              "Hello! I'm Navi, a passionate developer with experience in building web applications using React.js.",
            ]}
            speed={50}
            eraseDelay={100000}
            cursor="_"
            displayTextRenderer={(text) => {
              return (
                <p className="inline m-0">
                  {text}
                  <span className="text-teal animate-blink">|</span>
                </p>
              );
            }}
          />
        </div>
      </div>
      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        <div className="border-l-2 border-teal">
          {educationHistory.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
