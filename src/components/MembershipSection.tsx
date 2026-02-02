import { motion, useInView } from 'framer-motion';
import { Check, Star, Users, User, Gift, Trophy, Gamepad2, Calendar, Sparkles, Home, Building, School } from 'lucide-react';
import { useRef } from 'react';

const membershipPlans = [
  {
    id: 'individual',
    name: 'Individual Membership',
    subtitle: '1 kid',
    price: 'KES 1,500',
    period: '/year',
    icon: User,
    color: 'brand-blue',
    popular: false,
  },
  {
    id: 'family',
    name: 'Family Membership',
    subtitle: '3 to 4 kids',
    price: 'KES 4,500',
    period: '/year',
    icon: Users,
    color: 'brand-green',
    popular: true,
  },
];

const programPlans = [
  {
    id: 'homeschooling',
    name: 'Home Schooling',
    subtitle: 'Personalized learning',
    price: 'KES 15,000',
    period: '/term',
    icon: Home,
    color: 'brand-red',
    description: 'One-on-one STEM education at home',
  },
  {
    id: 'bunifuhub',
    name: 'Bunifu Hub',
    subtitle: 'At our center',
    price: 'KES 10,000',
    period: '/term',
    icon: Building,
    color: 'brand-blue',
    description: 'Learn at our innovation hub',
  },
  {
    id: 'schoolclubs',
    name: 'School Clubs',
    subtitle: '10 sessions',
    price: 'KES 8,000',
    period: '/term',
    icon: School,
    color: 'brand-green',
    description: 'STEM clubs for your school',
  },
];

const benefits = [
  { icon: Gift, text: '10% discount on monthly plans & packages' },
  { icon: Star, text: 'Automatic enrolment in Bunifu Rewards Program' },
  { icon: Gamepad2, text: 'Early access to test new games before release' },
  { icon: Trophy, text: 'Access to internal challenges and competitions' },
  { icon: Calendar, text: 'Quarterly exhibitions to showcase projects' },
  { icon: Users, text: 'Birthday programs with VR content & free friend sessions' },
];

export default function MembershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="membership" className="relative py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      {/* Animated Pattern Accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-2 origin-left"
        style={{
          backgroundImage: 'url(/pattern.jpg)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Join Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-brand-dark mb-6"
          >
            Become a Member
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Choose a membership plan to get access to all amazing activities available and other great benefits.
          </motion.p>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          className="flex justify-center mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-brand-light border border-gray-200 px-6 py-3 rounded-full"
          >
            <span className="text-gray-600 font-medium">Showing packages for</span>
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-brand-green text-white font-bold px-4 py-1 rounded-full text-sm"
            >
              🇰🇪 Kenya
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16">
          {membershipPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-8 rounded-3xl border-2 transition-colors cursor-pointer ${
                  plan.popular 
                    ? 'border-brand-green bg-gradient-to-br from-brand-green/5 to-transparent' 
                    : 'border-gray-200 bg-white hover:border-brand-blue/30'
                }`}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    <motion.span 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-brand-green text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg"
                    >
                      ⭐ POPULAR
                    </motion.span>
                  </motion.div>
                )}

                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl bg-${plan.color}/10 flex items-center justify-center mb-6`}
                >
                  <IconComponent className={`w-7 h-7 text-${plan.color}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-brand-dark mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">({plan.subtitle})</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="text-4xl font-extrabold text-brand-dark"
                  >
                    {plan.price}
                  </motion.span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>

                <motion.a
                  href="https://forms.gle/67rKco3d66WhrQzi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center font-bold py-4 rounded-full transition-all ${
                    plan.popular
                      ? 'bg-brand-green text-white hover:shadow-lg hover:shadow-brand-green/30'
                      : 'bg-brand-dark text-white hover:bg-brand-dark/90'
                  }`}
                >
                  Get Membership
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Program Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">
            Program Packages
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  custom={index + 2}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
                  }}
                  className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-brand-blue/30 transition-colors"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-${plan.color}/10 flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 text-${plan.color}`} />
                  </motion.div>

                  <h4 className="text-lg font-bold text-brand-dark mb-1">{plan.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{plan.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-2xl font-extrabold text-brand-dark">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>

                  <motion.a
                    href="https://forms.gle/67rKco3d66WhrQzi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full text-center font-bold py-3 rounded-full bg-${plan.color} text-white hover:opacity-90 transition-opacity`}
                  >
                    Enroll Now
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mb-16"
        >
          * Membership does not include program activities. Programs are charged separately.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-gradient-to-br from-brand-dark to-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Animated pattern background */}
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear" 
            }}
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'url(/pattern.jpg)',
              backgroundSize: '400px',
              backgroundRepeat: 'repeat',
            }}
          />

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="relative text-2xl md:text-3xl font-bold text-white text-center mb-10"
          >
            ✨ Membership Benefits
          </motion.h3>
          
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={benefitVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0"
                  >
                    <IconComponent className="w-5 h-5 text-brand-green" />
                  </motion.div>
                  <p className="text-white/90 text-sm leading-relaxed">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="relative mt-10 pt-8 border-t border-white/10"
          >
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                'Access to international STEM competitions info',
                'Discounted Bunifu merchandise'
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <Check className="w-5 h-5 text-brand-green" />
                  </motion.div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
