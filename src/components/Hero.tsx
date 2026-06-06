import { Smartphone, Wrench, Shield, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white flex flex-col justify-center min-h-[85vh]"
    >
      {/* Background Graphic Grid/Light Leaks */}
      <div className="absolute inset-x-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)] bg-no-repeat pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Pill Header */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs text-blue-400 font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pudukkottai&apos;s #1 Mobile Care Clinic</span>
              </span>
            </div>

            {/* Main Catchy Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              We Cure Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">
                Smartphone Sickness
              </span>
            </h1>

            {/* Doctor/Clinic Analogy Pitch description */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Is your phone suffering from a shattered heart, a dying battery, or frozen software? 
              <strong> Mobile Doctor Shop </strong> acts as the ultimate recovery ward. Get surgery-quality hardware repair, 
              scratch-proof tempered glass, premium accessories, and brand new devices.
            </p>

            {/* Core Features Badges */}
            <div className="grid grid-cols-2 gap-3.5 max-w-md pt-2">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-900">
                <Smartphone className="w-5 h-5 text-blue-500" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">1-Hour Discharge</h4>
                  <p className="text-[10px] text-zinc-500">Express delivery repairs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-900">
                <Shield className="w-5 h-5 text-emerald-500" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">3-Month Guarantee</h4>
                  <p className="text-[10px] text-zinc-500">Certified spare components</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-900">
                <Wrench className="w-5 h-5 text-amber-500" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Surgical Glass</h4>
                  <p className="text-[10px] text-zinc-500">UV Curved & Spy privacy</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-900">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Ocular Update</h4>
                  <p className="text-[10px] text-zinc-500">Official tools software flashing</p>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <button
                id="hero-estimator-btn"
                onClick={() => onScrollToSection('estimator')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-center bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-xl shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                Estimate Repair Price
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/919842475012?text=Hello%20Mobile%20Doctor%20Shop%21%20I%20have%20an%20issue%20with%20my%20phone%20and%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-white rounded-xl cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Localized note */}
            <p className="text-xs text-zinc-500 italic mt-1">
              📍 Located near Anna Statue, Pudukkottai. Drop by or request door doorstep pick & drop.
            </p>
          </div>

          {/* Right Column Creative Device Diagnostic Collage */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
              
              {/* Outer Pulsing Aura */}
              <div className="absolute w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Decorative Tech Ring */}
              <div className="absolute inset-0 border border-blue-900/30 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-4 border border-dashed border-zinc-800 rounded-full pointer-events-none"></div>

              {/* Main Clinical Phone Image Frame */}
              <div className="relative z-10 w-[78%] h-[92%] bg-zinc-900 rounded-[2.5rem] border-[8px] border-zinc-800 shadow-2xl p-3 overflow-hidden flex flex-col justify-between">
                
                {/* Dynamic Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-950 border border-zinc-800"></div>
                </div>

                {/* Internal UI Screen */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-black rounded-[1.8rem] p-4 flex flex-col justify-between select-none relative overflow-hidden">
                  
                  {/* Internal image overlay */}
                  <img 
                    src="https://images.unsplash.com/photo-1597740985671-2a8a3b80bf01?auto=format&fit=crop&q=80&w=500" 
                    alt="Smartphone surgical repair service"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>

                  {/* Top Status */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>MOBILE DR. LIVE</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>ACTIVE DIAGNOSIS</span>
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="relative z-10 my-auto text-left py-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 font-mono">CRITICAL INJURY CHECKUP</span>
                    <h3 className="text-lg font-black text-white leading-tight mt-1">SCREEN REPLACEMENT SPECIALISTS</h3>
                    <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                      Shattered glass extraction without losing original high fidelity display colors or face sensory sensors. 
                    </p>

                    {/* Quality Indicators Stacked */}
                    <div className="flex flex-col gap-1.5 mt-4">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                        <span className="text-emerald-400">✓</span>
                        <span>Dust-Free Lab Cleanroom Fitting</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                        <span className="text-emerald-400">✓</span>
                        <span>Multi-layer 9H Tempered Glass Installed</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-mono">
                        <span className="text-emerald-400">✓</span>
                        <span>Instant Testing with original warranty card</span>
                      </div>
                    </div>
                  </div>

                  {/* Estimator Button inside virtual phone */}
                  <div className="relative z-10">
                    <button 
                      onClick={() => onScrollToSection('estimator')}
                      className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-[11px] font-bold tracking-wider rounded-lg text-white shadow-lg text-center cursor-pointer"
                    >
                      BEGIN REPAIR CONSULTANCY
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating diagnostic element */}
              <div className="absolute -bottom-2 -right-2 z-20 bg-zinc-950 border border-blue-900/40 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-bounce">
                <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold">
                  99%
                </div>
                <div className="text-left">
                  <h5 className="text-[10px] font-bold uppercase text-white leading-none">CURE RATE</h5>
                  <p className="text-[9px] text-zinc-500">10,000+ smartphones sorted</p>
                </div>
              </div>

              {/* Floating review count element */}
              <div className="absolute top-10 -left-6 z-20 bg-zinc-950 border border-zinc-800 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5">
                <div className="flex text-amber-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="text-left">
                  <h5 className="text-[10px] font-bold text-white">4.9 Star Rating</h5>
                  <p className="text-[9px] text-zinc-400">Pudukkottai Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
