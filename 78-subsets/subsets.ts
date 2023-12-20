
function subsets(nums: number[]): number[][] {
  const result = []

  function dfs(nums, slate, idx) {
    // base
    if ( idx === nums.length) {
      result.push([...slate]);
      return;
    }

    // exclude
    dfs(nums, slate, idx + 1)

    // include
    slate.push(nums[idx]);
    dfs(nums, slate, idx + 1)
    slate.pop();
  }

  dfs(nums, [], 0)

  return result
};