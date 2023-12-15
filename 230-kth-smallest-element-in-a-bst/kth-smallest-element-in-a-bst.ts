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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count=0;
  let result = Infinity;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    count++
    if (count === k) {
      result = node.val;
      return;
    }
    dfs(node.right);
  } 
  dfs(root)
  return result;

  // if (!root) return -1;
  // const stack = [];
  // let curr = root;
  // let count = 0;   
  // while ( curr || stack.length != 0 ) {
  //   while (curr) {
  //     stack.push(curr)
  //     curr = curr?.left;
  //   }
  //   const node = stack.pop();
  //   count++
  //   if (count === k) return node.val;
  //   curr = curr?.right;
  // } 
}