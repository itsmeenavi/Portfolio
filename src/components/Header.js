// components/Header.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleNavigation = (sectionId) => {
    // If not on the homepage, navigate to it first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
    }

    // Close the navbar (for mobile) and scroll to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure routing completes before scrolling
  };

  return (
    <header className="bg-rich-black">
      <nav className="flex justify-between items-center py-3 px-5 relative">
        <div className="text-teal font-bold text-xl">Ivhan</div>
        <div
          className="text-off-white cursor-pointer md:hidden"
          onClick={handleToggle}
        >
          ☰
        </div>
        <ul
          className={`${
            navbarOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center list-none md:static absolute top-full left-0 w-full md:w-auto bg-rich-black md:bg-transparent`}
        >
          <li className="md:ml-5">
            <a
              href="#about-me"
              className="text-off-white hover:text-teal block py-2 px-5"
              onClick={() => handleNavigation('about-me')}
            >
              About Me
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#education"
              className="text-off-white hover:text-teal block py-2 px-5"
              onClick={() => handleNavigation('education')}
            >
              Education
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#work-experience"
              className="text-off-white hover:text-teal block py-2 px-5"
              onClick={() => handleNavigation('work-experience')}
            >
              Work
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#skills"
              className="text-off-white hover:text-teal block py-2 px-5"
              onClick={() => handleNavigation('skills')}
            >
              Skills
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#projects"
              className="text-off-white hover:text-teal block py-2 px-5"
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
