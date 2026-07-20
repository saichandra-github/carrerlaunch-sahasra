import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { portfolioData } from '../../data/portfolio';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">A selection of my recent work and personal projects.</p>
        </motion.div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
