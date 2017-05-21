// @flow
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
  return offXAxis || offYAxis ? ({ ...robot, lost: true }) : robot;
};

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
  switch (robot.instructions[index]) {
    case 'F':
      return moveForward(robot);
    case 'L':
      return turnLeft(robot);
    case 'R':
      return turnRight(robot);
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
