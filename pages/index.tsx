import Layout from '../components/Layout';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SkillsGlobe from '../components/SkillsGlobe';
import GithubActivity from '../components/GithubActivity';
import ProjectShowcase from '../components/ProjectShowcase';
import TechnicalBlog from '../components/TechnicalBlog';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/menelik04',
    color: 'hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/menelik-gete',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/menelik_gete',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/menelik_gete',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com/@menelikgete',
    color: 'hover:text-gray-100'
  }
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const email = 'Menelikgete1@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>
        
        <div className="text-center z-10">
          <motion.div variants={fadeInUp}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Mobile App Developer',
                2000,
                'Network Engineer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl text-primary mb-4"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            Hi, I'm <span className="text-primary">Menelik Gete</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-dimWhite mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Crafting exceptional digital experiences with cutting-edge technology
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            variants={fadeInUp}
          >
            <a 
              href="#about"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              About Me
            </a>
            <a 
              href="#contact"
              className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20"
      >
        <About />
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
          <SkillsGlobe />
        </motion.div>
      </section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="py-20 bg-background-light"
      >
        <div className="container mx-auto px-4">
          <ProjectShowcase />
        </div>
      </motion.section>

      {/* GitHub Activity Section */}
      <section id="github" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">GitHub Activity</h2>
          <GithubActivity />
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials"
        className="py-20"
      >
        <Testimonials />
      </motion.section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <TechnicalBlog />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center gap-6">
              <motion.button
                onClick={copyEmail}
                className={`${
                  copied ? 'bg-green-500' : 'bg-primary'
                } text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? 'Email Copied!' : 'Copy Email Address'}
              </motion.button>
              <p className="text-dimWhite">{email}</p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-dimWhite ${social.color} transition-colors p-3 rounded-full bg-background-light hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 text-dimWhite">
                <p className="mb-2">Based in Ethiopia</p>
                <p>Open for remote opportunities worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
