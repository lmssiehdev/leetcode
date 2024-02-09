function countAsterisks(s: string): number {
  let pipes = 0;
  let asterisks = 0;

  for ( const char of s ) {
    if ( char === "|" ) ++pipes
    if ( char === "*" && pipes % 2 === 0 ) ++asterisks
  }

  return asterisks;
  // const array = s.split("|").filter((s, i) => i % 2 === 0);
  // const shortString = array.join("")


  // return Array.from(shortString).reduce((count, char) => {
  //   if ( char == "*" ) ++count;
  //   return count;
  // }, 0);
};