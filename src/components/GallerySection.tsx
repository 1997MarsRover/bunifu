import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  CalendarDays,
  GraduationCap,
  Trophy,
  Users,
} from 'lucide-react';
import { galleryCategories, galleryCollections } from '../data/galleryData';
import { PATTERN_URL } from '../lib/assets';
import GetInvolvedFormModal from './GetInvolvedFormModal';

interface GallerySectionProps {
  standalone?: boolean;
}

const filterList = ['All', ...galleryCategories.map((category) => category.name)];

const categoryIcons = {
  learning: BookOpen,
  projects: Boxes,
  bootcamps: CalendarDays,
  outreach: Users,
  competitions: Trophy,
  educators: GraduationCap,
} as const;

export default function GallerySection({ standalone = false }: GallerySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const filteredCollections = galleryCollections.filter((collection) => {
    if (activeCategory === 'All') return true;
    const category = galleryCategories.find((item) => item.name === activeCategory);
    return collection.categoryId === category?.id;
  });

  return (
    <section id="gallery" ref={ref} className={`relative overflow-hidden bg-white ${standalone ? 'py-14 md:py-20' : 'py-20 md:py-28'}`}>
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,#24632c_0_58%,#f3b61f_58%_82%,#bc1823_82%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
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

        <div className="grid gap-6 py-10 sm:grid-cols-2 md:py-14 lg:grid-cols-3 md:gap-8">
          {filteredCollections.map((collection, index) => {
            const category = galleryCategories.find((item) => item.id === collection.categoryId);
            const Icon = categoryIcons[collection.categoryId as keyof typeof categoryIcons] ?? BookOpen;
            return (
              <motion.article
                layout
                key={collection.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <Link to={`/gallery/${collection.slug}`} className="flex h-full flex-col" aria-label={`Open ${collection.title} photo story`}>
                  <div className="relative h-52 overflow-hidden bg-neutral-200">
                    <img src={collection.coverImage} alt={collection.title} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-green shadow-lg" aria-hidden="true">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">{category?.name ?? 'Photo story'}</p>
                    <h3 className="mb-3 text-xl font-bold leading-snug tracking-[-0.02em] text-brand-dark transition-colors group-hover:text-brand-green">{collection.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-6 text-gray-600">{collection.shortDescription}</p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-brand-dark/55">
                      <span>{collection.images.length} photos</span>
                      <span className="inline-flex items-center gap-1.5 font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                        View story <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
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
              <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">Bring practical STEM learning to more young people.</h3>
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
