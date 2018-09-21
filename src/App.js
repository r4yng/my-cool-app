import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <small>Code: {process.env.REACT_APP_SECRET_CODE}</small>
        <p>Copyright {Date().toString()}</p>
      </div>
    );
  }
}

export default App;
