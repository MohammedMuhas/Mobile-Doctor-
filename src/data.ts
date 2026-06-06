import { Product, RepairService, Testimonial, FAQ, Offer } from './types';

export const OFFERS: Offer[] = [
  {
    id: 'off-1',
    title: 'Free high-quality Tempered Glass with any Display / Screen Repair!',
    badge: 'SCREEN SPECIAL',
    description: 'Get standard 11D tempered screen protection valued at ₹299 completely free when you replace your mobile screen.',
    code: 'DOCGLASS2026',
    expiryDate: 'Limited Time Offer'
  },
  {
    id: 'off-2',
    title: 'Up to ₹1,000 Exchange Bonus on Old Mobile Sales!',
    badge: 'EXCHANGE BONUS',
    description: 'Bring your old working or non-working mobile phone and receive up to ₹1,000 straight off your new mobile purchase.',
    code: 'DOCEXCHANGE',
    expiryDate: 'Valid till end of month'
  },
  {
    id: 'off-3',
    title: 'Flat 15% Off on Bluetooth Accessories combo',
    badge: 'ACCESSORY DEAL',
    description: 'Buy any premium back case paired with a tempered glass or neckband and get 15% instantly deducted on invoice.',
    code: 'DOCTECH15',
    expiryDate: 'Always Active'
  }
];

export const PRODUCTS: Product[] = [
  // Phones
  {
    id: 'phone-1',
    name: 'Samsung Galaxy A35 5G',
    category: 'phones',
    price: '₹25,999',
    originalPrice: '₹30,999',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller',
    description: 'Outstanding camera, brilliant super AMOLED display, and reliable long-life battery.',
    specs: ['8GB RAM | 128GB Storage', '50MP Triple OIS Camera', '5000 mAh Battery', 'Super AMOLED Display'],
    inStock: true
  },
  {
    id: 'phone-2',
    name: 'Redmi Note 13 Pro 5G',
    category: 'phones',
    price: '₹21,999',
    originalPrice: '₹24,999',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600',
    tag: 'Value King',
    description: '200MP stunning camera system, razor thin bezels, and turbo 67W fast charging.',
    specs: ['8GB RAM | 256GB Storage', '200MP Ultra-Clear Camera', '120Hz CrystalRes AMOLED', '67W Charger Included'],
    inStock: true
  },
  {
    id: 'phone-3',
    name: 'Realme 12+ 5G',
    category: 'phones',
    price: '₹19,499',
    originalPrice: '₹22,999',
    image: 'https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=600',
    tag: 'Premium Design',
    description: 'Luxury watch-inspired design coupled with Sony LYT-600 OIS camera.',
    specs: ['8GB RAM | 128GB Storage', 'Sony LYT-600 OIS Camera', '120Hz AMOLED Screen', '67W SUPERVOOC Charge'],
    inStock: true
  },
  // Accessories
  {
    id: 'acc-1',
    name: 'OnePlus Bullets Wireless Z2',
    category: 'accessories',
    price: '₹1,799',
    originalPrice: '₹2,299',
    image: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?auto=format&fit=crop&q=80&w=600',
    tag: 'Pure Bass',
    description: 'Deep high-quality bass, continuous 30 hours battery backup, quick charge features.',
    specs: ['12.4mm Dynamic Drivers', '30 Hours Battery Life', 'IP55 Sweat Resistant', '10 Min Charge for 20 Hours'],
    inStock: true
  },
  {
    id: 'acc-2',
    name: 'Aroma 10000mAh Power Bank 22.5W',
    category: 'accessories',
    price: '₹999',
    originalPrice: '₹1,599',
    image: 'https://images.unsplash.com/photo-1609592424085-f67f40df8375?auto=format&fit=crop&q=80&w=600',
    tag: 'Fast Charging',
    description: 'Robust power supply, slim pocket-friendly metal structure with fast delivery.',
    specs: ['22.5W Super Fast Charge', 'Dual Output & Input', 'LED Battery Indicator', 'Certified Safe Protocol'],
    inStock: true
  },
  {
    id: 'acc-3',
    name: 'Noise Pulse 2 Max Smartwatch',
    category: 'accessories',
    price: '₹1,499',
    originalPrice: '₹2,999',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600',
    tag: 'Hot Item',
    description: 'Large 1.85" high-intensity display, Bluetooth calling feature, and active wellness trackers.',
    specs: ['BT Calling Feature', '1.85 Inch Vibrant Display', '100+ Sports Modes', '10-Day Battery Standing'],
    inStock: true
  },
  // Glass
  {
    id: 'glass-1',
    name: '11D Super Strong Tempered Glass',
    category: 'glass',
    price: '₹249',
    originalPrice: '₹499',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600',
    tag: 'Must Have',
    description: 'Edge-to-edge extreme hardness protection, bubble-free adhesive, high touch sensitivity.',
    specs: ['9H Hardness Shield', 'Oleophobic Oil & Smudge Coating', 'Fully Curved Edges', 'HD Optical Clarity'],
    inStock: true
  },
  {
    id: 'glass-2',
    name: 'UV Curved Optical Glass (For Premium Edge Screens)',
    category: 'glass',
    price: '₹499',
    originalPrice: '₹799',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bdf067e581?auto=format&fit=crop&q=80&w=600',
    tag: 'Premium Repair',
    description: 'Liquid UV glue installation process for curved smartphones. Seamless edge-to-edge finish.',
    specs: ['Ideal for Curved Screens', 'Perfect Under-Display Fingerprint Speed', 'In-Store Professional Fitting', 'Zero Lifting Edges'],
    inStock: true
  },
  {
    id: 'glass-3',
    name: 'Privacy Anti-Spy Matte Glass',
    category: 'glass',
    price: '₹299',
    originalPrice: '₹599',
    image: 'https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&q=80&w=600',
    tag: 'Privacy Shield',
    description: 'Blocks angle views from left and right. Comes with a soothing premium matte anti-fingerprint coating.',
    specs: ['28-Degree View Angle Shield', 'Anti-Glare Matte Surface', 'Scratch Proof 9H Edge', 'Responsive Gaming Feel'],
    inStock: true
  }
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'rep-1',
    name: 'Shattered Display Repair / Replacement',
    icon: 'Smartphone',
    estimatedTime: '30-45 Minutes',
    description: 'Cracked glass, bleeding display colors, black spots, or unresponsive touchscreen? We replace displays with certified spares (OGA/Original quality) with instant testing.',
    basePrice: 1499
  },
  {
    id: 'rep-2',
    name: 'Quick Battery Replacement',
    icon: 'BatteryCharging',
    estimatedTime: '20 Minutes',
    description: 'Experiencing quick drain, slow charging, battery bulge or sudden shutdown? Dr. Mobile cures with original high-capacity batteries giving extended power lifespans.',
    basePrice: 799
  },
  {
    id: 'rep-3',
    name: 'Charging Port & Mic Repair',
    icon: 'Usb',
    estimatedTime: '30 Minutes',
    description: 'Loose charging jack connection, phone not connecting to charger or computer, mic sound faint? We replace port sub-boards or premium Type-C receivers.',
    basePrice: 399
  },
  {
    id: 'rep-4',
    name: 'Water & Liquid Damage Restoration',
    icon: 'Droplets',
    estimatedTime: '2-4 Hours',
    description: 'Fell in water? Do not turn it on! Bring it to Mobile Doctor for immediate deep chemical cleaning, motherboard component dryer treatment, and corrosion repair.',
    basePrice: 499
  },
  {
    id: 'rep-5',
    name: 'Software Bootloop, Unlocking & Flashing',
    icon: 'Cpu',
    estimatedTime: '1 Hour',
    description: 'Stuck on logo, forgotten screens locks, invalid account errors, or need a clean Indian software flash? We safely restore firmware through digital box tools.',
    basePrice: 499
  },
  {
    id: 'rep-6',
    name: 'Camera & Speaker Rectification',
    icon: 'Volume2',
    estimatedTime: '45 Minutes',
    description: 'Blurry images, vibrating camera focus, distorted buzzer sound, or silent caller ear speakers. Checked and rectified with high-grade module replacements.',
    basePrice: 599
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Anbarasan K.',
    location: 'Pudukkottai Town',
    rating: 5,
    text: 'My OnePlus 10R display was completely shattered. Every shop in Pudukkottai quoted 3 days wait. Mobile Doctor replaced it in just 45 minutes with perfect quality. Highly standard and professional approach! Sound advice.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Meena Ramanathan',
    location: 'Alangudi',
    rating: 5,
    text: 'I bought premium transparent tempered glass for my iPhone 14. They applied it with a dust-free box technique. No bubble raised. Best mobile shop in Pudukkottai district for accessories. Rate is very decent.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Syed Musthafa',
    location: 'Aranthangi',
    rating: 5,
    text: 'Repaired my dead Redmi phone which was declared unrepairable due to motherboard chip issue. Dr. Mobile resolved the IC shorting in 2 hours and charged quite moderately! Best doctor for dead smartphones!',
    date: '3 days ago',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Venkatesh Kumar',
    location: 'Gandarvakottai',
    rating: 4,
    text: 'Visited for a quick software crash update. They formatted the storage with proper licensing and restored the operating system back to speed. Excellent customer service support.',
    date: '3 weeks ago',
    verified: true
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long does a general mobile screen or battery repair take?',
    answer: 'Standard repairs like screen replacement and battery change are typically finished within 30 to 50 minutes. We carry out repairs directly in front of customers at our Pudukkottai lab for complete transparency.',
    category: 'repair'
  },
  {
    question: 'Do you give any warranty for repaired mobile parts?',
    answer: 'Yes! We stand behind our diagnostics. We offer up to 90 Days warranty on our mobile screens and premium replacements, covering touch responsive and mechanical faults.',
    category: 'repair'
  },
  {
    question: 'What types of premium tempered glass protection do you offer?',
    answer: 'We provide various types: 11D Super Hard, UV Liquid Curved Glass (best for Galaxy Ultra/OnePlus curved screens), Matte anti-glare gaming glass, and 28-degree Dual Privacy anti-spy filters to keep sensitive info private.',
    category: 'accessories'
  },
  {
    question: 'Can you restore old corrupted software on phones?',
    answer: 'Yes! We fix stuck-on-logo boot loops, forgotten PIN codes, Google account lockouts, soft bricks, and firmware degradation using certified flashing cables and software keys.',
    category: 'general'
  },
  {
    question: 'Do you sell second-hand pre-owned or fresh mobile phones?',
    answer: 'We offer fresh brand-new models from top brands (Redmi, Samsung, Vivo, Realme, Oppo) and select certified pre-owned units tested on 30+ quality checkpoints which come with dynamic seller warranties.',
    category: 'sales'
  }
];
