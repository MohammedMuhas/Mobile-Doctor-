export interface Product {
  id: string;
  name: string;
  category: 'phones' | 'accessories' | 'glass';
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
  description: string;
  specs?: string[];
  inStock: boolean;
}

export interface RepairService {
  id: string;
  name: string;
  icon: string;
  estimatedTime: string;
  description: string;
  basePrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'repair' | 'sales' | 'accessories' | 'general';
}

export interface Offer {
  id: string;
  title: string;
  badge: string;
  description: string;
  code: string;
  expiryDate: string;
}
