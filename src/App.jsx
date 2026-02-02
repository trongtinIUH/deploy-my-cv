import React from 'react';
import ParallaxScene from './components/ParallaxScene/ParallaxScene';
import ProfileCards from './components/ProfileCards/ProfileCards';

function App() {
  return (
    <div className="app-container">
      {/* GSAP Parallax Scene - Day to Night Transition */}
      <ParallaxScene />
      
      {/* Profile Cards Section - Appears after parallax animation */}
      <section id="profile-cards" className="profile-cards-section">
        <div className="profile-section-header">
          <h2>Discover My Profile</h2>
          <p>Scroll to explore my journey, skills, achievements and projects</p>
        </div>
        <ProfileCards />
      </section>
      
      {/* Footer */}
      <footer className="footer-section">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm sm:text-base">
            © 2026 Trần Trọng Tín - All rights reserved
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Built with React, GSAP & Tailwind CSS ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;