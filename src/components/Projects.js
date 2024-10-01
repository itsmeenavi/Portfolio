// components/Projects.js
import React from 'react';
import './Projects.css';

const projectList = [
  {
    name: 'Project One',
    description: 'An amazing project that showcases my skills.',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    name: 'Project Two',
    description: 'Another project that demonstrates my expertise.',
    link: 'https://github.com/yourusername/project-two'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
