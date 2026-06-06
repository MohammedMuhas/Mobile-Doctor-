import { useState } from 'react';
import { PRODUCTS } from '../data';
import { ShoppingBag, Eye, Heart, MessageSquare } from 'lucide-react';
import { Product } from '../types';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'phones' | 'accessories' | 'glass'>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  const getWhatsAppProductLink = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Mobile Doctor! I am inquiring about the availability of product: \n\n🛍️ *${product.name}*\n🏷️ Category: *${product.category.toUpperCase()}*\n💵 Price: *${product.price}*\n\nIs this in stock at your Pudukkottai store currently? Thanks!`
    );
    return `https://wa.me/919842475012?text=${text}`;
  };

  const tabs = [
    { label: 'All Store items', id: 'all' as const },
    { label: 'Mobile Phones', id: 'phones' as const },
    { label: 'Accessories & Sound', id: 'accessories' as const },
    { label: 'Super Glass Protection', id: 'glass' as const },
  ];

  return (
    <section id="products" className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Intro */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold bg-blue-1e1b4b/40 px-3 py-1.5 rounded-full border border-blue-900/40">
              STORE ACCESSORIES & MOBILES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight">
              Genuine Products Showcase
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Browse brand-new smartphones, official audio neckbands, high-watt fast charging adapters, and the district&apos;s strongest screen protectors.
            </p>
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-blue-900/30 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.4)] relative"
            >
              {/* Product Image Panel */}
              <div className="aspect-4/3 w-full bg-zinc-900 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tags overlay */}
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[9px] font-bold text-white bg-blue-600 rounded-md uppercase tracking-wider font-mono">
                    {product.tag}
                  </span>
                )}

                <span className="absolute top-4 right-4 z-10 px-2.5 py-1 text-[9px] font-bold text-zinc-300 bg-black/70 rounded-md uppercase tracking-wider font-mono backdrop-blur-sm border border-zinc-900">
                  {product.category}
                </span>

                {/* Dark Hover overlay with buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={getWhatsAppProductLink(product)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg scale-90 group-hover:scale-100 duration-300"
                    title="Inquire Availability"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Product Data Metadata */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-all">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Bullet features list */}
                  {product.specs && (
                    <div className="space-y-1.5 mb-6">
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                          <span className="text-blue-500">•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing and Whatsapp call-to-action */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between mt-auto">
                  <div className="text-left font-mono">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-zinc-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] text-emerald-400 uppercase tracking-widest font-mono font-bold">IN STOCK</p>
                  </div>

                  <a
                    href={getWhatsAppProductLink(product)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-900/30 font-bold text-xs rounded-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Availability</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
