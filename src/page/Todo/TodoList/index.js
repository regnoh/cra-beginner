import React from "react";
import TodoItem from "./TodoItem";
const todos = [{ id: 1, title: "read a book" }, { id: 2, title: "sing songs" }];
const TodoList = () => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default TodoList;
