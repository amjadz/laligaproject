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
      </div>
    );
  }
}

var API_KEY = 'ce44104936609112bb5779658006dc572e689f015289427d234f57e595bdc3f7';

var url = 'https://apifootball.com/api/?action=get_leagues&country_id=174&APIkey=' + API_KEY;


fetch(url)
  .then((response) => {
    return response.json();

  })
  .then((json => { 
    console.log(json);

  }))

export default App;
