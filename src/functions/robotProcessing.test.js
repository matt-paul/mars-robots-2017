import {
  moveForward,
  turnLeft,
  turnRight,
  interpretInstruction,
  interpretInstructionArray,
  setLostFlag,
  saveState,
  processRobot,
} from './robotProcessing';

describe('moving forward', () => {
  test('an invalid input returns the original robot', () => {
    const state = {
      orientation: 'This is definitely a wrong input! ;-)',
      x: 1,
      y: 1,
      history: [],
    };

    const nextState = {
      orientation: 'This is definitely a wrong input! ;-)',
      x: 1,
      y: 1,
      history: [],
    };

    const result = moveForward(state);
    expect(result).toEqual(nextState);
  });

  test('moving forward with a starting orientation of N', () => {
    const state = {
      orientation: 'N',
      x: 1,
      y: 1,
      history: [],
    };

    const nextState = {
      orientation: 'N',
      x: 1,
      y: 2,
      history: [],
    };

    const result = moveForward(state);
    expect(result).toEqual(nextState);
  });

  test('moving forward with a starting orientation of E', () => {
    const state = {
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'E',
      x: 2,
      y: 1,
    };

    const result = moveForward(state);
    expect(result).toEqual(nextState);
  });

  test('moving forward with a starting orientation of S', () => {
    const state = {
      orientation: 'S',
      x: 2,
      y: 2,
    };

    const nextState = {
      orientation: 'S',
      x: 2,
      y: 1,
    };

    const result = moveForward(state);
    expect(result).toEqual(nextState);
  });

  test('moving forward with a starting orientation of W', () => {
    const state = {
      orientation: 'W',
      x: 2,
      y: 2,
    };

    const nextState = {
      orientation: 'W',
      x: 1,
      y: 2,
    };

    const result = moveForward(state);
    expect(result).toEqual(nextState);
  });
});

describe('turning left', () => {
  test('turning left with a current orientation of N result in new orientation of W', () => {
    const state = {
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'W',
      x: 1,
      y: 1,
    };

    const result = turnLeft(state);
    expect(result).toEqual(nextState);
  });

  test('turning left with a current orientation of W result in new orientation of S', () => {
    const state = {
      orientation: 'W',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'S',
      x: 1,
      y: 1,
    };

    const result = turnLeft(state);
    expect(result).toEqual(nextState);
  });

  test('turning left with a current orientation of S result in new orientation of E', () => {
    const state = {
      orientation: 'S',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const result = turnLeft(state);
    expect(result).toEqual(nextState);
  });

  test('turning left with a current orientation of E result in new orientation of S', () => {
    const state = {
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const result = turnLeft(state);
    expect(result).toEqual(nextState);
  });
});

describe('turning right', () => {
  test('turning right with a current orientation of N result in new orientation of E', () => {
    const state = {
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const result = turnRight(state);
    expect(result).toEqual(nextState);
  });

  test('turning right with a current orientation of E result in new orientation of S', () => {
    const state = {
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'S',
      x: 1,
      y: 1,
    };

    const result = turnRight(state);
    expect(result).toEqual(nextState);
  });

  test('turning right with a current orientation of S result in new orientation of W', () => {
    const state = {
      orientation: 'S',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'W',
      x: 1,
      y: 1,
    };

    const result = turnRight(state);
    expect(result).toEqual(nextState);
  });

  test('turning right with a current orientation of W result in new orientation of N', () => {
    const state = {
      orientation: 'W',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const result = turnRight(state);
    expect(result).toEqual(nextState);
  });
});

describe('checking to see whether still on the planet', () => {
  test('changing flag to true if it has gone over the edge of X axis', () => {
    const state = {
      x: 3,
      marsX: 2,
      lost: false,
    };

    const nextState = {
      x: 3,
      marsX: 2,
      lost: true,
    };

    const result = setLostFlag(state);
    expect(result).toEqual(nextState);
  });

  test('changing flag to true if it has gone over the edge of Y axis', () => {
    const state = {
      y: 3,
      marsY: 2,
      lost: false,
    };

    const nextState = {
      y: 3,
      marsY: 2,
      lost: true,
    };

    const result = setLostFlag(state);
    expect(result).toEqual(nextState);
  });

  test('flag stays false if robot still on planet when comparing y axis', () => {
    const state = {
      y: 0,
      marsY: 2,
      lost: false,
    };

    const nextState = {
      y: 0,
      marsY: 2,
      lost: false,
    };

    const result = setLostFlag(state);
    expect(result).toEqual(nextState);
  });

  test('flag stays false if robot still on planet when comparing x axis', () => {
    const state = {
      x: 0,
      marsX: 2,
      lost: false,
    };

    const nextState = {
      x: 0,
      marsX: 2,
      lost: false,
    };

    const result = setLostFlag(state);
    expect(result).toEqual(nextState);
  });
});


describe('saving robot state to the history array', () => {
  test('the pastStates array is empty at start', () => {
    const state = {
      instructions: ['F'],
      orientation: 'N',
      x: 0,
      y: 0,
      marsX: 2,
      marsY: 2,
      lost: false,
      history: [],
    };

    expect(state.history).toEqual([]);
  });

  test('the previous state is added to the pastStates array when the nextState is calculated', () => {
    const state = {
      instructions: ['F'],
      orientation: 'N',
      x: 0,
      y: 0,
      marsX: 2,
      marsY: 2,
      lost: false,
      history: [{}],
    };

    const nextState = {
      instructions: ['F'],
      orientation: 'N',
      x: 0,
      y: 0,
      marsX: 2,
      marsY: 2,
      lost: false,
      history: [
        {},
        {
          instructions: ['F'],
          orientation: 'N',
          x: 0,
          y: 0,
          marsX: 2,
          marsY: 2,
          lost: false,
        },
      ],
    };

    const result = saveState(state);
    expect(result).toEqual(nextState);
  });
});

describe('interpreting a single instruction', () => {
  test('returns the original robot when an invalid instruction is given', () => {
    const state = {
      instructions: ['Woah'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['Woah'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const result = interpretInstruction(state, 0);
    expect(result).toEqual(nextState);
  });
  test('moves forward when instruction is F', () => {
    const state = {
      instructions: ['F'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['F'],
      orientation: 'N',
      x: 1,
      y: 2,
    };

    const result = interpretInstruction(state, 0);
    expect(result).toEqual(nextState);
  });

  test('turns left when instruction is L', () => {
    const state = {
      instructions: ['L'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['L'],
      orientation: 'W',
      x: 1,
      y: 1,
    };

    const result = interpretInstruction(state, 0);
    expect(result).toEqual(nextState);
  });

  test('turns right when instruction is R', () => {
    const state = {
      instructions: ['R'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['R'],
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const result = interpretInstruction(state, 0);
    expect(result).toEqual(nextState);
  });
});


describe('interpreting an array of instructions', () => {
  test('it moves forward two steps', () => {
    const state = {
      instructions: ['F', 'F'],
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['F', 'F'],
      orientation: 'N',
      x: 1,
      y: 3,
    };

    const numberOfInstructions = state.instructions.length;
    const result = interpretInstructionArray(state, numberOfInstructions);
    expect(result).toEqual(nextState);
  });

  test('turns right, then moves two steps east', () => {
    const state = {
      instructions: ['R', 'F', 'F'],
      orientation: 'N',
      x: 0,
      y: 0,
    };

    const nextState = {
      instructions: ['R', 'F', 'F'],
      orientation: 'E',
      x: 2,
      y: 0,
    };

    const numberOfInstructions = state.instructions.length;
    const result = interpretInstructionArray(state, numberOfInstructions);
    expect(result).toEqual(nextState);
  });

  test('it matches final coordinates of the first test case on project brief', () => {
    const state = {
      instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const nextState = {
      instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
      orientation: 'E',
      x: 1,
      y: 1,
    };

    const numberOfInstructions = state.instructions.length;
    const result = interpretInstructionArray(state, numberOfInstructions);
    expect(result).toEqual(nextState);
  });

  test('it matches final coordinates of the second test case on project brief', () => {
    const state = {
      instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
      orientation: 'N',
      x: 3,
      y: 2,
    };

    const nextState = {
      instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
      orientation: 'N',
      x: 3,
      y: 3,
    };

    const numberOfInstructions = state.instructions.length;
    const result = interpretInstructionArray(state, numberOfInstructions);
    expect(result).toEqual(nextState);
  });
});


describe('processing the robot', () => {
  test('should process the robot and return the new robot object', () => {
    const state = {
      instructions: ['F', 'F', 'F'],
      orientation: 'N',
      x: 0,
      y: 0,
      marsX: 2,
      marsY: 2,
      history: [],
      lost: false,
    };

    const newState = {
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

    const result = processRobot(state);
    expect(result).toEqual(newState);
  });
});
