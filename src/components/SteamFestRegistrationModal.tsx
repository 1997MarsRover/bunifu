import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, XCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface Category {
  id: string;
  name: string;
}

interface AgeCategory {
  name: string;
  ages: string;
}

interface SteamFestRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  categories: Category[];
  ageCategories: AgeCategory[];
}

export default function SteamFestRegistrationModal({
  isOpen,
  onClose,
  initialCategory = '',
  categories,
  ageCategories,
}: SteamFestRegistrationModalProps) {
  const [state, handleSubmit] = useForm('xeerooyp');
  const [formData, setFormData] = useState({
    teamName: '',
    school: '',
    advisorName: '',
    advisorEmail: '',
    advisorPhone: '',
    category: initialCategory,
    ageCategory: '',
    students: ['', '', '', ''],
    agreeToTerms: false,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, category: initialCategory || prev.category }));
    }
  }, [isOpen, initialCategory]);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setFormData({
          teamName: '',
          school: '',
          advisorName: '',
          advisorEmail: '',
          advisorPhone: '',
          category: '',
          ageCategory: '',
          students: ['', '', '', ''],
          agreeToTerms: false,
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else if (name.startsWith('student-')) {
      const index = parseInt(name.split('-')[1], 10);
      setFormData((prev) => ({
        ...prev,
        students: prev.students.map((s, i) => (i === index ? value : s)),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

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
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-green via-brand-blue to-brand-red rounded-t-3xl" />

            <button
              onClick={onClose}
              className="absolute z-10 p-2 text-gray-400 transition-colors bg-white rounded-full top-6 right-6 hover:text-brand-red hover:bg-red-50"
              aria-label="Close registration form"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {state.succeeded ? (
              <div className="p-8 text-center pt-14">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="flex justify-center mb-6"
                >
                  <div className="flex items-center justify-center w-20 h-20 text-4xl rounded-full bg-gradient-to-br from-green-50 to-emerald-50">
                    ✅
                  </div>
                </motion.div>
                <h3 className="mb-2 text-2xl font-bold text-brand-dark">Registration Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for registering for STEAM Fest 2026. We&apos;ll send a confirmation email with payment instructions shortly.
                </p>
                <div className="flex justify-center gap-1 mt-6">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                </div>
              </div>
            ) : (
              <div className="p-8 pt-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 text-4xl bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-2xl">
                    <span>🎪</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">STEAM Fest 2026</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Register your team for the ultimate innovation challenge
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="teamName" className="block mb-1 text-sm font-medium text-gray-700">
                      Team Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                      placeholder="e.g., Tech Innovators"
                    />
                    <ValidationError prefix="Team Name" field="teamName" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div>
                    <label htmlFor="school" className="block mb-1 text-sm font-medium text-gray-700">
                      School/Institution <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                      placeholder="School name"
                    />
                    <ValidationError prefix="School" field="school" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div className="p-4 border border-brand-blue/20 rounded-xl bg-brand-blue/5">
                    <h4 className="mb-3 font-semibold text-brand-dark">Advisor Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="advisorName" className="block mb-1 text-sm font-medium text-gray-700">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          id="advisorName"
                          name="advisorName"
                          value={formData.advisorName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                          placeholder="Advisor's name"
                        />
                        <ValidationError prefix="Advisor Name" field="advisorName" errors={state.errors} className="mt-1 text-sm text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="advisorEmail" className="block mb-1 text-sm font-medium text-gray-700">
                          Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="email"
                          id="advisorEmail"
                          name="advisorEmail"
                          value={formData.advisorEmail}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                          placeholder="advisor@email.com"
                        />
                        <ValidationError prefix="Email" field="advisorEmail" errors={state.errors} className="mt-1 text-sm text-red-600" />
                      </div>
                      <div>
                        <label htmlFor="advisorPhone" className="block mb-1 text-sm font-medium text-gray-700">
                          Phone Number <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="tel"
                          id="advisorPhone"
                          name="advisorPhone"
                          value={formData.advisorPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                          placeholder="0712 345 678"
                        />
                        <ValidationError prefix="Phone" field="advisorPhone" errors={state.errors} className="mt-1 text-sm text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-700">
                      Category <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                    <ValidationError prefix="Category" field="category" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div>
                    <label htmlFor="ageCategory" className="block mb-1 text-sm font-medium text-gray-700">
                      Age Category <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="ageCategory"
                      name="ageCategory"
                      value={formData.ageCategory}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                    >
                      <option value="">Select age group</option>
                      {ageCategories.map((cat) => (
                        <option key={cat.name} value={cat.name}>{cat.name} ({cat.ages})</option>
                      ))}
                    </select>
                    <ValidationError prefix="Age Category" field="ageCategory" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>

                  <div className="p-4 border border-brand-green/20 rounded-xl bg-brand-green/5">
                    <h4 className="mb-3 font-semibold text-brand-dark">Team Members (3-4 students)</h4>
                    <div className="space-y-3">
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          type="text"
                          name={`student-${index}`}
                          value={formData.students[index]}
                          onChange={handleInputChange}
                          required={index < 3}
                          className="w-full px-4 py-3 transition-all border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                          placeholder={`Student ${index + 1} full name${index === 3 ? ' (optional)' : ''}`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Minimum 3 students required</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 rounded text-brand-green focus:ring-brand-green"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                      I confirm that all information is accurate and agree to the
                      <a href="#" className="mx-1 font-semibold text-brand-green hover:underline">terms and conditions</a>.
                    </label>
                  </div>

                  <input type="hidden" name="form_type" value="steam_fest_registration" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-bold text-white transition-all bg-gradient-to-r from-brand-green via-brand-blue to-brand-red rounded-xl hover:shadow-lg hover:shadow-brand-green/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Registration
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    Registration fee: KES 2,000 per student. Payment instructions will be sent to your email.
                  </p>

                  <div className="flex justify-center gap-1 pt-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green" />
                    <span className="w-2 h-2 bg-white border border-gray-300 rounded-full" />
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
