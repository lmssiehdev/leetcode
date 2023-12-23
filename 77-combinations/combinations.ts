function combine(n: number, k: number): number[][] {
    
  const result = [];


  function backtrack(slate, count) {
    if ( count === k ) {
      result.push([...slate])
      return;
    }
    for ( let i = (slate[slate.length - 1] ?? 0); i < n; i++ ) {
      slate.push(i + 1);
      backtrack(slate, count + 1)
      slate.pop()
    }
  }

  backtrack([], 0)


  return result;
};


//                  []
// [1]          [2]            [3]       [4]
// [1, 2]       [2, 1]


// if (slate.lenth === k) {
// push a copy of slate into the result array; return;  
// }
// 
// for (over n) {
//  .pop()
// }   slate.push(i)
//     backtrack(slate, i + 1 )
//     slate