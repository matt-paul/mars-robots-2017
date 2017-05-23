import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class InputModuleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marsX: '',
      marsY: '',
      x: '',
      y: '',
      orientation: '',
      instructions: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,

    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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
      <form onSubmit={props.handleSubmit}>
        <div>

          <div className="form-group">
            <label htmlFor="marsX">
              Mars X:
              <input
                name="marsX"
                type="number"
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
                value={props.marsY}
                onChange={props.handleChange} />
            </label>
          </div>
        </div>

        <div>
          <div className="form-group">
            <label htmlFor="x">
              X:
              <input
                name="x"
                type="number"
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
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const StyledInputModule = styled(InputModule)`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

export default InputModuleContainer;
