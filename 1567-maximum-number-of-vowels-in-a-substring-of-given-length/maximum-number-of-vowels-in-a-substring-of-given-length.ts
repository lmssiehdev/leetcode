function maxVowels(s: string, k: number): number {
    const vowels = new Set('aeiou'.split(""))
    let max = Number.MIN_SAFE_INTEGER;
    let numOfVowels = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
      if ( vowels.has(s[end])) ++numOfVowels
      if ( end - start +1 >= k) {
        max = Math.max(max, numOfVowels)
      
        if ( vowels.has(s[start]) ) --numOfVowels
        ++start;
      }
    }
    return max;
};