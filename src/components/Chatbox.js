import React from 'react';

import './Chatbox.css';

class Chatinput extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    console.log('chatinput submitted');
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
  render () {
    return (
      <div>
        <Chatinput />
        <div className='chatbox'>
          hola
        </div>
      </div>
    )
  }
}

export default Chatbox;
