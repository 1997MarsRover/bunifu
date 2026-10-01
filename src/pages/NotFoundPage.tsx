import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header variant="solid" />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist or has moved.</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-colors"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
