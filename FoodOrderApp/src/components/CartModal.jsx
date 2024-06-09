import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react';
import '../index.css';
import { createPortal } from 'react-dom';
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { SuccessModal } from './SuccessModal';

const CartModal = forwardRef(function CartModal(
  { cartItems, handleAddCartItems, handleRemoveCartItem,setCartItems },
  ref
) {
  const dialogRef = useRef(null);

  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [total, setTotal] = useState(0);


  function handleCheckoutClick() {
    setCheckoutClicked(true);
  }

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  const closeModal = () => {
    if (dialogRef.current) {
      setCheckoutClicked(false);
      dialogRef.current.close();
    }
  };
  function handleClose(){
    
    setCheckoutClicked(false);
    setSubmitted(false);
    dialogRef.current.close();
  }

  return createPortal(
    <dialog ref={dialogRef} className='modal p-5 pr-10 pl-10'>
      {
        !checkoutClicked &&
        <Cart
          cartItems={cartItems}
          closeModal={closeModal}
          handleAddCartItems={handleAddCartItems}
          handleRemoveCartItem={handleRemoveCartItem}
          handleCheckoutClick={handleCheckoutClick}
          total={total}
          setTotal={setTotal}
        />
      }

      {
        checkoutClicked && !submitted &&  
        <Checkout total={total} closeModal={closeModal} cartItems={cartItems} onSubmitted={() => setSubmitted(true)}  setCartItems={setCartItems}/> 
      }

      {
        submitted &&  <SuccessModal closeModal={handleClose} setCartItems={setCartItems}/>
      }
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
