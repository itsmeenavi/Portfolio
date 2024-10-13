// components/WorkExperience.js
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

function WorkExperience() {
  const workExperiences = [
    // ... your work experience data ...
  ];

  return (
    <section id="work-experience" className="bg-rich-black text-off-white py-12 px-4">
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
