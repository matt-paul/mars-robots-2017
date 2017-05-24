// @flow

import React, { Component } from 'react';
import uuidV1 from 'uuid/v1';
import InputModule from './components/InputModule';
import OutputModule from './components/OutputModule';
import logo from './logo.svg';
import './App.css';

import {
  createRobotObject,
  createRobotArray,
  processRobotArray,
} from './functions/missionControl';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        marsX: '',
        marsY: '',
        x: '',
        y: '',
        orientation: '',
        instructions: '',
      },
      output: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: Event) {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const instructionArray = this.state.input.instructions.split('');
    const inputData = {
      instructions: instructionArray,
      orientation: this.state.input.orientation,
      x: parseInt(this.state.input.x, 10),
      y: parseInt(this.state.input.y, 10),
      marsX: parseInt(this.state.input.marsX, 10),
      marsY: parseInt(this.state.input.marsY, 10),
      uuid: uuidV1(),
    };
    const robotObject = createRobotObject(inputData);
    const tempRobotArray = [robotObject];
    const results = processRobotArray(tempRobotArray);

    this.setState({
      ...this.state,
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
