function longestOnes(nums: number[], k: number): number {
    
  let result = 0;
  let start = 0;
  const count = [0, 0]
  for ( let end = 0; end < nums.length; end++) {
        if ( nums[end] === 0 ) count[0]++
    else count[1]++
    if ( count[0] > k ) {
      if ( nums[start] === 0 ) count[0]--
      else count[1]--
      start++;
    }


    result = Math.max(result, end - start +1)
  }
  return result;

};