function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    let count = 0
    for ( const num of nums ) {
      if (num === 0) {
        console.log("resetting", count)
        count = 0;
      } else count++ 
      max = Math.max(max, count);
    }
    return max
};