import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: {
    users: number[];
    performance: number[];
    dates: string[];
  };
  demoUrl: string;
  githubUrl: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and secure payment integration.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    metrics: {
      users: [100, 250, 400, 800, 1200, 1800],
      performance: [95, 96, 97, 98, 99, 99.5],
      dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    demoUrl: '#',
    githubUrl: 'https://github.com/menelikgete/ecommerce-platform',
    image: 'https://raw.githubusercontent.com/Menelik04/portfolio-website/main/public/images/projects/ecommerce.jpg'
  },
  {
    id: '2',
    title: 'Mobile Fitness App',
    description: 'A React Native fitness tracking app that helps users monitor workouts, set goals, and track progress. Includes features like workout plans, progress charts, and social sharing.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    metrics: {
      users: [50, 150, 300, 600, 1000, 1500],
      performance: [94, 95, 96, 97, 98, 99],
      dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    demoUrl: '#',
    githubUrl: 'https://github.com/menelikgete/fitness-app',
    image: 'https://raw.githubusercontent.com/Menelik04/portfolio-website/main/public/images/projects/fitness.jpg'
  },
  {
    id: '3',
    title: 'Network Management Dashboard',
    description: 'A comprehensive network management system with real-time monitoring, analytics, and automated issue detection. Built with modern web technologies and network engineering principles.',
    technologies: ['React.js', 'Node.js', 'WebSocket', 'Material-UI'],
    metrics: {
      users: [20, 50, 100, 200, 350, 500],
      performance: [96, 97, 97.5, 98, 98.5, 99],
      dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    demoUrl: '#',
    githubUrl: 'https://github.com/menelikgete/network-dashboard',
    image: 'https://raw.githubusercontent.com/Menelik04/portfolio-website/main/public/images/projects/network.jpg'
  }
];

function ProjectMetrics({ metrics }: { metrics: Project['metrics'] }) {
  const chartData: ChartData<'line'> = {
    labels: metrics.dates,
    datasets: [
      {
        label: 'Active Users',
        data: metrics.users,
        borderColor: '#0070f3',
        tension: 0.4,
      },
      {
        label: 'Performance Score',
        data: metrics.performance,
        borderColor: '#10b981',
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };

  return (
    <div className="bg-background-light p-4 rounded-lg">
      <Chart type="line" data={chartData} options={options} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="bg-background-light rounded-xl overflow-hidden shadow-lg"
      layoutId={`project-${project.id}`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {!imageError && project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-dimWhite">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <ProjectMetrics metrics={project.metrics} />
          
          <div className="flex gap-4">
            {project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-dimWhite">
          Click on any project to see detailed metrics and live demos.
          Each project showcases different aspects of my technical expertise.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
