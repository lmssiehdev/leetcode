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
function leftHeight(node): number {
  if (!node) return 0;
   return leftHeight(node.left) + 1;
}
function rightHeight(node): number {
  if (!node) return 0;
   return rightHeight(node.right) + 1;
}

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    function traverse(node) {

      const lh = leftHeight(node);
      const rh = rightHeight(node)

      if ( lh === rh ) { return Math.pow( 2, lh) - 1 }

      return countNodes(node.left) + countNodes(node.right) + 1
    }
    return traverse(root)

};