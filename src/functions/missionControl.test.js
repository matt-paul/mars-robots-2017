import processRobotArray from './missionControl';

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


  const newRobotArray = [
    {
      history: [
        {
          instructions: ['F', 'F', 'F'],
          lost: false,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 1,
        },
        {
          instructions: ['F', 'F', 'F'],
          lost: false,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 2,
        },
        {
          instructions: ['F', 'F', 'F'],
          lost: true,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 3,
        },
      ],
      instructions: ['F', 'F', 'F'],
      lastCoordinates: [0, 2],
      lost: true,
      lostRobots: [[0, 2]],
      marsX: 2,
      marsY: 2,
      orientation: 'N',
      x: 0,
      y: 3,
    },
    {
      history: [
        {
          instructions: ['F', 'F', 'F'],
          lost: false,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 1,
        },
        {
          instructions: ['F', 'F', 'F'],
          lost: false,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 2,
        },
        {
          instructions: ['F', 'F', 'F'],
          lost: false,
          marsX: 2,
          marsY: 2,
          orientation: 'N',
          x: 0,
          y: 2,
        },
      ],
      instructions: ['F', 'F', 'F'],
      lost: false,
      lostRobots: [[0, 2]],
      marsX: 2,
      marsY: 2,
      orientation: 'N',
      x: 0,
      y: 2,
    },
  ];

  const robotArray = processRobotArray([robot1, robot2]);
  expect(robotArray).toEqual(newRobotArray);
});
