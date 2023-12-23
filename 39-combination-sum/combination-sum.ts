function combinationSum(candidates: number[], target: number): number[][] {
  const result = [];

  function backtrack(slate, i, sum) {

    if ( sum === 0) {
      result.push([...slate]);
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      const curr = candidates[j]
      
      if (sum-curr < 0 || i > candidates.length) continue;

      slate.push(curr);
      backtrack(slate, j, sum - curr)
      slate.pop();
    }

  }

  backtrack([], 0, target);

  return result;
}