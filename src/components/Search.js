import React, { useState, useEffect } from "react";
import { getPosts } from "../api";

const Search = (props) => {
  const { posts, setPosts } = props;
  const [search, setSearch] = useState("");

  return (
    <input
      value={search}
      onInput={async (event) => {
        const newSearchvalue = event.target.value;
        const filteredPosts = [];
        setSearch(newSearchvalue);
        console.log(newSearchvalue);
        posts.map((value, index) => {
          let copy = value.title;
          copy.includes(newSearchvalue) ? filteredPosts.push(value) : null;
        });
        console.log(filteredPosts);
        setPosts(filteredPosts);
      }}
    ></input>
  );
};

export default Search;
