/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = []
    
    for ( let char of Array.from(s) ) {
      if ( char === "i" ) {
        result.reverse()
      } else {
        result.push(char)
      }
    }


    return result.join("")
};