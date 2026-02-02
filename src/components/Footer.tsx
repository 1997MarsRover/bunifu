import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/Bunifu_youths_Kenya', label: 'Instagram', gradient: 'from-purple-500 via-pink-500 to-orange-400' },
  { icon: Twitter, href: '#', label: 'Twitter', gradient: 'from-blue-400 to-blue-500' },
  { icon: Facebook, href: '#', label: 'Facebook', gradient: 'from-blue-600 to-blue-700' },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Centers', href: '#centers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer ref={ref} className="relative bg-brand-dark text-white overflow-hidden">
      {/* Animated Pattern Background */}
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
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Top Pattern Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-2 origin-center"
        style={{
          backgroundImage: 'url(/pattern.jpg)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <img src="/final.png" alt="Bunifu Logo" className="h-12" />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white font-semibold mt-1"
              >
                Youths Kenya
              </motion.p>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of African innovators with creative confidence and future-ready skills.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br ${social.gradient} transition-colors`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#0089d3' }}
                    className="text-gray-400 hover:text-brand-blue transition-colors inline-flex items-center gap-2 text-sm"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      whileHover={{ width: 10 }}
                      className="h-0.5 bg-brand-blue"
                    />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Location</p>
                  <a 
                    href="https://www.google.com/maps/search/Afralti+Waiyaki+Way+Nairobi+Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-brand-blue transition-colors"
                  >
                    Afralti Waiyaki Way, Nairobi
                  </a>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <a 
                    href="tel:+254712015793"
                    className="text-gray-400 text-sm hover:text-brand-green transition-colors"
                  >
                    +254 712 015 793
                  </a>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center flex-shrink-0"
                >
                  <Mail className="w-4 h-4 text-brand-red" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a 
                    href="mailto:info@bunifuyouths.co.ke"
                    className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                  >
                    info@bunifuyouths.co.ke
                  </a>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news about our programs and events.
            </p>
            <motion.a
              href="https://forms.gle/67rKco3d66WhrQzi8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(36, 99, 44, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center bg-brand-green hover:bg-brand-green/90 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Get Involved
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} Bunifu Youths Kenya. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-brand-red fill-brand-red" />
            </motion.span>
            in Kenya
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-green text-white rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
