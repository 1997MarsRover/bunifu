import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PATTERN_URL } from '../lib/assets';

const faqs = [
  {
    question: 'How does the Bunifu program work?',
    answer:
      'Our Code Clubs run as ten hands-on sessions (three hours each) for ages 4–18. Learners rotate through coding, robotics, AI and apps, and 3D design, with breaks and show-and-tell each day. See the full step-by-step guide on the site.',
    link: { label: 'View how it works', to: '/how-it-works' },
  },
  {
    question: "What age groups do you cater to?",
    answer: "We work with children and teens aged 6-17. Younger learners build foundations through play, visual coding, and guided activities, while older students take on deeper projects in robotics, web development, AI, 3D design, and competitions."
  },
  {
    question: "Do I need any prior experience in STEM?",
    answer: "No prior experience is required! Our programs are designed for beginners and we guide each student at their own pace. We believe every child has the potential to be an innovator."
  },
  {
    question: "What equipment do students need?",
    answer: "For center-based sessions, we provide the core learning tools and equipment. Students mainly need curiosity and willingness to participate. For advanced tracks, a personal laptop can help with practice, but it is not required for beginners."
  },
  {
    question: "How can parents/guardians get involved?",
    answer: "Parents and guardians can enroll learners, attend showcases, support practice at home, volunteer, sponsor learners, or connect us with schools and community spaces that would benefit from outreach sessions."
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes! We offer scholarships for students from underserved communities. Our mission is to make STEM education accessible to all young Kenyans regardless of their financial background. Contact us to learn more about our scholarship programs."
  },
  {
    question: "What makes Bunifu different from other STEM programs?",
    answer: "Bunifu combines hands-on learning, mentorship, African innovation stories, outreach, and project-based practice. We do not only teach tools; we help learners build confidence, explain their ideas, solve problems, and see themselves as creators."
  },
  {
    question: "Do you work with schools and community groups?",
    answer: "Yes. We run school visits, outreach sessions, bootcamps, educator training, and partner programs for institutions that want to introduce learners to practical STEAM experiences."
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
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
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
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />

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
            Clear answers for parents, learners, schools, sponsors, and partners who want to understand how Bunifu works.
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
                      {'link' in faq && faq.link && (
                        <Link
                          to={faq.link.to}
                          className="inline-block mt-3 text-sm font-bold text-brand-blue hover:text-brand-green"
                        >
                          {faq.link.label} →
                        </Link>
                      )}
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
