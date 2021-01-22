import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./Header.css";
import Input from "./input";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Header = (props) => {
  const { user, setUser, posts, setPosts } = props;
  return (
    <div id="Header">
      <Button style={{ display: "none" }} id={"show"} text={"My Messages"} />
      <Button style={{ display: "none" }} id={"show"} text={"My Posts"} />
      <Button style={{ display: "none" }} id={"show"} text={"Log Out"} />

      <Input user={user} setUser={setUser} />
    </div>
  );
};
export default Header;
