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
