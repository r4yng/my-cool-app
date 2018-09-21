import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

class App extends Component {

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     //this.setState({ persons });
    //     console.log(persons);
    //   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header></Header>
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
