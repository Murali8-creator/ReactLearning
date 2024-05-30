import React, { useRef } from 'react'
import { createPortal } from 'react-dom';
import { forwardRef,useImperativeHandle } from 'react';
import { Button } from './Button';

export const Modal = forwardRef(({children,buttonCaption},ref) => {

    const dialogRef = useRef();

    useImperativeHandle(ref,() => {
        return{
            open(){
                dialogRef.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog ref={dialogRef} className='backdrop:bg-stone-900/90 p-4 shadow-md rounded-md'>
        {children}
        <form method='dialog' className='mt-4 text-right'>
            <Button>
                {buttonCaption}
            </Button>
        </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})
