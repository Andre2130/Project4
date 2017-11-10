import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"http://wethesauce.com/wp-content/uploads/2016/07/Sauce-Logo.png-Transparent-e1468192478677.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">Sauce Radio</h1>
        </header>
        <p className="App-intro">
          Artist Go here
        </p>
      </div>
    );
  }
}

export default App;
