// components/Education.js
import React from 'react';
import { FaSchool } from 'react-icons/fa';

function Education() {
  const educationHistory = [
    {
      institution: 'Sacred Heart Academy Pasig',
      degree: 'Elementary',
      years: '2008 - 2014',
    },
    {
      institution: 'Pasig Catholic College',
      degree: 'Junior High School',
      years: '2014 - 2018',
    },
    {
      institution: 'STI College Global City',
      degree: 'Senior High School',
      years: '2018 - 2020',
    },
    {
      institution: 'PUP Sta Mesa',
      degree: 'Diploma in Information Technology',
      years: '2020 - 2023',
    },
    {
      institution: 'Lyceum of Alabang',
      degree: 'Bachelor of Science in Information Technology',
      years: '2024 - 2025',
    },
  ];

  return (
    <section id="education" className="bg-rich-black text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Education</h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical timeline line with more left padding */}
        <div className="border-l-4 border-teal pl-8">
          {educationHistory.map((item, index) => (
            <div key={index} className="relative mb-10 ml-6">
              {/* Icon in a teal circle, moved further left */}
              <div className="absolute -left-10 top-1 flex items-center justify-center w-8 h-8 bg-teal rounded-full">
                <FaSchool size={16} className="text-rich-black" />
              </div>

              {/* Years */}
              <p className="text-sm mb-1">{item.years}</p>

              {/* Institution Name */}
              <h3 className="text-lg font-semibold text-teal">{item.institution}</h3>

              {/* Degree/Level */}
              <p className="text-base">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
