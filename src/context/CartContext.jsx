import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);

  const updateTotalProducts = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart || !cart.items?.length) return setTotalProducts(0);

    const total = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    setTotalProducts(total);
  };

  useEffect(() => {
    updateTotalProducts();
    window.addEventListener("storage", updateTotalProducts);
    return () => window.removeEventListener("storage", updateTotalProducts);
  }, []);

  return (
    <CartContext.Provider value={{ totalProducts, updateTotalProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
