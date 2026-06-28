import { lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LazyMount from './components/LazyMount';

const AboutSection = lazy(() => import('./components/AboutSection'));
const ActivitiesSection = lazy(() => import('./components/ActivitiesSection'));
const MembershipSection = lazy(() => import('./components/MembershipSection'));
const CentersSection = lazy(() => import('./components/CentersSection'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />

      <LazyMount minHeight="480px">
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="720px">
        <Suspense fallback={null}>
          <ActivitiesSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="800px">
        <Suspense fallback={null}>
          <MembershipSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="480px">
        <Suspense fallback={null}>
          <CentersSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="600px">
        <Suspense fallback={null}>
          <GallerySection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="480px">
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </LazyMount>

      <LazyMount minHeight="320px">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyMount>
    </div>
  );
}

export default App;
