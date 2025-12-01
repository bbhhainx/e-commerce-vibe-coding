"use client";

import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import styles from './page.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <main>
      <Header />
      <div className={`container ${styles.cartContainer}`}>
        <h1 className={styles.pageTitle}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className={`${styles.emptyCart} glass-panel`}>
            <p>Your cart is empty.</p>
            <Link href="/" className="btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <div className={styles.cartGrid}>
            <div className={`${styles.cartItems} glass-panel`}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />

                  <div className={styles.itemDetails}>
                    <Link href={`/product/${item.id}`} className={styles.itemName}>
                      {item.name}
                    </Link>
                    <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityControls}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.cartSummary} glass-panel`}>
              <h2>Order Summary</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className={styles.divider}></div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <Link href="/checkout" className={`btn-primary ${styles.checkoutBtn}`}>
                Proceed to Checkout
              </Link>

              <button className={styles.clearBtn} onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
