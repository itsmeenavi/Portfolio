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
      <h2>Education</h2>

      <div className="timeline">
        {educationHistory.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="years">{item.years}</span>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;