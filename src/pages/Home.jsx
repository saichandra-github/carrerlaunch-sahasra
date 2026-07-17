import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Activities from '../components/Activities/Activities';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Activities />
        <Contact />
      </main>
    </>
  );
};

export default Home;
