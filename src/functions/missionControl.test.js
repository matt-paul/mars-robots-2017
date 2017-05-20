import {
  splitText,
} from './missionControl';

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
  })

})
