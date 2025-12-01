import Header from '../../../components/Header';
import { getProductById } from '../../../lib/data';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import styles from './page.module.css';

export default async function ProductPage(props) {
  const params = await props.params;
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <main>
        <Header />
        <div className="container">
          <h1>Product not found</h1>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <div className={`container ${styles.productDetailContainer}`}>
        <Link href="/" className={styles.backLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Products
        </Link>

        <div className={`${styles.productDetail} glass-panel`}>
          <div className={styles.imageSection}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className={styles.infoSection}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>

            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            <div>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
