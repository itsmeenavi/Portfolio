// components/Education.js
import React from 'react';
import { FaSchool } from 'react-icons/fa';

function Education() {
  const educationHistory = [
    {
      institution: 'Sacred Heart Academy',
      degree: 'Elementary',
      years: '2008 - 2014',
    },
    {
      institution: 'Pasig Catholic College',
      degree: 'Junior High School',
      years: '2014 - 2018',
    },
    {
      institution: 'STI College',
      degree: 'Senior High School',
      years: '2018 - 2020',
    },
    {
      institution: 'PUP Manila',
      degree: 'College',
      years: '2020 - 2023',
    },
    {
      institution: 'LOA',
      degree: 'College',
      years: '2023 - 2024',
    },
  ];

  return (
    <section id="education" className="bg-rich-black text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Education</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="border-l-2 border-teal">
          {educationHistory.map((item, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-4 mt-1.5 text-teal">
                <FaSchool size={24} />
              </div>
              <p className="text-sm text-off-white">{item.years}</p>
              <h3 className="text-lg font-semibold text-teal">{item.institution}</h3>
              <p className="text-base text-off-white">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
