import { motion, useInView, Variants } from 'framer-motion';
import { Lightbulb, Users, Cpu, GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PATTERN_URL } from '../lib/assets';

const featureColorClasses = {
  'brand-blue': { bg: 'bg-brand-blue/10', icon: 'text-brand-blue' },
  'brand-green': { bg: 'bg-brand-green/10', icon: 'text-brand-green' },
  'brand-red': { bg: 'bg-brand-red/10', icon: 'text-brand-red' },
} as const;

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation Labs',
    description: 'Practical sessions where learners design, test, and improve projects using real tools.',
    color: 'brand-blue',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Supportive mentors help learners understand concepts, build confidence, and stay curious.',
    color: 'brand-green',
  },
  {
    icon: Cpu,
    title: 'Hands-On Learning',
    description: 'Learners build, program, and experiment directly with robotics, hardware kits, and code—turning ideas into working real-world projects.',
    color: 'brand-red',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fixed textVariants with proper TypeScript typing
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Fixed: typed as tuple
      },
    }),
  };

  // Fixed featureVariants with proper TypeScript typing
  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Fixed: typed as tuple
      },
    }),
  };

  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden bg-white md:py-32"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative px-6 mx-auto max-w-7xl md:px-12" ref={ref}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <picture>
                  <source srcSet="/child.webp" type="image/webp" />
                  <img
                    src="/child.jpeg"
                    alt="Young innovator learning to code at Bunifu Youths Kenya"
                    loading="eager"
                    decoding="async"
                    width={1024}
                    height={1280}
                    className="object-cover w-full h-full"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
              </div>

              {/* Floating Kenya Logo */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                className="absolute -bottom-6 -right-4 md:right-8"
              >
                <div className="w-24 h-24 overflow-hidden border-4 border-white shadow-2xl md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
                  <img src="/Kenya.webp" alt="Map of Kenya highlighting Bunifu Youths location" loading="lazy" decoding="async" width={256} height={256} className="object-contain w-full h-full p-2" />
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute px-4 py-3 text-white shadow-xl top-8 -left-4 bg-brand-green rounded-2xl"
              >
                <p className="text-2xl font-extrabold">500+</p>
                <p className="text-xs font-medium opacity-90">Kids Empowered</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.span 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-brand-blue/10 text-brand-blue"
            >
              ✦ About Us
            </motion.span>

            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-6 hero-heading text-brand-dark"
            >
              About <span className="text-brand-green">Bunifu</span>
            </motion.h2>

            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-6 text-xl leading-relaxed text-gray-700"
            >
              Bunifu Youths Kenya is a hands-on STEAM learning community for children and teens who want to explore technology, creativity, and problem-solving.
            </motion.p>

            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-10 text-lg leading-relaxed text-gray-600"
            >
              Our name, <span className="font-bold text-brand-dark">"Bunifu"</span>, means 
              "innovative" in Swahili. We run coding, robotics, AI, 3D design, bootcamp, outreach, and mentorship experiences that help learners move from watching technology to building with it.
            </motion.p>

            {/* School Outcomes Value Proposition */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brand-green/10 via-brand-blue/5 to-white border-l-4 border-brand-green shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-1">
                  School Partnership Model
                </span>
                <p className="text-base sm:text-lg font-bold text-brand-dark leading-snug">
                  We help schools improve learner outcomes, digital readiness, and future employability through a scalable coding-club model.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid gap-4 mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const colors = featureColorClasses[feature.color as keyof typeof featureColorClasses];
                
                return (
                  <motion.div
                    key={feature.title}
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ x: 10, backgroundColor: 'rgba(0,0,0,0.02)' }}
                    className="flex items-start gap-4 p-4 transition-colors cursor-default rounded-2xl"
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-brand-dark">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-colors"
              >
                Program guide
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Pattern Accent */}
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
