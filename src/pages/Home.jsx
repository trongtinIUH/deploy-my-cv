import React from 'react';
import '../css/style.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

const Home = () => {
const backendSkills = [
  { name: "Java", percent: 90 },
  { name: "Spring Boot", percent: 85 },
  { name: "Node.js", percent: 70 },
  { name: "React.js", percent: 75 },
  { name: "HTML/CSS", percent: 90 }
];

const cloudSkills = [
  { name: "AWS (S3, EC2, DynamoDB)", percent: 80 },
  { name: "MongoDB", percent: 70 },
  { name: "SQL", percent: 85 },
  { name: "MariaDB", percent: 90 }
];

const otherSkills = [
  { name: "Git & GitHub", percent: 85 },
  { name: "CI/CD", percent: 70 },
  { name: "Microservices", percent: 65 },
  { name: "MVC", percent: 80 },
  { name: "Python", percent: 55 }
];

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>UX/UI Developer</h1>
          <p>
            I create user-friendly and responsive designs using <br />
            frameworks like Bootstrap and React for a smooth user experience.
          </p>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="about-section">
        <h2>I am Tran Trong Tin - Software Engineering Intern</h2>
        <p className="about-intro">
          I am a fourth-year student majoring in Software Engineering at Industrial University of Ho Chi Minh City.
          I am passionate about technology and always eager to learn and innovate in both study and work.
          My goal is to seek an internship opportunity at a professional software company
          to learn, practice, and apply my knowledge in programming, software development, and systems.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <i className="fas fa-code"></i>
            <h3>Web & Java Development</h3>
            <p>Proficient in ReactJS, NodeJS, Spring Boot, Java – building efficient backend/frontend applications.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-database"></i>
            <h3>Cloud & Data</h3>
            <p>Solid understanding of MongoDB, SQL, DynamoDB. Experienced with AWS: S3, EC2, Cognito, DynamoDB.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-lightbulb"></i>
            <h3>Microservices & Git</h3>
            <p>Knowledgeable in Microservices architecture, MVC. Proficient in Git version control and CI/CD processes.</p>
          </div>
        </div>


              {/* --- EDUCATION SECTION --- */}
      <section id="education" className="education-section">
        <h2>Education</h2>
        <p className="education-intro">
          I am currently a final-year student at Industrial University of Ho Chi Minh City – majoring in Software Engineering.
          Consistent academic performance, with a solid foundation in software technology and systems.
        </p>
        <div className="education-details">
          <h3>Industrial University of Ho Chi Minh City</h3>
          <p><strong>Major:</strong> Software Engineering (2021 – 2026)</p>
          <p><strong>Current GPA:</strong> 3.11 / 4.0</p>
          <p><strong>Progress:</strong> Completed 140 / 156 credits</p>
          <p><strong>Relevant Courses:</strong> Java, ReactJS, Mobile Development, Distributed Systems, Data Analysis, Software Testing</p>
        </div>
      </section>
      </section>



   {/* --- SKILL   SECTION --- */}
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p className="skills-intro">
        I am proficient in a wide range of technologies, from backend to frontend, cloud services, and system architecture.
      </p>
      
     <div className="skills-container">
        <div className="skill-category">
          <h3>Backend & Web</h3>
          {backendSkills.map((skill, i) => (
            <div key={i} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                <span className="percent-label">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h3>Cloud & Database</h3>
          {cloudSkills.map((skill, i) => (
            <div key={i} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                <span className="percent-label">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-category">
          <h3>Other Skills</h3>
          {otherSkills.map((skill, i) => (
            <div key={i} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                <span className="percent-label">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          
         
{/* --- EXPERIENCE SECTION --- */}
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <p className="experience-intro">
        I have led and contributed to multiple academic projects, applying real-world technologies in full-stack development,
        cloud deployment, and distributed systems.
      </p>

      <div className="experience-details">
        <h3>Leader – Distributed Application with Java</h3>
        <p><strong>Course:</strong> Distributed Systems (Mar 2024 – Apr 2024)</p>
        <ul>
          <li>Developed a karaoke management application using Java GUI, RMI, JPA, SQL Server.</li>
          <li>Built a client-server architecture enabling multi-client connections on a local network.</li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/trongtinIUH/BaoCaoBTL_PhanTanJava" target="_blank"> Server</a> |
            <a href="https://github.com/vuphongle/BaoCaoBTL_PhanTanJava_Client" target="_blank"> Client</a>
          </li>
        </ul>
      </div>

      <div className="experience-details">
        <h3>Member – Full-Stack Cloud Chat App</h3>
        <p><strong>Course:</strong> Modern Technologies (Jan 2025 – Present)</p>
        <ul>
          <li>Built a chat application with ReactJS, WebSocket (Frontend) and Spring Boot (Backend).</li>
          <li>Integrated AWS Cognito, S3, DynamoDB for authentication, file storage, and NoSQL data.</li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/vuphongle/appchatzolo_cnm" target="_blank"> Zolo Chat App</a>
          </li>
        </ul>
      </div>

      <div className="experience-details">
        <h3>Developer – CardioTrack (Health App)</h3>
        <p><strong>Course:</strong> Software Architecture (Feb 2025 – Present)</p>
        <ul>
          <li>Designed microservices for user, health, and post modules using Spring Boot and MariaDB.</li>
          <li>Integrated OpenAI for health diagnostics and AWS S3 for media storage.</li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/LeDonChung/cardio-track-frontend-for-user" target="_blank"> Frontend</a> |
            <a href="https://github.com/LeDonChung/CardioTrackBackend" target="_blank"> Backend</a>
          </li>
        </ul>
      </div>
    </section>

{/* --- Projects SECTION --- */}
    
      <section id="projects" className="portfolio-section">
        <h2>My Projects</h2>
        <p className="portfolio-intro">
          Check out some of the projects I've worked on. These projects showcase my skills in software development, design, and problem-solving.
        </p>
        <div className="portfolio-gallery">
          <div className="portfolio-item">
            <img src="https://i.imgur.com/1.png" alt="Karaoke Management App" />
            <h3>Karaoke Management App</h3>
            <p>Java GUI, RMI, JPA, SQL Server</p>
          </div>
          <div className="portfolio-item">
            <img src="https://i.imgur.com/2.png" alt="Food Delivery App" />
            <h3>Food Delivery App</h3>
            <p>React Native, Node.js, MongoDB</p>
          </div>
          <div className="portfolio-item">
            <img src="https://i.imgur.com/3.png" alt="E-commerce Website" />
            <h3>E-commerce Website</h3>
            <p>ReactJS, Spring Boot, AWS</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
