import React from "react";
import "./App.css";
import { Todo, Like } from "./page";
import { Footer, Title } from "./components";
const App = () => {
  return (
    <div className="app">
      <Title />
      <Todo />
      <Like />
      <Footer />
    </div>
  );
};

export default App;
