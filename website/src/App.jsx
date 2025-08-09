import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import LandingPage from './components/LandingPage';
import Product from './components/Product'; // Import Product component
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Contact from './components/Contact';
import VideoCarousel from "./components/VideoCarousel";
import About from './components/About';
import Exports from './components/Exports';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><VideoCarousel /><LandingPage /></>} />
          <Route path="/products" element={<Product />} />
           <Route path="/about" element={<About />} />
            <Route path="/exports" element={<Exports/>} />
            <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;