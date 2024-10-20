// App.js
import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education'; 
import WorkExperience from './components/WorkExperience'; 
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact'; 
import Siklisto from './components/projects/Siklisto'; 

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <div className="flex flex-col min-h-screen bg-rich-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutMe />
                  <Education />
                  <WorkExperience />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/siklisto" element={<Siklisto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
