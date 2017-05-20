export const splitText = text => {
  const lines = text.replace(/^\s+|\s+$/gm, '').split('\n');
  return lines[0];
};
