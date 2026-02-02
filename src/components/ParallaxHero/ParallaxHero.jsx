import React from "react";
import { profileData } from "../../data/profileData";

const ParallaxHero = () => {
  return (
    <section className="parallax-hero min-h-screen relative overflow-hidden">
      {/* Background Gradient - Sunset Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 via-pink-600 via-orange-500 to-yellow-400">
        {/* Stars - only visible on top */}
        <div className="absolute top-0 left-0 w-full h-1/2 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
        
        {/* Sun */}
        <div className="absolute bottom-[25%] sm:bottom-[30%] left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <div className="w-full h-full bg-gradient-to-b from-yellow-200 via-yellow-300 to-orange-400 rounded-full shadow-[0_0_60px_20px_rgba(255,200,100,0.5)]" />
        </div>
      </div>

      {/* Mountains Layer 1 - Far */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            fill="rgba(30,20,50,0.4)" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Mountains Layer 2 - Mid */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            fill="rgba(20,15,40,0.6)" 
            d="M0,256L60,250.7C120,245,240,235,360,218.7C480,203,600,181,720,186.7C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Mountains Layer 3 - Near */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            fill="#0a0a1a" 
            d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 h-screen flex flex-col items-center justify-center text-white px-4">
        {/* Avatar */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 overflow-hidden mb-4 sm:mb-6 shadow-2xl backdrop-blur-sm bg-white/10">
          <img
            src={process.env.PUBLIC_URL + "/avatar.jpg"}
            alt={profileData.personal.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://media.licdn.com/dms/image/v2/D4D03AQFvxJ0XbjiHaQ/profile-displayphoto-scale_200_200/B4DZfx20XxGgAc-/0/1752109370391?e=1771459200&v=beta&t=XOemBhR1ZJDZ7QGW4c23qkq_Vn28IjHRwORMxYtnUeY";
            }}
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 text-center drop-shadow-lg bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
          {profileData.personal.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 text-center max-w-md">
          {profileData.personal.title}
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href={profileData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={profileData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.personal.email}`}
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 sm:bottom-12 flex flex-col items-center animate-bounce">
          <span className="text-sm sm:text-base mb-2 text-white/70">Scroll Down</span>
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
