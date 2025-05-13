// Based on https://dummyjson.com/docs/products
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string; // URL of the product thumbnail
  images: string[]; // Array of URLs of product images
};

// Response structure from /products endpoint
export type ProductsApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
