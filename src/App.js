// @flow
import React, { Component } from 'react';
import InputModule from './components/InputModule';
import OutputModule from './components/OutputModule';
import type { Robot } from './functions/types';
import logo from './mars.svg';
import './App.css';

import processRobotArray from './functions/missionControl';
import processInput from './functions/input';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`,
      output: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    input: string,
    output: Array<Robot>,
  }

  handleChange(event: Event) {
    this.setState({
      input: event.target.value,
      output: [],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const robots = processInput(this.state.input);
    const results = processRobotArray(robots);

    this.setState({
      input: '',
      output: [...this.state.output, ...results],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mars Rover</h2>
        </div>
        <InputModule
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <OutputModule
          data={this.state.output}
        />
      </div>
    );
  }
}

export default App;
