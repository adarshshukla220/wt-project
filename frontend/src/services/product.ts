import axios from "axios";

import type {
  Product,
  CreateProductData,
} from "@/types/product";

const API_URL = `${import.meta.env.VITE_API_URL}/products`;

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);

  console.log("Products API response:", response.data);

  // Backend returns an array
  if (Array.isArray(response.data)) {
    return response.data;
  }

  // Backend returns { products: [...] }
  if (Array.isArray(response.data.products)) {
    return response.data.products;
  }

  // Backend returns { data: [...] }
  if (Array.isArray(response.data.data)) {
    return response.data.data;
  }

  console.error(
    "Unexpected products response:",
    response.data,
  );

  return [];
};

export const getProduct = async (
  id: string,
): Promise<Product> => {
  const response = await axios.get(
    `${API_URL}/${id}`,
  );

  // Direct product
  if (response.data?._id) {
    return response.data;
  }

  // { product: {...} }
  if (response.data?.product) {
    return response.data.product;
  }

  // { data: {...} }
  if (response.data?.data) {
    return response.data.data;
  }

  throw new Error("Invalid product response");
};

export const createProduct = async (
  product: CreateProductData,
): Promise<Product> => {
  const response = await axios.post(
    API_URL,
    product,
  );

  if (response.data?.product) {
    return response.data.product;
  }

  if (response.data?.data) {
    return response.data.data;
  }

  return response.data;
};