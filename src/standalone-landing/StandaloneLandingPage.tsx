import LandingSEO from './LandingSEO';
import LandingHeader from './components/LandingHeader';
import LandingHero from './components/LandingHero';
import LandingServices from './components/LandingServices';
import LandingAbout from './components/LandingAbout';
import LandingServiceArea from './components/LandingServiceArea';
import LandingWhyUs from './components/LandingWhyUs';
import LandingFAQ from './components/LandingFAQ';
import LandingContact from './components/LandingContact';
import LandingFooter from './components/LandingFooter';

export default function StandaloneLandingPage() {
  return (
    <div className="min-h-screen bg-white text-navy-500 font-sans antialiased selection:bg-electric-500 selection:text-white">
      {/* Isolated SEO Head & Schema (Zero business name, purely SERVICE + LOCATION) */}
      <LandingSEO />

      {/* Standalone Header with Anchor Navigation */}
      <LandingHeader />

      {/* Main Single-Page Content Sections */}
      <main>
        <LandingHero />
        <LandingServices />
        <LandingAbout />
        <LandingServiceArea />
        <LandingWhyUs />
        <LandingFAQ />
        <LandingContact />
      </main>

      {/* Standalone Isolated Footer */}
      <LandingFooter />
    </div>
  );
}
