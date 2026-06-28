import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface GetInvolvedFormModalInnerProps {
  onClose: () => void;
}

export default function GetInvolvedFormModalInner({ onClose }: GetInvolvedFormModalInnerProps) {
  const [state, handleSubmit] = useForm('maqpnyka');

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  return (
    <div className="p-8 pt-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 flex items-center justify-center text-4xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-2xl">
          <span>🤝</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-dark">Get Involved with Bunifu</h3>
          <p className="mt-1 text-sm text-gray-600">
            Fill out the form below and we&apos;ll get back to you about volunteer opportunities.
          </p>
        </div>
      </div>

      {state.succeeded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 mb-6 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-green-100 rounded-full">
            ✅
          </div>
          <h4 className="text-xl font-bold text-green-700">Thank You!</h4>
          <p className="text-green-600">We&apos;ll get back to you soon.</p>
        </motion.div>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="involve-name" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              id="involve-name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="John Doe"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
          </div>

          <div>
            <label htmlFor="involve-email" className="block mb-1 text-sm font-medium text-gray-700">
              Email Address <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              id="involve-email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="john@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
          </div>

          <div>
            <label htmlFor="involve-phone" className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number <span className="text-brand-red">*</span>
            </label>
            <input
              type="tel"
              id="involve-phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="+254 XXX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="involve-help" className="block mb-1 text-sm font-medium text-gray-700">
              How would you like to help? <span className="text-brand-red">*</span>
            </label>
            <select
              id="involve-help"
              name="help_type"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            >
              <option value="">Select an option</option>
              <option value="volunteer">Volunteer</option>
              <option value="mentor">Become a Mentor</option>
              <option value="sponsor">Sponsor a Child</option>
              <option value="partner">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="involve-message" className="block mb-1 text-sm font-medium text-gray-700">
              Message / Questions
            </label>
            <textarea
              id="involve-message"
              name="message"
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="Tell us more about how you'd like to get involved..."
            />
          </div>

          <input type="hidden" name="form_type" value="involve" />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue via-white to-brand-red text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-gray-500">We&apos;ll never share your information.</p>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-brand-blue rounded-full" />
              <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
              <span className="w-2 h-2 bg-brand-red rounded-full" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
