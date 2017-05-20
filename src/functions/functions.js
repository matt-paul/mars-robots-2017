// @flow

type Robot = {
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
