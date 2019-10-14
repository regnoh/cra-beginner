import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const todos = [{ id: 1, title: "read a book" }, { id: 2, title: "sing songs" }];

const Todo = () => {
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
