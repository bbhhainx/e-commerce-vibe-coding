"use client";

import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <style jsx>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }
      `}</style>
        </div>
    );
}
