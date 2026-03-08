import { ArrowRight, Users, Package, ChevronLeft, ChevronRight, Trophy, GraduationCap, Rocket, Send, XCircle } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Form Modal Component for Hero Section CTAs
function FormModal({ isOpen, onClose, formType }: { isOpen: boolean; onClose: () => void; formType: string }) {
  // Map each form type to its Formspree endpoint
  const FORM_IDS: Record<string, string> = {
    journey: 'mlgpdekv',      // Start Your Journey / Start Learning
    mentor: 'xbdzljvk',       // Get a Mentor
    weekend: 'mpqywzgw',      // Weekend Sessions
    competition: 'xkoqgnao',  // Join Competitions
    enroll: 'mnjgnqkb',       // Enroll Your Child
    // For secondary buttons that don't need forms
    activities: 'activities',
    programs: 'programs',
  };

  // Only initialize form if it's a real form type
  const [state, handleSubmit] = FORM_IDS[formType]?.length > 8 
    ? useForm(FORM_IDS[formType])
    : [ { submitting: false, succeeded: false, errors: null }, () => {} ];

  // Auto-close modal after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  const getFormTitle = () => {
    switch(formType) {
      case 'journey': return 'Start Your STEM Journey';
      case 'mentor': return 'Get a Mentor';
      case 'weekend': return 'Join Weekend Sessions';
      case 'competition': return 'Join Competition';
      case 'enroll': return 'Enroll Your Child';
      case 'activities': return 'Explore Activities';
      case 'programs': return 'View Programs';
      default: return 'Contact Bunifu Youths';
    }
  };

  const getFormIcon = () => {
    switch(formType) {
      case 'journey': return '🚀';
      case 'mentor': return '👨‍🏫';
      case 'weekend': return '📅';
      case 'competition': return '🏆';
      case 'enroll': return '📚';
      case 'activities': return '🎯';
      case 'programs': return '📋';
      default: return '✉️';
    }
  };

  const getFormDescription = () => {
    switch(formType) {
      case 'journey': return 'Ready to start your STEM journey? Fill out the form below and we\'ll help you get started.';
      case 'mentor': return 'Get personalized guidance from industry professionals. Share your interests and we\'ll match you with a mentor.';
      case 'weekend': return 'Join our exciting weekend sessions! Fill in your details to reserve a spot.';
      case 'competition': return 'Register your interest in our upcoming STEAM competitions.';
      case 'enroll': return 'Provide your details to enroll your child in our programs.';
      case 'activities': return 'Let us know which activities interest you and we\'ll provide more information.';
      case 'programs': return 'Tell us which programs you\'re interested in learning more about.';
      default: return 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.';
    }
  };

  // For secondary buttons that don't need forms (like "Explore Activities")
  if (formType === 'activities' || formType === 'programs') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white shadow-2xl rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-5xl rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-red/10">
                  {formType === 'activities' ? '🎯' : '📋'}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-brand-dark">Coming Soon!</h3>
                <p className="mb-6 text-gray-600">
                  We're preparing more information about our {formType === 'activities' ? 'activities' : 'programs'}. 
                  Please check back later or contact us directly.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 font-bold text-white transition-all bg-gradient-to-r from-brand-blue to-brand-red rounded-xl hover:shadow-lg"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Top Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-white to-brand-red rounded-t-3xl" />
            
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close form"
              className="absolute z-10 p-2 text-gray-400 transition-colors bg-white rounded-full top-6 right-6 hover:text-brand-red hover:bg-red-50"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="p-8 pt-10">
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-4xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-2xl">
                  <span>{getFormIcon()}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">{getFormTitle()}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {getFormDescription()}
                  </p>
                </div>
              </div>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 mb-6 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-green-100 rounded-full">
                    ✅
                  </div>
                  <h4 className="text-xl font-bold text-green-700">Thank You!</h4>
                  <p className="text-green-600">We'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Form */}
              {!state.succeeded && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="John Doe"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="john@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  {/* Conditional Fields based on form type */}
                  {(formType === 'mentor' || formType === 'weekend') && (
                    <div>
                      <label htmlFor="interest" className="block mb-1 text-sm font-medium text-gray-700">
                        Area of Interest <span className="text-brand-red">*</span>
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      >
                        <option value="">Select an area</option>
                        <option value="coding">Coding</option>
                        <option value="robotics">Robotics</option>
                        <option value="3d-design">3D Design</option>
                        <option value="all">All of the above</option>
                      </select>
                    </div>
                  )}

                  {formType === 'enroll' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="child_name" className="block mb-1 text-sm font-medium text-gray-700">
                          Child's Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          id="child_name"
                          name="child_name"
                          required
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                          placeholder="Child's name"
                        />
                      </div>
                      <div>
                        <label htmlFor="child_age" className="block mb-1 text-sm font-medium text-gray-700">
                          Child's Age <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="number"
                          id="child_age"
                          name="child_age"
                          required
                          min="5"
                          max="18"
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                  )}

                  {formType === 'competition' && (
                    <div>
                      <label htmlFor="competition_type" className="block mb-1 text-sm font-medium text-gray-700">
                        Competition Interest <span className="text-brand-red">*</span>
                      </label>
                      <select
                        id="competition_type"
                        name="competition_type"
                        required
                        className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      >
                        <option value="">Select competition</option>
                        <option value="coding">Coding Challenge</option>
                        <option value="robotics">Robotics Battle</option>
                        <option value="3d-design">3D Design Showcase</option>
                        <option value="innovation">Innovation Hackathon</option>
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                      Message / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      placeholder="Tell us more about your interest..."
                    />
                  </div>

                  {/* Hidden field to identify form type */}
                  <input type="hidden" name="form_type" value={formType} />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-bold transition-all bg-gradient-to-r from-brand-blue via-white to-brand-red text-brand-dark rounded-xl hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 rounded-full border-brand-dark border-t-transparent animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-gray-500">
                      We'll never share your information.
                    </p>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-brand-blue" />
                      <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
                      <span className="w-2 h-2 rounded-full bg-brand-red" />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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
    backgroundImage: "/activity_robotics.png",
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
    backgroundImage: "/gallery_robotics_workshop.jpg",
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
    backgroundImage: "/activity_competition.jpeg",
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
    backgroundImage: "/activity_classroom.jpeg",
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
    backgroundImage: "/activity_3ddesign.jpg",
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
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setSlideDirection([1]);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

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
              alt=""
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
            backgroundImage: 'url(/pattern.jpg)',
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
            backgroundImage: 'url(/pattern.jpg)',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
          }}
        />
      </section>

      {/* Form Modal */}
      <FormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={currentFormType}
      />
    </>
  );
}