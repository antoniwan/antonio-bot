import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const MessageList = ({ messages }) => (
  <div className="chatbox">
    {messages.map(message => <Message {...message} />)}
  </div>
);
MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
