import { motion, useInView } from 'framer-motion';
import { MapPin, ExternalLink, Phone, Clock, Navigation } from 'lucide-react';
import { useRef } from 'react';
import { PATTERN_URL } from '../lib/assets';

export default function CentersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="centers" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
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
            className="inline-block bg-brand-red/10 text-brand-red font-semibold text-sm px-4 py-2 rounded-full mb-4"
          >
            📍 Our Location
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-brand-dark mb-6"
          >
            Visit Our Center
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Come explore our state-of-the-art facilities and see innovation in action
          </motion.p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-brand-dark to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Pattern Accent */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 origin-left"
            style={{
              backgroundImage: `url(${PATTERN_URL})`,
              backgroundSize: '200px',
              backgroundRepeat: 'repeat-x',
            }}
          />

          <div className="p-8 md:p-12">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green font-bold text-sm px-4 py-2 rounded-full mb-6"
              >
                <span>🇰🇪</span>
                Nairobi, Kenya
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Bunifu Innovation Hub
              </h3>
              
              <div className="space-y-4 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Address</p>
                    <p className="text-white/70">Afralti Waiyaki Way, Nairobi</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:+254712015793" className="text-white/70 hover:text-brand-blue transition-colors">
                      +254 712 015 793
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Hours</p>
                    <p className="text-white/70">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://www.google.com/maps/search/Afralti+Waiyaki+Way+Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(36, 99, 44, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-brand-green text-white font-bold px-6 py-3 rounded-full"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>
                
                <motion.a
                  href="https://forms.gle/67rKco3d66WhrQzi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-full border border-white/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Schedule Visit
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Pattern Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-2 origin-center"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}
