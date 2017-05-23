// @flow

import React, { Component } from 'react';
import InputModuleContainer from './components/InputModule';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mars Rover</h2>
        </div>
        <InputModuleContainer />
      </div>
    );
  }
}

export default App;
