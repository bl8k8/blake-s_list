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
const Post = () => {
  return (
    <div id="post">
      <h3 id="Title"> This object</h3>
      <div id="author"> My Name</div>
      <div id="description">Take this Thing</div>
      <a id="picture">Placeholder Text</a>
    </div>
  );
};

export default Post;
