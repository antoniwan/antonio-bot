import React from 'react';
import ApiAi from '../utils/api-ai';
import './Chatbox.css';

let apiAi = new ApiAi();

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

class Chatinput extends React.Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    //console.log('ApiAi: ', apiAi.test());
  }
  render () {
    return (
      <form className="chatinput" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Write me something..." />
        <button>
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
    }

  }
  render () {
    return (
      <div className="chat">
        <Chatinput />
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
