import React from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import "./App.css";
import styles from "./App.module.css";
import "./App.scss"; // yarn add node-sass
const App = () => {
  return (
    <div className="app">
      <h1 className={styles.title}>hello from app</h1>
      <p className="desc" style={{ margin: "2px" }}>
        Have a good time!
      </p>
      <ClassComp desc="hello from classComp" />
      <FuncComp desc="hello from funcComp" />
    </div>
  );
};

export default App;
