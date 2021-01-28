import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./Header.css";
import Input from "./Input";
import { getPosts } from "../api/index";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Header = (props) => {
  const {
    user,
    setUser,
    posts,
    setPosts,
    token,
    setToken,
    messages,
    setMessages,
  } = props;

  return (
    <div id="Header">
      {user ? (
        <>
          <Button text={"My Messages"} />

          <Button
            text={"My Posts"}
            handler={() => {
              getPosts().then((response) => {
                const userPosts = [];
                response.map((item, index) => {
                  console.log(item);
                  if (item.author.username === user.data.username) {
                    userPosts.push(item);
                  }
                });
                setPosts(userPosts);
              });
            }}
          />
          <Button
            text={"Log Out"}
            handler={() => {
              setUser(null);
              setToken("");
            }}
          />
        </>
      ) : (
        <Input
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
      )}
    </div>
  );
};
export default Header;
