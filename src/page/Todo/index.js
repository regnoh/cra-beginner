import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const initialTodos = [
  { id: 1, title: "read a book", completed: true },
  { id: 2, title: "sing songs", completed: false }
];

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const onSubmit = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <TodoInput onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
