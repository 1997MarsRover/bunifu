import { motion, useInView } from 'framer-motion';
import { ArrowRight, CalendarDays, Code2, ExternalLink, GraduationCap, Users } from 'lucide-react';
import { useRef } from 'react';
import { PATTERN_URL } from '../lib/assets';
import { BOOTCAMP_REGISTRATION_FORM_URL } from '../lib/links';

const bootcampHighlights = [
  {
    title: 'Practical STEM Projects',
    description: 'Students learn by building projects in coding, robotics, creative design, and problem solving.',
    icon: Code2,
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    title: 'Mentor-Led Learning',
    description: 'Friendly instructors guide every learner through hands-on sessions and teamwork.',
    icon: GraduationCap,
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    title: 'Open Student Registration',
    description: 'Parents, guardians, and schools can register learners through the online Google Form.',
    icon: Users,
    color: 'bg-brand-red/10 text-brand-red',
  },
];

export default function BootcampSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bootcamp" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '680px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12" ref={ref}>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
              <CalendarDays className="h-4 w-4" />
              Bootcamp Registration
            </span>

            <h2 className="hero-heading mb-6 text-brand-dark">
              Register students for the Bunifu Tech Bootcamp
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              A focused bootcamp for young learners ready to explore coding, robotics, design, and practical technology skills with Bunifu Youths mentors.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href={BOOTCAMP_REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(0, 137, 211, 0.28)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white"
              >
                Register Student
                <ExternalLink className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="#activities"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-brand-dark hover:border-brand-green hover:text-brand-green"
              >
                View Programs
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5"
          >
            {bootcampHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + index * 0.1 }}
                  className="flex gap-5 rounded-3xl border border-gray-100 bg-brand-light p-6 shadow-card"
                >
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${item.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-brand-dark">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
