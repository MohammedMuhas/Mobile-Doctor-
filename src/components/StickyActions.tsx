import { MessageCircle, Phone, Clock } from 'lucide-react';

export default function StickyActions() {
  const whatsappUrl = "https://wa.me/919842475012?text=Hello%20Mobile%20Doctor%20Shop%21%2520I%2520have%20an%20issue%20with%20my%20phone%20and%2520would%20like%2520to%20get%2520a%20quote.";
  const phoneUrl = "tel:+919842475012";

  return (
    <>
      {/* Floating Desktop Buttons (Bottom Right Side) */}
      <div id="desktop-floating-actions" className="hidden md:flex flex-col gap-3.5 fixed right-6 bottom-6 z-50">
        
        {/* Support Time Capsule */}
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-zinc-805 text-[10px] text-zinc-400 font-mono shadow-xl select-none">
          <Clock className="w-3.5 h-3.5 text-blue-500" />
          <span>Active Response</span>
        </span>

        {/* Regular Call Flow */}
        <a
          id="desktop-call-float"
          href={phoneUrl}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all relative group cursor-pointer"
          title="Call Shop Now"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-zinc-800 transition-all shadow-xl font-mono leading-none">
            Call +91 98424 75012
          </span>
        </a>

        {/* WhatsApp Flow */}
        <a
          id="desktop-whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all relative group cursor-pointer"
          title="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping"></span>
          <MessageCircle className="w-6 h-6 z-10" />
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-black/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap border border-zinc-800 transition-all shadow-xl font-mono leading-none">
            WhatsApp Live Chat
          </span>
        </a>
      </div>

      {/* Sticky Mobile Action Footer Ribbon (Only below tablet viewports) */}
      <div
        id="mobile-sticky-footer"
        className="md:hidden fixed bottom-4 inset-x-4 z-50 flex items-center gap-3.5"
      >
        <div className="w-full flex bg-black/90 backdrop-blur-lg border border-zinc-800/80 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] p-2 items-center justify-between">
          <a
            id="mobile-call-sticky"
            href={phoneUrl}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Slight spacer dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 flex-shrink-0 mx-1"></div>

          <a
            id="mobile-whatsapp-sticky"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </>
  );
}
