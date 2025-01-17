import React from 'react';
import { Link } from 'react-router-dom';
import siklistoImage from '../assets/siklisto.png';
import loaImage from '../assets/loa.png';
import bibleImage from '../assets/advice.png';
import adviceImage from '../assets/bible.png';
import underconstructionImage from '../assets/underConstruction.jpg';

const projectList = [
  {
    name: 'Siklisto',
    description: 'A Mobile Based Electric Bike Charging Station Locator',
    image: siklistoImage,
    link: '/siklisto',
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    name: 'Lyceum of Alabang Performance Evaluation System',
    description: 'Faculty Evaluation System with Sentiment Analysis',
    image: loaImage,
    link: '/project-2',
    technologies: ['Html', 'Javascript', 'CSS', 'PHP', 'Python', 'Mysql'],
  },
  {
    name: 'Random Bible Verse',
    description: 'Generates random bible verses to display',
    image: bibleImage,
    link: 'https://random-bible-verse-flame.vercel.app', // External link
    technologies: ['Nextjs', 'Tailwind'],
    isExternal: true, // Mark as external link
  },
  {
    name: 'Random Advice Genederator',
    description: 'Generates random advices',
    image: adviceImage,
    link: 'https://random-advice-app-seven.vercel.app', // External link
    technologies: ['Nextjs', 'Tailwind'],
    isExternal: true, // Mark as external link
  },
  {
    name: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: underconstructionImage,
    link: '/project-4',
  },
  // Add more projects as needed
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
      <div className="space-y-6">
        {groupedProjects.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-6"
          >
            {row.map((project, index) => {
              const CardWrapper = project.isExternal ? 'a' : Link; // Use 'a' for external links, 'Link' for internal
              const cardProps = project.isExternal
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: project.link };

              return (
                <CardWrapper
                  key={index}
                  className="bg-charcoal-gray border border-teal rounded-lg p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                  {...cardProps}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded mb-4 object-cover"
                  />
                  <h3 className="text-teal text-xl font-semibold text-center">{project.name}</h3>
                  <p className="mt-2 text-off-white text-center">{project.description}</p>
                  {/* Labels for technologies used */}
                  {project.technologies && (
                    <div className="mt-4 mb-4 flex flex-wrap justify-center gap-x-2 gap-y-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-off-white text-sm border border-teal rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
