import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import { PATTERN_URL } from '../lib/assets';

export default function CareersBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-br from-brand-blue/5 via-white to-brand-red/5 overflow-hidden border-y border-gray-100"
      aria-labelledby="careers-banner-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundSize: '520px',
          backgroundRepeat: 'repeat',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative max-w-5xl mx-auto px-6 md:px-12 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs sm:text-sm font-bold rounded-full bg-brand-blue/10 text-brand-blue uppercase tracking-wider">
          <span>We&apos;re Hiring in Nairobi</span>
        </span>

        <h2 id="careers-banner-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">
          Join the Bunifu Youths Team
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Are you passionate about turning young curiosity into tangible creation? We are currently recruiting for
          <strong className="text-brand-dark font-semibold"> STEM Education Facilitators</strong> and
          <strong className="text-brand-dark font-semibold"> School Partnerships & Sales Associates</strong>.
        </p>

        {/* Roles Quick Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200/80 shadow-xs text-xs font-semibold text-gray-700">
            <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
            <span>STEM Facilitator: Coding · Robotics · 3D Printing</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200/80 shadow-xs text-xs font-semibold text-gray-700">
            <Users className="w-3.5 h-3.5 text-brand-red" />
            <span>Sales & Outreach: School Partnerships</span>
          </div>
        </div>

        <Link
          to="/careers"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full btn-brand-gradient text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>View Job Openings & Apply</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
