# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        min_heap = []
        def dfs(node: Optional[TreeNode]):
          if not node:
            return
          heappush(min_heap, -node.val)
          if len(min_heap) > k:
            heappop(min_heap)
          if not node.right == None:
            dfs(node.right)
          if not node.left == None:
            dfs(node.left)
          return
        
        dfs(root)
        return -min_heap[0]