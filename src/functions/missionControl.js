// @flow

import {
  saveState,
  interpretInstructionArray,
  setLostFlag,
} from './functions';

export const splitText = (text) => {
  const lines = text.replace(/^\s+|\s+$/gm, '').split('\n');
  return lines[0];
};

//A points free way of doing this would be nice to implement
export const processRobot = (robot) => {
  const length = robot.instructions.length;
  const instructedRobot = interpretInstructionArray(robot, length, 0);
  const lostFlagSet = setLostFlag(instructedRobot);
  const historyAdded = saveState(lostFlagSet);
  return historyAdded;
};
