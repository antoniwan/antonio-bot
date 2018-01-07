import React from "react";
import "./Chatbox.css";
import Chatinput from "./Chatinput";
import * as api from "../utils/api-ai";
import MessageList from "./MessageList";

class Chatbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversation: [
        {
          text: "Tell me something! 😎",
          key: 0
        }
      ],
      newMessage: null,
      ai: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendMessage(this.state.newMessage);
  }

  updateConversation(newMessage, user = true, currentConversation) {
    const newConversation = [
      {
        text: newMessage,
        key: `message-${Math.random()}`,
        user: user
      }
    ].concat(currentConversation);
    this.setState({
      conversation: newConversation
    });
    return this.state.conversation;
  }

  sendMessage(text) {
    this.updateConversation(text, true, this.state.conversation);
    api.sendMessage(text).then(response => {
      this.setState({
        ai: response
      });
      this.updateConversation(
        response.result.fulfillment.speech,
        false,
        this.state.conversation
      );
    });
  }

  onChildChanged(childState) {
    this.setState({
      newMessage: childState.message
    });
  }

  render() {
    return (
      <div className="chat-wrapper">
        <div className="messages">
          <MessageList messages={this.state.conversation} />
        </div>
        <div className="input">
          <Chatinput
            onSubmit={this.handleSubmit}
            callbackParent={this.onChildChanged}
          />
        </div>
      </div>
    );
  }
}

export default Chatbox;
