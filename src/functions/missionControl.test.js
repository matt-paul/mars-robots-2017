import {
  processRobotArray,
} from './missionControl';

test('processing an array of robots', () => {
  const robot1 = {
    instructions: ['F', 'F', 'F'],
    orientation: 'N',
    x: 0,
    y: 0,
    marsX: 2,
    marsY: 2,
    history: [],
    lost: false,
  };

  const robot2 = {
    instructions: ['F', 'F', 'F'],
    orientation: 'N',
    x: 0,
    y: 0,
    marsX: 2,
    marsY: 2,
    history: [],
    lost: false,
  };

  const newRobot1 = {
    instructions: ['F', 'F', 'F'],
    orientation: 'N',
    x: 0,
    y: 3,
    marsX: 2,
    marsY: 2,
    history: [
      {
        instructions: ['F', 'F', 'F'],
        orientation: 'N',
        x: 0,
        y: 3,
        lost: true,
        marsX: 2,
        marsY: 2,
      },
    ],
    lost: true,
  };

  const newRobot2 = {
    instructions: ['F', 'F', 'F'],
    orientation: 'N',
    x: 0,
    y: 3,
    marsX: 2,
    marsY: 2,
    history: [
      {
        instructions: ['F', 'F', 'F'],
        orientation: 'N',
        x: 0,
        y: 3,
        lost: true,
        marsX: 2,
        marsY: 2,
      },
    ],
    lost: true,
  };

  const robotArray = processRobotArray([robot1, robot2]);
  expect(robotArray).toEqual([newRobot1, newRobot2]);
});
