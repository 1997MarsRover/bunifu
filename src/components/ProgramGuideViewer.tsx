import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROGRAM_GUIDE_STEPS } from '../lib/programGuide';
import { GOOGLE_FORM_URL } from '../lib/links';
import { PATTERN_URL } from '../lib/assets';

function stepImageSrc(step: (typeof PROGRAM_GUIDE_STEPS)[number], webp: boolean) {
  return webp && step.imageWebp ? step.imageWebp : step.image;
}

export default function ProgramGuideViewer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const total = PROGRAM_GUIDE_STEPS.length;

  const parseStep = useCallback(() => {
    const raw = searchParams.get('step');
    const n = raw ? Number.parseInt(raw, 10) : 1;
    if (Number.isNaN(n)) return 0;
    return Math.max(0, Math.min(total - 1, n - 1));
  }, [searchParams, total]);

  const [activeIndex, setActiveIndex] = useState(parseStep);

  useEffect(() => {
    setActiveIndex(parseStep());
  }, [parseStep]);

  const step = PROGRAM_GUIDE_STEPS[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      setActiveIndex(clamped);
      setSearchParams({ step: String(clamped + 1) }, { replace: true });
      document.getElementById('guide-stage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [setSearchParams, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (e.key === 'ArrowRight') goTo(activeIndex + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, goTo]);

  return (
    <div className="relative">
      {/* Main stage — image is the hero */}
      <section id="guide-stage" className="relative overflow-hidden scroll-mt-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${PATTERN_URL})`,
            backgroundSize: '500px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-brand-light/30 to-white pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-8 pb-6 md:pt-12 md:pb-10"
          >
            <div className="relative mx-auto max-w-[960px]">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 -left-2 md:-left-8 text-[7rem] md:text-[9rem] font-black text-brand-green/[0.07] leading-none select-none"
              >
                {String(step.step).padStart(2, '0')}
              </span>

              <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50/80 p-3 sm:p-4 md:p-6 shadow-[0_32px_64px_-24px_rgba(26,26,26,0.2)]">
                <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-inner ring-1 ring-black/[0.06]">
                  <picture>
                    <source srcSet={stepImageSrc(step, true)} type="image/webp" />
                    <img
                      src={stepImageSrc(step, false)}
                      alt={step.imageAlt}
                      loading={activeIndex === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  </picture>
                </div>
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-brand-dark disabled:opacity-25 hover:scale-105 hover:shadow-xl transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === total - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-brand-dark disabled:opacity-25 hover:scale-105 hover:shadow-xl transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-2xl mx-auto text-center mt-10 md:mt-12 px-2">
              <div className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                In plain language
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 leading-tight">
                {step.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {step.summary}
              </p>
              {step.highlights && (
                <ul className="flex flex-wrap justify-center gap-2 mb-8">
                  {step.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-white border border-gray-100 text-brand-dark shadow-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="w-full sm:w-auto min-w-[140px] px-6 py-3 rounded-full border-2 border-gray-200 font-bold text-brand-dark disabled:opacity-30 hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  Previous page
                </button>
                {activeIndex < total - 1 ? (
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    className="w-full sm:w-auto min-w-[140px] px-6 py-3 rounded-full btn-brand-gradient text-white font-bold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Next page
                  </button>
                ) : (
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-w-[140px] px-6 py-3 rounded-full btn-brand-gradient text-white font-bold shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    Ready to enroll
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile floating nav */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-2 py-2 rounded-full bg-brand-dark/95 text-white shadow-2xl backdrop-blur-sm">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="p-2.5 rounded-full disabled:opacity-30 hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold tabular-nums px-2">
            {activeIndex + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            className="p-2.5 rounded-full disabled:opacity-30 hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="h-24 md:h-8" aria-hidden />
      </section>

      <section className="border-t border-gray-100 bg-white py-12 md:py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Explore activities on the main site or get in touch—we are happy
            to walk you through the program.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/#activities"
              className="px-6 py-3 rounded-full border-2 border-brand-dark font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
            >
              See activities
            </Link>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full btn-brand-gradient text-white font-bold"
            >
              Contact / enroll
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
