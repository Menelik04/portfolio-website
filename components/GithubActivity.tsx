import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface Contribution {
  date: string;
  count: number;
}

// Mock data - replace with actual GitHub API data
const mockContributions: Contribution[] = Array.from({ length: 365 }, (_, i) => ({
  date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000).toISOString(),
  count: Math.floor(Math.random() * 10)
}));

const recentActivity = [
  {
    type: 'commit',
    repo: 'portfolio-website',
    message: 'Add interactive 3D skills visualization',
    date: '2 hours ago'
  },
  {
    type: 'pull_request',
    repo: 'simple_shell',
    message: 'Implement user authentication system',
    date: '1 day ago'
  },
  {
    type: 'issue',
    repo: 'Attendance_Management_system',
    message: 'Add real-time monitoring features',
    date: '3 days ago'
  }
];

const githubStats = {
  totalContributions: 804,
  repositories: 11,
  followers: 12,
  following: 89,
  starredRepos: 15
};

function ContributionBars({ contributions }: { contributions: Contribution[] }) {
  const maxCount = Math.max(...contributions.map(c => c.count));

  return (
    <group>
      {contributions.map((contribution, i) => {
        const angle = (i / contributions.length) * Math.PI * 2;
        const radius = 3;
        const height = (contribution.count / maxCount) * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh
            key={contribution.date}
            position={[x, height / 2, z]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.1, height, 0.1]} />
            <meshStandardMaterial 
              color={`hsl(210, 100%, ${30 + (contribution.count / maxCount) * 50}%)`}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function GithubActivity() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 3D Contribution Graph */}
        <motion.div
          className="h-[400px] w-full bg-background-light rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Canvas camera={{ position: [0, 4, 8], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ContributionBars contributions={mockContributions} />
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
          <div className="absolute bottom-4 left-4 text-sm text-dimWhite">
            <p>GitHub Contributions - Last 365 Days</p>
            <p className="text-xs">Interact with the visualization using your mouse</p>
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold">GitHub Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background-light p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">{githubStats.totalContributions}</div>
              <div className="text-sm text-dimWhite">Total Contributions</div>
            </div>
            <div className="bg-background-light p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">{githubStats.repositories}</div>
              <div className="text-sm text-dimWhite">Repositories</div>
            </div>
            <div className="bg-background-light p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">{githubStats.followers}</div>
              <div className="text-sm text-dimWhite">Followers</div>
            </div>
            <div className="bg-background-light p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">{githubStats.starredRepos}</div>
              <div className="text-sm text-dimWhite">Starred Repositories</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-background-light p-4 rounded-lg flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-1">
                <div className="text-primary font-medium">{activity.repo}</div>
                <div className="text-dimWhite">{activity.message}</div>
              </div>
              <div className="text-sm text-dimWhite">{activity.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View Profile Button */}
      <div className="text-center">
        <motion.a
          href="https://github.com/menelik04"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View GitHub Profile
        </motion.a>
      </div>
    </div>
  );
}
