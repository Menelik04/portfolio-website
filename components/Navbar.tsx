import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  }, []);

  const navigation = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav 
      className="bg-background-light backdrop-blur-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="/#home" 
              className="text-2xl font-bold text-primary"
              onClick={(e) => scrollToSection(e, '/#home')}
            >
              Menelik
            </a>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={item.href}
                  className="text-dimWhite hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-dimWhite hover:text-white hover:bg-background-light rounded-md"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
