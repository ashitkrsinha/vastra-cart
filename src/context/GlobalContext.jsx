import { createContext, useContext, useState } from "react";
import { ourSpecsData, productDummyData } from "../assets/assets";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  // Products
  const [products, setProducts] = useState(productDummyData);
  const [specs] = useState(ourSpecsData);

  // Auth
  const [user, setUser] = useState(null);

  // Cart
  const [cartItems, setCartItems] = useState([]);

  // Loading
  const [loading, setLoading] = useState(false);

  // Theme
  const [theme, setTheme] = useState("light");

  // Product Actions
  const clearProducts = () => {
    setProducts([]);
  };

  const value = {
    // Product
    products,
    setProducts,
    clearProducts,

    // User
    user,
    setUser,

    // Cart
    cartItems,
    setCartItems,

    // Loading
    loading,
    setLoading,

    // Theme
    theme,
    setTheme,

    specs,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used inside GlobalProvider"
    );
  }

  return context;
};