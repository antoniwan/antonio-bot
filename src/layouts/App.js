import React, { Component } from 'react';
import './App.css';
import Chatbox from '../components/Chatbox';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className="full_width_column">
          <h1>Meet Antonio!</h1>
          <p>He enjoys helping you.</p>
          <Chatbox />
        </div>
      </div>
    );
  }
}

export default App;
