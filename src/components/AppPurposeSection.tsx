import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, LogIn, FileText } from 'lucide-react';

export default function AppPurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="bunifu-cms"
      ref={ref}
      className="relative py-20 md:py-24 bg-brand-light overflow-hidden"
      aria-labelledby="bunifu-cms-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'url(/pattern.webp)',
          backgroundSize: '520px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-brand-green font-bold text-sm tracking-wide uppercase mb-3"
        >
          Application for Google Sign-In
        </motion.p>

        <motion.h2
          id="bunifu-cms-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5"
        >
          bunifu-cms
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-6"
        >
          <strong>bunifu-cms</strong> is the content management system for Bunifu Youths Kenya.
          Authorized staff use it to publish and update website content, program details, events,
          and community information shown on this public site.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-10"
        >
          Google Sign-In is requested only so approved administrators can authenticate securely.
          bunifu-cms uses basic Google account details (such as name and email) to verify identity
          and open the correct workspace. It is not a learner login portal and is not used to access
          unrelated Google services like Gmail or Drive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              icon: LogIn,
              title: 'Staff access only',
              text: 'Administrators and approved collaborators sign in to manage Bunifu content.',
            },
            {
              icon: ShieldCheck,
              title: 'Why Google data is used',
              text: 'Google account information authenticates authorized users and protects the CMS.',
            },
            {
              icon: FileText,
              title: 'Transparent privacy',
              text: 'Our Privacy Policy explains how bunifu-cms accesses, uses, and stores Google user data.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl bg-white/80 p-5 border border-black/5">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="/bunifu-cms/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-green transition-colors"
          >
            Full bunifu-cms details
          </a>
          <a
            href="/privacy/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-brand-dark font-bold text-sm border border-black/10 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://cms.bunifuyouths.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white font-bold text-sm hover:bg-brand-blue/90 transition-colors"
          >
            Open CMS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
