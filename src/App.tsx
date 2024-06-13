import './App.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Products } from './components/products/Products';
import { Separator } from './components/separator/Separator';

function App() {
  return (
    <div className="font-monsterrat">
      <Header />
      <Hero />
      <Products />
      <Separator />
    </div>
  );
}

export default App;
