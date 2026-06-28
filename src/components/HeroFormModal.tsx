import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';

const HeroFormModalInner = lazy(() => import('./HeroFormModalInner'));

interface HeroFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: string;
}

export default function HeroFormModal({ isOpen, onClose, formType }: HeroFormModalProps) {
  if (formType === 'activities' || formType === 'programs') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white shadow-2xl rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-5xl rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-red/10">
                  {formType === 'activities' ? '🎯' : '📋'}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-brand-dark">Coming Soon!</h3>
                <p className="mb-6 text-gray-600">
                  We&apos;re preparing more information about our {formType === 'activities' ? 'activities' : 'programs'}.
                  Please check back later or contact us directly.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 font-bold text-white transition-all bg-gradient-to-r from-brand-blue to-brand-red rounded-xl hover:shadow-lg"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-white to-brand-red rounded-t-3xl" />

            <button
              type="button"
              onClick={onClose}
              title="Close form"
              className="absolute z-10 p-2 text-gray-400 transition-colors bg-white rounded-full top-6 right-6 hover:text-brand-red hover:bg-red-50"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <Suspense
              fallback={
                <div className="p-8 pt-10 flex items-center justify-center min-h-[200px]">
                  <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <HeroFormModalInner key={formType} formType={formType} onClose={onClose} />
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
