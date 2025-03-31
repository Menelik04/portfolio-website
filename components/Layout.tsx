import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Menelik - Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my work and experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </Head>
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
