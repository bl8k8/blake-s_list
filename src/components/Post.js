import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./Post.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getPosts } from "../api";
const Post = (props) => {
  const { posts, setPosts } = props;
  const newArr = [];
  posts.forEach((post, index) => {
    newArr.push(
      <div id="post">
        <h3 id="Title">{post.title}</h3>
        <div id="author">{post.author.username}</div>
        <div id="description">{post.description}</div>
        <Button style={{ display: "none" }} id={"show"} text={"Message"} />
        <Button style={{ display: "none" }} id={"show"} text={"Delete Post"} />
      </div>
    );
  });
  return newArr;
};

export default Post;
