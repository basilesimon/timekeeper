import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timekeeper from './Timekeeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">timekeeper</h1>
        </header>

        <Timekeeper />
      </div>
    );
  }
}

export default App;
