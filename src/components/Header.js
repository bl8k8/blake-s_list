import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./Header.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Header = () => {
  return (
    <div id="Header">
      <Button text={"My Messages"} />
      <Button text={"My Posts"} />
      <Button text={"Log Out"} />
    </div>
  );
};
export default Header;
