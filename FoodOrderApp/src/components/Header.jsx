import React, { useContext, useRef, useState } from 'react';
import logo from '../assets/logo.jpg';
import '../index.css';
import CartModal from './CartModal';

export const Header = ({ cartItems }) => {
  const [cartButtonClicked, setCartButtonClicked] = useState(false);
  const modalRef = useRef();

  function handleClick() {
    setCartButtonClicked(true);
    if (modalRef.current) {
      modalRef.current.open();
    }
  }

  return (
    <>
      <div id='main-header'>
        <h1 id='title'>
          <img src={logo} alt='' />
          REACTFOOD
        </h1>
        <button className='text-button' onClick={handleClick}>
          Cart ({cartItems.length})
        </button>
        {cartButtonClicked && <CartModal ref={modalRef} />}
      </div>
    </>
  );
};
