import React from "react";
import "./App.css";
import { Todo, Like } from "./page";

const App = () => {
  return (
    <div className="app">
      <Todo />
      <Like />
    </div>
  );
};

export default App;
