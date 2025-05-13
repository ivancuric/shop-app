import { useState, useEffect, useCallback } from "react";
import type { Product } from "../types";
import { fetchProducts } from "../api";

const PRODUCTS_TO_LOAD = 18; // Number of products to load for the grid

/**
 * Custom hook to fetch and manage product data.
 */
export const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async () => {
    try {
      const result = await fetchProducts(PRODUCTS_TO_LOAD);
    } catch (err) {
      // todo: handle error
    } finally {
      // todo: handle finally
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { products, isLoading, error, refetch: loadData };
};
