function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatest = Math.max(...candies);

  return candies.map((candiesCount) => {
    if ( candiesCount + extraCandies >= greatest) return true; 
    return false;
  })
};