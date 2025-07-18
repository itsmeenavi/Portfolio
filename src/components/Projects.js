import React from 'react';
import { Link } from 'react-router-dom';
import siklistoImage from '../assets/siklisto.png';
import loaImage from '../assets/loa.png';
import adviceImage from '../assets/advice.png';
import bibleImage from '../assets/bible.png';
import basicImage from '../assets/basic.png';
import notepadAppImage from '../assets/notepad.png';
import worldTimezoneImage from '../assets/worldtimezone.png';
import anehantechImage from '../assets/anehanit.png';
import anehansiteImage from '../assets/anehan.png';
import underconstructionImage from '../assets/underConstruction.jpg';
import '../App.css'; // Import the CSS file

const projectList = [
  {
    name: 'Anehan',
    description: 'A B2B mobile platform connecting palay farmers with rice millers and retailers in Central Luzon',
    image: anehansiteImage, // Make sure to define and import this image variable
    link: 'https://anehan.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS', 'Material UI'],
    isExternal: true,
  },
  {
    name: 'Anehan IT Solutions',
    description: 'A software development team dedicated to building innovative solutions from concept to deployment.',
    image: anehantechImage, // Make sure to define and import this image variable
    link: 'https://anehan-tech.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS', 'Material UI'],
    isExternal: true,
  },
  {
    name: 'Basic Photography Gallery',
    description: 'A website made for a project in Basic Photography',
    image: basicImage,
    link: 'https://basic-photo-finals.vercel.app/photography', // External link
    technologies: ['ReactJS', 'Tailwind'],
    isExternal: true, // Mark as external link
  },
  {
    name: 'Siklisto',
    description: 'A Mobile Based Electric Bike Charging Station Locator',
    image: siklistoImage,
    link: '/siklisto',
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  

  {
    name: 'Random Bible Verse',
    description: 'Generates random bible verses to display',
    image: bibleImage,
    link: 'https://random-bible-verse-flame.vercel.app', // External link
    technologies: ['Nextjs'],
    isExternal: true, // Mark as external link
  },
  {
    name: 'Random Advice Generator',
    description: 'Generates random advice',
    image: adviceImage,
    link: 'https://random-advice-app-seven.vercel.app', // External link
    technologies: ['Nextjs'],
    isExternal: true, // Mark as external link
  },
  {
    name: 'Lyceum of Alabang Performance Evaluation System',
    description: 'Faculty Evaluation System with Sentiment Analysis',
    image: loaImage,
    link: 'https://github.com/LOA-Capstone/eval-system-capstone',
    technologies: ['Html', 'Javascript', 'CSS', 'PHP', 'Python', 'Mysql'],
    isExternal: true,
  },
  {
    name: 'Notepad App',
    description: 'Allows users to create temporary, shareable notes with an expiration time.',
    image: notepadAppImage, // Make sure to define and import this image variable
    link: 'https://notepad-app-eight.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'Upstash KV', 'Redis'],
    isExternal: true,
  },
  {
    name: 'World Timezone',
    description: 'See different timezones around the world simultaneously',
    image: worldTimezoneImage, // Make sure to define and import this image variable
    link: 'https://world-timezone-gamma.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS'],
    isExternal: true,
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
                  className="project-card bg-charcoal-gray border border-teal/20 rounded-lg p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:shadow-xl transition-all duration-300 flex flex-col items-center transform hover:scale-105 hover:border-teal"
                  {...cardProps}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-teal text-xl font-semibold text-center">{project.name}</h3>
                  <p className="mt-2 text-off-white text-center">{project.description}</p>
                  {/* Labels for technologies used */}
                  {project.technologies && (
                    <div className="mt-4 mb-4 flex flex-wrap justify-center gap-x-2 gap-y-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-off-white text-sm border border-teal rounded-full px-3 py-1 hover:bg-teal hover:text-rich-black transition-colors duration-200"
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