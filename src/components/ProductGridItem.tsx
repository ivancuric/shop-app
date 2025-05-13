import React from "react";
import type { Product } from "../types";

type ProductGridItemProps = {
  product: Product;
  onSelectProduct: (product: Product) => void;
};

/**
 * Displays a single product in a grid layout.
 */
export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  onSelectProduct,
}) => {
  const handleClick = () => {
    onSelectProduct(product);
  };

  return (
    <div onClick={handleClick}>
      <img src={product.thumbnail} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};
