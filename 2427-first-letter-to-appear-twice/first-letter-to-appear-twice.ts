function repeatedCharacter(s: string): string {
  const map = new Set()

  for ( const char of s) {
    if ( map.has(char) ) return char;
    else map.add(char)
  }  
  return "false"
};