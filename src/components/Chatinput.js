import React from 'react';
import './Chatinput.css';

class Chatinput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const newState = {
      'message': event.target.value
    };
    this.setState(newState);
    this.props.callbackParent(newState);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.onSubmit(event);
    this.setState({
      message: ''
    });
  }

  render () {
    return (
      <form className="chatinput" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.message} placeholder="Write me something..." onChange={this.handleChange} />
        <button type="submit" disabled={!this.state.message}>
          Send
        </button>
      </form>
    )
  }
}

export default Chatinput;
