/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

 function maxDepth(root: Node | null): number {
   if (!root) return null;

  let max = 0;

  for (let node of root.children) {
    max = Math.max(max, maxDepth(node))
  } 

  return max + 1
 }

// function maxDepth(root: Node | null): number {
//     if ( !root ) return 0;
//     let depth = 0;

//     const queue: Node[] = [root];

//     while ( queue.length ) {
//       const level = queue.length;
      
//       for ( let i = 0; i < level; i++ ) {
//         const node = queue.shift();
//         queue.push(...node.children)
//       }

//       ++depth;
//     }


//     return depth;
// };