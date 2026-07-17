import React from 'react';
import { Layout, Server, Database, Globe, Smartphone, Code } from 'lucide-react';
import profileImg from '../assets/MyProfile.jpeg';

export const portfolioData = {
  personal: {
    name: "Sahasra Poreddy",
    roles: [
      "Data Science Student",
      "AI Enthusiast",
      "Aspiring Machine Learning Engineer",
      "Future Data Analyst"
    ],
    bio: "I am Sahasra Poreddy, a second-year B.Tech Data Science student at Kakatiya Institute of Technology and Sciences. I enjoy exploring innovative ideas, building practical projects, and continuously improving my technical skills through hands-on learning and real-world problem solving. I am passionate about learning emerging technologies and preparing for a successful career in the tech industry.",
    shortDescription: "I am Sahasra Poreddy, a second-year B.Tech Data Science student at Kakatiya Institute of Technology and Sciences. I enjoy exploring innovative ideas, building practical projects, and continuously improving my technical skills through hands-on learning and real-world problem solving.",
    resumeUrl: "/resume.pdf",
    profileImage: profileImg,
    quickInfo: [
      { id: 1, text: "Hanumakonda, Telangana", icon: "📍" },
      { id: 2, text: "sahasraporeddy@gmail.com", icon: "📧" },
      { id: 3, text: "+91 9059361527", icon: "📞" },
      { id: 4, text: "B.Tech – Data Science", icon: "🎓" },
      { id: 5, text: "Kakatiya Institute of Technology and Sciences", icon: "🏫" },
      { id: 6, text: "Expected Graduation: 2029", icon: "📅" }
    ]
  },
  contact: {
    location: "Hanumakonda, Telangana",
    email: "sahasraporeddy@gmail.com",
    phone: "+91 9059361527",
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/sahasra-poreddy-101850380/",
      twitter: "https://twitter.com"
    }
  },
  skills: [
    { name: "Python", category: "Programming", icon: Code, level: 90, color: '#8b5cf6' },
    { name: "C", category: "Programming", icon: Code, level: 80, color: '#3b82f6' },
    { name: "SQL", category: "Database", icon: Database, level: 85, color: '#d946ef' },
    { name: "HTML/CSS/JS", category: "Frontend", icon: Layout, level: 85, color: '#f59e0b' },
    { name: "Git & VS Code", category: "Tools", icon: Server, level: 90, color: '#10b981' },
    { name: "NumPy & Pandas", category: "Data Science", icon: Globe, level: 85, color: '#ef4444' },
  ],
  projects: [
    {
      id: 1,
      title: "Student Management System",
      status: "Completed",
      description: "A full-stack web-based Student Management System developed to efficiently manage student records, course details, attendance, and academic information. The application provides an intuitive interface for organizing and accessing student data while improving administrative workflow.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      status: "Completed",
      description: "A modern, responsive personal portfolio website built to showcase my technical skills, projects, certifications, and professional journey. Designed with a clean user interface, smooth animations, and mobile-first responsiveness to create an engaging user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      tech: ["React"],
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      status: "Currently Working",
      description: "A data visualization dashboard currently under development that transforms complex datasets into interactive charts and insightful visual reports. The project focuses on making data analysis intuitive through dynamic graphs, filtering, and real-time visual representations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["Python", "Pandas"],
      github: "#",
      demo: "#"
    }
  ],
  education: [
    {
      id: 1,
      university: "Kakatiya Institute of Technology and Sciences",
      degree: "Bachelor of Technology",
      major: "Data Science",
      minor: "",
      graduation: "Expected 2029",
      cgpa: "Current 2nd Year",
      coursework: ["Data Science", "Artificial Intelligence", "Machine Learning", "Data Analytics"]
    },
    {
      id: 2,
      university: "Intermediate",
      degree: "Pre-University Education",
      major: "",
      minor: "",
      graduation: "",
      cgpa: "75%",
      coursework: []
    },
    {
      id: 3,
      university: "SSC",
      degree: "Secondary School Certificate",
      major: "",
      minor: "",
      graduation: "",
      cgpa: "9.0 CGPA",
      coursework: []
    }
  ],
  activities: [
    {
      id: 1,
      title: "Hackathon Participation",
      role: "Team Member",
      period: "2024",
      description: "Participated in university level coding competitions and hackathons."
    },
    {
      id: 2,
      title: "Data Science Club",
      role: "Active Member",
      period: "2024 - Present",
      description: "Organizing and attending workshops on machine learning and AI technologies."
    }
  ]
};
