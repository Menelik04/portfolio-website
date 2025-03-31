import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', isHash: true },
    { name: 'About', href: '#about', isHash: true },
    { name: 'Projects', href: '#projects', isHash: true },
    { name: 'Testimonials', href: '#testimonials', isHash: true },
    { name: 'Blog', href: '/blog', isHash: false },
    { name: 'Contact', href: '#contact', isHash: true }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string, isHash: boolean }) => {
    if (item.isHash) {
      e.preventDefault();
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavigation(e, { href: '#home', isHash: true })}
          >
            Menelik
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              item.isHash ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => handleNavigation(e, item)}
                >
                  {item.name}
                </motion.a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:hidden flex-col py-2 space-y-1 border-t border-gray-800`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navigation.map((item) => (
            item.isHash ? (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item.name}
              </motion.a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
