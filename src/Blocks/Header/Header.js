import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-header-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;