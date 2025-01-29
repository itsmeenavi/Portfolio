// components/AboutMe.js
import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="bg-charcoal-gray text-off-white py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Picture with Hover Effect */}
        <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0 relative group">
          <img
            src={require('../assets/my-photo.jpg')}
            alt="Ivhan Salazar"
            className="w-full h-full object-cover rounded-full border-4 border-teal transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-teal opacity-0 rounded-full transition-opacity group-hover:opacity-20"></div>
        </div>
        
        {/* About Me Text */}
        <div className="flex flex-col justify-center">
          {/* Heading / Title with Animation */}
          <h2 className="text-teal text-3xl font-bold mb-2 animate-fade-in-up">
            Ivhan Salazar
          </h2>
          <h3 className="text-xl text-off-white/80 mb-4 italic animate-fade-in-up delay-100">
            Aspiring Full Stack Developer
          </h3>

          {/* Paragraph with Animation */}
          <p className="text-lg leading-relaxed mb-6 animate-fade-in-up delay-200">
            An aspiring technopreneur with excellent communication skills and a strong work ethic.
            I possess solid leadership capabilities and a strategic mindset for managing tasks and responsibilities.
            I'm highly competitive and committed to delivering the best possible outcomes on every project I undertake. 
            When the stakes are high, I prioritize my work to ensure success.
          </p>

          {/* Skills Summary (Optional) with Animation */}
          <div className="mb-6 animate-fade-in-up delay-300">
            <h4 className="text-teal font-semibold mb-2">Core Skills:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>React, WordPress, and Flutter</li>
              <li>UI/UX Design with Figma</li>
              <li>Networking & Server Configuration</li>
              <li>Leadership & Project Management</li>
            </ul>
          </div>

          {/* Call-to-Action Button (Optional) with Hover Effect */}
          <div className="animate-fade-in-up delay-400">
            <a
              href="/Ivhan Resume Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal text-rich-black font-bold py-2 px-4 rounded hover:bg-teal-dark transition-colors transform hover:scale-105"
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