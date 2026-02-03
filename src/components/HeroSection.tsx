import { ArrowRight, Users, Package, ChevronLeft, ChevronRight, Trophy, GraduationCap, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    badge: "Empowering Young Innovators in Kenya",
    title: {
      line1: "Sponsor a kid and",
      highlight1: "support them",
      line2: "in",
      highlight2: "STEM",
    },
    description: "Join us in nurturing the next generation of African innovators, creators, and problem-solvers through hands-on STEM education and mentorship.",
    buttons: [
      { label: "Get Involved", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "primary", icon: ArrowRight },
      { label: "Explore Activities", href: "#activities", variant: "secondary", icon: null },
    ],
  },
  {
    id: 2,
    badge: "Build Your Future with Bunifu",
    title: {
      line1: "Learn from",
      highlight1: "expert mentors",
      line2: "with our",
      highlight2: "STEM Kits",
    },
    description: "Get personalized guidance from industry professionals and hands-on learning materials to kickstart your STEM journey at home or school.",
    buttons: [
      { label: "Get a Mentor", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "blue", icon: Users },
      { label: "Buy a STEM Kit", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "red", icon: Package },
    ],
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
      { label: "Join Competitions", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "primary", icon: Trophy },
      { label: "Learn More", href: "#activities", variant: "secondary", icon: null },
    ],
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
      { label: "Enroll Your Child", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "blue", icon: GraduationCap },
      { label: "School Programs", href: "#membership", variant: "secondary", icon: null },
    ],
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
      { label: "Start Learning", href: "https://forms.gle/67rKco3d66WhrQzi8", variant: "primary", icon: Rocket },
      { label: "View Programs", href: "#activities", variant: "secondary", icon: null },
    ],
  },
];

export default function HeroSection() {
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background Image - Same for all slides */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="/activity_robotics.png"
          alt="Children learning STEM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/50" />
      </motion.div>

      {/* Decorative Pattern Border - Left */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-4 md:w-6"
        style={{
          backgroundImage: 'url(/pattern.jpg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat-y',
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32 md:py-40"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full mb-8 border border-white/20"
              >
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg"
                >
                  🇰🇪
                </motion.span>
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
                  <span className="text-brand-green">{currentSlideData.title.highlight2}</span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              >
                {currentSlideData.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
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
                    <motion.a
                      key={button.label}
                      href={button.href}
                      target={button.href.startsWith("http") ? "_blank" : undefined}
                      rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group inline-flex items-center justify-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-full transition-all ${buttonClasses}`}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                      {button.label}
                      {button.variant === "primary" && (
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      )}
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Stats with Counter Animation */}
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-white cursor-default"
              >
                <div className={`text-3xl md:text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-white/60 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Navigation */}
      <div className="absolute bottom-24 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Prev Button */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-brand-green w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Pattern Strip */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-2 origin-left"
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
