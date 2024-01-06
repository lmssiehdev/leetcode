/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */



function isValidBST(
  node: TreeNode | null,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
): boolean {
  if (!node) return true;

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return isValidBST(node.left, min, node.val) &&  isValidBST(node.right, node.val, max) 
}; 






