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
    <section
      id="projects"
      className="bg-custom-teal-light text-custom-gray py-12 px-4"
    >
      <h2 className="text-custom-teal-dark text-center mb-10 text-3xl font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {projectList.map((project, index) => (
          <div
            className="bg-custom-yellow border border-custom-teal-dark rounded-lg m-2 p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={index}
          >
            <h3 className="text-custom-teal-dark text-xl font-semibold">
              {project.name}
            </h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-custom-teal-dark hover:underline mt-4 inline-block"
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
