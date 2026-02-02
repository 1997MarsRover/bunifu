import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer: "We work with children aged 6-17 years old, with programs tailored to different age groups and skill levels. Our younger learners (6-10) focus on foundational concepts through play, while older students (11-17) engage in more advanced projects and competitions."
  },
  {
    question: "Do I need any prior experience in STEM?",
    answer: "No prior experience is required! Our programs are designed for beginners and we guide each student at their own pace. We believe every child has the potential to be an innovator."
  },
  {
    question: "What equipment do students need?",
    answer: "All necessary equipment is provided at our center. Students just need to bring their enthusiasm and curiosity! For some advanced programs, we may recommend a personal laptop, but this is optional."
  },
  {
    question: "How can parents/guardians get involved?",
    answer: "We encourage parental involvement! Parents can volunteer as mentors, attend our showcase events, participate in parent-child workshops, or support our programs through sponsorships and partnerships."
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes! We offer scholarships for students from underserved communities. Our mission is to make STEM education accessible to all young Kenyans regardless of their financial background. Contact us to learn more about our scholarship programs."
  },
  {
    question: "What makes Bunifu different from other STEM programs?",
    answer: "Bunifu combines hands-on learning with African innovation stories and mentorship from industry professionals. We focus not just on technical skills, but also on creativity, problem-solving, and entrepreneurship to help students become well-rounded innovators."
  }
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="relative py-24 md:py-32 bg-brand-light overflow-hidden">
      {/* Animated Background Pattern */}
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
        className="absolute inset-0 opacity-[0.02]"
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

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
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
            <MessageCircle className="w-4 h-4" />
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-brand-dark mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            Everything you need to know about our programs and how to get started
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  openIndex === index 
                    ? 'bg-white shadow-card-hover' 
                    : 'bg-white/50 hover:bg-white hover:shadow-card'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-green' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? 'bg-brand-green text-white' 
                        : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="text-gray-600 leading-relaxed mt-4 pr-14"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to hear from you.
          </p>
          <motion.a
            href="https://forms.gle/67rKco3d66WhrQzi8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 137, 211, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-brand-blue text-white font-bold text-lg px-8 py-4 rounded-full"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
