// components/AboutMe.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about-me" className="about-me-section">
      <h2>About Me</h2>
      <div className="typed-text">
        <ReactTypingEffect
          text={[
            "Hello! I'm Navi, a passionate developer with experience in building web applications using React.js."
          ]}
          speed={50}
          eraseDelay={100000} // Large value to prevent erasing
          cursor="_"
          displayTextRenderer={(text) => {
            return (
              <p>
                {text}
                <span className="typed-cursor">|</span>
              </p>
            );
          }}
        />
      </div>
    </section>
  );
}

export default AboutMe;
