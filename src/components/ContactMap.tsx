import { useState, FormEvent, ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export default function ContactMap() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    symptoms: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    setTimeout(() => {
      // Create WhatsApp redirect link for fallback support
      const message = encodeURIComponent(
        `📬 *NEW CUSTOMER CONSULTATION REGISTRATION*\n----------------------------------------\n🧑‍⚕️ *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📱 *Brand:* ${formData.brand || 'Not Specified'}\n🔧 *Symptoms:* ${formData.symptoms}\n----------------------------------------\nPlease advise on diagnostics appointment.`
      );
      window.open(`https://wa.me/919842475012?text=${message}`, '_blank');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', brand: '', symptoms: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold bg-blue-950/40 px-3 py-1.5 rounded-full border border-blue-900/40">
            LOCATION & PRIORITY WARD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Consult the Mobile Surgeons
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Visit our physical diagnostics laboratory near the iconic Anna Statue, Pudukkottai town or submit a digital triage file below for immediate remote advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column A: Contact coordinates + Embedded Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick coordinates cards */}
            <div className="space-y-4 bg-zinc-950 border border-zinc-900 p-6 rounded-3xl text-left">
              <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider font-mono">
                Store Location Details
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Mobile Doctor Shop address</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Near Old Anna Statue Bus Hub, Alangudi Road Intersection, Pudukkottai District, Tamil Nadu, 622001.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Direct Ward Lines</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    <a href="tel:+919842475012" className="hover:text-blue-400 text-sm font-semibold block">+91 98424 75012 (Primary Mobile)</a>
                    <a href="tel:+919443217452" className="hover:text-blue-400 text-xs block mt-1">+91 94432 17452 (Store Assistant)</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Operating Consult Hours</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    09:30 AM to 09:00 PM Daily (Sunday open till 8:00 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* Embed Maps Google Map iframe */}
            <div className="flex-1 min-h-[250px] bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden relative shadow-lg">
              <iframe
                title="Mobile Doctor Shop Location Map Pudukkottai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3921.2382903741913!2d78.82223846562307!3d10.383305191966023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0070bc00000001%3A0xc3cf96efedba97a!2sAnna%20Statue%2C%20Pudukkottai%2C%20Tamil%20Nadu%20622001!5e0!3m2!1sen!2sin!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-110 opacity-70 hover:opacity-100 transition-opacity"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column B: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-3xl text-left flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono mb-1">
                    Book Priority Token
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6">
                    Enter details below. Your request generates a priority service ticket and alerts the technician on WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand, Pudukkottai"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">
                      WhatsApp/Regular Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 98452 XXXXX"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">
                    Smartphone Model Brand
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-zinc-400 font-mono"
                  >
                    <option value="">-- Choose Brand --</option>
                    <option value="Samsung">Samsung Galaxy</option>
                    <option value="Apple iPhone">Apple iPhone</option>
                    <option value="Redmi">Redmi / Xiaomi</option>
                    <option value="Realme">Realme</option>
                    <option value="Vivo / Oppo">Vivo / Oppo</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Other">Other Android Models</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono mb-2">
                    Describe Phone Symptoms / Required Accessories
                  </label>
                  <textarea
                    name="symptoms"
                    rows={4}
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="e.g. Left screen side is touch unresponsive. Need OGA display replacement. Also need price for 11D matte protector glass."
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Book Appointment</span>
                  </button>

                  <a
                    href="tel:+919842475012"
                    className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 rounded-xl flex items-center justify-center gap-2 text-sm font-bold"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-500" />
                    <span>Call Store Directly</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="my-auto py-12 text-center flex flex-col items-center gap-6 animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Prescription Lodged Successfully</h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Thank you, <strong>{formData.name}</strong>. We compiled your symptom sheet. Redirecting to WhatsApp to send all inputs straight to the doctor&apos;s desk instantly!
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-400 rounded-xl"
                >
                  Fill Another Ticket
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
