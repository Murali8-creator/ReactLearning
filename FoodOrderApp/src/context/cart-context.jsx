import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  cartItems: [],
  handleAddCartItems: () => {},
  handleRemoveCartItem: () => {},
  clearCart: () => {},
});

function cartContextReducer(state, action) {
  const prevCartItems = [...state];

  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      if (!existingItem) {
        const newItem = {
          id: action.payload.item.id,
          name: action.payload.item.name,
          quantity: 1,
          price: action.payload.item.price,
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
    
    case 'REMOVE_ITEM':
      if (action.payload.item.quantity > 1) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === action.payload.item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        );
      } else {
        return prevCartItems.filter(
          (cartItem) => cartItem.id !== action.payload.item.id
        );
      }
    
    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [cartItems, cartItemsDispatch] = useReducer(cartContextReducer, []);

  function handleAddCartItems(item) {
    cartItemsDispatch({
      type: 'ADD_ITEM',
      payload: { item },
    });
  }

  function handleRemoveCartItem(item) {
    cartItemsDispatch({
      type: 'REMOVE_ITEM',
      payload: { item },
    });
  }

  function clearCart() {
    cartItemsDispatch({ type: 'CLEAR_CART' });
  }

  const cartCtxValue = {
    cartItems,
    handleAddCartItems,
    handleRemoveCartItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
  );
}
