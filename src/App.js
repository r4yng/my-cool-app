import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import CountryList from './components/CountryList';

class App extends Component {

  componentWillMount() {
    this.setState({loading: true});
    // const getFakeMembers = count => axios.get(`https://api.randomuser.me/?nat=US&results=${count}`)
    //   .then(response => response.data.results)
    
    // getFakeMembers(2).then(members => console.log(members));
    const getCountries = () => axios.get(`https://restcountries.eu/rest/v1/all`)
    .then(response => response.data);
    
    getCountries().then(countries => {
      this.setState({countries, loading: false})
      //this.states = {};
      //this.states = {countries};
    });
    //getCountries().then(countries => console.log(countries));
  }

  render() {
    const { countries, loading} = this.state;
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
        <CountryList countries={countries} />
      </div>
    );
  }
}

export default App;
