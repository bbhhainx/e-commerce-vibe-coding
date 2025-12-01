"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import styles from './Header.module.css';

function HeaderContent() {
  const { cartCount } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(search)}`);
  };

  return (
    <header className={`${styles.header} glass-panel`}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Lumina</span>Store
        </Link>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>

        <nav>
          <Link href="/cart" className={styles.cartIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className={`${styles.header} glass-panel`}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            <span className="text-gradient">Lumina</span>Store
          </Link>
        </div>
      </header>
    }>
      <HeaderContent />
    </Suspense>
  );
}
