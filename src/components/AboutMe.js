// components/AboutMe.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

function AboutMe() {
  return (
    <section
      id="about-me"
      className="bg-blue-900 text-white py-12 px-4 text-center"
    >
      <h2 className="text-orange-500 mb-5">About Me</h2>
      <div className="inline-block text-lg">
        <ReactTypingEffect
          text={[
            "Hello! I'm Navi, a passionate developer with experience in building web applications using React.js.",
          ]}
          speed={50}
          eraseDelay={100000} // Large value to prevent erasing
          cursor="_"
          displayTextRenderer={(text) => {
            return (
              <p className="inline m-0">
                {text}
                <span className="text-orange-500 animate-blink">|</span>
              </p>
            );
          }}
        />
      </div>
    </section>
  );
}

export default AboutMe;
