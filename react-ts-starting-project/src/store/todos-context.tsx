import React, { PropsWithChildren, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type TodosContextProviderProps = {
    children?: React.ReactNode;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = ({children}:TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
  };

  const removeTodoHandler = (clickedItemId: string) => {
    const updatedTodos = todos.filter(
      (todoItem) => todoItem.id !== clickedItemId
    );
    setTodos(updatedTodos);
  };

  const ctxValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;