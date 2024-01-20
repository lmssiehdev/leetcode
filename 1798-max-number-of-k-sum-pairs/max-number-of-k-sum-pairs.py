class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        sorted_nums = sorted(nums)
        idx = 0
        start = 0
        end = len(nums) - 1
        count = 0
        while start < end:
          if sorted_nums[end] > k or sorted_nums[start] + sorted_nums[end] > k:
            end = end-1
            continue
          if ( sorted_nums[start] + sorted_nums[end] == k ):
            count = count+1
            end = end-1
            start = start+1
            continue
          start += 1
        return count
          
