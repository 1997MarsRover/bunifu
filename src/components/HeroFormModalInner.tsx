import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const FORM_IDS: Record<string, string> = {
  journey: 'mlgpdekv',
  mentor: 'xbdzljvk',
  weekend: 'mpqywzgw',
  competition: 'xkoqgnao',
  enroll: 'mnjgnqkb',
};

interface HeroFormModalInnerProps {
  formType: string;
  onClose: () => void;
}

function getFormTitle(formType: string) {
  switch (formType) {
    case 'journey': return 'Start Your STEM Journey';
    case 'mentor': return 'Get a Mentor';
    case 'weekend': return 'Join Weekend Sessions';
    case 'competition': return 'Join Competition';
    case 'enroll': return 'Enroll Your Child';
    default: return 'Contact Bunifu Youths';
  }
}

function getFormIcon(formType: string) {
  switch (formType) {
    case 'journey': return '🚀';
    case 'mentor': return '👨‍🏫';
    case 'weekend': return '📅';
    case 'competition': return '🏆';
    case 'enroll': return '📚';
    default: return '✉️';
  }
}

function getFormDescription(formType: string) {
  switch (formType) {
    case 'journey': return "Ready to start your STEM journey? Fill out the form below and we'll help you get started.";
    case 'mentor': return "Get personalized guidance from industry professionals. Share your interests and we'll match you with a mentor.";
    case 'weekend': return 'Join our exciting weekend sessions! Fill in your details to reserve a spot.';
    case 'competition': return 'Register your interest in our upcoming STEAM competitions.';
    case 'enroll': return 'Provide your details to enroll your child in our programs.';
    default: return "We'd love to hear from you. Send us a message and we'll respond as soon as possible.";
  }
}

export default function HeroFormModalInner({ formType, onClose }: HeroFormModalInnerProps) {
  const formId = FORM_IDS[formType] ?? FORM_IDS.journey;
  const [state, handleSubmit] = useForm(formId);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  return (
    <div className="p-8 pt-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-16 h-16 text-4xl bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-2xl">
          <span>{getFormIcon(formType)}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-dark">{getFormTitle(formType)}</h3>
          <p className="mt-1 text-sm text-gray-600">{getFormDescription(formType)}</p>
        </div>
      </div>

      {state.succeeded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 mb-6 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
        >
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-4xl bg-green-100 rounded-full">
            ✅
          </div>
          <h4 className="text-xl font-bold text-green-700">Thank You!</h4>
          <p className="text-green-600">We&apos;ll get back to you soon.</p>
        </motion.div>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="hero-name" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              id="hero-name"
              name="name"
              required
              className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              placeholder="John Doe"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
          </div>

          <div>
            <label htmlFor="hero-email" className="block mb-1 text-sm font-medium text-gray-700">
              Email Address <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              id="hero-email"
              name="email"
              required
              className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              placeholder="john@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
          </div>

          <div>
            <label htmlFor="hero-phone" className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number <span className="text-brand-red">*</span>
            </label>
            <input
              type="tel"
              id="hero-phone"
              name="phone"
              required
              className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              placeholder="+254 XXX XXX XXX"
            />
          </div>

          {(formType === 'mentor' || formType === 'weekend') && (
            <div>
              <label htmlFor="hero-interest" className="block mb-1 text-sm font-medium text-gray-700">
                Area of Interest <span className="text-brand-red">*</span>
              </label>
              <select
                id="hero-interest"
                name="interest"
                required
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              >
                <option value="">Select an area</option>
                <option value="coding">Coding</option>
                <option value="robotics">Robotics</option>
                <option value="3d-design">3D Design</option>
                <option value="all">All of the above</option>
              </select>
            </div>
          )}

          {formType === 'enroll' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="hero-child-name" className="block mb-1 text-sm font-medium text-gray-700">
                  Child&apos;s Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="hero-child-name"
                  name="child_name"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="Child's name"
                />
              </div>
              <div>
                <label htmlFor="hero-child-age" className="block mb-1 text-sm font-medium text-gray-700">
                  Child&apos;s Age <span className="text-brand-red">*</span>
                </label>
                <input
                  type="number"
                  id="hero-child-age"
                  name="child_age"
                  required
                  min="5"
                  max="18"
                  className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  placeholder="Age"
                />
              </div>
            </div>
          )}

          {formType === 'competition' && (
            <div>
              <label htmlFor="hero-competition" className="block mb-1 text-sm font-medium text-gray-700">
                Competition Interest <span className="text-brand-red">*</span>
              </label>
              <select
                id="hero-competition"
                name="competition_type"
                required
                className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              >
                <option value="">Select competition</option>
                <option value="coding">Coding Challenge</option>
                <option value="robotics">Robotics Battle</option>
                <option value="3d-design">3D Design Showcase</option>
                <option value="innovation">Innovation Hackathon</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="hero-message" className="block mb-1 text-sm font-medium text-gray-700">
              Message / Questions
            </label>
            <textarea
              id="hero-message"
              name="message"
              rows={3}
              className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              placeholder="Tell us more about your interest..."
            />
          </div>

          <input type="hidden" name="form_type" value={formType} />

          <button
            type="submit"
            disabled={state.submitting}
            className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-bold transition-all bg-gradient-to-r from-brand-blue via-white to-brand-red text-brand-dark rounded-xl hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              <>
                <div className="w-5 h-5 border-2 rounded-full border-brand-dark border-t-transparent animate-spin" />
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
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-brand-red" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
