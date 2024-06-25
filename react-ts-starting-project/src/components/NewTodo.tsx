import React, { FormEvent, useRef } from 'react'
import classes from './NewTodo.module.css'

type propsTodo={
    onAddTodo: (text: string) => void;
}

const NewTodo = (props: propsTodo) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            return;
        }
        props.onAddTodo(enteredText);
        todoTextInputRef.current!.value='';
    }
  return (
    <>
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add</button>
    </form>
    </>
  )
}

export default NewTodo