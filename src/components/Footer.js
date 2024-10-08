// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-custom-teal-dark text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Navi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
