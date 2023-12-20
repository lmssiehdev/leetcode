function permute(nums: number[]): number[][] {
  const result = [];

  function dfs(idx) {
    if ( idx === nums.length - 1) {
      result.push([...nums])
      return;
    }

    for (let j = idx; j < nums.length; j++) {
      [nums[idx], nums[j]] = [nums[j], nums[idx]]; // swap elements
      dfs(idx + 1);
      [nums[idx], nums[j]] = [nums[j], nums[idx]];
    }
  }

  dfs( 0)
  
  return result
};