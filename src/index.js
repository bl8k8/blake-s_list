import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "./api/index";

import Header from "./components/Header";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import Search from "./components/Search";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(async () => {
    await getPosts(token).then((response) => {
      setPosts(response);
    });
  }, [token]);

  return (
    <div>
      <Header
        setPosts={setPosts}
        user={user}
        setUser={setUser}
        token={token}
        setToken={setToken}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Search setPosts={setPosts} token={token} />
          <Post setPosts={setPosts} posts={posts} user={user} token={token} />
        </div>
        {user ? (
          <>
            <NewPost token={token} />
          </>
        ) : null}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
