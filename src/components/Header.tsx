import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Activities', href: '#activities' },
    { label: 'Centers', href: '#centers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'activities', 'centers', 'gallery', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
      <div className="px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#hero" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium transition-all duration-300 relative ${
                isActive(link.href)
                  ? 'text-sky-300'
                  : 'text-white hover:text-sky-300'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-300 rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#book-tour"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Book a tour
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 border-t border-white/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block font-medium transition-colors py-3 px-4 rounded-xl ${
                isActive(link.href)
                  ? 'text-sky-300 bg-white/10'
                  : 'text-white hover:text-sky-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-tour"
            className="block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-3 rounded-xl text-center transition-all mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a tour
          </a>
        </nav>
      )}
    </header>
  );
}
