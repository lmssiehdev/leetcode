function combinationSum3(k: number, n: number): number[][] {
  const result = [];
  function backtrack(slate, i, sum) {
    if (sum === n && slate.length === k) {
      result.push([...slate])
      return;
    }
  

    for (let j = i; j <= 9; j++) {
      
      if ( sum + j > n ) continue;
      
      slate.push(j)

      backtrack(slate, j + 1, sum + j );

      slate.pop();

    }

  } 

  backtrack([], 1, 0)

  return result;
}
