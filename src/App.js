import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the LaLiga app</h1>

      </div>
  
    );
  }
}





var APP_KEY = '7EHgp9slgdmshElkA44faMEYFkcNp13wIVujsnW6VgtMGIfly4'
var url = 'https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga/table'

var headers = new Headers();
headers.append('X-Mashape-Key', APP_KEY);

var request = new Request(url, {
  method: 'GET',
  headers: headers,
  mode: 'cors'
})


fetch(request)
  .then((response) => {
    return response.json();

  })
  .then((json => { 
    console.log(json)
    this.setState({
      team: json.records[1].team
    });

  }))
  // .catch((error ) => {
  //   window.alert("An error has occoured");


  // });

export default App;
