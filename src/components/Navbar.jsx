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
            <li><a href="#projects">My projects</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="https://drive.google.com/file/d/1weVG26sZmUkcB2Fo8nePdShd9eOwXrZ_/view?usp=sharing" target="_blank">MY CV</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
