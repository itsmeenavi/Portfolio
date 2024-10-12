// components/SkillsCarousel.js
import React from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiDart, SiFirebase, SiFlutter, SiMysql, SiSass, SiTailwindcss } from 'react-icons/si';

function SkillsCarousel() {
  const skills = [
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Dart', icon: <SiDart /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Sass', icon: <SiSass /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="bg-rich-black text-off-white py-12 px-4 overflow-hidden">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Skills</h2>
      <div className="relative w-3/4 mx-auto overflow-hidden">
        <div className="flex items-center space-x-8 animate-scroll w-[200%] ">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-5xl ">
              <div className ="text-teal">{skill.icon}</div>
              <p className="text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;
