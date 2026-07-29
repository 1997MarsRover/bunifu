import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, X, ZoomIn } from 'lucide-react';
import { PATTERN_URL } from '../lib/assets';

type PhotoDumpImage = {
  url: string;
  alt: string;
  category: string;
  caption: string;
  description: string;
  aspect: string;
  labelColor: string;
};

type PhotoDetails = Pick<PhotoDumpImage, 'alt' | 'caption' | 'description' | 'aspect'>;

const categoryMeta = {
  outreach: {
    label: 'Outreach',
    labelColor: 'bg-brand-green text-white',
    caption: 'Outreach in action',
    description: 'A community learning moment where students connect with technology through hands-on guidance and teamwork.',
  },
  robotics: {
    label: 'Robotics',
    labelColor: 'bg-brand-blue text-white',
    caption: 'Robotics learning moment',
    description: 'Learners explore engineering, movement, sensors, and problem-solving through practical robotics activities.',
  },
  'startup-africa': {
    label: 'Startup Africa',
    labelColor: 'bg-brand-red text-white',
    caption: 'Startup Africa showcase',
    description: 'Young innovators share ideas, projects, and creative solutions in a wider innovation space.',
  },
  workshop: {
    label: 'Workshop',
    labelColor: 'bg-brand-blue text-white',
    caption: 'Hands-on workshop',
    description: 'A practical session where learners build, test, ask questions, and improve their ideas together.',
  },
  team: {
    label: 'Team',
    labelColor: 'bg-brand-green text-white',
    caption: 'Bunifu team moment',
    description: 'The facilitators, mentors, and partners helping learners feel supported through every session.',
  },
  stem: {
    label: 'STEM',
    labelColor: 'bg-brand-red text-white',
    caption: 'STEM learning moment',
    description: 'A learner-centered moment where curiosity becomes practical science, technology, engineering, or design work.',
  },
  moments: {
    label: 'Moments',
    labelColor: 'bg-brand-blue text-white',
    caption: 'Learning in motion',
    description: 'A candid glimpse into the energy, curiosity, and confidence growing through Bunifu programs.',
  },
  competitions: {
    label: 'Competitions',
    labelColor: 'bg-brand-red text-white',
    caption: 'Competition moment',
    description: 'Learners prepare, present, and stretch their confidence through STEM challenges and showcases.',
  },
  competions: {
    label: 'Competitions',
    labelColor: 'bg-brand-red text-white',
    caption: 'Competition moment',
    description: 'Learners prepare, present, and stretch their confidence through STEM challenges and showcases.',
  },
} as const;

const seededPhotoDetails: Record<string, PhotoDetails> = {
  'outreach/first-sparks-of-code': {
    alt: 'Young learners gathered around a laptop during a community outreach session',
    caption: 'First sparks of code',
    description: 'A school outreach moment where learners crowd around a laptop to explore creative technology together.',
    aspect: 'aspect-[4/5] sm:aspect-[5/4]',
  },
  'robotics/robot-day-wins': {
    alt: 'Students proudly showcasing their robot project outdoors',
    caption: 'Robot day wins',
    description: 'Students showing off a robotics build after turning an idea into something they could test and explain.',
    aspect: 'aspect-[5/4]',
  },
  'startup-africa/innovation-on-display': {
    alt: 'Young innovators at the Startup Africa Event in Kabarak',
    caption: 'Innovation on display',
    description: 'A showcase moment from Startup Africa Kabarak, where young innovators shared what they had been building.',
    aspect: 'aspect-[5/4]',
  },
  'outreach/after-session-smiles': {
    alt: 'Students smiling together after an outreach session',
    caption: 'After-session smiles',
    description: 'A joyful group photo after a school visit, capturing the energy students carried out of the session.',
    aspect: 'aspect-[4/5]',
  },
  'robotics/hands-on-eyes-wide': {
    alt: 'Mentor demonstrating a robot to attentive students',
    caption: 'Hands on, eyes wide',
    description: 'A mentor-led robotics demo where students observe, ask questions, and connect code to movement.',
    aspect: 'aspect-[5/4]',
  },
  'outreach/together-we-can': {
    alt: 'Bunifu mentors and students posing together during school outreach',
    caption: 'Together we can',
    description: 'The outreach group gathered at school after a hands-on STEM session with Bunifu facilitators.',
    aspect: 'aspect-[16/10]',
  },
  'workshop/build-test-repeat': {
    alt: 'Learning and innovation in action at Startup Africa Kabarak',
    caption: 'Build, test, repeat',
    description: 'Workshop energy in action as learners move between ideas, teamwork, and practical problem solving.',
    aspect: 'aspect-[5/4]',
  },
  'team/the-crew-behind-it': {
    alt: 'Bunifu facilitators standing together after an outreach activity',
    caption: 'The crew behind it',
    description: 'The facilitators and partners who helped make the outreach sessions feel warm, practical, and memorable.',
    aspect: 'aspect-[16/10]',
  },
  'stem/tiny-builds-big-ideas': {
    alt: 'Mentor showcasing a robot to excited students in class',
    caption: 'Tiny builds, big ideas',
    description: 'A classroom STEM moment where a simple build becomes a doorway into engineering thinking.',
    aspect: 'aspect-[5/4]',
  },
  'moments/proof-that-learning-moves': {
    alt: 'Celebrating innovation at Startup Africa Kabarak',
    caption: 'Proof that learning moves',
    description: 'A candid event moment showing the pace, curiosity, and shared excitement around youth innovation.',
    aspect: 'aspect-[5/4]',
  },
};

const aspectCycle = ['aspect-[5/4]', 'aspect-[4/5]', 'aspect-[16/10]'];

const photoModules = import.meta.glob('../assets/photo-dump/*/*.{avif,jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function humanizeSlug(value: string) {
  return decodeURIComponent(value)
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCategoryMeta(folder: string) {
  return (
    categoryMeta[folder as keyof typeof categoryMeta] ?? {
      label: humanizeSlug(folder),
      labelColor: 'bg-brand-dark text-white',
      caption: 'Bunifu learning moment',
      description: 'A captured moment from Bunifu Youths programs, showing learners engaging with creative technology and practical STEAM activities.',
    }
  );
}

const categoryOrder = Object.keys(categoryMeta);

const images: PhotoDumpImage[] = Object.entries(photoModules)
  .map(([path, url], index) => {
    const match = path.match(/photo-dump\/([^/]+)\/([^/]+)$/);
    if (!match) return null;

    const [, folder, filename] = match;
    const slug = filename.replace(/\.[^.]+$/, '');
    const key = `${folder}/${slug}`;
    const meta = getCategoryMeta(folder);
    const details = seededPhotoDetails[key];
    const caption = details?.caption ?? meta.caption;

    return {
      url,
      alt: details?.alt ?? meta.description,
      category: meta.label,
      caption,
      description: details?.description ?? meta.description,
      aspect: details?.aspect ?? aspectCycle[index % aspectCycle.length],
      labelColor: meta.labelColor,
      sortFolder: folder,
      sortName: filename,
    };
  })
  .filter((image): image is PhotoDumpImage & { sortFolder: string; sortName: string } => image !== null)
  .sort((a, b) => {
    const folderA = categoryOrder.indexOf(a.sortFolder);
    const folderB = categoryOrder.indexOf(b.sortFolder);
    const orderA = folderA === -1 ? categoryOrder.length : folderA;
    const orderB = folderB === -1 ? categoryOrder.length : folderB;

    if (orderA !== orderB) return orderA - orderB;
    return a.sortName.localeCompare(b.sortName);
  })
  .map(({ sortFolder: _sortFolder, sortName: _sortName, ...image }) => image);

const categories = ['All', ...Array.from(new Set(images.map((image) => image.category)))];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<PhotoDumpImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredImages =
    activeCategory === 'All' ? images : images.filter((image) => image.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 36 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden bg-white py-20 md:py-24">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute left-0 right-0 top-0 h-2 origin-center opacity-90"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '220px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-8 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-bold text-brand-blue ring-1 ring-brand-blue/15">
            Our Moments
          </span>
          <h2 className="hero-heading mb-5 text-brand-dark">
            Photo Dump
          </h2>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-gray-700 md:text-xl">
            Field notes from workshops, outreach visits, robotics sessions, and the small moments that make learning feel alive.
          </p>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-dark">
          Explore by moment
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-6 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                type="button"
                variants={imageVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  isActive
                    ? 'border-brand-dark bg-brand-dark text-white'
                    : 'border-gray-200 bg-white text-brand-dark hover:border-brand-green hover:text-brand-green'
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.button
              key={image.url}
              type="button"
              variants={imageVariants}
              whileHover={{ y: -5, scale: 1.015, zIndex: 20 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl bg-white p-1.5 text-left shadow-card outline-none ring-offset-4 transition-shadow hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-brand-blue ${image.aspect}`}
              aria-label={`Open photo: ${image.caption}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full rounded-[14px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-1.5 rounded-[14px] bg-gradient-to-t from-brand-dark/70 via-brand-dark/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" />

              <div className="absolute left-3 top-3">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold leading-none shadow-lg md:text-xs ${image.labelColor}`}>
                  {image.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <p className="max-w-[9rem] text-sm font-bold leading-tight text-white drop-shadow md:text-base">
                  {image.caption}
                </p>
                <span className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110 sm:flex">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute inset-x-1.5 bottom-1.5 rounded-b-[14px] bg-brand-dark/90 p-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
                <p className="mb-1 text-sm font-bold leading-tight text-white">{image.caption}</p>
                <p className="line-clamp-3 text-xs leading-relaxed text-white/85">{image.description}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10"
        >
          <motion.a
            href="https://instagram.com/Bunifu_youths_Kenya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-8 py-4 text-lg font-bold text-brand-dark shadow-card transition-shadow hover:shadow-card-hover"
          >
            More Moments
            <Instagram className="h-5 w-5 text-brand-red" />
          </motion.a>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/90 p-4 md:p-8"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
            aria-label="Close photo"
          >
            <X className="h-6 w-6" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.86, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.86, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[86vh] w-full max-w-5xl cursor-default"
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-h-[86vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/85 to-transparent p-6"
            >
              <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${selectedImage.labelColor}`}>
                {selectedImage.category}
              </span>
              <p className="text-xl font-bold text-white">{selectedImage.caption}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-2 origin-center"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}
