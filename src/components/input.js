import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { registerUser } from "../api/index";
import { getUser } from "../api/index";

const Input = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        handler={async () => registerUser(username, password)}
      />
      <Button
        text={"Log in"}
        handler={async () => getUser(username, password)}
      />
    </form>
  );
};

export default Input;
