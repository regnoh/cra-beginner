import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
let cx = classNames.bind(styles);

const Button = ({ type = "primary", children, onClick }) => {
  const btnStyle = cx({
    btn: true,
    [`btn-${type}`]: true
  });
  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
