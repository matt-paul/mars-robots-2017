// @flow

import type { Robot } from './types';
import {
  saveState,
  interpretInstructionArray,
  setLostFlag,
} from './functions';

export const splitText = (text: string) => {
  const lines = text.replace(/^\s+|\s+$/gm, '').split('\n');
  return lines[0];
};

// A points free way of doing this would be nice to implement
export const processRobot = (robot: Robot) => {
  const instructedRobot = interpretInstructionArray(robot, robot.instructions.length);
  const lostFlagSet = setLostFlag(instructedRobot);
  const historyAdded = saveState(lostFlagSet);
  return historyAdded;
};
