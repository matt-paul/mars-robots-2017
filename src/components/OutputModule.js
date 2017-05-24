import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function OutputModule(props) {
  return (
    <div className={props.className}>
      <h2>Output Module</h2>
      <h3>Final Destinations</h3>
      <div className="robot-item">
        <div>Robot 1:</div>
        <div>X</div>
        <div>Y</div>
        <div>Orientation</div>
        <div>LOST</div>
      </div>
    </div>
  );
}

export default styled(OutputModule)`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  .robot-item {
    display: flex;
    justify-content: space-around;
  }
`;
