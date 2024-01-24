function wordPattern(pattern: string, s: string): boolean {
    const fp = pattern.split("");
    const fs = s.split(" ")
    if ( fp.length != fs.length ) return false;
    const map = {}
    const seenWords = new Set()
    for ( let i = 0; i < fs.length; i++ ) {
      const word = fs[i];

      if ( !map[fp[i]] ) {
        if ( seenWords.has(word) ) return false;
        seenWords.add(word)
        map[fp[i]] = word;
        continue;
      }

      if ( map[fp[i]] !== word ) return false; 
    }
    

  return true;
};