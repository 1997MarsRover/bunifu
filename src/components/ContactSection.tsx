import { Instagram, Phone, Copy, Check, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+254 712 015 793';
  const email = 'info@bunifuyouths.co.ke';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 sm:mb-16 text-white text-center">Contact</h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/20">
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-500 flex items-center justify-center text-white flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Nairobi</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Bunifu Youths Kenya HQ<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-colors group"
              >
                <div className="bg-green-500 p-2.5 sm:p-3 rounded-full">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-xs sm:text-sm">Call us</p>
                  <p className="text-white font-semibold text-sm sm:text-base truncate">{phoneNumber}</p>
                </div>
                <button
                  onClick={(e) => { e.preventDefault(); copyToClipboard(); }}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                  title="Copy phone number"
                >
                  {copied ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  )}
                </button>
              </a>

              <a
                href={`https://wa.me/${phoneNumber.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-500/20 rounded-xl sm:rounded-2xl hover:bg-green-500/30 transition-colors"
              >
                <div className="bg-green-500 p-2.5 sm:p-3 rounded-full">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">WhatsApp</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Chat with us</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-colors"
              >
                <div className="bg-sky-500 p-2.5 sm:p-3 rounded-full">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-semibold text-sm sm:text-base truncate">{email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow Us</h3>
              <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-12">
                <a
                  href="https://instagram.com/Bunifu_youths_Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Stay connected with Bunifu Youths Kenya. Follow us on social media for updates on upcoming programs, events, and success stories from our young innovators.
              </p>
            </div>

            <div id="book-tour" className="bg-sky-500 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Book a Tour</h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Want to see our programs in action? Schedule a visit!
              </p>
              <a
                href={`https://wa.me/${phoneNumber.replace(/\s/g, '').replace('+', '')}?text=Hi! I'd like to book a tour of Bunifu Youths Kenya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-sky-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-sky-50 transition-all transform hover:scale-105 text-sm sm:text-base"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 text-center">
          <p className="font-caveat text-2xl sm:text-3xl md:text-4xl text-white px-2">
            Join the Bunifu Movement & Empower the Future!
          </p>
        </div>
      </div>
    </section>
  );
}
