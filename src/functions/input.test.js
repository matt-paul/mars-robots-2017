import { processInput } from './input';

describe('parsing and validating input', () => {
  test('creating robot object from supplied data', () => {
    const sampleInput = `
      53
      11E
      RFRFRFRF

      32N
      FRRFLLFFRRFLL

      03W
      LLFFFLFLFL

    `;

    const outputData = [
      {
        instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
        orientation: 'E',
        marsX: 5,
        marsY: 3,
        x: 1,
        y: 1,
        history: [],
        lost: false,
        lostRobots: [],
      },
      {
        instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
        orientation: 'N',
        marsX: 5,
        marsY: 3,
        x: 3,
        y: 2,
        history: [],
        lost: false,
        lostRobots: [],
      },
      {
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
        orientation: 'W',
        marsX: 5,
        marsY: 3,
        x: 0,
        y: 3,
        history: [],
        lost: false,
        lostRobots: [],
      },
    ];

    const result = processInput(sampleInput);
    expect(result).toEqual(outputData);
  });
});
