import { createContext, useState, ReactNode } from "react";

type CartProviderType ={
  children: ReactNode
}

export const CartContext = createContext({});

export const CartProvider = ({ children }: CartProviderType) => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState({});


  const handleClick1 = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleClick2 = (event) => {
    event.preventDefault();
    setQuantity(quantity - 1);
  };

    return <CartContext.Provider value={{cart, setCart, quantity, handleClick1, handleClick2}}>{children}</CartContext.Provider>
};