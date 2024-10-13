// components/AboutMe.js
import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          <img
            src={require('../assets/my-photo.jpg')}
            alt="Ivhan Salazar"
            className="w-full h-full object-cover rounded-full border-4 border-teal"
          />
        </div>
        {/* About Me Text */}
        <div>
          <h2 className="text-teal mb-4 text-3xl font-bold">About Me</h2>
          <p className="text-lg leading-relaxed">
            An aspiring technopreneur with amazing communication skills and a great work ethic.
            Possesses excellent leadership and has a strategic mindset in managing tasks and
            responsibilities. A highly competitive individual who strives to produce the best possible
            output on a given task. Willingness to sacrifice other obligations in order to highly
            prioritize a given task/project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
