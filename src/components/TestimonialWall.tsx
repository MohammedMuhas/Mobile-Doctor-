import { TESTIMONIALS } from '../data';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

export default function TestimonialWall() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 bg-radial-gradient from-blue-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Title Info */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563eb] font-bold bg-[#1e1b4b]/40 px-3 py-1.5 rounded-full border border-blue-900/40">
              COMMUNITY CREDENTIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Loved by Pudukkottai District
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              We restore thousands of devices annually for families and businesses. Here is why folks trust Mobile Doctor with their expensive screen repairs and software unlocking.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-900 px-5 py-4 rounded-2xl flex-shrink-0 text-left">
            <div className="text-amber-500 font-bold text-3xl font-mono leading-none">4.9</div>
            <div>
              <div className="flex text-amber-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-mono font-bold">1,200+ Verified Patient Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-900/40 transition-colors relative group"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-900/10 group-hover:text-blue-900/20 transition-colors" />

              <div>
                {/* Visual Rating Row */}
                <div className="flex items-center gap-1.5 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < test.rating
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-zinc-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-zinc-500 font-mono ml-1.5">{test.date}</span>
                </div>

                {/* Review Text Body */}
                <p className="text-sm text-zinc-300 leading-relaxed italic text-left mb-6">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Author Info footer */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 font-bold text-sm uppercase">
                    {test.name.charAt(0)}
                  </div>
                  <div className="text-left leading-none">
                    <h4 className="text-xs font-black text-white">{test.name}</h4>
                    <span className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span>{test.location}</span>
                    </span>
                  </div>
                </div>

                {test.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-900/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Cure</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
