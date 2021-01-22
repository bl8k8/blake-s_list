import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { registerUser } from "../api/index";
import { getUser, getUserInfo } from "../api/index";

const Input = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const { user, setUser } = props;

  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        id="username"
        onInput={(event) => {
          event.preventDefault();
          setUsername(event.target.value);
        }}
      ></input>
      <label>Password:</label>
      <input
        type="text"
        id="password"
        onInput={(event) => {
          event.preventDefault();
          setPassword(event.target.value);
        }}
      ></input>
      <Button
        id={"hide"}
        text={"Register"}
        handler={() => {
          registerUser(username, password).then((response) => {
            setUser(response);
            const target = document.getElementsByClassName("hide");
            const hide = [...leave];
            const reveal = document.getElementsByClassName("show");
            const show = [...reveal];
            show.forEach((value, index) => {
              value.style.display = "block";
            });
            hide.forEach((value, index) => {
              value.style.display = "none";
            });
          });
        }}
      />
      <Button
        id={"hide"}
        text={"Log in"}
        handler={() => {
          console.log("handler invoked"); // <== new line here
          getUser(username, password).then((info) => {
            console.log("FLag", info);
            setUser(info);
            const leave = document.getElementsByClassName("hide");
            const hide = [...leave];
            const reveal = document.getElementsByClassName("show");
            const show = [...reveal];
            show.forEach((value, index) => {
              value.style.display = "block";
            });
            hide.forEach((value, index) => {
              value.style.display = "none";
            });
          });
        }}
      />
    </form>
  );
};

export default Input;
