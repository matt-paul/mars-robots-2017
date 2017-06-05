// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}


InputModule.propTypes = {
  input: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  className: PropTypes.string.isRequired,
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
    height: 160px;
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
