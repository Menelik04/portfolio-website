import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const skills = [
  // Frontend
  'React.js', 'Next.js', 'TypeScript', 'JavaScript',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI',
  'Redux', 'Bootstrap',
  
  // Backend
  'Node.js', 'Express.js', 'REST APIs', 
  'MongoDB', 'PostgreSQL', 'Firebase',
  
  // Mobile
  'React Native', 'Flutter', 'Android Studio',
  'Expo', 'Mobile UI/UX',
  
  // Tools & Others
  'Git', 'GitHub', 'VS Code', 'Postman',
  'Agile', 'Network Engineering',
  'npm', 'Webpack'
];

function SkillPoint({ position, skill }: { position: [number, number, number], skill: string }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0070f3" />
      </mesh>
      <Text
        position={[0.3, 0, 0]}
        fontSize={0.2}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

function SkillsCloud() {
  return (
    <group>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const x = 2.5 * Math.cos(theta) * Math.sin(phi);
        const y = 2.5 * Math.sin(theta) * Math.sin(phi);
        const z = 2.5 * Math.cos(phi);
        
        return (
          <SkillPoint 
            key={skill} 
            position={[x, y, z]} 
            skill={skill} 
          />
        );
      })}
    </group>
  );
}

export default function SkillsGlobe() {
  return (
    <div className="relative">
      <motion.div 
        className="h-[600px] w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillsCloud />
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </motion.div>

      {/* Categories Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4 text-sm">
        <div className="bg-background-light px-3 py-1 rounded-full">
          <span className="text-primary">Frontend</span>
        </div>
        <div className="bg-background-light px-3 py-1 rounded-full">
          <span className="text-primary">Backend</span>
        </div>
        <div className="bg-background-light px-3 py-1 rounded-full">
          <span className="text-primary">Mobile</span>
        </div>
        <div className="bg-background-light px-3 py-1 rounded-full">
          <span className="text-primary">Tools & Others</span>
        </div>
      </div>
    </div>
  );
}
