import { useState } from "react";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { ProductGridItem } from "./components/ProductGridItem";
import { useProductsData } from "./hooks/useProductsData";
import type { Product } from "./types";

function App() {
  const { products, isLoading, error, refetch } = useProductsData();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Products</h1>
      {isLoading && products.length === 0 && <p>Loading products...</p>}
      {isLoading && products.length > 0 && <p>Refreshing products...</p>}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error.message}{" "}
          <button onClick={refetch} disabled={isLoading}>
            Try Again
          </button>
        </p>
      )}
      {!isLoading && !error && products.length === 0 && (
        <p>No products found.</p>
      )}

      {/* Product Grid */}
      <div>
        {products.map((product, i) => (
          <ProductGridItem
            key={i}
            product={product}
            onSelectProduct={handleSelectProduct}
          />
        ))}
      </div>

      {/* The Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
