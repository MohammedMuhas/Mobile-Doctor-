import { useState, useEffect } from 'react';
import { Smartphone, HeartPulse, Menu, X, PhoneCall, Clock } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Clinic Services', id: 'services' },
    { label: 'Interactive Estimator', id: 'estimator' },
    { label: 'Store Products', id: 'products' },
    { label: 'Special Offers', id: 'offers' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact Shop', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-blue-900/40 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Smartphone className="w-5 h-5 text-white" />
              <HeartPulse className="w-4 h-4 text-white absolute -top-1 -right-1 bg-black rounded-full p-0.5 border border-blue-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight uppercase">
                Mobile <span className="text-blue-500">Doctor</span>
              </h1>
              <p className="text-[9px] text-zinc-400 tracking-wider uppercase font-mono">
                Pudukkottai Shop • <span className="text-emerald-400">Est. 2018</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-sm font-medium text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-blue-500 decoration-2 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-xs text-blue-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Shop Open</span>
            </span>

            <a
              id="header-call-btn"
              href="tel:+919876543210" // Example Pudukkottai number
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg shadow-md cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Doctor</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-lg border-b border-blue-900/50 flex flex-col px-6 py-6 gap-4 shadow-2xl animate-fade-in"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-left py-2.5 text-base font-semibold text-zinc-200 hover:text-white border-b border-zinc-900"
            >
              {item.label}
            </button>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>9:30 AM - 9:00 PM Daily</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Doctor Available</span>
              </span>
            </div>

            <a
              href="tel:+919842475012"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 98424 75012</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
