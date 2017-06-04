import React from 'react';
import './Chatbox.css';
import Message from './Message';
import Chatinput from './Chatinput';

class Chatbox extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      conversationStarted: false,
      connversation: {},
      newMessage: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('New message to be pushed: ', this.state.newMessage);
    // TODO: send the message
    // TODO: set the newMessage to null
    // TODO: post response to newMessage
  }

  onChildChanged (childState) {
    this.setState({
      newMessage: childState.message,
    });
  }

  render () {
    return (
      <div className="chat">
        <Chatinput onSubmit={this.handleSubmit} callbackParent={this.onChildChanged} />
        <div className="chatbox">
          {!this.state.conversationStarted &&
              <Message text="Tell me something! 😎" />
          }

          <Message user text="Hola!" />
          <Message user text="What's up?" />
          <Message text="Hola! All is good." />
        </div>
      </div>
    )
  }
}

export default Chatbox;
