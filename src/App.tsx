import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import DynamicRouter from '@/components/DynamicRouter';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';
import BlogIndexPage from '@/pages/BlogIndexPage';
import BlogPostPage from '@/pages/BlogPostPage';
import NotFoundPage from '@/pages/NotFoundPage';
import StandaloneLandingPage from '@/standalone-landing/StandaloneLandingPage';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {USE_LANDING_PAGE_AS_HOME ? (
          /* =========================================================================
             🟢 MODE 1: DIRECT STANDALONE LANDING PAGE AT ROOT "/"
             https://www.sparkselectricandservice.com/ -> Direct Landing Page
             ========================================================================= */
          <>
            <Route path="/" element={<StandaloneLandingPage canonicalPath="/" />} />
            <Route path="/home-page" element={<StandaloneLandingPage canonicalPath="/home-page" />} />
            <Route path="/electrician-duvall" element={<StandaloneLandingPage canonicalPath="/electrician-duvall" />} />

            {/* Original website pages remain accessible under their clean URLs */}
            <Route element={<Layout />}>
              <Route path="/original-home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/:path" element={<DynamicRouter />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </>
        ) : (
          /* =========================================================================
             ⚪ MODE 2: ORIGINAL FULL MULTI-PAGE WEBSITE AT ROOT "/"
             https://www.sparkselectricandservice.com/ -> Original Sparks Electric
             ========================================================================= */
          <>
            <Route path="/home-page" element={<StandaloneLandingPage canonicalPath="/home-page" />} />
            <Route path="/electrician-duvall" element={<StandaloneLandingPage canonicalPath="/electrician-duvall" />} />

            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/:path" element={<DynamicRouter />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
