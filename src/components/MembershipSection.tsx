import { motion, useInView, Variants } from 'framer-motion';
import {
  Calendar, MapPin, Users, Code, Globe, Cpu, Box,
  Sparkles, Target, Clock, BookOpen, MessageCircle,
  Phone, Mail, ChevronRight,
} from 'lucide-react';
import { lazy, Suspense, useRef, useState } from 'react';

const SteamFestRegistrationModal = lazy(() => import('./SteamFestRegistrationModal'));

const categoryColorClasses = {
  'brand-blue': {
    bg: 'bg-brand-blue/10',
    iconBg: 'bg-brand-blue/20',
    icon: 'text-brand-blue',
  },
  'brand-green': {
    bg: 'bg-brand-green/10',
    iconBg: 'bg-brand-green/20',
    icon: 'text-brand-green',
  },
  'brand-red': {
    bg: 'bg-brand-red/10',
    iconBg: 'bg-brand-red/20',
    icon: 'text-brand-red',
  },
  'brand-purple': {
    bg: 'bg-brand-purple/10',
    iconBg: 'bg-brand-purple/20',
    icon: 'text-brand-purple',
  },
} as const;

const festInfo = {
  title: "The Nairobi Academy STEAM Festival 2026",
  date: "6th June 2026",
  venue: "Nairobi Academy, Karen Campus",
  price: "KES 2,000",
  registrationDeadline: "12th May 2026",
};

const categories = [
  {
    id: 'creative-coding',
    name: 'Creative Coding',
    icon: Code,
    color: 'brand-blue',
    ageGroups: 'Elementary, Junior, Senior',
    description: 'Create interactive animations, games, and simulations using block-based programming.',
    challenge: 'Clean Water and Sanitation (SDG 6)',
    tools: 'Scratch, ScratchJr, Octostudio',
  },
  {
    id: 'web-mobile',
    name: 'Web & Mobile App Development',
    icon: Globe,
    color: 'brand-green',
    ageGroups: 'Junior, Senior',
    description: 'Build AI-powered apps for web and mobile devices.',
    challenge: 'Good Health and Well-being (SDG 3)',
    tools: 'MIT App Inventor, Thunkable, Flutter, Python, JavaScript',
  },
  {
    id: 'robotics',
    name: 'Robotics & IoT',
    icon: Cpu,
    color: 'brand-red',
    ageGroups: 'Elementary, Junior, Senior',
    description: 'Design and build autonomous robots to solve real-world challenges.',
    challenge: 'Innovation (SDG 9) - Green Nairobi',
    tools: 'Zm Robo, LEGO Spike Prime, EV3, Arduino/Micro:bit, Whalesbot module',
  },
  {
    id: '3d-design',
    name: '3D Design Challenge',
    icon: Box,
    color: 'brand-purple',
    ageGroups: 'Elementary, Junior, Senior',
    description: 'Create three-dimensional digital models for real-world solutions.',
    challenge: 'Innovation (SDG 9)',
    tools: 'TinkerCAD, Fusion 360, Blender',
  },
];

const ageCategories = [
  { name: 'Elementary', ages: '8-10 years' },
  { name: 'Junior', ages: '11-15 years' },
  { name: 'Senior', ages: '16-18 years' },
];

const importantDates = [
  { event: 'Registration of Interest', date: '20th March 2026' },
  { event: 'Registration Deadline', date: '12th May 2026' },
  { event: 'Challenge Release', date: '15th March 2026' },
  { event: 'Project Submission', date: '1st June 2026' },
  { event: 'STEAM Fest Day', date: '6th June 2026', highlight: true },
];

export default function MembershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState('');

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="membership" className="relative py-24 overflow-hidden bg-white md:py-32" ref={ref}>
      {/* Animated Pattern Accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-green via-brand-blue to-brand-red"
      />

      {/* Decorative Elements */}
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-brand-green/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 left-10 w-80 h-80 bg-brand-blue/5 blur-3xl" />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-brand-red/5 blur-3xl" />

      <div className="relative px-6 mx-auto max-w-7xl md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-brand-green/10 text-brand-green"
          >
            <Sparkles className="w-4 h-4" />
            Join the Innovation
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 hero-heading text-brand-dark"
          >
            STEAM Fest Kenya 2026
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            A celebration of student innovation, creativity, and hard work. Where students' ideas are valued, 
            projects shine, and potential is recognized.
          </motion.p>
        </motion.div>

        {/* First Card: Register for STEAM Fest */}
        <motion.div
          variants={cardVariants}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative p-8 overflow-hidden bg-gradient-to-br from-brand-dark to-gray-900 rounded-3xl md:p-10">
            {/* Pattern background */}
            <div 
              className="absolute inset-0 opacity-[0.05] bg-pattern"
            />

            <div className="relative">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                    Register for STEAM Fest 2026
                  </h3>
                  <p className="max-w-xl mb-4 text-white/80">
                    Form a team of 3-4 students + 1 advisor and showcase your innovation
                  </p>
                  
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <Calendar className="w-5 h-5 text-brand-green" />
                      <span className="font-medium">{festInfo.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <MapPin className="w-5 h-5 text-brand-green" />
                      <span className="font-medium">{festInfo.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Users className="w-5 h-5 text-brand-green" />
                      <span className="font-medium">Teams: 3-4 students (Ages 8-18)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Target className="w-5 h-5 text-brand-green" />
                      <span className="font-medium">Registration Fee: {festInfo.price} per student</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Clock className="w-5 h-5 text-brand-red" />
                      <span className="font-medium">Deadline: {festInfo.registrationDeadline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      onClick={() => {
                        setInitialCategory('');
                        setIsModalOpen(true);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full bg-brand-green hover:shadow-lg hover:shadow-brand-green/30"
                      aria-label="Register your team for STEAM Fest 2026"
                    >
                      Register Your Team
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                    
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm min-w-[200px]">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-white">KES 2,000</div>
                    <div className="mb-4 text-sm text-white/70">per student</div>
                    <div className="text-sm font-semibold text-brand-green">Includes:</div>
                    <ul className="mt-2 space-y-1 text-xs text-white/80">
                      <li>✓ Challenge materials</li>
                      <li>✓ Judge evaluation</li>
                      <li>✓ Certificate</li>
                      <li>✓ Award ceremony</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Card: Inquiry Form */}
        <motion.div
          variants={cardVariants}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="p-8 transition-colors bg-white border-2 border-gray-200 rounded-3xl md:p-10 hover:border-brand-blue/30">
            <div className="flex flex-col items-start gap-8 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold text-brand-dark">
                  Have Questions?
                </h3>
                <p className="mb-6 text-gray-600">
                  Reach out to our team for any inquiries about registration, categories, or event details.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green/10">
                      <Phone className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Call Us</p>
                      <p className="text-gray-600">0712015793 or +254 704 657802</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue/10">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Email</p>
                      <p className="text-gray-600">bunifuyouthskenya@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-red/10">
                      <MessageCircle className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">WhatsApp</p>
                      <p className="text-gray-600">+254 712 015 793</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 md:w-72 bg-brand-light rounded-2xl">
                <h4 className="mb-4 font-bold text-brand-dark">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Age Groups:</span>
                    <div className="mt-1 space-y-1">
                      {ageCategories.map((cat, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="font-medium">{cat.name}</span>
                          <span className="text-gray-600">{cat.ages}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-500">Team Size:</span>
                    <p className="font-medium">3-4 students + 1 advisor</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Response Time:</span>
                    <p className="font-medium text-brand-green">24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Dates Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="mb-12 text-2xl font-bold text-center md:text-3xl text-brand-dark">
            Important Dates
          </h3>
          
          <div className="grid max-w-4xl grid-cols-2 gap-3 mx-auto md:grid-cols-5">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={staggerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`text-center p-4 rounded-xl ${
                  item.highlight 
                    ? 'bg-brand-green text-white' 
                    : 'bg-brand-light text-brand-dark'
                }`}
              >
                <div className="mb-2 text-sm font-medium">{item.event}</div>
                <div className={`text-base font-bold ${
                  item.highlight ? 'text-white' : 'text-brand-green'
                }`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-center md:text-3xl text-brand-dark">
            Competition Categories
          </h3>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Choose your skill area and tackle real-world challenges inspired by UN Sustainable Development Goals
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = categoryColorClasses[category.color as keyof typeof categoryColorClasses];
              
              return (
                <motion.div
                  key={category.id}
                  custom={index + 2}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
                  }}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-2xl hover:border-brand-blue/30"
                >
                  <div className={`p-6 border-b border-gray-200 ${colors.bg}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
                        <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <h4 className="font-bold text-brand-dark">{category.name}</h4>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">{category.ageGroups}</p>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-brand-green" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-dark">Challenge</span>
                      </div>
                      <p className="text-sm text-gray-600">{category.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-brand-blue" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-dark">Tools</span>
                      </div>
                      <p className="text-sm text-gray-600">{category.tools}</p>
                    </div>
                    
                    <motion.button
                      onClick={() => {
                        setInitialCategory(category.name);
                        setIsModalOpen(true);
                      }}
                      className={`inline-flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 ${colors.icon}`}
                      aria-label={`Register for ${category.name} category`}
                    >
                      Register for this category
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="mb-4 text-gray-500">Presented by</p>
          <div className="flex items-center justify-center gap-8">
            <span className="text-xl font-bold text-brand-dark">Nairobi Academy</span>
            <span className="text-gray-300">+</span>
            <span className="text-xl font-bold text-brand-green">Bunifu Youths Kenya</span>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <SteamFestRegistrationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialCategory={initialCategory}
            categories={categories}
            ageCategories={ageCategories}
          />
        </Suspense>
      )}
    </section>
  );
}