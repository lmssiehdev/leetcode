function numberGame(nums: number[]): number[] {
  const result = [] 
  nums.sort((a, b) => a -b)
  while ( nums.length ) {
    const alice_draw = nums.shift()
    const bob_draw = nums.shift()

    result.push(bob_draw, alice_draw)
  }

  return result
};