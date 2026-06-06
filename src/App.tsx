import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import DiagnosticsEstimator from './components/DiagnosticsEstimator';
import ProductCatalog from './components/ProductCatalog';
import OfferBanner from './components/OfferBanner';
import TestimonialWall from './components/TestimonialWall';
import FaqSection from './components/FaqSection';
import ContactMap from './components/ContactMap';
import StickyActions from './components/StickyActions';
import { Smartphone, HeartPulse, Clock, Sparkles } from 'lucide-react';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset accounting for scrolled sticky header height
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Top Navigation Frame */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onScrollToSection={scrollToSection} />

        {/* Offers Carousel / Grid Banner Section */}
        <OfferBanner />

        {/* Technical Repair Clinic Services */}
        <ServicesGrid />

        {/* Dynamic Interactive Estimate Prescriptor */}
        <DiagnosticsEstimator />

        {/* Retail Catalog & Accessories showcase */}
        <ProductCatalog />

        {/* Local Verified Testimonial Wall */}
        <TestimonialWall />

        {/* Knowledge Base FAQs Accordion */}
        <FaqSection />

        {/* Contact Coordinates & Google Map Embeds */}
        <ContactMap />
      </main>

      {/* Hospital Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 pb-24 md:pb-12 text-left relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shadow-lg shadow-blue-900/20">
                  <Smartphone className="w-4 h-4 text-white" />
                  <HeartPulse className="w-3.5 h-3.5 text-white absolute -top-1 -right-1 bg-black rounded-full p-0.5 border border-blue-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-widest uppercase">
                    MOBILE <span className="text-blue-500">DOCTOR</span> SHOP
                  </h3>
                  <p className="text-[9px] text-zinc-500 tracking-wider uppercase font-mono">Anna Statue Branch, Pudukkottai</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Established with a vision to deliver genuine mobile components, fast cracked-screen restorations, matte/glossy tempered screens and official system unlocks under strict clinical supervision of skilled technicians.
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>9:30 AM – 9:00 PM Daily (Open All Sunday)</span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Explore Clinic</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-zinc-400 hover:text-white hover:underline transition-all cursor-pointer">
                    Clinical Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('estimator')} className="text-zinc-400 hover:text-white hover:underline transition-all cursor-pointer">
                    Smart Diagnostics Calculator
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="text-zinc-400 hover:text-white hover:underline transition-all cursor-pointer">
                    Mobiles & Accessories
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('offers')} className="text-zinc-400 hover:text-white hover:underline transition-all cursor-pointer">
                    Redemption Promo Codes
                  </button>
                </li>
              </ul>
            </div>

            {/* Local District Specialties Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">District Specialties</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pudukkottai town, Alangudi, Aranthangi, Gandarvakottai, Karambakkudi, Illuppur and Keeranur. Request priority courier shipping or doorstep handset pickup & delivery easily via lines.
              </p>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-900/30 text-[10px] text-blue-400 font-semibold uppercase tracking-wider font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>Tamil Nadu Mobile Trade Member</span>
                </span>
              </div>
            </div>
          </div>

          {/* Divider Credits */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[10px] text-zinc-500 font-mono">
              &copy; {new Date().getFullYear()} Mobile Doctor Shop Pudukkottai. All rights reserved.
            </p>
            <p className="text-[9px] text-zinc-600 font-mono">
              Certified Professional Repair Assembly Lab | Near Anna Statue, Pudukkottai, TN
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Calls/WhatsApp Sticky Ribbons */}
      <StickyActions />
    </div>
  );
}
