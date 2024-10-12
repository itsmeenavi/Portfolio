// components/Skills.js
import React from 'react';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-rich-black p-5 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-teal">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
