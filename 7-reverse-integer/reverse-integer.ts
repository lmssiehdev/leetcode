function reverse(x: number): number {
  const isNegative = x < 0;
  if ( isNegative ) x = -x

  const result = Number(x.toString().split("").reverse().join(""));

  if (result > 2**31 - 1) {
    return 0;
  }
  return isNegative ? -result : result
};