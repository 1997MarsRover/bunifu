import { motion, useInView, Variants } from 'framer-motion';
import { Lightbulb, Users, Award } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation Labs',
    description: 'Hands-on learning spaces where creativity meets technology.',
    color: 'brand-blue',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Industry professionals guiding the next generation.',
    color: 'brand-green',
  },
  {
    icon: Award,
    title: 'Recognition & Growth',
    description: 'Celebrating achievements and nurturing talent.',
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
          backgroundImage: 'url(/pattern.jpg)',
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
                <img
                  src="/gallery_robot_building.jpg"
                  alt="Young innovator at Bunifu"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                
                {/* Pattern Frame - Top */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute top-0 left-0 right-0 h-2 origin-left"
                  style={{
                    backgroundImage: 'url(/pattern.jpg)',
                    backgroundSize: '150px',
                    backgroundRepeat: 'repeat-x',
                  }}
                />
                
                {/* Pattern Frame - Bottom */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-2 origin-right"
                  style={{
                    backgroundImage: 'url(/pattern.jpg)',
                    backgroundSize: '150px',
                    backgroundRepeat: 'repeat-x',
                  }}
                />
              </div>

              {/* Floating Kenya Logo */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                className="absolute -bottom-6 -right-4 md:right-8"
              >
                <div className="w-24 h-24 overflow-hidden border-4 border-white shadow-2xl md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
                  <img src="/Kenya.png" alt="Kenya" className="object-contain w-full h-full p-2" />
                </div>
              </motion.div>

              {/* Decorative Pattern Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute w-24 h-24 overflow-hidden shadow-xl -top-6 -left-6 rounded-2xl"
                style={{
                  backgroundImage: 'url(/pattern.jpg)',
                  backgroundSize: '100px',
                  backgroundPosition: 'center',
                }}
              />

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
              At Bunifu Youths Kenya, we believe in nurturing the next generation of African 
              creators, problem-solvers, and leaders.
            </motion.p>

            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-10 text-lg leading-relaxed text-gray-600"
            >
              Our name, <span className="font-bold text-brand-dark">"Bunifu"</span>, means 
              "innovative" in Swahili, reflecting our mission to ignite creativity and equip 
              youth with future-ready skills. We provide a conducive and interactive environment 
              where kids can channel their energy, curiosity, and creativity.
            </motion.p>

            {/* Features Grid */}
            <div className="grid gap-4 mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClass = `bg-${feature.color}/10`;
                const iconColorClass = `text-${feature.color}`;
                
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
                    <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${iconColorClass}`} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-brand-dark">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

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
          backgroundImage: 'url(/pattern.jpg)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}