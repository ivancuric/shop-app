import type { Product, ProductsApiResponse } from "./types";

const API_URL = "https://dummyjson.com/products";

/**
 * Fetches a list of products from DummyJSON.
 * We can add query params like ?limit= & ?skip= if needed, but for now, default.
 */
export const fetchProducts = async (limit: number = 20): Promise<Product[]> => {
  try {
    // Fetch a limited number of products for the exercise
    const response = await fetch(`${API_URL}?limit=${limit}&skip=0`);
    if (!response.ok) {
      console.error("Failed to fetch products:", response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as ProductsApiResponse;
    return data.products; // Return just the array of products
  } catch (error) {
    return [];
  }
};
