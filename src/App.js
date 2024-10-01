// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
