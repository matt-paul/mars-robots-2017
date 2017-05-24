// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OutputItem from './OutputItem';

function OutputModule(props) {
  return (
    <div className={props.className}>
      <h2>Output Module</h2>
      <h3>Final Destinations</h3>
      <div>
        {
          props.data.map(robot => <OutputItem key={robot.uuid} {...robot} />)
        }
      </div>
    </div>
  );
}

OutputModule.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,

};

export default styled(OutputModule)`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;
