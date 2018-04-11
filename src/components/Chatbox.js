import React from "react";
import "./Chatbox.css";
import Chatinput from "./Chatinput";
import * as apiai from "../utils/api-ai";
import * as weather from "../utils/weather";
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
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendMessage(this.state.newMessage).then(response => {
      let isUser = false;
      const conversation = this.state.conversation;
      const newMessage = this.generateNewMessage(response);
      this.updateConversationUI(newMessage, isUser, conversation);
    });
  }

  generateNewMessage(aiResponse) {
    const aiResult = aiResponse.result;
    const { metadata, parameters } = aiResult;
    const intent = metadata.intentName;

    console.log("Intent: ", intent);
    console.log("Parameters: ", parameters);

    let newMessage;

    switch (intent) {
      case "hows_the_weather":
        const location =
          parameters["geo-city"] === "" ? "Miami" : parameters["geo-city"];
        weather.getWeather(location).then(response => {
          console.log(response.data);
        });
        newMessage = `The weather in ${location}...`;
        // Wife aggro!!! You were about to complete the weather response string literal
        break;
      default:
        newMessage = aiResponse.result.fulfillment.speech;
        break;
    }
    return newMessage;
  }

  updateConversationUI(newMessage, user = true, currentConversation) {
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
    this.scrollToBottom();
    return this.state.conversation;
  }

  sendMessage(text) {
    this.updateConversationUI(text, true, this.state.conversation);
    return apiai.sendMessage(text).then(response => {
      this.setState({
        ai: response
      });
      return response;
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
          <div
            ref={elem => {
              this.messagesEnd = elem;
            }}
          />
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
