import axios from "axios";

import type {
  Product,
  CreateProductData,
} from "@/types/product";

const API_URL = "http://localhost:3000/products";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);

  return response.data;
};

export const getProduct = async (
  id: string,
): Promise<Product> => {
  const response = await axios.get<Product>(
    `${API_URL}/${id}`,
  );

  return response.data;
};

export const createProduct = async (
  product: CreateProductData,
): Promise<Product> => {
  const response = await axios.post<Product>(
    API_URL,
    product,
  );

  return response.data;
};
