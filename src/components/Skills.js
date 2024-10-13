// components/Skills.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiMysql,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={60} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={60} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={60} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={60} color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs size={60} color="#339933" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={60} color="#7952B3" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#38B2AC" /> },
    { name: 'Sass', icon: <FaSass size={60} color="#CC6699" /> },
    { name: 'PHP', icon: <FaPhp size={60} color="#777BB4" /> },
    { name: 'MySQL', icon: <SiMysql size={60} color="#4479A1" /> },
    { name: 'Firebase', icon: <SiFirebase size={60} color="#FFCA28" /> },
    { name: 'Flutter', icon: <SiFlutter size={60} color="#02569B" /> },
    { name: 'Dart', icon: <SiDart size={60} color="#0175C2" /> },
    { name: 'C', icon: <SiC size={60} color="#A8B9CC" /> },
    { name: 'C++', icon: <SiCplusplus size={60} color="#00599C" /> },
    { name: 'Python', icon: <FaPython size={60} color="#3776AB" /> },
    { name: 'Java', icon: <FaJava size={60} color="#007396" /> },
    { name: 'Git', icon: <FaGitAlt size={60} color="#F05032" /> },
    { name: 'WordPress', icon: <FaWordpress size={60} color="#21759B" /> },
    { name: 'Figma', icon: <SiFigma size={60} color="#F24E1E" /> },
  ];

  return (
    <section id="skills" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Skills</h2>
      <div className="max-w-6xl mx-auto overflow-hidden">
        <Marquee
          gradient={false}
          speed={50}
          direction="right"
          pauseOnHover={true}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center mx-6"
            >
              <div aria-label={skill.name}>{skill.icon}</div>
              <span className="mt-2 text-lg text-off-white">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
