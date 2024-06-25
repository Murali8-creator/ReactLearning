import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos,new Todo(text)]);
  };

  const removeTodoHandler = (clickedItemId: string) => {
    const updatedTodos = todos.filter((todoItem) => todoItem.id !== clickedItemId);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}  onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
