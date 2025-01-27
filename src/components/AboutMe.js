// components/AboutMe.js
import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Picture */}
        <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
          <img
            src={require('../assets/my-photo.jpg')}
            alt="Ivhan Salazar"
            className="w-full h-full object-cover rounded-full border-4 border-teal"
          />
        </div>
        
        {/* About Me Text */}
        <div className="flex flex-col justify-center">
          {/* Heading / Title */}
          <h2 className="text-teal text-3xl font-bold mb-2">Ivhan Salazar</h2>
          <h3 className="text-xl text-off-white/80 mb-4 italic">Aspiring Full Stack Developer</h3>

          {/* Paragraph */}
          <p className="text-lg leading-relaxed mb-6">
            An aspiring technopreneur with excellent communication skills and a strong work ethic.
            I possess solid leadership capabilities and a strategic mindset for managing tasks and responsibilities.
            I'm highly competitive and committed to delivering the best possible outcomes on every project I undertake. 
            When the stakes are high, I prioritize my work to ensure success.
          </p>

          {/* Skills Summary (Optional) */}
          <div className="mb-6">
            <h4 className="text-teal font-semibold mb-2">Core Skills:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>React, Node.js, and Flutter</li>
              <li>UI/UX Design with Figma</li>
              <li>Networking & Server Configuration</li>
              <li>Leadership & Project Management</li>
            </ul>
          </div>

          {/* Call-to-Action Button (Optional) */}
          <div>
            <a
              href="/Ivhan Resume Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal text-rich-black font-bold py-2 px-4 rounded hover:bg-teal-dark transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
