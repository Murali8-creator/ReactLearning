import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';

type TodoItemProps = {
    item: Todo;
    children?:React.ReactNode;
    onRemoveTodo: (id: string) => void;
}

const TodoItem = (props: TodoItemProps) => {
    const handleClick = (id: string) => {
        props.onRemoveTodo(id); 
    }
    return (
        <>
        <li onClick={() => handleClick(props.item.id)} key={props.item.id} className={classes.item}>{props.item.text}</li>
        </>
    );
};

export default TodoItem;