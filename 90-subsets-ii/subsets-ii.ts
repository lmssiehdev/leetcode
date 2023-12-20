function subsetsWithDup(nums: number[]): number[][] {
  const sorted = nums.sort((a,b) => b-a)
  const result = [];


  function dfs(slate, idx) {
    if (idx === sorted.length) {
      result.push([...slate])
      return;
    }

    // exclude
    dfs(slate, idx + 1);

    
    // include
    slate.push(sorted[idx])
    dfs(slate, idx + 1);
    slate.pop();
  }

  dfs([], 0)

  let map = {}
  for (let item of result) {
    if (map[item]) continue;
    else map[item] = item;
  }

  return Object.values(map);
};