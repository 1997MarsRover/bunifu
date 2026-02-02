import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import MembershipSection from './components/MembershipSection';
import CentersSection from './components/CentersSection';
import GallerySection from './components/GallerySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <MembershipSection />
      <CentersSection />
      <GallerySection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
