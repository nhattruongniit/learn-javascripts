// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var preorderTraversal = function (root) {
  const res = [];
  function traverse(node) {
    if (node === null) return;
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return res;
};
