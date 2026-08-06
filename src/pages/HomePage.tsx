import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramGuideTeaser from '../components/ProgramGuideTeaser';
import ActivitiesSection from '../components/ActivitiesSection';
import BootcampSection from '../components/BootcampSection';
import CentersSection from '../components/CentersSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';
import AppPurposeSection from '../components/AppPurposeSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash, location.pathname]);

  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramGuideTeaser />
      <ActivitiesSection />
      <BootcampSection />
      <CentersSection />
      <GallerySection />
      <FAQSection />
      <AppPurposeSection />
      <Footer />
    </div>
  );
}
