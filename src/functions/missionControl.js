// @flow

import type { Robot, Data } from './types';
import {
  saveState,
  interpretInstructionArray,
  setLostFlag,
} from './functions';

export const splitText = (text: string) => {
  const lines = text.replace(/^\s+|\s+$/gm, '').split('\n');
  return lines[0];
};

export const createRobotObject = (data: Data) => ({ ...{ x: 0, y: 0, history: [], lost: false }, ...data });

export const createRobotArray = (array: Array<Data>) => array.map(createRobotObject);

// A points free way of doing this would be nice to implement
export const processRobot = (robot: Robot) => {
  const instructedRobot = interpretInstructionArray(robot, robot.instructions.length);
  const lostFlagSet = setLostFlag(instructedRobot);
  const historyAdded = saveState(lostFlagSet);
  return historyAdded;
};

export const processRobotArray = (array: Array<Robot>) => array.map(processRobot);
