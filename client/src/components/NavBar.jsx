import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                <Link to="/">
          <img src={"http://wethesauce.com/wp-content/uploads/2016/07/Sauce-Logo.png-Transparent-e1468192478677.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">Sauce Radio</h1>
          </Link>
        </header>
            </div>
        );
    }
}

export default NavBar;


