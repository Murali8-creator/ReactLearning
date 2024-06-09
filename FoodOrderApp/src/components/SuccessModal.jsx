import React from 'react'

export const SuccessModal = ({closeModal,setCartItems}) => {
    function handleCloseClick(){
        setCartItems([]);
        closeModal();
    }
  return (
    <>
    <h1>Order Created Successfully</h1>
    <button onClick={handleCloseClick} className='button'>Close</button>
    </>
  )
}
