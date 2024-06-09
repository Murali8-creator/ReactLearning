import { useEffect, useState } from 'react';
import CartModal from './components/CartModal';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {console.log(cartItems)}, [cartItems]);

  function handleAddCartItems(item) {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      console.log(existingItem);
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
      if(item.quantity > 1){
        return  prevCartItems.map((cartItem) => cartItem.id === item.id ? {
            ...cartItem,
            quantity : cartItem.quantity -1,
          }:cartItem)
      }
      else{
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id)
      }
  });
  }

  return (
    <>
      <Header
        cartItems={cartItems}
        handleAddCartItems={handleAddCartItems}
        handleRemoveCartItem={handleRemoveCartItem}
        setCartItems = {setCartItems}
      />
      <Main onAddCartItems={(item) => handleAddCartItems(item)} />
      {/* {cartItems.length!=0 && console.log(cartItems)} */}
    </>
  );
}

export default App;
