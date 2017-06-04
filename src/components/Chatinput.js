import React from 'react';
import './Chatinput.css';

class Chatinput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      'message': event.target.value,
    });
  }
  render () {
    return (
      <form className="chatinput" onSubmit={this.props.onSubmit}>
        <input type="text" value={this.state.message} placeholder="Write me something..." onChange={this.handleChange} />
        <button type="submit" disabled={!this.state.message}>
          Send
        </button>
      </form>
    )
  }
}

export default Chatinput;
