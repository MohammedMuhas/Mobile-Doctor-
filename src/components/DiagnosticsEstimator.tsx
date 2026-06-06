import { useState } from 'react';
import { Smartphone, Check, HelpCircle, FileText, Send, Sparkles } from 'lucide-react';

interface BrandOption {
  name: string;
  factor: number; // premium brands might have minor factor adjustments
}

const BRANDS: BrandOption[] = [
  { name: 'Redmi / Xiaomi', factor: 0.9 },
  { name: 'Samsung', factor: 1.1 },
  { name: 'OnePlus', factor: 1.2 },
  { name: 'Vivo / Oppo', factor: 0.95 },
  { name: 'Realme', factor: 0.9 },
  { name: 'Apple iPhone', factor: 1.5 },
  { name: 'Google Pixel', factor: 1.3 },
  { name: 'Other Android Models', factor: 1.0 },
];

interface ConcernOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

const CONCERNS: ConcernOption[] = [
  {
    id: 'display',
    name: 'Broken / Bleeding Touch Screen Display',
    basePrice: 1999,
    description: 'Shattered front glass extraction or LCD/AMOLED panel flickering.',
  },
  {
    id: 'battery',
    name: 'Battery Drainage / Fast Discharge',
    basePrice: 899,
    description: 'Quick power down, battery bulging, or phone overheating.',
  },
  {
    id: 'port',
    name: 'Charging Port / Micro USB or Type C Loose',
    basePrice: 449,
    description: 'Fails to register chargers or phone is charging slowly.',
  },
  {
    id: 'motherboard',
    name: 'Motherboard IC Dead / No Response Surgery',
    basePrice: 1799,
    description: 'Phone does not boot at all, water-damage bricked or chip level short.',
  },
  {
    id: 'software',
    name: 'Software Bootloop / Password Lock flasher',
    basePrice: 499,
    description: 'Stuck on manufacturer logo background, pin forgotten, flashing OS.',
  },
  {
    id: 'audio',
    name: 'Ringer Speaker / Earpiece Caller Distortions',
    basePrice: 499,
    description: 'Muffled calling sounds, silent ear speaker, mic faulty.',
  },
];

interface UpgradeOption {
  id: string;
  name: string;
  price: number;
}

const UPGRADES: UpgradeOption[] = [
  { id: '11d', name: 'Premium 11D Super Hard Tempered Glass Overlay', price: 249 },
  { id: 'uv', name: 'Special Optical Liquid CURVED UV Glass (For premium screens)', price: 499 },
  { id: 'matte', name: 'Anti-Glare Smooth Gaming Matte Tempered Glass', price: 299 },
  { id: 'case', name: 'Shockproof Medical Armor Protective Back Cover', price: 240 },
];

export default function DiagnosticsEstimator() {
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].name);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['display']);
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
  const [phoneModel, setPhoneModel] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');

  const brandFactor = BRANDS.find((b) => b.name === selectedBrand)?.factor || 1.0;

  const calculateTotal = () => {
    const concernCost = selectedConcerns.reduce((sum, concernId) => {
      const concern = CONCERNS.find((c) => c.id === concernId);
      return sum + (concern ? concern.basePrice * brandFactor : 0);
    }, 0);

    const upgradeCost = selectedUpgrades.reduce((sum, upgradeId) => {
      const upgrade = UPGRADES.find((u) => u.id === upgradeId);
      return sum + (upgrade ? upgrade.price : 0);
    }, 0);

    return Math.round(concernCost + upgradeCost);
  };

  const toggleConcern = (id: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBooking = () => {
    const total = calculateTotal();
    const concernsText = selectedConcerns
      .map((id) => CONCERNS.find((c) => c.id === id)?.name)
      .join(', ');
    const upgradesText =
      selectedUpgrades.length > 0
        ? selectedUpgrades.map((id) => UPGRADES.find((u) => u.id === id)?.name).join(', ')
        : 'None selected';

    const textTemplate =
      `*MOBILE DR. CLINICAL ESTIMATE RECEIPT* 🩺📱\n` +
      `----------------------------------------\n` +
      `🧑‍⚕️ *Name:* ${customerName || 'Valued Customer'}\n` +
      `📱 *Device:* ${selectedBrand} ${phoneModel ? `(${phoneModel})` : ''}\n` +
      `🔧 *Diagnosed Issues:* ${concernsText || 'General Servicing'}\n` +
      `💎 *Glass / Shield Addons:* ${upgradesText}\n` +
      `----------------------------------------\n` +
      `💵 *Tentative Diagnosis Fee:* ~₹${total}/-\n` +
      `⏱️ *Est. Surgery Discharge:* ~30-60 Minutes\n` +
      `----------------------------------------\n` +
      `Please lock down my appointment at Pudukkottai lab!`;

    const encoded = encodeURIComponent(textTemplate);
    window.open(`https://wa.me/919842475012?text=${encoded}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-black text-white relative">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563eb] font-bold bg-[#1e1b4b]/40 px-3 py-1.5 rounded-full border border-blue-900/40">
            MOBILE CHECKUP WARD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Instant Smartphone Diagnosis
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Select your phone brand, choose your device symptoms, and pick durable tempered glass options. Get an immediate digital quote and book prioritized treatment!
          </p>
        </div>

        {/* 2-Column layout: Selectors on Left, Clinical Prescriptions on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column selectors */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-3xl">
            
            {/* Step 1: Tell Brand */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4">
                <span className="w-5 h-5 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center text-xs font-mono">1</span>
                <span>Select Manufacturer & Model</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BRANDS.map((b) => (
                  <button
                    key={b.name}
                    onClick={() => setSelectedBrand(b.name)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                      selectedBrand === b.name
                        ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.3)]'
                        : 'bg-black/40 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>

              {/* Specific model text field */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Type Specific Model Number (e.g. Realme 11 Pro Plus, Galaxy S23 Ultra)"
                  value={phoneModel}
                  onChange={(e) => setPhoneModel(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            {/* Step 2: Select Issues */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4">
                <span className="w-5 h-5 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center text-xs font-mono">2</span>
                <span>Diagnose Phone Symptoms (Select all that apply)</span>
              </label>

              <div className="space-y-3">
                {CONCERNS.map((c) => {
                  const isChecked = selectedConcerns.includes(c.id);
                  const priceLabel = Math.round(c.basePrice * brandFactor);

                  return (
                    <div
                      key={c.id}
                      onClick={() => toggleConcern(c.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-blue-950/20 border-blue-900 text-white'
                          : 'bg-black/30 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-blue-600 border-blue-600' : 'border-zinc-700'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-bold text-white uppercase">{c.name}</h4>
                          <p className="text-[10px] text-zinc-400 mt-1">{c.description}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-mono font-bold text-blue-400">
                          ₹{priceLabel}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Upgrades / Screen Protectors */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4">
                <span className="w-5 h-5 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center text-xs font-mono">3</span>
                <span>Add Extra Medical Armor (Tempered Glass / Cases)</span>
              </label>

              <div className="space-y-3">
                {UPGRADES.map((u) => {
                  const isChecked = selectedUpgrades.includes(u.id);

                  return (
                    <div
                      key={u.id}
                      onClick={() => toggleUpgrade(u.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-emerald-950/20 border-emerald-900 text-white'
                          : 'bg-black/30 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-emerald-600 border-emerald-600' : 'border-zinc-700'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-bold text-zinc-200">{u.name}</h4>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          +₹{u.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column visual prescription */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-zinc-950 to-black border border-blue-950/60 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"></div>

              {/* Header medical note */}
              <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-500 animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-black text-white uppercase tracking-wider font-mono">
                    DOCTOR SHEET ESTIMATE
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-mono">MOBILE DOCTOR CLINIC, PUDUKKOTTAI</p>
                </div>
              </div>

              {/* User inputs details */}
              <div className="space-y-4 text-left">
                <div>
                  <label className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                    Patient Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-900/60 border border-zinc-800 px-3 py-2 rounded-lg text-xs placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-mono mt-1"
                  />
                </div>

                {/* Patient Summary items */}
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 space-y-3.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">SUBJECT DEVICE:</span>
                    <span className="text-white font-bold uppercase">{selectedBrand} {phoneModel}</span>
                  </div>

                  {selectedConcerns.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-zinc-500 font-mono">Diagnosed Symptoms:</p>
                      {selectedConcerns.map((id) => {
                        const label = CONCERNS.find((c) => c.id === id);
                        return (
                          <div key={id} className="flex justify-between text-xs pl-2 border-l border-blue-500">
                            <span className="text-zinc-300 truncate max-w-[200px]">{label?.name}</span>
                            <span className="text-zinc-500 font-mono">₹{label ? Math.round(label.basePrice * brandFactor) : 0}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {selectedUpgrades.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-zinc-800">
                      <p className="text-[10px] uppercase font-bold text-zinc-500 font-mono">Add-on Prescriptions:</p>
                      {selectedUpgrades.map((id) => {
                        const l = UPGRADES.find((u) => u.id === id);
                        return (
                          <div key={id} className="flex justify-between text-xs pl-2 border-l border-emerald-500">
                            <span className="text-zinc-300 truncate max-w-[200px]">{l?.name}</span>
                            <span className="text-zinc-500 font-mono">+₹{l?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Dynamic Price Box */}
                <div className="p-4 bg-blue-950/30 border border-blue-900/30 rounded-xl text-center">
                  <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Estimated Bill Total</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-blue-400 font-mono mt-1">
                    ₹{calculateTotal()}
                  </p>
                  <p className="text-[9px] text-zinc-500 font-mono mt-1 uppercase">Includes standard 100% genuine assembly diagnostics</p>
                </div>
              </div>

              {/* Action Button submit appointment */}
              <div className="space-y-3">
                <button
                  id="estimator-submit-btn"
                  onClick={handleBooking}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Book Priority Repair Appointment</span>
                </button>

                <p className="text-[9px] text-zinc-500 text-center font-mono leading-relaxed">
                  ⚠️ Price is an average calculated rate. Exact chip inspection is conducted free in-person by Mobile Doctor at Anna Statue branch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
