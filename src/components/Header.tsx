import { Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import GetInvolvedFormModal from './GetInvolvedFormModal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
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
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-white/[0.98] shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
            : 'bg-transparent shadow-none'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl md:px-8">
          <div className="flex items-center justify-between py-4">
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10"
            >
              <Logo variant={isScrolled ? 'dark' : 'light'} />
            </motion.a>

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
                transition={{ delay: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(41, 112, 198, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 btn-brand-gradient text-white font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

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
                    className="block w-full py-3 font-bold text-center text-white btn-brand-gradient rounded-xl"
                  >
                    Get Involved
                  </motion.button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.button
        onClick={handleOpenForm}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 100,
          scale: isScrolled ? 1 : 0.8,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-40 flex items-center gap-2 px-6 py-3 font-bold text-white -translate-x-1/2 rounded-full shadow-lg bottom-6 left-1/2 md:hidden btn-brand-gradient"
      >
        Get Involved
        <ArrowRight className="w-4 h-4" />
      </motion.button>

      <GetInvolvedFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
