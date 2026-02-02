import React, { useEffect, useState } from 'react';
import ParallaxScene from './components/ParallaxScene/ParallaxScene';
import ProfileCards from './components/ProfileCards/ProfileCards';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
        <span>Top</span>
      </button>
    </div>
  );
}

export default App;