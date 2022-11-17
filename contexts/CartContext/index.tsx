import { createContext, useState, ReactNode, useRef, useEffect } from "react";

type CartProviderType ={
  children: ReactNode
}

export const CartContext = createContext({});

export const CartProvider = ({ children }: CartProviderType) => {

    // const [cart, setCart] = useState([] as any);

    // function handleAddItemToCart(name: string, price: number) {
    //   const itemObject = { name, price };
    //   setCart([...cart, itemObject]);
    // }
  
    // function handleRemoveItemFromCart(clickedItemIndex: any){
    //   const filteredCart = cart.filter((cartItem: any) => cart.indexOf(cartItem) !== clickedItemIndex);
    //   setCart(filteredCart);
    // }

    const [category, setCategory] = useState<any>();
    const [sub, setSub] = useState<any>();
    const [search, setSearch] = useState("");

  
    interface Data {
      id: number;
      title: string;
    }
  
    useEffect(() => {
      handleCategoryData();
      handleSubData();
      handleSearch();
    }, []);
  
    async function handleCategoryData() {
      const response = await fetch("/api/category");
      const category = await response.json();
      setCategory(category);
    }
  
    async function handleSubData() {
      const response = await fetch("/api/subcategory");
      const sub = await response.json();
      setSub(sub);
    }
  
    async function handleSearch() {
      const response = await fetch("/api/product");
      const search = await response.json();
      setSearch(search);
    }
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
  
      console.log(categoryRef.current.value);
      console.log(subRef.current.value);
  
    };
  
    if (!category) return <p>Loading</p>;
    if (!sub) return <p>Loading</p>;
    if (!search) return <p>Loading</p>;
  
    
    return <CartContext.Provider value={{handleCategoryData, handleSubData, handleSubmit}}>{children}</CartContext.Provider>
};