function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatest = candies.reduce((prev, curr) => curr > prev ? curr : prev, 0);

  return candies.map((candiesCount) => {
    if ( candiesCount + extraCandies >= greatest) return true; 
    return false;
  })
};