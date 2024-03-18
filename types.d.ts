export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
}

export interface Designer {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Brand {
  id: number;
  name: string;
}
