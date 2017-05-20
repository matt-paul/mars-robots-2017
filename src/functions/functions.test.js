import {
  moveForward,
  turnLeft,
  turnRight,
  interpretIntruction,
} from './functions';

describe('moving forward', () => {
  test('moving forward with a starting orientation of N', () => {
    const state = {
      orientation: 'N',
      x: 1,
      y: 1,
    };

    const nextState = {
      orientation: 'N',
      x: 1,
      y: 2,
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

describe('interpreting a single instruction', () => {
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

    const result = interpretIntruction(state);
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

    const result = interpretIntruction(state);
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

    const result = interpretIntruction(state);
    expect(result).toEqual(nextState);
  });
});
