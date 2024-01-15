class SmallestInfiniteSet:

    def __init__(self):
        self.current_num = 1
        self.small_set = set()
        self.min_heap = []

    def popSmallest(self) -> int:
      if self.min_heap:
          removed_value = heappop(self.min_heap)
          self.small_set.remove(removed_value)
          return removed_value
      else:
          smallest_num = self.current_num
          self.current_num += 1
          return smallest_num

    def addBack(self, num: int) -> None:
        if num < self.current_num and num not in self.small_set:
            self.small_set.add(num)
            heappush(self.min_heap, num)


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)