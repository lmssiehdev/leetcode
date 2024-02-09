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

function deepestLeavesSum(root: TreeNode | null): number {
    if (!root) return 0;
    const queue = [root]
    let lastSum = 0

    while ( queue.length ) {
      const level = queue.length;
      const levelValues = []
      for ( let i = 0; i < level; i++) {
        const node = queue.shift();
        levelValues.push(node.val)
        if ( node.left ) queue.push(node.left);
        if ( node.right ) queue.push(node.right); 
      }
      if ( queue.length === 0 ) {
        lastSum = levelValues.reduce((p, c) => p+c) 
      }
    }

    return lastSum;
};