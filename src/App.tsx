import './App.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Products } from './components/products/Products';
import { ProductsFeature } from './components/productsFeature/ProductsFeature';
import { Reviews } from './components/reviews/Reviews';
import { Separator } from './components/separator/Separator';

function App() {
  return (
    <div className="font-monsterrat">
      <Header />
      <Hero />
      <Products />
      <Separator />
      <ProductsFeature />
      <Reviews />
    </div>
  );
}

export default App;
