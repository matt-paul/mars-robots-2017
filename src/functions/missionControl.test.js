import {
  splitText,
  processRobot,
} from './missionControl';


describe('missionControl', () => {
  test('should interpret instructions, set lost flag and save state', () => {
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
        }
      ],
      lost: true,
    };

    const result = processRobot(state);
    expect(result).toEqual(newState);
  });
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
