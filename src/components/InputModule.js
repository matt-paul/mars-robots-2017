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
              Instructions:
              <textarea
                name="instructions"
                type="text"
                className="lg"
                value={props.input}
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
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};


export default styled(InputModule)`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  textarea {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    resize: none;
  }
`;
