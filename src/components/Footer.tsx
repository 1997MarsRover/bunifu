import { Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/logo.png" alt="Bunifu Logo" className="h-8 sm:h-10" />
              <p className="text-white font-semibold text-sm sm:text-base mt-1">Youths Kenya</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of innovators with creative confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-sky-400 transition-colors">About</a></li>
              <li><a href="#activities" className="text-gray-400 hover:text-sky-400 transition-colors">Activities</a></li>
              <li><a href="#centers" className="text-gray-400 hover:text-sky-400 transition-colors">Centers</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-sky-400 transition-colors">Gallery</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-sky-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+254712015793" className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 712 015 793</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bunifuyouths.co.ke" className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@bunifuyouths.co.ke</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/Bunifu_youths_Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Bunifu Youths Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
