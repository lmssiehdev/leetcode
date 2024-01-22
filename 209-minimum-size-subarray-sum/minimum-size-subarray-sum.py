class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_length = float('inf')
        curr_sum = 0
        windowStart = 0
        
        for windowEnd in range(len(nums)):
          curr_sum += nums[windowEnd]
          while curr_sum >= target:
            min_length = min(min_length, windowEnd - windowStart + 1)
            curr_sum -= nums[windowStart]
            windowStart += 1
        return 0 if min_length == float("inf") else min_length 