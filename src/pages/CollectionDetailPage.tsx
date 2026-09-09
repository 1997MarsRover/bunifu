import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ChevronRight, Expand } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';
import { getCollectionBySlug, galleryCategories } from '../data/galleryData';

export default function CollectionDetailPage() {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const collection = collectionSlug ? getCollectionBySlug(collectionSlug) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (collection) {
      document.title = `${collection.title} | Gallery | Bunifu Youths Kenya`;
    }
  }, [collection]);

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header variant="solid" />
        <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Collection Not Found</h1>
          <p className="text-gray-600 mb-8">The gallery collection you are looking for does not exist or has moved.</p>
          <Link to="/#gallery" className="px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-colors">
            Return to Gallery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = galleryCategories.find((c) => c.id === collection.categoryId);
  const categoryName = category ? category.name : 'Collections';

  const openPhoto = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5ef]">
      <Header variant="solid" />

      <main className="flex-1 border-t-[6px] border-brand-green pt-24 md:pt-28 pb-20">
        {/* Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 mb-6">
            <Link to="/#gallery" className="hover:text-brand-green transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Gallery
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-600">{categoryName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-dark font-bold truncate max-w-[200px] md:max-w-none">{collection.title}</span>
          </nav>

          {/* Collection Hero / Meta */}
          <div className="grid gap-8 border-b border-brand-dark/20 pb-10 mb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
            <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
              {categoryName} · {collection.images.length} Photos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-dark tracking-[-0.05em] leading-[0.98]">
              {collection.title}
            </h1>
            </div>
            <div className="md:col-span-4">
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-brand-dark/55 mb-5">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-green" /> {collection.eventDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-green" /> {collection.location}
              </span>
            </div>
            <p className="text-sm sm:text-base text-brand-dark/65 leading-7 max-w-xl">
              {collection.shortDescription}
            </p>
            </div>
          </div>

          {/* Highlighted Storytelling Moment (If present) */}
          {collection.story && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 grid border-y border-brand-dark/20 py-8 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-green md:col-span-3">The story</p>
              <div className="md:col-span-9">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.035em] text-brand-dark mb-5">
                  {collection.story.heading}
                </h2>
                <p className="max-w-3xl text-brand-dark/65 text-sm sm:text-base leading-7">
                  {collection.story.text}
                </p>
              </div>
            </motion.div>
          )}

          {/* Masonry / Editorial Photo Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {collection.images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid overflow-hidden bg-neutral-200 transition-all duration-300 group cursor-zoom-in"
                onClick={() => openPhoto(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.imageUrl}
                    alt={img.altText}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                    <span className="absolute bottom-0 right-0 grid h-11 w-11 translate-y-full place-items-center bg-white text-brand-dark transition-transform duration-300 group-hover:translate-y-0">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back to Collections Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-brand-dark font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> All Collections
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-white font-bold text-sm hover:bg-brand-dark transition-colors shadow-sm"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Viewer */}
      <LightboxModal
        images={collection.images}
        currentIndex={photoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setPhotoIndex(idx)}
      />
    </div>
  );
}
