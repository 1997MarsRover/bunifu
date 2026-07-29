import { motion, useInView } from 'framer-motion';
import { CalendarDays, Code2, ExternalLink, MapPin, Package, Phone, Printer, Smartphone, Bot } from 'lucide-react';
import { useRef } from 'react';
import bootcampPoster from '../assets/bootcamp/april-holiday-stem-camp.jpeg';
import { PATTERN_URL } from '../lib/assets';
import { BOOTCAMP_REGISTRATION_FORM_URL } from '../lib/links';

const bootcampActivities = [
  { title: 'Coding animations and games', icon: Code2 },
  { title: 'Hands-on STEM robotics', icon: Bot },
  { title: '3D designing and printing', icon: Printer },
  { title: 'Mobile app development', icon: Smartphone },
];

const packages = [
  { price: 'KES 1,000', label: 'Per session', note: 'Daily fee' },
  { price: 'KES 6,000', label: 'Weekly package', note: '6 sessions' },
  { price: 'KES 15,000', label: 'Full camp', note: '15 sessions' },
];

export default function BootcampSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bootcamp" ref={ref} className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-24">
      <div
        className="absolute inset-x-0 top-0 h-2"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '260px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">
            <img
              src={bootcampPoster}
              alt="AprAugust Holiday STEM Camp poster showing Bunifu Youths Kenya bootcamp details"
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white">
            <CalendarDays className="h-4 w-4" />
            August 7th - 23rd
          </span>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            August Holiday STEM Camp
          </h2>

          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            A practical holiday bootcamp for learners aged 5-18 to explore coding, robotics, 3D design, printing, and mobile app development with Bunifu Youths mentors at Afralti.
          </p>

          <div className="mb-8 inline-flex rounded-2xl bg-white/10 px-5 py-4 text-white ring-1 ring-white/15">
            <div>
              <p className="text-sm font-semibold text-white/65">Age group</p>
              <p className="text-2xl font-extrabold">5-18 years</p>
            </div>
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {bootcampActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-bold leading-snug">{activity.title}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {packages.map((item) => (
              <div key={item.price} className="rounded-2xl bg-white p-4 text-brand-dark shadow-card">
                <Package className="mb-3 h-5 w-5 text-brand-green" />
                <p className="text-2xl font-extrabold">{item.price}</p>
                <p className="mt-1 text-sm font-bold text-gray-700">{item.label}</p>
                <p className="text-xs font-medium text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-3 text-sm font-semibold text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
              <Phone className="h-4 w-4 text-brand-green" />
              +254 712 015 793
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
              <MapPin className="h-4 w-4 text-brand-red" />
              Afralti, Along Waiyaki Way
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.a
              href={BOOTCAMP_REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(0, 137, 211, 0.35)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white"
            >
              Register for Bootcamp
              <ExternalLink className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="#activities"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/15"
            >
              Explore Activities
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
