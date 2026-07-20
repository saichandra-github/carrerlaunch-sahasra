import React from 'react';
import { 
  Code, Layout, FileJson
} from 'lucide-react';
import profileImg from '../assets/MyProfile.jpeg';

export const portfolioData = {
  personal: {
    name: "Sahasra Poreddy",
    roles: [
      "B.Tech Data Science Student",
      "Aspiring Data Scientist | AI & Machine Learning Enthusiast"
    ],
    bio: "I'm a first-year B.Tech Data Science student at Kakatiya Institute of Technology and Science. I enjoy solving real-world problems through technology while continuously improving my skills in AI, Machine Learning, Data Analytics, and Software Development.",
    shortDescription: "First-year B.Tech Data Science student passionate about Artificial Intelligence, Machine Learning, and building impactful software solutions through continuous learning.",
    resumeUrl: "/myresume.pdf",
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
      linkedin: "https://www.linkedin.com/in/sahasra-poreddy-101850380/",
      twitter: "https://twitter.com"
    }
  },
  skills: {
    "Technical Skills": [
      { name: "Python", level: 90, icon: Code, color: "#3b82f6" },
      { name: "HTML", level: 95, icon: Layout, color: "#ef4444" },
      { name: "CSS", level: 90, icon: Layout, color: "#3b82f6" },
      { name: "JavaScript", level: 85, icon: FileJson, color: "#f59e0b" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Student Management System",
      status: "Completed",
      description: "A full-stack web-based Student Management System developed to efficiently manage student records, course details, attendance, and academic information. The application provides an intuitive interface for organizing and accessing student data while improving administrative workflow.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      status: "Completed",
      description: "A modern, responsive personal portfolio website built to showcase my technical skills, projects, certifications, and professional journey. Designed with a clean user interface, smooth animations, and mobile-first responsiveness to create an engaging user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      tech: ["React", "Vite", "CSS", "Framer Motion"]
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      status: "Currently Working",
      description: "A data visualization dashboard currently under development that transforms complex datasets into interactive charts and insightful visual reports. The project focuses on making data analysis intuitive through dynamic graphs, filtering, and real-time visual representations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["Python", "Pandas", "Matplotlib", "Jupyter"]
    }
  ],
  education: [
    {
      id: 1,
      university: "Kakatiya Institute of Technology and Science (KITS)",
      degree: "Bachelor of Technology",
      major: "Data Science",
      minor: "",
      graduation: "Expected 2029",
      cgpa: "Semester 1 Results Awaited (1st Year, 2nd Sem)",
      coursework: ["Data Science", "Artificial Intelligence", "Machine Learning", "Data Analytics", "DBMS"],
      achievements: "Active member of the Data Science Club, participated in multiple Hackathons."
    },
    {
      id: 2,
      university: "Resonance Junior College",
      degree: "Pre-University Education",
      major: "MPC",
      minor: "",
      graduation: "2023",
      cgpa: "75%",
      coursework: ["Mathematics", "Physics", "Chemistry"],
      achievements: "Secured top 5% in college."
    },
    {
      id: 3,
      university: "Vaagdevi High School",
      degree: "Secondary School Certificate",
      major: "",
      minor: "",
      graduation: "2021",
      cgpa: "9.0/10 CGPA",
      coursework: ["General Studies"],
      achievements: "School Topper."
    }
  ],
  activities: [
    {
      id: 1,
      title: "Hackathon Participation",
      role: "Team Member",
      period: "2024",
      description: "Participated in university-level coding competitions and hackathons, building solutions under tight deadlines."
    },
    {
      id: 2,
      title: "Data Science Club",
      role: "Active Member",
      period: "2024 - Present",
      description: "Organizing and attending workshops on machine learning, AI technologies, and data analysis."
    },
    {
      id: 3,
      title: "Coding Competitions",
      role: "Participant",
      period: "2024",
      description: "Regularly participating in competitive programming contests to improve problem-solving skills."
    }
  ],
  statistics: [
    { label: "Projects Completed", value: 5, suffix: "+" },
    { label: "Technologies Learned", value: 4, suffix: "" },
    { label: "Hackathons", value: 3, suffix: "" }
  ]
};
