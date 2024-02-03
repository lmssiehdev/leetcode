/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const array = Array.from(String(num), (v) => Number(v))
    const firstSixIdx = array.indexOf(6)
    if (firstSixIdx != -1) {
      array[firstSixIdx] = 9
    }
    return array.join("");
};