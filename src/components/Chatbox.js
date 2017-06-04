import React from 'react';
import PropTypes from 'prop-types';
import './Chatbox.css';

function Message (props) {
  const sentBy = props.user ? 'message user' : 'message';
  return (
    <div>
      <div className={sentBy}>
        {props.text}
      </div>
    </div>
  )
}
Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

class Chatinput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
    }

  }
  render () {
    return (
      <form className="chatinput" onSubmit={this.props.onSubmit}>
        <input type="text" placeholder="Write me something..." />
        <button type="submit" disabled={!this.state.message}>
          Send
        </button>
      </form>
    )
  }
}

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
