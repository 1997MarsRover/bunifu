import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { galleryCategories, galleryCollections, getFeaturedCollection } from '../data/galleryData';
import GetInvolvedFormModal from './GetInvolvedFormModal';

interface GallerySectionProps {
  standalone?: boolean;
}

const filterList = ['All', ...galleryCategories.map((category) => category.name)];

export default function GallerySection({ standalone = false }: GallerySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const featured = getFeaturedCollection();

  const filteredCollections = galleryCollections.filter((collection) => {
    if (activeCategory === 'All') return collection.id !== featured.id;
    const category = galleryCategories.find((item) => item.name === activeCategory);
    return collection.categoryId === category?.id;
  });

  return (
    <section id="gallery" ref={ref} className={`relative overflow-hidden bg-[#f7f5ef] ${standalone ? 'py-14 md:py-20' : 'py-20 md:py-28'}`}>
      <div className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,#24632c_0_58%,#f3b61f_58%_82%,#bc1823_82%)]" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12">
        <div className="grid gap-8 border-b border-brand-dark/20 pb-10 md:grid-cols-12 md:items-end md:pb-14">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="md:col-span-8">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-green">Stories from the field</p>
            <h2 className="max-w-4xl text-[clamp(2.6rem,6vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.055em] text-brand-dark">
              See what young people can build.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-md text-base leading-7 text-brand-dark/65 md:col-span-4 md:pb-1"
          >
            A living record of curiosity, collaboration and practical learning across our classrooms and communities.
          </motion.p>
        </div>

        {activeCategory === 'All' && featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid border-b border-brand-dark/20 py-8 md:grid-cols-12 md:gap-10 md:py-14"
          >
            <Link
              to={`/gallery/${featured.slug}`}
              className="group relative min-h-[340px] overflow-hidden bg-neutral-200 sm:min-h-[480px] md:col-span-8 md:min-h-[590px]"
              aria-label={`Open ${featured.title} photo story`}
            >
              <img src={featured.coverImage} alt={featured.title} loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              <span className="absolute right-0 top-0 grid h-14 w-14 place-items-center bg-[#f3b61f] text-brand-dark transition-all duration-300 group-hover:h-16 group-hover:w-16">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </Link>

            <div className="flex flex-col justify-between pt-7 md:col-span-4 md:py-2">
              <div>
                <p className="mb-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">Featured photo story</p>
                <h3 className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-brand-dark lg:text-5xl">{featured.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-brand-dark/65 sm:text-base sm:leading-7">{featured.shortDescription}</p>
              </div>
              <div className="mt-10 border-t border-brand-dark/20 pt-5">
                <p className="mb-5 text-sm text-brand-dark/60">{featured.location} <span className="mx-1.5">/</span> {featured.eventDate}</p>
                <Link to={`/gallery/${featured.slug}`} className="inline-flex items-center gap-3 text-sm font-bold text-brand-dark hover:text-brand-green">
                  View the photo story <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        <div className="flex items-center gap-7 overflow-x-auto border-b border-brand-dark/20 py-7 scrollbar-none" aria-label="Filter gallery collections">
          {filterList.map((filter) => {
            const isActive = activeCategory === filter;
            return (
              <button key={filter} type="button" onClick={() => setActiveCategory(filter)} className={`relative flex-shrink-0 pb-1 text-sm font-semibold transition-colors ${isActive ? 'text-brand-dark' : 'text-brand-dark/45 hover:text-brand-dark'}`}>
                {filter}
                {isActive && <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-brand-green" />}
              </button>
            );
          })}
        </div>

        <div className="grid gap-x-6 gap-y-12 py-10 sm:grid-cols-2 lg:grid-cols-3 md:py-14">
          {filteredCollections.map((collection, index) => {
            const category = galleryCategories.find((item) => item.id === collection.categoryId);
            return (
              <motion.article layout key={collection.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: Math.min(index * 0.055, 0.25) }} className="group">
                <Link to={`/gallery/${collection.slug}`} className="block" aria-label={`Open ${collection.title}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <img src={collection.coverImage} alt={collection.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                    <span className="absolute bottom-0 right-0 grid h-11 w-11 translate-y-full place-items-center bg-white text-brand-dark transition-transform duration-300 group-hover:translate-y-0">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-5 border-t border-brand-dark/15 pt-4">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">{category?.name ?? 'Photo story'}</p>
                      <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-brand-dark group-hover:text-brand-green sm:text-xl">{collection.title}</h3>
                    </div>
                    <span className="flex-shrink-0 pt-5 text-xs tabular-nums text-brand-dark/45">{collection.images.length} photos</span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {!standalone && (
          <div className="flex justify-center border-t border-brand-dark/20 pt-8">
            <Link to="/gallery" className="inline-flex items-center gap-3 border-b-2 border-brand-dark pb-1 text-sm font-bold text-brand-dark hover:border-brand-green hover:text-brand-green">
              Explore the full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {standalone && (
          <div className="mt-8 grid bg-brand-dark text-white md:grid-cols-12">
            <div className="p-8 sm:p-12 md:col-span-8 md:p-16">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#f3b61f]">Create the next story</p>
              <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">Bring practical STEAM learning to more young people.</h3>
            </div>
            <div className="flex flex-col justify-end gap-4 border-t border-white/20 p-8 sm:p-12 md:col-span-4 md:border-l md:border-t-0">
              <Link to="/how-it-works" className="inline-flex items-center justify-between border-b border-white/50 pb-3 text-sm font-bold hover:border-[#f3b61f] hover:text-[#f3b61f]">
                Explore our programs <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button type="button" onClick={() => setIsPartnerModalOpen(true)} className="inline-flex items-center justify-between border-b border-white/50 pb-3 text-left text-sm font-bold hover:border-[#f3b61f] hover:text-[#f3b61f]">
                Partner with Bunifu <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <GetInvolvedFormModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </section>
  );
}
