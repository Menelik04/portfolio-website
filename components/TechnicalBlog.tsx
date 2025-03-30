import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const SAMPLE_CODE = `// Advanced React Hook Example
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return isVisible;
};`;

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  codeSnippet?: string;
}

const FEATURED_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Custom React Hook for Intersection Observer',
    excerpt: 'Learn how to create a reusable hook for tracking element visibility...',
    date: '2025-03-28',
    readTime: '8 min',
    tags: ['React', 'TypeScript', 'Hooks'],
    codeSnippet: SAMPLE_CODE,
  },
  {
    id: '2',
    title: 'Advanced State Management with React Context and TypeScript',
    excerpt: 'Implement a type-safe state management solution using React Context...',
    date: '2025-03-25',
    readTime: '12 min',
    tags: ['React', 'TypeScript', 'State Management'],
  },
  // Add more blog posts
];

function BlogCard({ post }: { post: BlogPost }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-background p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.id}`}>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">{post.title}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-dimWhite text-sm">{post.readTime}</span>
              <span className="text-dimWhite text-sm">{post.date}</span>
            </div>
          </div>
          <p className="text-dimWhite">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {post.codeSnippet && (
            <motion.div
              className="mt-4 overflow-hidden rounded-lg"
              animate={{ height: isHovered ? 'auto' : '100px' }}
            >
              <SyntaxHighlighter
                language="typescript"
                style={atomOneDark}
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                {post.codeSnippet}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function TechnicalBlog() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Technical Blog</h2>
        <Link 
          href="/blog"
          className="text-primary hover:text-blue-400 transition-colors"
        >
          View all posts →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {FEATURED_POSTS.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
