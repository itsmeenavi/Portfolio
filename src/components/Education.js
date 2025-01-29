// components/Education.js
import React from 'react';
import { FaSchool } from 'react-icons/fa';
import contactImage from '../assets/college.png'; // Same image as in Contact

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
    <section
      id="education"
      className="bg-rich-black text-off-white py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Same image/animation as in Contact */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={contactImage}
                alt="Education"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative Teal Borders (hover effect) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 
                            border-t-4 border-l-4 border-teal 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" 
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 
                            border-b-4 border-r-4 border-teal 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500" 
            />
          </div>

          {/* Right Side - Timeline (no rounded/blurred box) */}
          <div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>

            <div className="timeline space-y-6">
              {educationHistory.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item flex items-start space-x-3 
                             transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* FaSchool icon on the left */}
                  <FaSchool className="text-teal w-6 h-6 mt-1 flex-shrink-0" />

                  <div>
                    <span className="block text-teal font-semibold">
                      {item.years}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {item.institution}
                    </h3>
                    <p className="text-gray-300">{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
