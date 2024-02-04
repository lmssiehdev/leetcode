/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {}

    for ( const num of nums ) {
      if ( !map[num] ) map[num]=1
      else map[num]++

      if ( map[num] === 3 ) delete map[num]
    }

    return Object.keys(map)[0]
};