// App.js
import React from 'react';
import './index.css'; // Import Tailwind CSS
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education'; // Import Education component
import WorkExperience from './components/WorkExperience'; // Import WorkExperience component
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact'; // Import Contact component

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-rich-black">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <Education /> {/* Add Education component */}
        <WorkExperience /> {/* Add WorkExperience component */}
        <Skills />
        <Projects />
        <Contact /> {/* Add Contact component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
