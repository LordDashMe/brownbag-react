import React, { Component } from 'react';
import Header from './../Header/Header';
import Content from './../Content/Content';
import './App.css';

class App extends Component {
  
  computeAdd(value1, value2) {
    return value1 + value2;
  }

  computeBool() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Content />
      </div>
    );
  }
}

export default App;