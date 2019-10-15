import React, { useState, useRef } from "react";
import uuid from "uuid";
import { Button } from "../../../components";

const TodoInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const onChange = e => {
    setValue(e.target.value);
  };
  const onClick = e => {
    e.preventDefault();
    if (value === "") {
      alert("todo value can't be empty");
    } else {
      onSubmit({ id: uuid(), title: value });
    }
    setValue("");
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} value={value} onChange={onChange} />
      <Button onClick={onClick}>submit</Button>
    </div>
  );
};

export default TodoInput;
