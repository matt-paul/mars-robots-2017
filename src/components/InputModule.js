// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  className: PropTypes.string.isRequired,
};

export default styled(InputModule)`
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
