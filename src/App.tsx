import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundMotion from './components/BackgroundMotion';
import { CartProvider } from './context/CartContext';
import AddToCartModal from './components/AddToCartModal';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="font-body relative min-h-screen bg-cream">
          <BackgroundMotion />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <AddToCartModal />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
