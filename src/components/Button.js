import React from "react";
import ReactDOM from "react-dom";
const Button = (props) => {
  return (
    <button
      className={props.id}
      onClick={(event) => {
        event.preventDefault();

        props.handler();
      }}
      value="This is a sample"
    >
      {props.text}
    </button>
  );
};

export default Button;
