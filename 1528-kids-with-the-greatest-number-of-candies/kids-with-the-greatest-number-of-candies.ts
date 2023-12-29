function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatest = Math.max(...candies);

  return candies.map((candiesCount) => (candiesCount + extraCandies >= greatest))
  }