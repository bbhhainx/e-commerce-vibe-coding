"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className={`${styles.productCard} glass-panel`}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.overlay}>
          <Link href={`/product/${product.id}`} className={styles.quickViewBtn}>
            Quick View
          </Link>
        </div>
      </div>

      <div className={styles.productInfo}>
        <span className={styles.category}>{product.category}</span>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.productTitle}>{product.name}</h3>
        </Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button className={styles.addBtn} onClick={() => addToCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
