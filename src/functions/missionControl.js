// @flow
import type { Robot } from './types';
import { processRobot } from './robotProcessing';

export const processRobotArray = (array: Array<Robot>) => array.map(processRobot);
