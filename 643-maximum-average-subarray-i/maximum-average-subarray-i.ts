function findMaxAverage(nums: number[], k: number): number {
    let max = Number.MIN_SAFE_INTEGER
    let start = 0;
    let currSum = 0;

    for ( let end = 0; end < nums.length; end++) {
      currSum += nums[end]
      if ( end - start + 1 >= k ) {
        max = Math.max(max, currSum / k)
        currSum -= nums[start]
        start++
      }
    }
    
    return max;
};