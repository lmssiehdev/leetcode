/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const negative = [];
  const positive = [];

  for (const num of nums) {
    let square = num ** 2;
    if (num < 0) {
      negative.unshift(square);
    } else {
      positive.push(square);
    }
  }

  const sorted = [];

  while (negative.length !== 0 || positive.length !== 0) {
    if (negative.length === 0) {
      sorted.push(...positive);
      break;
    }
    if (positive.length === 0) {
      sorted.push(...negative);
      break;
    }
    if (negative[0] < positive[0]) {
      sorted.push(negative.shift());
    } else {
      sorted.push(positive.shift());
    }
  }

  return sorted;
};
