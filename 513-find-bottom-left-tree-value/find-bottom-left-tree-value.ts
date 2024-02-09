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

function findBottomLeftValue(root: TreeNode | null): number {
    if (!root) return null;
    const queue = [root];

    while ( queue.length ) {
      const level = queue.length;
      const nodesInLevel = []
      for ( let i = 0; i < level; i++ ) {
        const node = queue.shift();
        nodesInLevel.push(node.val)

        if ( node.left ) queue.push(node.left)
        if ( node.right ) queue.push(node.right)
      }
      if ( queue.length === 0 ) return nodesInLevel[0]
    }
    return null;
};