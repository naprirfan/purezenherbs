import './App.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Products } from './components/products/Products';

function App() {
  return (
    <div className="font-monsterrat">
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
