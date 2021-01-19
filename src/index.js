import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "./api/index";
import { getCurrentUser } from "./auth";
import Button from "./components/Button";
import Header from "./components/Header";
import Post from "./components/Post";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setInbox] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(async () => {
    await getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <div>
      <Header posts={posts} setPosts={setPosts} user={user} setUser={setUser} />
      <Post setPosts={setPosts} posts={posts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
