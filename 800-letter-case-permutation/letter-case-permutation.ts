

function letterCasePermutation(s: string): string[] {
  const result = [];
  const letterArray = "abcdefghijklmnopqrstuvwxyz"
  let letterSet = new Set([...Array.from(letterArray),...Array.from(letterArray.toUpperCase())]);

  function backtrack(slate, idx) {
    if (idx === s.length) {
      result.push(slate)
      return;
    }

    const curr = s[idx];

    backtrack(slate + curr.toLowerCase(), idx + 1)

    if (letterSet.has(curr)) {
      backtrack(slate + curr.toUpperCase(), idx + 1)
    }
  } 

  backtrack("", 0)


  return result;  
};

//                [a1b2]
//    [a]                         [A]
//    [a1]                        [A1]
// [a1b] [a1B]                  [A1b] [A1B]