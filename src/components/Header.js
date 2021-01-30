import React from "react";

import Button from "./Button";
import "./Header.css";
import Input from "./Input";
import { getPosts } from "../api/index";

const Header = (props) => {
  const {
    user,
    setUser,

    setPosts,
    token,
    setToken,
  } = props;

  return (
    <div id="Header">
      {user ? (
        <>
          {<p>Welcome to Blake's List {user.data.username}!</p>}
          <Button
            text={"All Posts"}
            handler={() => {
              getPosts(token).then((response) => setPosts(response));
            }}
          />
          <Button
            text={"My Messages"}
            handler={() => {
              getPosts(token).then((response) => {
                const userPosts = [];
                response.map((item) => {
                  item.messages[0] ? userPosts.push(item) : null;
                });
                setPosts(userPosts);
              });
            }}
          />

          <Button
            text={"My Posts"}
            handler={() => {
              getPosts(token).then((response) => {
                const userPosts = [];
                response.map((item) => {
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
        <Input setUser={setUser} setToken={setToken} />
      )}
    </div>
  );
};
export default Header;
