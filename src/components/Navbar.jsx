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
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="/Tran-Trong-Tin-TopCV.vn-050525.105126.pdf" target="_blank">MY CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
