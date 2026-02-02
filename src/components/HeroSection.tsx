import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Volunteer with Bunifu",
    subtitle: "Kenya",
    description: "Join our team of educators as we take a front seat in raising the next generation of innovators with creative confidence.",
    image: "https://images.pexels.com/photos/8471944/pexels-photo-8471944.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Sign up"
  },
  {
    title: "Learning resources designed for kids",
    subtitle: "Explore",
    description: "Flexible, semi-structured learning resources designed to suit the short time frame that the kids have to spend, delivered in fun and engaging formats.",
    image: "https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "View Activities"
  },
  {
    title: "Empowering Young Innovators",
    subtitle: "Bunifu Youths Kenya",
    description: "Dedicated to helping kids develop life-long interest in science & building countless competencies.",
    image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Learn More"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}

      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-8 md:px-16 pb-28 sm:pb-20 pt-24 sm:pt-32">
        <div className="animate-fade-in max-w-4xl w-full">
          <p className="text-sky-300 font-semibold text-sm sm:text-lg mb-3 sm:mb-4 tracking-wider uppercase">
            {slides[currentSlide].subtitle}
          </p>
          
          <h1 className="font-caveat text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide mb-6 sm:mb-8">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-white/90 text-base sm:text-xl md:text-2xl max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#activities"
              className="group inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-sky-400 w-6 sm:w-8' : 'bg-white/40 hover:bg-white/60 w-2 sm:w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
