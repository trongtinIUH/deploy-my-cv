import React from 'react';
import '../css/style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Tran Trong Tin Profile</div>
        <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="/mycv.pdf" target="_blank" >MY CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
