import React, { useState, useEffect } from "react";
import "./Search.css";
import { getPosts } from "../api";

const Search = (props) => {
  const { setPosts, token } = props;
  const [search, setSearch] = useState("");

  return (
    <footer>
      <label>Search:</label>
      <input
        className={"searchBar"}
        value={search}
        onInput={async (event) => {
          const newSearchvalue = event.target.value;
          let filteredPosts = [];
          setSearch(newSearchvalue);
          const get = await getPosts(token);
          console.log(newSearchvalue);
          get.map((value, index) => {
            let copy = value.title;
            copy.includes(newSearchvalue) ? filteredPosts.push(value) : null;
          });
          console.log(get);
          console.log(filteredPosts);
          setPosts(filteredPosts);
        }}
      ></input>
    </footer>
  );
};

export default Search;
