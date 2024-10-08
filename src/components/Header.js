// components/Header.js
import React, { useState } from 'react';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="bg-custom-teal-dark">
      <nav className="flex justify-between items-center py-3 px-5 relative">
        <div className="text-custom-yellow font-bold text-xl">Navi</div>
        <div
          className="text-white cursor-pointer md:hidden"
          onClick={handleToggle}
        >
          ☰
        </div>
        <ul
          className={`${
            navbarOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center list-none md:static absolute top-full left-0 w-full md:w-auto bg-custom-teal-dark md:bg-transparent`}
        >
          <li className="md:ml-5">
            <a
              href="#about-me"
              className="text-white hover:text-custom-yellow block py-2 px-5"
              onClick={handleToggle}
            >
              About Me
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#projects"
              className="text-white hover:text-custom-yellow block py-2 px-5"
              onClick={handleToggle}
            >
              Projects
            </a>
          </li>
          <li className="md:ml-5">
            <a
              href="#skills"
              className="text-white hover:text-custom-yellow block py-2 px-5"
              onClick={handleToggle}
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
