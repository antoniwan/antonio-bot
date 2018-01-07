import React, { Component } from "react";
import "./App.css";
import Chatbox from "../components/Chatbox";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="">
          <header>
            <p>
              <span>To:</span> Antonio-bot
            </p>
          </header>
          <Chatbox />
        </div>
      </div>
    );
  }
}

export default App;
