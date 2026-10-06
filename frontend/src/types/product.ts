export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
