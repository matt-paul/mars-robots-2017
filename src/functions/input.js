/* @flow */
import _ from 'lodash-fp';

export const processInput = (input: string) => {
  const [marsX, marsY] = input.trim()
                             .slice(0, 2)
                             .split('')
                             .map(Number);

  const robotData = input.trim()
                         .split('\n')
                         .filter(w => w !== '')
                         .slice(1)
                         .map(r => r.trim());

  const orientationXYArray = robotData.filter((x, index) => index % 2 === 0)
                                      .map(_.zipObject(['x', 'y', 'orientation']))
                                      .map(item => ({ ...item, y: parseInt(item.y, 10), x: parseInt(item.x, 10) }));

  const instructionArrays = robotData.filter((x, index) => index % 2 !== 0)
                                     .map(u => u.split(''));

  const otherObjectProperties = instructionArrays.map(item => ({
    ...{},
    instructions: item,
    marsX,
    marsY,
    history: [],
    lostRobots: [],
    lost: false,
  }));

  return _.merge(otherObjectProperties, orientationXYArray);
};
