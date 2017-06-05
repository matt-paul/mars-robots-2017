// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function OutputItem(props) {
  const { x, y, orientation, lost } = props;
  return (
    <div className={props.className}>
      <div className="lg">Robot {props.index + 1}:</div>
      <div className="sm">{x}</div>
      <div className="sm">{y}</div>
      <div className="sm">{orientation}</div>
      <div className="lost">{lost === true ? 'LOST' : ''}</div>
    </div>
  );
}


OutputItem.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  lost: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};


export default styled(OutputItem)`
    display: flex;
    background-color: white;
    .lg {
      width: 40%;
    }
    .sm {
      width: 10%;
    }
    .lost {
      color: red;
      margin-left: auto;
      margin-right: auto;
    }
`;
