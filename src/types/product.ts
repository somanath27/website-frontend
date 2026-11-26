export type ProductCategory = 'water-purifiers' | 'kitchen-chimneys';
export type ProductBrand = 'KENT' | 'Livpure' | 'Kenstar' | 'Hindware';

export interface Product {
  id: string;
  category: ProductCategory;
  brand: ProductBrand;
  model: string;
  slug: string;
  image?: string;
  images?: string[];
  capacity?: string;
  suction?: string;
  features: string[];
  description?: string;
  specifications?: Record<string, string>;
  warranty?: string;
  price?: string | number;
  sourceUrl?: string;
  verificationNotes?: string;
  relatedProducts?: string[];
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  icon?: string;
}

export interface Brand {
  id: ProductBrand;
  name: string;
  logo?: string;
  description?: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  region: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  category: 'ro' | 'chimney';
  cta: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address?: string;
  city: string;
  state: string;
  pincode?: string;
}
