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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return dfs(nums, 0, nums.length -1 )
  function dfs(nums: number[], left: number, right: number) {
    if ( left > right ) return null;
    const middle = Math.floor(( left + right ) / 2);
    const root = new TreeNode(nums[middle]);

    root.left = dfs(nums, left, middle - 1);
    root.right = dfs(nums, middle + 1, right);

    return root;
  }
  
};