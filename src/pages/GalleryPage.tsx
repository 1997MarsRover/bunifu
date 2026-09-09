import { useEffect } from 'react';
import Header from '../components/Header';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Gallery & Stories | Bunifu Youths Kenya';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header variant="solid" />
      <main className="flex-1 pt-20">
        <GallerySection standalone={true} />
      </main>
      <Footer />
    </div>
  );
}