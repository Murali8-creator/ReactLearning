import React, { FormEvent, useContext, useRef } from 'react'
import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context';


const NewTodo = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const props = useContext(TodosContext);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            return;
        }
        props.addTodo(enteredText);
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