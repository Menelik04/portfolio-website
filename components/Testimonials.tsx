import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CTO",
    company: "Tech Innovations Inc.",
    image: "/images/testimonials/john.jpg",
    content: "Working with this developer was an exceptional experience. Their technical expertise and attention to detail resulted in a product that exceeded our expectations. The implementation of complex features was handled with remarkable efficiency.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Digital Solutions Ltd.",
    image: "/images/testimonials/sarah.jpg",
    content: "An outstanding developer who brings both technical excellence and creative problem-solving to every project. Their ability to understand our business needs and translate them into elegant solutions was impressive.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateTech",
    image: "/images/testimonials/michael.jpg",
    content: "The level of professionalism and technical skill demonstrated was extraordinary. They not only delivered exactly what we needed but also provided valuable insights that improved our original concept.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background-light rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                      <div className="absolute inset-0 flex items-center justify-center text-dimWhite">
                        {testimonials[currentIndex].name[0]}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                        ))}
                      </div>
                      
                      <blockquote className="text-dimWhite text-lg mb-6">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                      
                      <div className="space-y-1">
                        <h4 className="text-white font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-dimWhite">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="bg-primary/20 hover:bg-primary/30 rounded-full p-2 text-white"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="bg-primary/20 hover:bg-primary/30 rounded-full p-2 text-white"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </motion.button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
