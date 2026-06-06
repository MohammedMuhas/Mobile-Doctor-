import { REPAIR_SERVICES } from '../data';
import { Smartphone, BatteryCharging, Usb, Droplets, Cpu, Volume2, Clock, ShieldCheck, HeartPulse } from 'lucide-react';

const iconMap: Record<string, any> = {
  Smartphone: Smartphone,
  BatteryCharging: BatteryCharging,
  Usb: Usb,
  Droplets: Droplets,
  Cpu: Cpu,
  Volume2: Volume2,
};

export default function ServicesGrid() {
  const getWhatsAppServiceLink = (name: string, price: number) => {
    const text = encodeURIComponent(
      `Hello Mobile Doctor! I want to book a diagnosis for my smartphone at your Pudukkottai lab.\n\n🛠️ *Service Needed:* ${name}\n💵 *Base Estimate Price:* ₹${price}\n\nPlease let me know when your mobile technician has an opening today!`
    );
    return `https://wa.me/919842475012?text=${text}`;
  };

  return (
    <section id="services" className="py-20 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Title Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold bg-[#1e1b4b]/40 px-3 py-1.5 rounded-full border border-blue-900/40">
            OUR SPECIALIZED DEPARTMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Urgent Smartphone Diagnosis & Cure
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Like a tech cardiologist, we perform component-level hardware restores and firmware resuscitations. Most surgeries are executed in under an hour inside our certified clean workspace.
          </p>
        </div>

        {/* Services Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPAIR_SERVICES.map((serv) => {
            const IconComponent = iconMap[serv.icon] || Smartphone;

            return (
              <div
                key={serv.id}
                className="group p-6 bg-black border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-blue-900/40 hover:shadow-[0_10px_35px_-10px_rgba(37,99,235,0.15)] transition-all relative overflow-hidden"
              >
                {/* Visual Medical Accents */}
                <span className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-xl group-hover:bg-blue-600/10 transition-colors"></span>

                <div>
                  {/* Service Card Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    {/* Time discharge label */}
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-zinc-500 group-hover:text-amber-500 transition-colors bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-950">
                      <Clock className="w-3 h-3" />
                      <span>{serv.estimatedTime}</span>
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base font-extrabold text-white leading-tight mb-2 group-hover:text-blue-400 transition-all text-left">
                    {serv.name}
                  </h3>

                  {/* Service Breakdown */}
                  <p className="text-xs text-zinc-400 leading-relaxed text-left mb-6">
                    {serv.description}
                  </p>
                </div>

                {/* Card footer details: Price & Booking */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between mt-auto">
                  <div className="text-left font-mono">
                    <p className="text-[9px] uppercase tracking-wider text-zinc-500">Surgery starts from</p>
                    <p className="text-base font-black text-white">₹{serv.basePrice}</p>
                  </div>

                  <a
                    href={getWhatsAppServiceLink(serv.name, serv.basePrice)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-all border border-blue-950 hover:border-blue-500 cursor-pointer"
                  >
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Book Repair</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Promise features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 flex items-center justify-center text-blue-400 flex-shrink-0">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">30-Party Quality Testing</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">
                We stringently inspect 30+ factors (touch responsive speeds, RGB color fidelity, camera alignments) after every screen swap.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Clock className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Spot Surgery Delivery</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">
                90% of basic charging ports, batteries and tempered glasses are configured right on spot in under 30 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-950/60 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Cpu className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Certified Pro Engineers</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">
                We deploy high-quality heating trays, digital flashing tools and micro-soldering setups to handle complicated hardware defects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
