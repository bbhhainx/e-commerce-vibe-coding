"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: 'Vietnam',
        paymentMethod: 'card'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate order processing
        alert(`Order placed successfully!\n\nTotal: $${cartTotal.toFixed(2)}\nPayment Method: ${formData.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}\n\nThank you for your purchase, ${formData.firstName}!`);

        // Clear cart and redirect
        clearCart();
        router.push('/');
    };

    if (cart.length === 0) {
        return (
            <main>
                <Header />
                <div className={`container ${styles.checkoutContainer}`}>
                    <div className={`${styles.emptyCheckout} glass-panel`}>
                        <h2>Your cart is empty</h2>
                        <p>Add some products before checking out.</p>
                        <Link href="/" className="btn-primary">Start Shopping</Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Header />
            <div className={`container ${styles.checkoutContainer}`}>
                <h1 className={styles.pageTitle}>Checkout</h1>

                <div className={styles.checkoutGrid}>
                    <form className={`${styles.checkoutForm} glass-panel`} onSubmit={handleSubmit}>
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Contact Information</h2>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Shipping Address</h2>
                            <div className={styles.formGroup}>
                                <label htmlFor="address">Street Address *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="zipCode">Zip Code *</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="country">Country *</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Singapore">Singapore</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Payment Method</h2>
                            <div className={styles.formGroup}>
                                <label htmlFor="paymentMethod">Select Payment Method *</label>
                                <select
                                    id="paymentMethod"
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="card">Credit/Debit Card</option>
                                    <option value="cod">Cash on Delivery</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                            Place Order
                        </button>
                    </form>

                    <div className={`${styles.orderSummary} glass-panel`}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        {cart.map((item) => (
                            <div key={item.id} className={styles.summaryItem}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemDetails}>
                                    <div className={styles.itemName}>{item.name}</div>
                                    <div className={styles.itemMeta}>
                                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className={styles.divider}></div>

                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={`${styles.summaryRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
