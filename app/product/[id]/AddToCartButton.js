"use client";

import { useCart } from '../../../context/CartContext';

export default function AddToCartButton({ product }) {
    const { addToCart } = useCart();

    return (
        <button className="btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
        </button>
    );
}
