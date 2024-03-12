function maxSubArray(nums: number[]): number {
  if ( nums.length === 0 ) return 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let currSum = 0;

  while ( end < nums.length ) {

    while ( currSum < 0 && start < end ) {
      currSum -= nums[start];
      start++
    }

    currSum+=nums[end]
    maxSum = Math.max(currSum, maxSum)
    
    ++end;
  }  
  return maxSum;
};