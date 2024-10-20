// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import siklistoImage from '../assets/siklisto.png'; // Import your image
import underconstructionImage from '../assets/underConstruction.jpg'; //

const projectList = [
  {
    name: 'Siklisto',
    description: 'A Mobile Based Electric Bike Charging Station Locator',
    image: siklistoImage,
    link: '/siklisto', // Internal route
  },
  {
    name: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: underconstructionImage, // Replace with actual images
    link: '/project-2', // Internal route
  },
  {
    name: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: underconstructionImage, // Replace with actual images
    link: '/project-3', // Internal route
  },
  {
    name: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: underconstructionImage, // Replace with actual images
    link: '/project-4', // Internal route
  },
  // ... add more projects as needed
];

function Projects() {
  // Group projects into rows of 3
  const groupedProjects = [];
  const itemsPerRow = 3;

  for (let i = 0; i < projectList.length; i += itemsPerRow) {
    groupedProjects.push(projectList.slice(i, i + itemsPerRow));
  }

  return (
    <section id="projects" className="bg-rich-black text-off-white py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Projects</h2>
      <div className="space-y-4"> {/* Reduced vertical spacing between rows */}
        {groupedProjects.map((row, rowIndex) => {
          // Determine alignment and spacing based on the number of projects in the row
          let justifyClass = 'justify-center'; // Default alignment
          let spaceClass = ''; // Default spacing

          if (row.length === 1) {
            justifyClass = 'justify-center';
            spaceClass = ''; // No horizontal spacing needed
          } else if (row.length === 2) {
            justifyClass = 'justify-center';
            spaceClass = 'space-x-6'; // Adjusted spacing between two projects
          } else if (row.length === 3) {
            justifyClass = 'justify-between';
            spaceClass = 'space-x-4'; // Adjusted spacing between three projects
          }

          return (
            <div
              key={rowIndex}
              className={`flex ${justifyClass} ${spaceClass}`}
            >
              {row.map((project, index) => (
                <Link
                  to={project.link}
                  className="bg-charcoal-gray border border-teal rounded-lg p-5 w-full sm:w-1/2 md:w-1/3 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  key={index}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded mb-4 object-cover"
                  />
                  <h3 className="text-teal text-xl font-semibold text-center">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-off-white text-center">{project.description}</p>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
