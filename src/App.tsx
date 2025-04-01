import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/theme';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import StoreSelection from './pages/StoreSelection';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Toaster richColors position="top-right" />
        <Router>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<StoreSelection />} />
              <Route path="/store/:storeId" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;