// App.js
import React from 'react';
import './index.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
