import { motion, useInView } from 'framer-motion';
import { Lightbulb, Users, Award, ArrowRight } from 'lucide-react';
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 bg-white overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                  src="/afro_american-school_boy.jpg"
                  alt="Young innovator at Bunifu"
                  className="w-full h-full object-cover"
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
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-yellow-400 to-orange-500">
                  <img src="/Kenya.png" alt="Kenya" className="w-full h-full object-contain p-2" />
                </div>
              </motion.div>

              {/* Decorative Pattern Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl overflow-hidden shadow-xl"
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
                className="absolute top-8 -left-4 bg-brand-green text-white px-4 py-3 rounded-2xl shadow-xl"
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
              className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue font-semibold text-sm px-4 py-2 rounded-full mb-6"
            >
              ✦ About Us
            </motion.span>

            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="hero-heading text-brand-dark mb-6"
            >
              About <span className="text-brand-green">Bunifu</span>
            </motion.h2>

            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl text-gray-700 leading-relaxed mb-6"
            >
              At Bunifu Youths Kenya, we believe in nurturing the next generation of African 
              creators, problem-solvers, and leaders.
            </motion.p>

            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg text-gray-600 leading-relaxed mb-10"
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
                return (
                  <motion.div
                    key={feature.title}
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ x: 10, backgroundColor: 'rgba(0,0,0,0.02)' }}
                    className="flex items-start gap-4 p-4 rounded-2xl cursor-default transition-colors"
                  >
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                    <div>
                      <h3 className="font-bold text-brand-dark mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="https://forms.gle/67rKco3d66WhrQzi8"
              target="_blank"
              rel="noopener noreferrer"
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(36, 99, 44, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-green text-white font-bold px-8 py-4 rounded-full"
            >
              Join Our Mission
              <ArrowRight className="w-5 h-5" />
            </motion.a>
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
