import { createContext, useContext, useState } from 'react';
import { productDummyData } from '../assets/assets';

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(productDummyData);

    const clearProducts = () => setProducts([]);

    return (
        <ProductContext.Provider value={{ products, setProducts, clearProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)

export default ProductContext;
