import React from 'react';
import './Chatbox.css';
import Message from './Message';
import Chatinput from './Chatinput';

class Chatbox extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      conversationStarted: false,
      connversation: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div className="chat">
        <Chatinput onSubmit={this.handleSubmit} />
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
