import React from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
const App = () => {
  return (
    <div>
      <h1>hello from app</h1>
      <ClassComp desc="hello from classComp" />
      <FuncComp desc="hello from funcComp" />
    </div>
  );
};

export default App;
