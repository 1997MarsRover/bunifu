import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  HeartHandshake, 
  Compass, 
  Mail,
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CAREER_POSITIONS, CareerPosition } from '../data/careers';
import { PATTERN_URL } from '../lib/assets';

export default function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>('stem-facilitator');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers & Job Vacancies | Bunifu Youths Kenya';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Explore open career opportunities at Bunifu Youths Kenya. We are hiring STEM Education Facilitators and School Partnerships & Sales Associates in Nairobi.'
      );
    }
    return () => {
      document.title = 'Bunifu Youths Kenya | STEM, Robotics, AI & Creative Technology for Young Learners';
    };
  }, []);

  const toggleExpand = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Header variant="solid" />

      <main className="flex-1 pt-[4.5rem]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-200/80 bg-gradient-to-br from-brand-blue/10 via-white to-brand-yellow/10">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url(${PATTERN_URL})`,
              backgroundSize: '480px',
              backgroundRepeat: 'repeat',
            }}
          />
          <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs sm:text-sm font-bold tracking-wide uppercase mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>We Are Hiring in Nairobi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight mb-5"
            >
              Can You Turn <span className="text-brand-blue">Curiosity</span> Into{' '}
              <span className="text-brand-red">Creation</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Join Bunifu Youths Kenya as we bring hands-on robotics, coding, 3D design, and practical innovation to schools
              and youth across Nairobi. Build the future with an energetic and mission-driven team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 shadow-sm border border-gray-200/80 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 shadow-sm border border-gray-200/80 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700">
                <Compass className="w-4 h-4 text-brand-green" />
                <span>Practical STEM & Outreach</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 shadow-sm border border-gray-200/80 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>Equal Opportunity Employer</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand-blue uppercase mb-1">Current Openings</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-dark">
                Explore Available Positions
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Review the requirements below and apply directly through our on-site form. Applications go directly to our hiring team.
            </p>
          </div>

          <div className="space-y-8">
            {CAREER_POSITIONS.map((job: CareerPosition, index: number) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden ${
                    isExpanded ? 'border-brand-blue/40 ring-1 ring-brand-blue/20' : 'border-gray-200/80'
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${job.color.badge}`}>
                          {job.department}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                          {job.workArrangement}
                        </span>
                      </div>

                      {job.applicationDeadline && (
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-200/60">
                          <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                          <span>Deadline: {job.applicationDeadline}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-brand-blue mt-0.5">
                      {job.subtitle}
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
                      {job.posterWording}
                    </p>

                    {/* Quick Meta Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 p-4 bg-gray-50/80 rounded-2xl border border-gray-100 text-xs text-gray-700">
                      <div>
                        <span className="block text-[11px] font-semibold text-gray-400 uppercase">Location</span>
                        <span className="font-bold">{job.location}</span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-gray-400 uppercase">Schedule</span>
                        <span className="font-bold">{job.schedule}</span>
                      </div>
                      {job.startDate && (
                        <div>
                          <span className="block text-[11px] font-semibold text-gray-400 uppercase">Start Date</span>
                          <span className="font-bold">{job.startDate}</span>
                        </div>
                      )}
                      {job.compensation && (
                        <div>
                          <span className="block text-[11px] font-semibold text-gray-400 uppercase">Compensation</span>
                          <span className="font-bold">{job.compensation}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(job.id)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-600 hover:text-brand-dark transition-colors py-2"
                      >
                        <span>{isExpanded ? 'Hide full job specifications' : 'View responsibilities & candidate profile'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <a
                        href={job.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm text-white bg-gradient-to-r from-brand-blue to-brand-red rounded-xl hover:shadow-lg hover:shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>Apply for this Role</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Expandable Specifications */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 bg-gray-50/40 px-6 sm:px-8 py-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                              <span>Main Responsibilities</span>
                            </h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                              {job.mainResponsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements & Profile */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2">
                                <Star className="w-4 h-4 text-brand-yellow" />
                                <span>Essential Requirements</span>
                              </h4>
                              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                {job.essentialRequirements.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {job.addedAdvantages.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3">
                                  Added Advantages
                                </h4>
                                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                  {job.addedAdvantages.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3">
                                Candidate Profile (You may be the right person if you:)
                              </h4>
                              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                {job.candidateProfile.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Application Instructions box */}
                        <div className="mt-8 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <h5 className="font-bold text-brand-dark text-sm mb-1">Ready to submit your application?</h5>
                            <p className="text-xs text-gray-500">
                              Upload your CV document (.pdf or .docx), compensation expectations, and introduction video directly via our official Google Form.
                            </p>
                          </div>
                          <a
                            href={job.googleFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-xs sm:text-sm text-white bg-brand-blue rounded-xl hover:bg-blue-700 hover:shadow-md transition"
                          >
                            <span>Open Application Form</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Equal Opportunity & Safeguarding Notice */}
        <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-brand-dark text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${PATTERN_URL})`,
                backgroundSize: '400px',
                backgroundRepeat: 'repeat',
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
                <HeartHandshake className="w-4 h-4 text-brand-yellow" />
                <span>Equal Opportunity & Child Safeguarding</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Committed to Fairness, Diversity and Safe Learning Spaces
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-3xl mb-6">
                Bunifu Youths Kenya is an equal-opportunity organisation. Qualified candidates are encouraged to apply
                regardless of gender, disability, ethnicity, religion or background. Kenyan employment rules call for
                vacancies to encourage suitable applicants without discrimination on protected grounds. All staff and
                facilitators undergo strict child safeguarding and code-of-conduct orientation.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <span>Questions? Email our recruitment desk:</span>
                  <a
                    href="mailto:bunifuyouths@gmail.com"
                    className="text-white hover:text-brand-yellow font-medium underline underline-offset-2"
                  >
                    bunifuyouths@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
