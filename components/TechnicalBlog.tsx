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
      className="bg-background p-4 sm:p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.id}`}>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-white">{post.title}</h3>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-dimWhite">
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-dimWhite">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 sm:px-3 text-xs sm:text-sm bg-primary/10 text-primary rounded-full"
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
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '1.5',
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

const TechnicalBlog = () => {
  return (
    <section className="py-16 sm:py-20" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Blog</h2>
          <p className="text-dimWhite text-sm sm:text-base max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in software development.
            Dive into technical tutorials, best practices, and industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURED_POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlog;
