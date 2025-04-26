import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartComponent = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prev) => [...prev, product]);
  };

  const removeFromCart = (removeProduct) => {
    setCartProducts((prev) =>
      prev.filter((product) => product !== removeProduct)
    );
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartComponent;
