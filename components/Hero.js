"use client";

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>
        Discover the <span className="text-gradient">Future</span> of Tech
      </h1>
      <p className={styles.heroSubtitle}>
        Premium gadgets for the modern lifestyle.
      </p>
    </div>
  );
}
