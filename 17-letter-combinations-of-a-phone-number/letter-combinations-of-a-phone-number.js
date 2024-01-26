/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if ( digits.length === 0 ) return []
  const result = []
  const keyboard = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  const backtrack = (slate, idx) => {
    if (slate.length === digits.length) {
      result.push([...slate].join(""))
      return;
    }
    const key = keyboard[digits[idx]];
    for (let i = 0; i < key.length; i++) {
      slate.push(key[i])
      backtrack(slate, idx+1)
      slate.pop()
    }
  }

  backtrack([], 0)

  return result;
};