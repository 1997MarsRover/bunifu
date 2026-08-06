import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ShopPage from './pages/shop/ShopPage';
import ProductPage from './pages/shop/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/cart" element={<Navigate to="/shop" replace />} />
        <Route path="/shop/checkout" element={<Navigate to="/shop" replace />} />
        <Route path="/shop/order-received" element={<Navigate to="/shop" replace />} />
        <Route path="/shop/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
