export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  hairType: string[];
  ingredients: string[];
  howToUse: string;
  rating: number;
  reviewCount: number;
  bestseller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export type PurchaseMethodId = 'whatsapp' | 'pickup' | 'delivery' | 'email';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  purchaseMethod: PurchaseMethodId;
}
