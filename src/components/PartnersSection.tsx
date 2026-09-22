import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { PATTERN_URL } from '../lib/assets';

const LOGO_DIRECTORY = '/partners';

const partners = [
  { name: 'AFRALTI', logo: `${LOGO_DIRECTORY}/afralti.png` },
  { name: 'Creative Learning World', logo: `${LOGO_DIRECTORY}/creative-learning-world.png` },
  { name: 'Kabarak University', logo: `${LOGO_DIRECTORY}/kabarak-university.png` },
  { name: 'Msingi Imara Christian School', logo: `${LOGO_DIRECTORY}/msingi-imara-school.png` },
  { name: 'The Nairobi Academy', logo: `${LOGO_DIRECTORY}/mt-nairobi-academy.png` },
  { name: 'Pink Tower International School', logo: `${LOGO_DIRECTORY}/pink-tower-international-school.png` },
  { name: 'StartUpAfrica', logo: `${LOGO_DIRECTORY}/startup-africa.png` },
  { name: 'Kiali School', logo: `${LOGO_DIRECTORY}/kiali.png` },
  { name: 'IPSI Global Robotics Kenya', logo: `${LOGO_DIRECTORY}/ipsi-global-robotics-kenya.png` },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="partners"
      ref={sectionRef}
      aria-labelledby="partners-heading"
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `url(${PATTERN_URL})`, backgroundSize: '600px', backgroundRepeat: 'repeat' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.header
          initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-green">Our partnerships</p>
          <h2 id="partners-heading" className="text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-brand-dark sm:text-5xl md:text-6xl">
            Stronger together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-dark/65 md:text-lg md:leading-8">
            We collaborate with schools, institutions and organisations that share our commitment to practical, accessible STEM learning.
          </p>
        </motion.header>

        <motion.ul
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: reduceMotion ? {} : { staggerChildren: 0.06 } },
          }}
          className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {partners.map((partner, index) => (
            <motion.li
              key={partner.name}
              variants={reduceMotion ? {} : {
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={reduceMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card transition-shadow hover:shadow-xl"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-white p-7">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={600}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.35 + index * 0.06, duration: 0.6 }}
                  className="absolute left-0 right-0 top-0 h-1 origin-left"
                  style={{
                    backgroundImage: `url(${PATTERN_URL})`,
                    backgroundSize: '150px',
                    backgroundRepeat: 'repeat-x',
                  }}
                />
              </div>
              <div className="border-t border-gray-100 p-6">
                <h3 className="text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                  {partner.name}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
