export const profileData = {
  personal: {
    name: "Trần Trọng Tín",
    title: "Fresher Software Engineer",
    phone: "0947672072",
    email: "trantin1973@gmail.com",
    linkedin: "https://www.linkedin.com/in/trongtinIUH",
    github: "https://github.com/trongtinIUH",
    avatar: "/avatar.jpg"
  },

  cards: [
    {
      id: "about",
      title: "About Me",
      icon: "",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      preview: "Passionate Software Engineering Student",
      gradient: "from-blue-500 to-purple-600",
      content: {
        summary: "I am a passionate Software Engineering student who has completed all academic coursework at the Industrial University of Ho Chi Minh City and is ready for full-time employment. I am seeking a Fresher/Junior Software Engineer position where I can apply my skills in Frontend (ReactJS) and Backend (Java Spring Boot, AWS) to contribute to scalable web applications.",
        education: {
          school: "Industrial University of Ho Chi Minh City",
          major: "Software Engineering (B.Eng.)",
          period: "January 2021 - January 2026",
          gpa: "3.21/4"
        },
        highlights: [
          "Full-stack development with ReactJS & Java Spring Boot",
          "Cloud Services experience with AWS (DynamoDB, S3, Cognito, EC2)",
          "Real-time applications with WebSocket",
          "AI integration with OpenAI API & RAG"
        ]
      }
    },
    {
      id: "experience",
      title: "Skills",
      icon: "",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      preview: "ReactJS, Spring Boot, AWS, WebSocket...",
      gradient: "from-green-500 to-teal-600",
      content: {
        skills: [
          { 
            category: "Frontend", 
            level: "Experienced",
            items: ["ReactJS", "HTML5/CSS3", "JavaScript (ES6+)", "WebSocket", "Tailwind CSS"] 
          },
          { 
            category: "Backend", 
            level: "Experienced",
            items: ["Java", "Spring Boot", "REST API", "JPA", "MariaDB", "JWT"] 
          },
          { 
            category: "Cloud Services (AWS)", 
            level: "Intermediate",
            items: ["S3", "AWS Cognito", "DynamoDB", "EC2", "CloudFront", "MediaConvert"] 
          },
          { 
            category: "QA & Automation", 
            level: "Intermediate",
            items: ["Postman", "REST Assured", "JUnit", "CI/CD", "GitHub Actions", "Docker"] 
          },
          { 
            category: "Data & Python", 
            level: "Basic",
            items: ["Python", "Data Analysis", "RAG", "Prompt Engineering"] 
          }
        ]
      }
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: "",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
      preview: "Awards & Certifications",
      gradient: "from-yellow-500 to-orange-600",
      content: {
        items: [
          { 
            title: "🎓 Education", 
            value: "GPA: 3.21/4", 
            description: "Software Engineering - Industrial University of Ho Chi Minh City" 
          },
          { 
            title: "🏅 Potential Award - SSRC-2025-2", 
            value: "December 12, 2025", 
            description: "Student Scientific Research Conference - Recognized for innovative AI research applied to movie streaming and distributed systems" 
          },
          { 
            title: "📜 TOEIC Listening & Reading", 
            value: "October 2025", 
            description: "IIG Vietnam - English Proficiency Certification" 
          }
        ]
      }
    },
    {
      id: "projects",
      title: "Projects",
      icon: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      preview: "AI Supply Chain, CartoonToo, Zolo Chat...",
      gradient: "from-pink-500 to-red-600",
      content: {
        projects: [
          {
            name: "AI-Powered Autonomous Supply Chain Management System",
            period: "January 2026 - Present",
            role: "AI Developer",
            tech: ["AI Automation", "Real-time Data Processing", "Autonomous Workflow", "Python"],
            description: "Developing 'Smart Warehouse' solution with fully AI-powered operations management.",
            highlights: [
              "Building autonomous system for real-time inventory import/export decision making",
              "Processing large-scale data for intelligent goods flow management",
              "Implementing AI automation for end-to-end warehouse operations",
              "Designing real-time data pipeline for autonomous workflow execution"
            ]
          },
          {
            name: "CartoonToo - AI-Powered Movie Streaming Platform",
            period: "August 2025 – December 2025",
            role: "Backend Lead & System Architect",
            tech: ["Java Spring Boot", "ReactJS", "AWS (DynamoDB, S3, CloudFront, Cognito)", "WebSocket", "OpenAI API"],
            description: "Architected a robust Client-Server system using Spring Boot following 3-tier architecture patterns.",
            highlights: [
              "Implemented AI Chatbot using OpenAI API (GPT-4o-mini) and RAG for contextual movie recommendations",
              "Developed 'Watch Together' (WatchRoom) feature using WebSocket for real-time synchronized playback",
              "Optimized video delivery with HLS streaming via AWS MediaConvert and CloudFront CDN",
              "Secured system with AWS Cognito JWT authentication and PayOS payment integration"
            ]
          },
          {
            name: "Zolo Chat App (Web & Mobile)",
            period: "December 2024 - May 2025",
            role: "Backend/Frontend Developer",
            tech: ["ReactJS", "Spring Boot", "WebSocket", "AWS (Cognito, S3, DynamoDB)"],
            description: "Real-time messaging application with secure authentication and cloud integration.",
            highlights: [
              "Built real-time chat and group chat features using WebSocket (~1K messages/day)",
              "Implemented secure authentication using JWT and AWS Cognito (reduced auth issues by 30%)",
              "Designed REST APIs with Spring Boot and AWS DynamoDB for message persistence",
              "Integrated AWS S3 for efficient file and image storage"
            ]
          }
        ]
      }
    }
  ]
};