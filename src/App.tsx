import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import CentersSection from './components/CentersSection';
import GallerySection from './components/GallerySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <CentersSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
