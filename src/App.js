// App.js
import React from 'react';
import './index.css'; // Make sure to import the Tailwind CSS
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
