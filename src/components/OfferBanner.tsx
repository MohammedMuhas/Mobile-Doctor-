import { useState } from 'react';
import { OFFERS } from '../data';
import { Gift, Zap, Copy, Check, MessageCircle } from 'lucide-react';

export default function OfferBanner() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const getWhatsAppRedeemLink = (offerTitle: string, offerCode: string) => {
    const text = encodeURIComponent(
      `Hi Mobile Doctor Shop Pudukkottai! I want to redeem the special offer:\n\n🔥 *${offerTitle}*\n📌 Code: *${offerCode}*\n\nPlease let me know how to proceed!`
    );
    return `https://wa.me/919842475012?text=${text}`;
  };

  return (
    <section id="offers" className="py-20 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-radial-gradient from-blue-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold bg-blue-950/45 px-3 py-1.5 rounded-full border border-blue-900/40">
            OFFER BONANZAS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Exclusive Hospital Prescriptions
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Claim these verified discount tags at our Pudukkottai shop to enjoy huge cost savings on screen diagnostics, glass replacement or phone accessories.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative p-6 bg-black border border-zinc-900 rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-blue-900/60 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Corner Glowing Light */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-all"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold text-blue-400 bg-blue-950/60 border border-blue-900/60 rounded-full font-mono">
                    {offer.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <Gift className="w-4 h-4 text-blue-500" />
                  </div>
                </div>

                {/* Offer Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {offer.title}
                </h3>

                {/* Offer Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              {/* Action Buttons Footer */}
              <div className="space-y-3 mt-auto">
                <div className="flex items-center justify-between p-2.5 bg-zinc-900 hover:bg-zinc-850 transition-colors border border-zinc-800 rounded-lg">
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-mono">Prescription Code</p>
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">{offer.code}</p>
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.code, offer.id)}
                    className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Discount Code"
                  >
                    {copiedId === offer.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{offer.expiryDate}</span>
                  </span>
                  <span className="text-[10px] text-zinc-600">Applies in Pudukkottai</span>
                </div>

                <a
                  href={getWhatsAppRedeemLink(offer.title, offer.code)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-blue-600/10 hover:bg-blue-600 hover:text-white text-blue-400 transition-all rounded-lg cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Redeem on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Notice bar */}
        <div className="mt-12 p-4 bg-blue-950/40 border border-blue-900/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">ARE YOU A STUDENT OR LOCAL FARMER?</h4>
              <p className="text-[11px] text-zinc-400">Bring your Student ID or proof to claim a flat ₹200 off diagnostics instantly!</p>
            </div>
          </div>
          <a
            href="tel:+919842475012"
            className="w-full sm:w-auto px-4 py-2 font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-center"
          >
            Inquire Special Discounts
          </a>
        </div>
      </div>
    </section>
  );
}
