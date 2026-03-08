import { Menu, X, MapPin, ArrowRight, Send, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Logo from './Logo';

// Form Modal Component for Get Involved only
function FormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [state, handleSubmit] = useForm('maqpnyka'); // Get Involved form only

  // Auto-close modal after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

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
              title="Close modal"
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-brand-red transition-colors z-10 bg-white rounded-full hover:bg-red-50"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="p-8 pt-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-4xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-2xl">
                  <span>🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">Get Involved with Bunifu</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Fill out the form below and we'll get back to you about volunteer opportunities.
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
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-green-100 rounded-full">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  {/* How they want to help */}
                  <div>
                    <label htmlFor="help_type" className="block mb-1 text-sm font-medium text-gray-700">
                      How would you like to help? <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="help_type"
                      name="help_type"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="mentor">Become a Mentor</option>
                      <option value="sponsor">Sponsor a Child</option>
                      <option value="partner">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                      Message / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                      placeholder="Tell us more about how you'd like to get involved..."
                    />
                  </div>

                  {/* Hidden field to identify form type */}
                  <input type="hidden" name="form_type" value="involve" />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue via-white to-brand-red text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
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
                      <span className="w-2 h-2 bg-brand-blue rounded-full" />
                      <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
                      <span className="w-2 h-2 bg-brand-red rounded-full" />
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

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'STEAM FEST', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.98)']
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0,0,0,0)', '0 4px 30px rgba(0,0,0,0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ 
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="px-4 mx-auto max-w-7xl md:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a 
              href="#hero" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10"
            >
              <Logo variant={isScrolled ? 'dark' : 'light'} />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="items-center hidden gap-1 md:flex">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 font-semibold text-sm transition-colors ${
                    isScrolled
                      ? 'text-brand-dark hover:text-brand-blue'
                      : 'text-white hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-blue to-brand-red rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="items-center hidden gap-4 md:flex">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className={`flex items-center gap-2 text-sm ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
              >
                <MapPin className="w-4 h-4 text-brand-red" />
                <span className="font-medium">Afralti Waiyaki Way</span>
              </motion.div>
              
              <motion.button
                onClick={handleOpenForm}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(41, 112, 198, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-brand-blue via-white to-brand-red text-brand-dark font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden rounded-xl"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={`w-6 h-6 ${isScrolled ? 'text-brand-dark' : 'text-white'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={`w-6 h-6 ${isScrolled ? 'text-brand-dark' : 'text-white'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden bg-white border-t border-gray-100 md:hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={menuItemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    className="block px-4 py-3 font-semibold transition-colors text-brand-dark hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl"
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.div variants={menuItemVariants} className="pt-4 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-brand-dark">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span className="font-medium">Afralti Waiyaki Way</span>
                  </div>
                  
                  <motion.button
                    onClick={handleOpenForm}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full py-3 font-bold text-center text-white bg-gradient-to-r from-brand-blue to-brand-red rounded-xl"
                  >
                    Get Involved
                  </motion.button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Floating CTA */}
      <motion.button
        onClick={handleOpenForm}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          y: isScrolled ? 0 : 100,
          scale: isScrolled ? 1 : 0.8
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-40 flex items-center gap-2 px-6 py-3 font-bold text-white -translate-x-1/2 rounded-full shadow-lg bottom-6 left-1/2 md:hidden bg-gradient-to-r from-brand-blue to-brand-red"
      >
        Get Involved
        <ArrowRight className="w-4 h-4" />
      </motion.button>

      {/* Form Modal - Get Involved only */}
      <FormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}