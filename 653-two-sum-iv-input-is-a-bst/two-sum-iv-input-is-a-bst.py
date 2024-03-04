# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
      seen = set()

      def traverse(node: Optional[TreeNode]):
        if not node:
          return False
        
        want = k - node.val

        if want in seen:
          return True

        seen.add(node.val)
        
        return traverse(node.left) or traverse(node.right)

      return traverse(root)
        