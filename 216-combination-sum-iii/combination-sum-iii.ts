function combinationSum3(k: number, n: number): number[][] {
  const result = [];
  const seen = new Set();

  function backtrack(slate, i, sum) {
    if (sum === n && slate.length === k) {
      result.push([...slate])
      return;
    }
  

    for (let j = i; j <= 9; j++) {
      
      if (seen.has(j)) continue;
      if ( sum + j > n ) continue;
      
      seen.add(j)
      slate.push(j)

      backtrack(slate, j + 1, sum + j );

      slate.pop();
      seen.delete(j)

    }

  } 

  backtrack([], 1, 0)

  return result;
}
