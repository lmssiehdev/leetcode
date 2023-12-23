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

function letterCombinations(digits: string): string[] {
  const result = [];

  function backtrack (string, idx) {
    if (idx === digits.length && string.length != 0 ) {
      result.push(string)
      return;
    }

    const letters = keyboard[digits[idx]] ?? 0;

    for (let i = 0; i < letters.length; i++) {
      backtrack(string + letters[i], idx + 1)
    } 
  }


  backtrack("", 0) 

  return result;  
};


/*
 2 3
 i
  j
                          []
                  [a]   [b]   [c]

[ad] [ae] [af]         [bd , be, bf]        

*/