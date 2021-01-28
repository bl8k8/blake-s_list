import React, { useState, useEffect } from "react";
import { createPost } from "../api/index";
import "./NewPost.css";

const NewPost = (props) => {
  const { setPosts, token } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);

  return (
    <div id={"newPost"}>
      <label>Title</label>
      <input
        type="text"
        id="newPostTitle"
        onInput={(event) => {
          setTitle(event.target.value);
          console.log(title);
        }}
      ></input>
      <label>Description</label>
      <input
        type="text"
        id="newPostDescription"
        onInput={(event) => {
          setDescription(event.target.value);
          console.log(description);
        }}
      ></input>
      <label>Price</label>
      <input
        type="text"
        id="newPostPrice"
        onInput={(event) => {
          setPrice(event.target.value);
          console.log(price);
        }}
      ></input>
      <label>Will you Deliver?(Defaults to yes)</label>

      <select
        className="willDeliver"
        onInput={(event) => {
          setWillDeliver(event.target.value);
          console.log(willDeliver);
          console.log(token);
        }}
      >
        <optgroup label="Choose one" />
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <input
        type="submit"
        onClick={async (event) => {
          await createPost(token, title, description, price, willDeliver).then(
            (response) => {
              console.log(response);
            }
          );
        }}
      />
    </div>
  );
};

export default NewPost;
