import { createContext, useState } from "react"

export const CartContext = createContext({
    cartItems:[],
    handleAddCartItems:() => {},
    handleRemoveCartItem:() => {},
    setCartItems:() => {}
})

export default function CartContextProvider({children}){
    const [cartItems, setCartItems] = useState([]);

  function handleAddCartItems(item) {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (!existingItem) {
        const newItem = {
          id: item.id,
          name: item.name,
          quantity: 1,
          price: item.price,
        };
        return [...prevCartItems, newItem];
      } else {
        return prevCartItems.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
    });
  }

  function handleRemoveCartItem(item) {
    setCartItems((prevCartItems) => {
      if (item.quantity > 1) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        );
      } else {
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      }
    });
  }

  const cartCtxValue = {
    cartItems: cartItems,
    handleAddCartItems: handleAddCartItems,
    handleRemoveCartItem: handleRemoveCartItem,
    setCartItems: () => setCartItems([]),
  };

  return <CartContext.Provider value={cartCtxValue}>
    {children}
  </CartContext.Provider>
}