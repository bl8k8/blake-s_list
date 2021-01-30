import React, { useState, useEffect } from "react";
import Button from "./Button";
import { sendMessage } from "../api/index";

const Message = (props) => {
  const [message, setMessage] = useState(null);
  const { token, id, posts } = props;

  return (
    <>
      <input
        className={"message"}
        onInput={(event) => {
          setMessage(event.target.value);
        }}
      />
      <Button
        text={"Send Message"}
        handler={() => {
          sendMessage(token, id, message);
        }}
      />
    </>
  );
};

export default Message;
