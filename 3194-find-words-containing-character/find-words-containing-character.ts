function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((prev, curr, idx) => {
      if ( curr.includes(x) ) {
        prev.push(idx)
      }
      return prev;
    }, []) as number[]
};