import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import SocialProof from './components/landing/SocialProof';
import Problem from './components/landing/Problem';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import ReportShowcase from './components/landing/ReportShowcase';
import Security from './components/landing/Security';
import Pricing from './components/landing/Pricing';
import FAQ from './components/landing/FAQ';
import FinalCTA from './components/landing/FinalCTA';
import Footer from './components/landing/Footer';
import TermsPage from './components/landing/TermsPage';
import PrivacyPage from './components/landing/PrivacyPage';

// Scroll to top helper on route transit
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash anchor, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to that element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      {/* SECTION 2 — HERO SECTION */}
      <Hero />

      {/* SECTION 3 — SOCIAL PROOF BAR */}
      <SocialProof />

      {/* SECTION 4 — PROBLEM SECTION */}
      <Problem />

      {/* SECTION 5 — SOLUTION / FEATURES */}
      <Features />

      {/* SECTION 6 — HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 7 — PDF REPORT SHOWCASE */}
      <ReportShowcase />

      {/* SECTION 8 — PRIVACY AND SECURITY */}
      <Security />

      {/* SECTION 9 — PRICING */}
      <Pricing />

      {/* SECTION 10 — FAQ */}
      <FAQ />

      {/* SECTION 11 — FINAL CTA */}
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bgPrimary text-brand-textPrimary flex flex-col w-full">
        {/* SECTION 1 — NAVIGATION BAR */}
        <Navbar />

        {/* Core routing area */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>

        {/* SECTION 12 — FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
