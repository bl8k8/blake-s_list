import React, { useState, useEffect } from "react";
import Button from "./Button";
import { sendMessage } from "../api/index";

const Message = (props) => {
  const [message, setMessage] = useState(null);
  const { token, id } = props;

  return (
    <>
      <input
        className={"message"}
        onInput={(event) => {
          setMessage(event.target.value);
        }}
      />
      <Button
        text={"Submit"}
        handler={() => {
          console.log(token, "travis");
          sendMessage(token, id, message).then((response) => {
            console.log(response);
          });
        }}
      />
    </>
  );
};

export default Message;
