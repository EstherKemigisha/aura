import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundMotion from './components/BackgroundMotion';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-body relative min-h-screen bg-cream">
        <BackgroundMotion />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
