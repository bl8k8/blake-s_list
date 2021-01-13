import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "../api";
import { getCurrentUser } from "../auth";
import Button from "./Button";
import Header from "./Header";
import Post from "./Post";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setInbox] = useState([]);

  useEffect(async () => {
    await getPosts().then((response) => {
      response.forEach((post, index) => {
        return <Post />;
      });
      console.log(response[0]);
      const info = response.data;
      return info;
    });
  }, []);

  return (
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default App;
