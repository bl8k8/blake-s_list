import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { registerUser } from "../api/index";
import { getUser, getUserInfo } from "../api/index";

const Input = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        text={"Register"}
        handler={() => {
          registerUser(username, password).then((response) => {
            setUser(response);
          });

          console.log("now");
        }}
      />
      <Button
        text={"Log in"}
        handler={() => {
          console.log("handler invoked"); // <== new line here
          getUser(username, password).then((info) => {
            console.log("FLag", info);
            setUser(info);
          });
        }}
      />
    </form>
  );
};

export default Input;
