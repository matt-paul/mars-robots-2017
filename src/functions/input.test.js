import {
  processInput,
  validateInstructionsLength,
  validateXYCoordinates,
  validateMarsCoordinates,
} from './input';

describe('parsing and validating input', () => {
  test('creating robot object from supplied data', () => {
    const sampleInput = `
      5 3
      1 1 E
      RFRFRFRF

      3 2 N
      FRRFLLFFRRFLL

      0 3 W
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


  test('should validate and return true as all instructions are less than maximum length', () => {
    const robots = [
      {
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
      {
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
    ];

    const result = validateInstructionsLength(robots);
    expect(result).toEqual(true);
  });


  test('should validate and return false as some instructinos are more than maximum length', () => {
    const robots = [
      {
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
      {
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
    ];

    const result = validateInstructionsLength(robots);
    expect(result).toEqual(false);
  });


  test('should validate and return true for x and y coordinates that are no greater than 50', () => {
    const validRobots = [{ x: 1, y: 1 }, { x: 50, y: 1 }];
    const result = validateXYCoordinates(validRobots);
    expect(result).toEqual(true);
  });

  test('should validate and return false for x and y coordinates that are no greater than 50', () => {
    const invalidRobots = [{ x: 1, y: 1 }, { x: 55, y: 1 }];
    const result = validateXYCoordinates(invalidRobots);
    expect(result).toEqual(false);
  });

  test('should validate and return true for marsX and marsY coordinates that are no greater than 50', () => {
    const validRobots = [{ marsX: 1, marsY: 1 }, { marsX: 50, marsY: 1 }];
    const result = validateMarsCoordinates(validRobots);
    expect(result).toEqual(true);
  });

  test('should validate and return false for x and y coordinates that are no greater than 50', () => {
    const invalidRobots = [{ marsX: 1, marsY: 1 }, { marsX: 55, marsY: 1 }];
    const result = validateMarsCoordinates(invalidRobots);
    expect(result).toEqual(false);
  });
});
