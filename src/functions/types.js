// @flow

export type Robot = {
  instructions: Array<string>,
  orientation: string,
  x: number,
  y: number,
  marsX: number,
  marsY: number,
  history: Array<Robot>,
  lost: boolean,
};

export type Data = {
  instructions: Array<string>,
  orientation: string,
  marsX: number,
  marsY: number,
}
