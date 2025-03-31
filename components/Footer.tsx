import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Menelik04',
      icon: FaGithub,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/menelik-gete-8b555826a/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/menelik_gete',
      icon: FaTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/menelik0427/',
      icon: FaInstagram,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="bg-background-light py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Menelik Gete</h3>
            <p className="text-dimWhite mt-1">Full Stack Developer</p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
            <div className="text-dimWhite space-y-1">
              <p>Email: menelikgete1@gmail.com</p>
              <p>Phone: +2519-78160569</p>
              <p>Location: Ethiopia</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${link.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-dimWhite"> {new Date().getFullYear()} All rights reserved</p>
            <p className="text-sm text-dimWhite mt-1">Built with Next.js & TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
