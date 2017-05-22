// @flow
import type { Robot, Data } from './types';
import { processRobot } from './functions';

export const splitText = (text: string) => {
  const lines = text.replace(/^\s+|\s+$/gm, '').split('\n');
  return lines[0];
};

export const createRobotObject = (data: Data) => ({ ...{ x: 0, y: 0, history: [], lost: false }, ...data });

export const createRobotArray = (array: Array<Data>) => array.map(createRobotObject);

export const processRobotArray = (array: Array<Robot>) => array.map(processRobot);
