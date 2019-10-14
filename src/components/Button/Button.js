import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";
let cx = classNames.bind(styles);

const Button = ({ type = "primary", children }) => {
  const btnStyle = cx({
    btn: true,
    [`btn-${type}`]: true
  });
  return <button className={btnStyle}>{children}</button>;
};

export default Button;
