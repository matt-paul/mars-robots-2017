// @flow
import _ from 'lodash-fp';
import type { Robot } from './types';

export const moveForward = (robot: Robot) => {
  switch (robot.orientation) {
    case 'N':
      return { ...robot, y: robot.y + 1 };
    case 'E':
      return { ...robot, x: robot.x + 1 };
    case 'S':
      return { ...robot, y: robot.y - 1 };
    case 'W':
      return { ...robot, x: robot.x - 1 };
    default:
      return robot;
  }
};

const turn = map => (robot: Robot) =>
  ({ ...robot, orientation: map[robot.orientation] });

const leftMap = {
  N: 'W',
  W: 'S',
  S: 'E',
  E: 'N',
};

const rightMap = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N',
};

export const turnLeft = turn(leftMap);
export const turnRight = turn(rightMap);


export const setLostFlag = (robot: Robot) => {
  const offXAxis = robot.x > robot.marsX;
  const offYAxis = robot.y > robot.marsY;
  // return offXAxis || offYAxis ? ({ ...robot, lost: true }) : robot;
  if (offXAxis || offYAxis ) {
    return ({ ...robot, lost: true })
  } else {
    return robot
  }
};

export const saveLastOnPlanetPostion = (robot: Robot) => {
  let newRobot;
  if(robot.lost === true) {
    const offXAxis = robot.x > robot.marsX;
    const offYAxis = robot.y > robot.marsY;
    newRobot = offYAxis ? ({ ...robot, lastCoordinates: [robot.x, robot.y - 1]}) :
     ({ ...robot, lastCoordinates: [robot.x -1, robot.y]})
  } else {
    newRobot = robot
  }
  return newRobot;
}


export const saveState = (robot: Robot) => {
  const robotToSave = {
    instructions: robot.instructions,
    orientation: robot.orientation,
    x: robot.x,
    y: robot.y,
    marsX: robot.marsX,
    marsY: robot.marsY,
    lost: robot.lost,
  };
  return { ...robot, history: [...robot.history, ...[robotToSave]] };
};


export const interpretInstruction = (robot: Robot, index: number) => {
  if (robot.hasOwnProperty('lastSeenCoordinates')) {
    return robot;
  }
  switch (robot.instructions[index]) {
    case 'F':
      return _.flowRight(saveState, saveLastOnPlanetPostion, setLostFlag, moveForward)(robot);
    case 'L':
      return _.flowRight(saveState, saveLastOnPlanetPostion, setLostFlag, turnLeft)(robot);
    case 'R':
      return _.flowRight(saveState, saveLastOnPlanetPostion, setLostFlag, turnRight)(robot);
    default:
      return robot;
  }
};


export const interpretInstructionArray = (robot: Robot, arrayLength: number, index: number = 0) => {
  if (arrayLength <= 1) {
    return interpretInstruction(robot, index);
  }
  return interpretInstructionArray(interpretInstruction(robot, index), arrayLength - 1, index + 1);
};


export const processRobot = (robot: Robot) => interpretInstructionArray(robot, robot.instructions.length);
