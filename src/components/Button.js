import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.id}
      style={props.style}
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
