class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
      minheap=[]
      count=0
      for num in nums:
        heapq.heappush(minheap, num)
        count += 1
        if count > k:
          heapq.heappop(minheap)
          count -= 1

      return minheap[0]
          