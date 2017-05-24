import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  createRobotObject,
  createRobotArray,
  processRobotArray,
} from '../functions/missionControl';

class InputModuleContainer extends Component {
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const instructionArray = this.state.input.instructions.split('')
    const inputData = {
      instructions: instructionArray,
      orientation: this.state.input.orientation,
      x: parseInt(this.state.input.x, 10),
      y: parseInt(this.state.input.y, 10),
      marsX: parseInt(this.state.input.marsX, 10),
      marsY: parseInt(this.state.input.marsY, 10),
    }
    const robotObject = createRobotObject(inputData);
    const tempRobotArray = [robotObject];
    const results = processRobotArray(tempRobotArray);
    console.log(results)
  }

  render() {
    return (
      <StyledInputModule
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

function InputModule(props) {
  return (
    <div className={props.className}>
      <h2>Input Module</h2>
      <form onSubmit={props.handleSubmit}>
        <div>
          <h3>Mars</h3>
          <div className="form-group">
            <label htmlFor="marsX">
              Mars X:
              <input
                name="marsX"
                type="number"
                className="sm"
                value={props.marsX}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="marsY">
              Mars Y:
              <input
                name="marsY"
                type="number"
                className="sm"
                value={props.marsY}
                onChange={props.handleChange}
              />
            </label>
          </div>
        </div>

        <div>
          <h3>Robot Data</h3>
          <div className="form-group">
            <label htmlFor="x">
              X:
              <input
                name="x"
                type="number"
                className="sm"
                value={props.x}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="y">
              Y:
              <input
                name="y"
                type="number"
                className="sm"
                value={props.y}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="orientation">
              Orientation:
              <input
                name="orientation"
                type="text"
                className="sm"
                value={props.orientation}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="instructions">
              Instructions:
              <input
                name="instructions"
                type="text"
                className="lg"
                value={props.instructions}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

InputModule.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  orientation: PropTypes.string,
  instructions: PropTypes.string,
  marsX: PropTypes.number,
  marsY: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const StyledInputModule = styled(InputModule)`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  .sm {
    width: 20px;
  }
  .lg {
    width: 60%;
  }
`;

export default InputModuleContainer;
