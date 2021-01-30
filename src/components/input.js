import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { registerUser } from "../api/index";
import { getUser, getUserInfo } from "../api/index";

const Input = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser, token, setToken } = props;

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
        type="password"
        id="password"
        onInput={(event) => {
          event.preventDefault();
          setPassword(event.target.value);
        }}
      ></input>

      <Button
        text={"Register"}
        handler={async () => {
          await registerUser(username, password)
            .then(async (info) => {
              if (info.data.data.token) {
                setToken(info.data.data.token);
                const userInfo = await getUserInfo(info.data.data.token);
                return userInfo;
              }
            })
            .then((response) => {
              console.log(response);
              setUser(response);
            });
        }}
      />

      <Button
        text={"Log in"}
        handler={async () => {
          await getUser(username, password)
            .then(async (info) => {
              console.log(info);
              if (info.data.data.token) {
                setToken(info.data.data.token);
                const userInfo = await getUserInfo(info.data.data.token);
                return userInfo;
              }
            })
            .then((response) => {
              setUser(response);
            });
        }}
      />
    </form>
  );
};

export default Input;
