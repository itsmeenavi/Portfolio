// App.js
import React from 'react';
import './index.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillsCarousel from './components/SkillsCarousel'; // Import the SkillsCarousel
import Projects from './components/Projects';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-rich-black">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <SkillsCarousel /> {/* Add the SkillsCarousel component */}
        <Projects />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
