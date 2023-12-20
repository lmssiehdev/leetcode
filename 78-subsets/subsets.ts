
function subsets(nums: number[]): number[][] {
  const result = [[]];

  for (let num of nums) {
    const copy = result.map(n => [...n, num])

    result.push(...copy)
  }

  return result
};