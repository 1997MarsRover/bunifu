import { motion, useInView } from 'framer-motion';
import { Gamepad2, Code, Bot, GraduationCap, Printer, Trophy } from 'lucide-react';
import { useRef } from 'react';

const activities = [
  {
    id: 1,
    title: 'Animations and Games',
    description: 'Learn to create interactive animations and build your own video games using creative coding tools.',
    icon: Gamepad2,
    color: 'brand-blue',
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Web & AI Development',
    description: 'Build websites and explore artificial intelligence concepts through hands-on projects.',
    icon: Code,
    color: 'brand-green',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Hands-on Robotics',
    description: 'Design, build, and program robots while learning engineering and problem-solving skills.',
    icon: Bot,
    color: 'brand-red',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Educators Training',
    description: 'Professional development programs for teachers to integrate STEM into their classrooms.',
    icon: GraduationCap,
    color: 'brand-blue',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: '3D Printing & Designing',
    description: 'Transform ideas into reality using CAD software and 3D printing technology.',
    icon: Printer,
    color: 'brand-green',
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Competitions',
    description: 'Participate in local and international STEM competitions to showcase your skills and win prizes.',
    icon: Trophy,
    color: 'brand-red',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="activities" className="relative py-24 md:py-32 bg-brand-light overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(/pattern.jpg)',
          backgroundSize: '800px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-brand-dark mb-6"
          >
            Discover Our Activities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Engaging STEM programs designed to spark curiosity and build future-ready skills
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ perspective: '1000px' }}
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={activity.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Pattern Accent */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="absolute top-0 left-0 right-0 h-1 origin-left"
                    style={{
                      backgroundImage: 'url(/pattern.jpg)',
                      backgroundSize: '150px',
                      backgroundRepeat: 'repeat-x',
                    }}
                  />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                  >
                    <IconComponent className={`w-6 h-6 text-${activity.color}`} />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors"
                  >
                    {activity.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <motion.a
                    href="#membership"
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center gap-2 text-${activity.color} font-semibold text-sm`}
                  >
                    Learn More
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#membership"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 26, 26, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-brand-dark text-white font-bold text-lg px-8 py-4 rounded-full"
          >
            View All Programs
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Pattern Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-3 origin-center"
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
