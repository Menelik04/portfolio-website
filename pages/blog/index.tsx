import Layout from '../../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Blog section coming soon! This space will be updated with my thoughts, experiences, and technical articles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
