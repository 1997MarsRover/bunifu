import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';

const GetInvolvedFormModalInner = lazy(() => import('./GetInvolvedFormModalInner'));

interface GetInvolvedFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInvolvedFormModal({ isOpen, onClose }: GetInvolvedFormModalProps) {
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
              title="Close modal"
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-brand-red transition-colors z-10 bg-white rounded-full hover:bg-red-50"
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
              <GetInvolvedFormModalInner onClose={onClose} />
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
