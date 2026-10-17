import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [total, setTotal] = useState(0);

    const addToCart = ({ productId }) => {
        setCartItems(prev => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1,
        }))
        setTotal(prev => prev + 1);
    }

    const removeFromCart = ({ productId }) => {
        setCartItems(prev => {
            const updated = { ...prev }
            if (updated[productId]) {
                updated[productId] -= 1
                if (updated[productId] === 0) {
                    delete updated[productId]
                }
            }
            return updated
        })
        setTotal(prev => prev - 1)
    }

    const deleteItemFromCart = ({ productId }) => {
        setTotal(prev => prev - (cartItems[productId] || 0))
        setCartItems(prev => {
            const updated = { ...prev }
            delete updated[productId]
            return updated;
        })
    }

    const clearCart = () => {
        setCartItems({})
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart, deleteItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

export default CartContext;
