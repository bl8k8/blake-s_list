import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Message from "./Message";
import "./Post.css";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getPosts } from "../api";
const Post = (props) => {
  const { posts, setPosts, user, token } = props;

  return (
    <>
      {" "}
      {posts.map((post, index) => (
        <div className="post" key={`post${index}`}>
          <h3>{post.title}</h3>
          <div>{post.author.username}</div>
          <div>{post.price}</div>
          <div>{post.description}</div>
          <div>{post.willDeliver ? "Will Deliver" : "Will not Deliver"}</div>
          <Message token={token} id={post._id} />

          {user ? (
            user.data.username === post.author.username ? null : (
              <Button
                text={"Message"}
                handler={(event) => {
                  console.log(post._id);
                }}
              />
            )
          ) : null}

          {user ? (
            user.data.username === post.author.username ? (
              <>
                <Button text={"Delete Post"} />
              </>
            ) : null
          ) : null}
        </div>
      ))}
      )
    </>
  );
};

export default Post;
