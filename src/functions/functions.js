// @flow

type Robot = {
  instructions: Array<string>,
  orientation: string,
  x: number,
  y: number,
};


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

export const turnLeft = turn(leftMap);

const rightMap = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N',
};

export const turnRight = turn(rightMap);


export const interpretInstruction = (robot: Robot, index) => {
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

export const interpretInstructionArray = (robot: Robot, arrayLength: number, index: number) => {
  if (arrayLength <= 1) {
    return interpretInstruction(robot, index);
  }
  return interpretInstructionArray(interpretInstruction(robot, index), arrayLength - 1, index + 1);
};
