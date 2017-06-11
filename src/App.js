// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputModule from './components/InputModule';
import OutputModule from './components/OutputModule';
import type { Robot } from './functions/types';
import logo from './mars.svg';
import './App.css';

import processRobotArray from './functions/missionControl';

import {
  processInput,
  validateInstructionsLength,
  validateRobotArrayInstructionChars,
  validateMarsCoordinates,
  validateXYCoordinates,
} from './functions/input';


class AppContainer extends Component {
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
      error: {
        instructionLength: false,
        instructionChars: false,
        marsXY: false,
        xy: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    input: string,
    output: Array<Robot>,
    error: {
      instructionLength: boolean,
      instructionChars: boolean,
      marsXY: boolean,
      xy: boolean,
    }
  }

  handleChange(event: Event) {
    this.setState({
      input: event.target.value,
      output: [],
      error: {
        instructionLength: false,
        marsXY: false,
        xy: false,
      },
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const robots = processInput(this.state.input);

    if (!validateInstructionsLength(robots)) {
      this.setState({
        error: { ...this.state.error, instructionLength: true },
      });
      return;
    }

    if (!validateMarsCoordinates(robots)) {
      this.setState({
        error: { ...this.state.error, marsXY: true },
      });
      return;
    }

    if (!validateXYCoordinates(robots)) {
      this.setState({
        error: { ...this.state.error, xy: true },
      });
      return;
    }

    if (!validateRobotArrayInstructionChars(robots)) {
      this.setState({
        error: { ...this.state.error, instructionChars: true },
      });
      return;
    }

    const results = processRobotArray(robots);

    this.setState({
      input: '',
      output: [...this.state.output, ...results],
    });
  }

  render() {
    return (
      <App
        input={this.state.input}
        output={this.state.output}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Martian Robots</h2>
      </div>
      <InputModule
        input={props.input}
        error={props.error}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
      <OutputModule
        data={props.output}
      />
    </div>
  );
}

App.propTypes = {
  input: PropTypes.string,
  output: PropTypes.array,
  error: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default AppContainer;
