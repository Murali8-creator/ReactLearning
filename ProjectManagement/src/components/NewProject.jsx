import React, { useRef } from 'react'
import Input from './Input.jsx';
import {Button} from './Button.jsx'
import { Modal } from './Modal.jsx';

export const NewProject = ({onAdd, onCancel}) => {
  
  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation

    if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === ''){
      modalRef.current.open();
      return;
    }
  
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate : enteredDueDate
    })

  }

  return (
    <>
    <Modal ref={modalRef} buttonCaption="Close">
      <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
      <p className='text-stone-900 mb-4 font-medium'>Oops... looks like you forgot to enter a value.</p>
      <p className='text-stone-900 mb-4 font-medium'>Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16 mt-20 mx-60">
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
            <li><Button handleSave={handleSave}>Save</Button></li>
        </menu>
        <div>
           <Input type="text" ref={titleRef} label="Title"/>
           <Input ref={descRef} isTextArea label="Description"/>
           <Input type="date" ref={dueDateRef} label="Due Date"/>
           
        </div>
        </div>
        </>
  )
}

export default NewProject;