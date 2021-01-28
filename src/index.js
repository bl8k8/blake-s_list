import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "./api/index";
import { getCurrentUser } from "./auth";
import Button from "./components/Button";
import Header from "./components/Header";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import Search from "./components/Search";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  useEffect(async () => {
    await getPosts().then((response) => {
      setPosts(response);
    });
  }, []);
  useEffect(async () => {
    await getPosts(token).then((response) => {
      setPosts(response);
    });
  }, [token]);

  return (
    <div>
      <Header
        posts={posts}
        setPosts={setPosts}
        user={user}
        setUser={setUser}
        token={token}
        setToken={setToken}
        messages={messages}
        setMessages={setMessages}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Post setPosts={setPosts} posts={posts} user={user} token={token} />
        </div>
        {user ? (
          <>
            <NewPost setPosts={setPosts} token={token} />
          </>
        ) : null}
      </div>
      <Search posts={posts} setPosts={setPosts} />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
