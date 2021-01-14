import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { registerUser } from "../api/index";
import { getUser } from "../api/index";

const Input = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

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
            console.log(response);
          });

          console.log("now");
        }}
      />
      <Button
        text={"Log in"}
        handler={() => {
          getUser(username, password).then((info) => {
            console.log(info);
            setUser(info);
          });
        }}
      />
    </form>
  );
};

export default Input;
