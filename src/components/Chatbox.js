import React from 'react';
import './Chatbox.css';
import Message from './Message';
import Chatinput from './Chatinput';
import * as api from '../utils/api-ai';
import MessageList from './MessageList';

class Chatbox extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      conversation: [
        {
          text: 'Tell me something! 😎',
          key: 0,
        }
      ],
      newMessage: null,
      ai: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.sendMessage(this.state.newMessage);
    // TODO: send the message
    // TODO: set the newMessage to null
    // TODO: post response to newMessage
  }

  sendMessage(text) {
    const newConversation = [{
      text: text,
      key: Math.random(),
      user: true,
    }].concat(this.state.conversation);

    this.setState({
      conversation: newConversation,
    });

    api.sendMessage(text)
      .then((response) => {
        console.log(`api promise response for ${text}: `, response);
        this.setState({
          ai: response,
        });
      });
  }

  onChildChanged (childState) {
    this.setState({
      newMessage: childState.message,
    });
  }

  render () {
    const messages = [
      {
        text: 'This is a text message',
        key: 1
      },
      {
        text: 'This is a text message 2',
        key: 2,
        user: true,
      },
    ];
    return (
      <div className="chat">
        <Chatinput onSubmit={this.handleSubmit} callbackParent={this.onChildChanged} />
        <MessageList messages={this.state.conversation} />
      </div>
    )
  }
}

export default Chatbox;
