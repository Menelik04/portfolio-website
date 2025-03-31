import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleScroll(e, 'home')}
          >
            Menelik
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'testimonials', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white capitalize"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleScroll(e, item)}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm flex-col items-center py-4 space-y-4`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {['home', 'about', 'projects', 'testimonials', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white capitalize w-full text-center py-2"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleScroll(e, item)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
