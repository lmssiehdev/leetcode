# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
      if root is None:
        return []
      result = []
      q = deque([root])
      while q:
        level = []
        levelLen = len(q)
        for i in range(levelLen):
          node = q.popleft()
          level.append(node.val)
          if node.left:
            q.append(node.left)
          if node.right:
            q.append(node.right)
        result.append(level)
      result.reverse()
      return result