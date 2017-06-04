// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function OutputItem(props) {
  const { x, y, orientation, lost } = props;
  return (
    <div className={props.className}>
      <div>Robot 1:</div>
      <div>{x}</div>
      <div>{y}</div>
      <div>{orientation}</div>
      <div>{lost === true ? 'LOST' : 'ALIVE'}</div>
    </div>
  );
}


OutputItem.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  lost: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};


export default styled(OutputItem)`
    display: flex;
    justify-content: space-around;
`;
