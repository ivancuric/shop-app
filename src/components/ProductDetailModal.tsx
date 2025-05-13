import React, { useEffect } from "react";
import type { Product } from "../types";

/**
 * Props for the modal
 */
export type ProductDetailModalProps = {
  product: Product | null; // The product to display, or null if modal is closed
  onClose: () => void; // Function to close the modal
};

/**
 * Modal to display detailed product information.
 */

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
    }
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  return (
    <div onClick={onClose}>
      <div>
        <h2>{product.title}</h2>
        {/* Image gallery */}
        <div>
          {product.images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} />
          ))}
        </div>

        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price} ({product.discountPercentage}
          % off)
        </p>
        <p>
          <strong>Rating:</strong> {product.rating}/5
        </p>
        <p>
          <strong>Brand:</strong> {product.brand} | <strong>Category:</strong>{" "}
          {product.category}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock} available
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
