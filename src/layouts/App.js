import React, { Component } from 'react';
import './App.css';
import Chatbox from '../components/Chatbox';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className="full_width_column">
          <h1>Meet Antonio bot!</h1>
          <Chatbox />
        </div>
      </div>
    );
  }
}

export default App;
