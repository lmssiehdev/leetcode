function removeDuplicates(nums: number[]): number {
    const map = {}
    let lastSorted = 0;
    
    for ( let i = 0; i < nums.length; i++ ) {
      if ( map[nums[i]] >= 2 ) continue;
      if ( map[nums[i]] == undefined ) map[nums[i]] = 1
      else map[nums[i]]++
      [nums[i], nums[lastSorted]] = [nums[lastSorted], nums[i]]
      ++lastSorted;
    }
    return lastSorted;
};