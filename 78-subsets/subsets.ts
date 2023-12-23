
function subsets(nums: number[]): number[][] {
  const result = []

  function backtrack(slate, idx) {
    if ( idx === nums.length) {
      result.push([...slate])
      return;
    }
    // exclude
    backtrack(slate, idx + 1);

    // include
    slate.push(nums[idx])
    backtrack(slate, idx + 1);
    slate.pop()
  }

  backtrack([], 0)

  return result;
};