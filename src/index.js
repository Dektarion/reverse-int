module.exports = function reverse (n) {
  let nString = n.toString();
  let i = 0;
  let result = "";

  while (i < nString.length) {
    result = `${nString[i]}${result}`;
    i++;
  }
  return Math.abs(parseInt(result));
};
