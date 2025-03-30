import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    url: 'https://www.linkedin.com/in/menelik-gete-8b555826a',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://x.com/MenelikGete',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/menelik0427',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com/@menelikgete',
    color: 'hover:text-gray-100'
  }
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menelik</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Building digital experiences with passion and purpose.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-300 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                Email: menelikgete1@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Phone: +2519-78160569
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Location: Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Menelik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
