import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="max-w-xs mx-auto md:max-w-sm">
                <div className="aspect-square relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 p-2">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Your Name"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary">
                Full Stack Developer & Tech Enthusiast
              </h3>
              
              <div className="space-y-4 text-dimWhite">
                <p>
                  Hello! I'm Menelik, a passionate Full Stack Developer with expertise in building 
                  modern web applications. With 2+ years of experience in software development, 
                  I specialize in creating efficient, scalable, and user-friendly solutions.
                </p>
                
                <p>
                  My technical journey has equipped me with:
                </p>
                
                <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                  <li>Frontend Development</li>
                  <li>Backend Architecture</li>
                  <li>Database Design</li>
                  <li>Mobile App Development</li>
                  <li>Agile Methodologies</li>
                </ul>
                
                <p>
                  I'm constantly learning and exploring new technologies to stay at the forefront 
                  of web development. When I'm not coding, you'll find me Sketching.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-dimWhite">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-dimWhite">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-dimWhite">Happy Clients</div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-6"
              >
                <a
                  href="/resume.pdf"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                  download
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
