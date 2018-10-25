import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends Component {
    render() {
      return (
        <header className="App-header">
            <h1>Famous People</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
      );
    }
  }
  
  export default Header;





