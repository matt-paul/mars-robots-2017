import {
  splitText,
  createRobotObject,
  createRobotArray,
  processRobotArray,
} from './missionControl';


describe('missionControl', () => {
  test('creating robot object from supplied data', () => {
    const data = {
      instructions: ['F', 'F', 'F'],
      orientation: 'N',
      marsX: 2,
      marsY: 2,
    };

    const robot = {
      instructions: ['F', 'F', 'F'],
      orientation: 'N',
      x: 0,
      y: 0,
      marsX: 2,
      marsY: 2,
      history: [],
      lost: false,
    };

    const result = createRobotObject(data);
    expect(result).toEqual(robot);
  });

  test('creating an array of robot objects from an array of data objects', () => {
    const data1 = {
      instructions: ['F', 'F', 'F'],
      orientation: 'N',
      marsX: 2,
      marsY: 2,
    };

    const data2 = {
      instructions: ['F', 'F', 'F'],
      orientation: 'N',
      marsX: 3,
      marsY: 3,
    };

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
      marsX: 3,
      marsY: 3,
      history: [],
      lost: false,
    };
    const result = createRobotArray([data1, data2]);
    expect(result).toEqual([robot1, robot2]);
  });
});


describe('processing an array of robots', () => {
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


describe('handling text input', () => {
  test('it should trim whitespace and split each line of text into an array', () => {
    const text = `
      53
      11E
      RFRFRFRF

      32N
      FRRFLLFFRRFLL
      03W
      LLFFFLFLFL
    `;

    const firstLine = splitText(text);
    expect(firstLine).toEqual('53');
  });
});
