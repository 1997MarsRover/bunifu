import { Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
            <nav className="hidden md:flex items-center gap-1">
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
                      ? 'text-brand-dark hover:text-brand-green'
                      : 'text-white hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-green rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className={`flex items-center gap-2 text-sm ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-4 h-4 text-brand-red" />
                </motion.div>
                <span className="font-medium">Afralti Waiyaki Way</span>
              </motion.div>
              
              <motion.a
                href="https://forms.gle/67rKco3d66WhrQzi8"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(36, 99, 44, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-brand-green text-white font-bold text-sm px-5 py-2.5 rounded-full"
              >
                Get Involved
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl"
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
              className="md:hidden bg-white overflow-hidden border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={menuItemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    className="block py-3 px-4 font-semibold text-brand-dark hover:text-brand-green hover:bg-brand-green/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.div variants={menuItemVariants} className="pt-4 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-brand-dark">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span className="font-medium">Afralti Waiyaki Way</span>
                  </div>
                  
                  <motion.a
                    href="https://forms.gle/67rKco3d66WhrQzi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-brand-green text-white font-bold text-center py-3 rounded-xl"
                  >
                    Get Involved
                  </motion.a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Floating CTA */}
      <motion.a
        href="https://forms.gle/67rKco3d66WhrQzi8"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          y: isScrolled ? 0 : 100,
          scale: isScrolled ? 1 : 0.8
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden bg-brand-green text-white font-bold px-6 py-3 rounded-full shadow-lg z-40 flex items-center gap-2"
      >
        Get Involved
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </>
  );
}
