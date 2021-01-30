import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Message from "./Message";
import "./Post.css";
import { deletePost } from "../api/index";
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
          <h3>Title: {post.title}</h3>
          <div>Author: {post.author.username}</div>
          <div>Price: {post.price}</div>
          <div>Description: {post.description}</div>
          <div>
            Will Deliver:{" "}
            {post.willDeliver ? "Will Deliver" : "Will not Deliver"}
          </div>
          {post.messages[0]
            ? post.messages.map((value, index) => {
                return (
                  <div key={"message" + index} className={"messageInfo"}>
                    <div key={"note" + index} className={"note"}>
                      Message: {value.content}
                    </div>
                    <div key={"from" + index} className={"from"}>
                      From: {value.fromUser.username}
                    </div>
                  </div>
                );
              })
            : null}
          {user ? (
            user.data.username !== post.author.username ? (
              <Message token={token} id={post._id} posts={posts} />
            ) : null
          ) : null}

          {user ? (
            user.data.username === post.author.username ? (
              <>
                <Button
                  text={"Delete Post"}
                  handler={() => {
                    console.log(token);
                    deletePost(token, post._id).then(async (response) => {
                      await getPosts(token).then(async (response) => {
                        setPosts(response);
                      });
                    });
                  }}
                />
              </>
            ) : null
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Post;
