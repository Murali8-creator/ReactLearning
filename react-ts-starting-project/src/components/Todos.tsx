import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[];
  onRemoveTodo:(id: string) => void;
}

const Todos = (props: TodosProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem item={item} onRemoveTodo={props.onRemoveTodo}/>
      ))}
    </ul>
  );
};

export default Todos;
