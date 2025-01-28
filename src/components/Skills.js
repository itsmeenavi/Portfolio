import React from 'react';
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
import '../App.css'; // Import the CSS file

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={60} color="#E34F26" />, description: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt size={60} color="#1572B6" />, description: 'Intermediate' },
    { name: 'JavaScript', icon: <FaJsSquare size={60} color="#F7DF1E" />, description: 'Intermediate' },
    { name: 'React', icon: <FaReact size={60} color="#61DAFB" />, description: 'Novice' },
    { name: 'Node.js', icon: <FaNodeJs size={60} color="#339933" />, description: 'Beginner' },
    { name: 'Bootstrap', icon: <FaBootstrap size={60} color="#7952B3" />, description: 'Novice' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#38B2AC" />, description: 'Beginner' },
    { name: 'Sass', icon: <FaSass size={60} color="#CC6699" />, description: 'Beginner' },
    { name: 'PHP', icon: <FaPhp size={60} color="#777BB4" />, description: 'Novice' },
    { name: 'MySQL', icon: <SiMysql size={60} color="#4479A1" />, description: 'Novice' },
    { name: 'Firebase', icon: <SiFirebase size={60} color="#FFCA28" />, description: 'Novice' },
    { name: 'Flutter', icon: <SiFlutter size={60} color="#02569B" />, description: 'Novice' },
    { name: 'Dart', icon: <SiDart size={60} color="#0175C2" />, description: 'Novice' },
    { name: 'C', icon: <SiC size={60} color="#A8B9CC" />, description: 'Beginner' },
    { name: 'C++', icon: <SiCplusplus size={60} color="#00599C" />, description: 'Beginner' },
    { name: 'Python', icon: <FaPython size={60} color="#3776AB" />, description: 'Novice' },
    { name: 'Java', icon: <FaJava size={60} color="#007396" />, description: 'Novice' },
    { name: 'Git', icon: <FaGitAlt size={60} color="#F05032" />, description: 'Intermediate' },
    { name: 'WordPress', icon: <FaWordpress size={60} color="#21759B" />, description: 'Intermediate' },
    { name: 'Figma', icon: <SiFigma size={60} color="#F24E1E" />, description: 'Advanced' },
  ];
//Beginner
//Novice
//Intermediate
//Advanced
//Expert
  return (
    <section id="skills" className="bg-charcoal-gray text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center justify-center p-6 bg-dark-gray rounded-lg shadow-lg border-2 border-teal">
                <div aria-label={skill.name}>{skill.icon}</div>
                <span className="mt-2 text-lg text-off-white font-semibold">{skill.name}</span>
              </div>
              <div className="flip-card-back flex items-center justify-center p-6 bg-teal rounded-lg shadow-lg border-2 border-dark-gray">
                <p className="text-off-white text-center font-medium">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;