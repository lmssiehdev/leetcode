function countAsterisks(s: string): number {
    const array = s.split("|").filter((s, i) => i % 2 === 0);
    const shortString = array.join("")


    return Array.from(shortString).reduce((count, char) => {
      if ( char == "*" ) ++count;
      return count;
    }, 0);
};