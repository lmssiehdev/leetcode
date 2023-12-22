function combinationSum3(k: number, n: number): number[][] {
    const result = [];

  function backtrack(slate, start, sum) {
    if (sum === n && slate.length === k) {
      result.push([...slate]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if ( sum + i > n ) {
        continue; 
      }

      slate.push(i);
      backtrack(slate, i + 1, sum + i);
      slate.pop();
    }
  }

    backtrack([], 1, 0)

    return result;
};


// use a recursive backtracking appraoch.
// use a set to keep track of seen numbers.
// iterate over k and recursively call the fn if
  // number doesn't exist in the set
  // count is less than K
  // add the number to a slate
  // call
  // remove it.
// return;