import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Intro */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563eb] font-bold bg-[#1e1b4b]/40 px-3 py-1.5 rounded-full border border-blue-900/40">
            COMMON CONJECTURES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Consulting Counter FAQs
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Have questions about our original parts warranty, UV adhesive safety, or software formatting backup rules? We outline crystal clear answers.
          </p>
        </div>

        {/* FAQs list accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpened = openIndex === index;

            return (
              <div
                key={index}
                className="bg-black border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-900/30"
              >
                {/* Header Row clickable */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors hover:bg-zinc-900/20 cursor-pointer"
                  aria-expanded={isOpened}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base font-bold text-white uppercase tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-blue-500 flex-shrink-0">
                    {isOpened ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpened ? 'max-h-60 border-t border-zinc-900' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 md:p-6 text-xs md:text-sm text-zinc-400 leading-relaxed text-left bg-zinc-950">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call Now Counter-link footer */}
        <div className="mt-12 text-center p-6 bg-zinc-950 border border-zinc-900 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase">Still have custom query?</h4>
            <p className="text-xs text-zinc-500">Our chief tech is ready to decode complex motherboard issues.</p>
          </div>

          <a
            href="tel:+919842475012"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all"
          >
            Direct Call Counter
          </a>
        </div>
      </div>
    </section>
  );
}
