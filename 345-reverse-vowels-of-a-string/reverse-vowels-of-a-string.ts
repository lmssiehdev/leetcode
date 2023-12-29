function reverseVowels(s: string): string {
    const vowels = new Set([
      ...['a', 'e', 'i', 'o', 'u'],
      ...['a', 'e', 'i', 'o', 'u'].map(t => t.toUpperCase())]);
      
    const array = Array.from(s);

    let startIdx = 0;
    let endIdx = array.length - 1;
    while ( startIdx < endIdx) {
      if (!vowels.has( array[startIdx] )) {
        ++startIdx;
        continue;
      } 
      if (!vowels.has( array[endIdx] )) {
        --endIdx;
        continue;
      }

      [array[startIdx], array[endIdx]] = [array[endIdx], array[startIdx]]

      ++startIdx;
      --endIdx;
    }

    return array.join("");
};