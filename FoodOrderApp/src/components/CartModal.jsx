import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import '../index.css';
import { createPortal } from "react-dom";

const CartModal = forwardRef(function CartModal({ cartItems, handleAddCartItems, handleRemoveCartItem }, ref) {
  const dialogRef = useRef(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let num = 0;
    num = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    setTotal(num);
  }, [cartItems]);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    }
  }));

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return createPortal(
    <dialog ref={dialogRef} className="modal p-5 pr-10 pl-10">
      <div className="cart">
        <h1>Your Cart</h1>
        <ul>
          {cartItems.length !== 0 && cartItems.map((cartItem) => (
            cartItem.quantity > 0 &&
            <li key={cartItem.id} className="font-bold">
              <div className='cart-item'>
                <div className="flex gap-5 items-center">
                  <h2>{cartItem.name} : </h2>
                  <p className="font-mono">${cartItem.price} * {cartItem.quantity}</p>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => handleAddCartItems(cartItem)}>+</button>
                  <p>{cartItem.quantity}</p>
                  <button onClick={() => handleRemoveCartItem(cartItem)}>-</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-total font-mono">Total: {total}</div>
      <div className="modal-actions">
        <button onClick={closeModal} className="text-button">Close</button>
        <button className="bg-amber-400 p-1 rounded-md shadow-md hover:bg-amber-500">Checkout</button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
