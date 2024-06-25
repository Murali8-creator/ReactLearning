import React, { useContext } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';



const Todos = () => {
  const props = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem item={item} onRemoveTodo={props.removeTodo}/>
      ))}
    </ul>
  );
};

export default Todos;
