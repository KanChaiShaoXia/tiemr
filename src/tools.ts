/* eslint-disable import/prefer-default-export */

export const sTom = num => {
  if (num === 0) return num;
  const m = ~~(num / 60);
  const s = m >= 1 ? num - m * 60 : num;
  let result =
    s !== 0 ? `${m}:${String(s).length === 1 ? "0" + s : s}` : `${m}:00`;
  return result;
};
