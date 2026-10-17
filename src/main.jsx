import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { GlobalProvider } from './context/GlobalContext';
import { ProductProvider } from './context/ProductContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>,
)
