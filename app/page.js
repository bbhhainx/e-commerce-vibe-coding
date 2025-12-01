import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Hero from '../components/Hero';
import { getProducts } from '../lib/data';
import styles from './page.module.css';

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || '';
  const products = await getProducts(query);

  return (
    <main>
      <Header />
      <div className="container">
        <Hero />
        {query && (
          <div className={styles.searchResultsHeader}>
            <h2>Search results for "{query}"</h2>
            <p>{products.length} products found</p>
          </div>
        )}
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
