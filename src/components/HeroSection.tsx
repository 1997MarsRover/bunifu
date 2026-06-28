import { ArrowRight, Users, Package, ChevronLeft, ChevronRight, Trophy, GraduationCap, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import HeroFormModal from './HeroFormModal';
import { PATTERN_URL } from '../lib/assets';

const slides = [
  {
    id: 1,
    badge: "Empowering Young Innovators in Kenya",
    title: {
      line1: "Building Africa's next generation of",
      highlight1: "tech leaders",
      line2: "through",
      highlight2: "STEM",
    },
    description: "We equip young minds with coding, robotics, and 3D design skills to solve real-world problems and become creators of technology, not just consumers.",
    buttons: [
      { label: "Start Your Journey", formType: "journey", variant: "primary", icon: Rocket },
      { label: "Explore Activities", formType: "activities", variant: "secondary", icon: null },
    ],
    backgroundImage: '/activity_robotics.webp',
  },
  {
    id: 2,
    badge: "Build Your Future with Bunifu",
    title: {
      line1: "Learn from",
      highlight1: "expert mentors",
      line2: "with our",
      highlight2: "STEM Curriculum",
    },
    description: "Get personalized guidance from industry professionals and hands-on learning materials to kickstart your STEM journey at home or school.",
    buttons: [
      { label: "Get a Mentor", formType: "mentor", variant: "blue", icon: Users },
      { label: "Join Weekend Sessions", formType: "weekend", variant: "red", icon: Package },
    ],
    backgroundImage: '/gallery_robotics_workshop.webp',
  },
  {
    id: 3,
    badge: "Gateway to Global STEAM Pathways",
    title: {
      line1: "Connect to",
      highlight1: "global opportunities",
      line2: "through",
      highlight2: "competitions",
    },
    description: "Bunifu Youths offers exciting tech competitions that connect young innovators to global STEAM opportunities, showcasing their skills in coding, robotics, and 3D design on bigger stages.",
    buttons: [
      { label: "Join Competitions", formType: "competition", variant: "primary", icon: Trophy },
      { label: "Learn More", formType: "activities", variant: "secondary", icon: null },
    ],
    backgroundImage: '/activity_competition.webp',
  },
  {
    id: 4,
    badge: "For Parents & Teachers",
    title: {
      line1: "Empower learners with",
      highlight1: "future-ready",
      line2: "",
      highlight2: "STEAM skills",
    },
    description: "Bunifu Youths is a trusted hub for parents and teachers to plug learners into hands-on coding, robotics, and 3D design programs that build real-world skills and confidence.",
    buttons: [
      { label: "Enroll Your Child", formType: "enroll", variant: "blue", icon: GraduationCap },
      { label: "School Programs", formType: "programs", variant: "secondary", icon: null },
    ],
    backgroundImage: '/activity_classroom.webp',
  },
  {
    id: 5,
    badge: "Where Youths Build the Future",
    title: {
      line1: "Your go-to hub for",
      highlight1: "Coding, Robotics",
      line2: "&",
      highlight2: "3D Design",
    },
    description: "Bunifu Youths is your go-to STEAM hub for young innovators to learn coding, robotics, and 3D design in a fun, practical way. We provide hands-on programs, mentorship, and real-world projects that help learners build future-ready skills.",
    buttons: [
      { label: "Start Learning", formType: "journey", variant: "primary", icon: Rocket },
      { label: "View Programs", formType: "programs", variant: "secondary", icon: null },
    ],
    backgroundImage: '/activity_3ddesign.webp',
  },
];

export default function HeroSection() {
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [[slideDirection], setSlideDirection] = useState([0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('journey');
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Auto-advance slides
  const handleNext = useCallback(() => {
    setSlideDirection([1]);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handlePrev = () => {
    setSlideDirection([-1]);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    const direction = index > currentSlide ? 1 : -1;
    setSlideDirection([direction]);
    setCurrentSlide(index);
  };

  const handleOpenForm = (formType: string) => {
    setCurrentFormType(formType);
    setIsFormOpen(true);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <section
        ref={ref}
        id="hero"
        className="relative flex items-center min-h-screen overflow-hidden"
      >
        {/* Background Image with Slide Transition */}
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentSlide}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{ y, scale }}
          >
            <img
              src={currentSlideData.backgroundImage}
              alt="Bunifu Youths Kenya STEM programs"
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
              decoding="async"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/50" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative Pattern Border - Left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 bottom-0 left-0 w-4 md:w-6"
          style={{
            backgroundImage: `url(${PATTERN_URL})`,
            backgroundSize: '200px',
            backgroundRepeat: 'repeat-y',
          }}
        />

        {/* Content */}
        <motion.div 
          className="relative z-10 px-8 py-32 mx-auto max-w-7xl md:px-16 md:py-40"
          style={{ opacity }}
        >
          <div className="max-w-3xl">
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={currentSlide}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-white border rounded-full bg-white/10 backdrop-blur-md border-white/20"
                >
                  <span className="text-lg">🇰🇪</span>
                  <span className="text-sm font-medium">{currentSlideData.badge}</span>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-8 overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15]"
                  >
                    {currentSlideData.title.line1}{' '}
                    <span className="text-brand-blue">{currentSlideData.title.highlight1}</span>{' '}
                    {currentSlideData.title.line2}{' '}
                    <span className="text-brand-blue">{currentSlideData.title.highlight2}</span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-2xl mb-10 text-lg leading-relaxed text-white/80 md:text-xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col flex-wrap gap-4 sm:flex-row"
                >
                  {currentSlideData.buttons.map((button) => {
                    const IconComponent = button.icon;
                    
                    let buttonClasses = "";
                    if (button.variant === "primary") {
                      buttonClasses = "bg-brand-green hover:shadow-lg hover:shadow-brand-green/30";
                    } else if (button.variant === "secondary") {
                      buttonClasses = "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20";
                    } else if (button.variant === "blue") {
                      buttonClasses = "bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/30";
                    } else if (button.variant === "red") {
                      buttonClasses = "bg-brand-red hover:shadow-lg hover:shadow-brand-red/30";
                    }

                    return (
                      <motion.button
                        key={button.label}
                        onClick={() => handleOpenForm(button.formType)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group inline-flex items-center justify-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-full transition-all ${buttonClasses}`}
                      >
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                        {button.label}
                        {button.variant === "primary" && (
                          <ArrowRight className="w-5 h-5" />
                        )}
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-wrap gap-8 mt-16"
            >
              {[
                { value: '500+', label: 'Kids Empowered', color: 'text-brand-blue' },
                { value: '50+', label: 'STEM Programs', color: 'text-brand-green' },
                { value: '20+', label: 'Expert Mentors', color: 'text-brand-red' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.15, duration: 0.5 }}
                  className="text-white cursor-default"
                >
                  <div className={`text-3xl md:text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Slide Navigation */}
        <div className="absolute z-20 flex items-center gap-4 -translate-x-1/2 bottom-24 md:bottom-16 left-1/2">
          {/* Prev Button */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
            className="flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                role="tab"
                aria-label={`Go to slide ${index + 1}: ${slides[index].badge}`}
                aria-current={index === currentSlide ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark ${
                  index === currentSlide 
                    ? 'bg-brand-green w-8' 
                    : 'bg-white/40 hover:bg-white/60 w-2'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
            className="flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute hidden bottom-8 left-8 md:block"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/30">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Pattern Strip */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-2 origin-left"
          style={{
            backgroundImage: `url(${PATTERN_URL})`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
          }}
        />
      </section>

      {/* Form Modal */}
      <HeroFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={currentFormType}
      />
    </>
  );
}