import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';

export default function Home({ onAddToCart, onViewDetail }) {
  const navigate = useNavigate();

  const goToCatalog = (category = 'todos') => {
    navigate('/catalogo', { state: { category } });
  };

  return (
    <main>
      <Hero onCatalogClick={() => goToCatalog()} />
      <Categories
        activeCategory="todos"
        onCategoryChange={(cat) => goToCatalog(cat)}
      />
      <FeaturedProducts
        onAddToCart={onAddToCart}
        onViewDetail={onViewDetail}
      />
      <TrustSection />
      <CTASection onCatalogClick={() => goToCatalog()} />
    </main>
  );
}
