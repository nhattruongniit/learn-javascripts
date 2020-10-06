// https://medium.com/@kavitmht/javascript-coding-problem-binary-tree-level-order-traversal-d6b6ed6b2242
// input: [3, 9, 20, 15, 7]
// output: [[3], [9,20], [15,7]]

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryNode {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = new Node(data);

    if (this.root == null) {
      this.root = node;
    } else {
      const searchNode = function (current) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            return searchNode(current.left);
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            return searchNode(current.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(this.root);
    }
  }

  toString() {
    return JSON.stringify(this.root);
  }
}

const tree = new BinaryNode();
tree.add(3);
tree.add(9);
tree.add(20);
tree.add(15);
tree.add(7);

console.log(tree);
