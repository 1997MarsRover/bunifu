import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PATTERN_URL } from '../lib/assets';

export default function ProgramGuideTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-brand-light overflow-hidden"
      aria-labelledby="program-guide-teaser-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '520px',
          backgroundRepeat: 'repeat',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-brand-green/10 text-brand-green">
          ✦ For parents & partners
        </span>
        <h2 id="program-guide-teaser-heading" className="text-2xl md:text-4xl font-bold text-brand-dark mb-4">
          How the Bunifu program works
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          Seven clear steps—from what happens in our STEM space to session schedules, activities,
          progress, and fees. Same guide we share with families before the first drop-off.
        </p>
        <Link
          to="/how-it-works"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full btn-brand-gradient text-white font-bold text-sm hover:shadow-lg"
        >
          Open the program guide
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
