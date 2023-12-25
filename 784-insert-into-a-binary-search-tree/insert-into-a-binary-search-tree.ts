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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);
  let prev = null;
  let curr = root;

  while ( curr ) {
    prev = curr;

    if (val > curr.val) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
    if ( !curr ) {
      const node = new TreeNode(val);
      if ( val > prev.val ) {
        prev.right = node;
      } else {
        prev.left = node;
      }
    }
  } 

  return root;

};  
