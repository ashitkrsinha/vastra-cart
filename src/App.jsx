import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

const App = () => {

  return (
    <>
      <Toaster />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
