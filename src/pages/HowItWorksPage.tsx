import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgramGuideViewer from '../components/ProgramGuideViewer';
import { PATTERN_URL } from '../lib/assets';

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Program guide | Bunifu Youths Kenya';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Step-by-step Bunifu Code Clubs guide: STEM space, four activities, session day, progress, lesson plans, and program fees for parents in Kenya.',
      );
    }
    return () => {
      document.title =
        'Bunifu Youths Kenya | STEM, Robotics, AI & Creative Technology for Young Learners';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header variant="solid" />
      <main className="flex-1 pt-[4.5rem]">
        <section className="relative overflow-hidden border-b border-brand-green/10 bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/10">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url(${PATTERN_URL})`,
              backgroundSize: '480px',
              backgroundRepeat: 'repeat',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3"
            >
              Parent guide · Code Clubs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4"
            >
              Program guide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              The same seven-page guide we share with families—what happens in our STEM space, how
              a day is structured, what children build, and what to know before the first session.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-3 mb-6"
            >
              {['Ages 4–18', '10 sessions', '3 hours each', 'Hands-on STEM'].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full bg-white/90 text-sm font-semibold text-brand-dark shadow-sm border border-white"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
            <Link
              to="/"
              className="text-sm font-bold text-brand-blue hover:text-brand-green transition-colors"
            >
              ← Back to Bunifu Youths
            </Link>
          </div>
        </section>

        <ProgramGuideViewer />
      </main>
      <Footer compact />
    </div>
  );
}
