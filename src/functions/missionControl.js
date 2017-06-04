// @flow
import type { Robot } from './types';
import { processRobot } from './robotProcessing';

export const processRobotArray = (array: Array<Robot>) => {
  const lostRobots = [];
  const newArray = array.map((item) => {
    const robot = processRobot(item, lostRobots);
    if (robot.hasOwnProperty('lastCoordinates') && robot.lost === true) {
      lostRobots.push(robot.lastCoordinates);
    }
    return robot;
  });
  return newArray;
};
