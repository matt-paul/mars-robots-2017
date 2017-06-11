// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  errorMessageInstructions,
  errorMessageInstructionChars,
  errorMessageXY,
  errorMessageMars,
} from './errorMessages';


function InputModule(props) {
  return (
    <div className={props.className}>
      <h2>Input Module</h2>
      <form onSubmit={props.handleSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="instructions">
              <textarea
                placeholder="Please place mission details here"
                name="instructions"
                type="text"
                className="lg"
                value={props.input}
                onChange={props.handleChange}
              />
            </label>
          </div>

          <div className="submit-container">
            <input
              type="submit"
              value="Launch"
            />
          </div>
        </div>
      </form>
      <p>{props.error.instructionLength ? errorMessageInstructions : ''}</p>
      <p>{props.error.xy ? errorMessageXY : ''}</p>
      <p>{props.error.marsXY ? errorMessageMars : ''}</p>
      <p>{props.error.instructionChars ? errorMessageInstructionChars : ''}</p>
    </div>
  );
}


InputModule.propTypes = {
  input: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  className: PropTypes.string.isRequired,
  error: PropTypes.shape({
    instructionLength: PropTypes.bool,
    xy: PropTypes.bool,
    marsXY: PropTypes.bool,
  }),
};

InputModule.defaultProps = {
  input: '',
};


export default styled(InputModule)`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  * {
    border: 1px solid white;
  }
  textarea {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    resize: none;
  }
  input {
    margin-left: auto;
    margin-right: auto;
    background: white;
  }
  .submit-container {
    display: flex;
  }
`;
