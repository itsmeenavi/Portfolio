// components/Projects.js
import React from 'react';

const projectList = [
  {
    name: 'Project One',
    description: 'An amazing project that showcases my skills.',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    description: 'Another project that demonstrates my expertise.',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="bg-blue-950 text-white py-12 px-4">
      <h2 className="text-orange-500 text-center mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projectList.map((project, index) => (
          <div
            className="bg-blue-900 border border-orange-500 rounded-lg m-2 p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={index}
          >
            <h3 className="text-orange-500">{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="text-orange-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
