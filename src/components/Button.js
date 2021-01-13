import React from "react";
import ReactDOM from "react-dom";
const Button = (props) => {
  return (
    <button
      id={"button"}
      onClick={() => {
        console.log("you pressed the button");
      }}
      value="This is a sample"
    >
      {props.text}
    </button>
  );
};

export default Button;
