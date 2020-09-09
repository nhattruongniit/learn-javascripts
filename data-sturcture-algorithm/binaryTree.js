// https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-3om9

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

  search(data) {
    const searchNode = function (current) {
      if (current === null) return false;
      if (data < current.data) return searchNode(current.left);
      if (data > current.data) return searchNode(current.right);
      return true;
    };
    return searchNode(this.root);
  }

  remove(data) {
    const removeNode = function (current, data) {
      // if tree is empty
      if (current === null) return null;

      if (data < current.data) {
        current.left = removeNode(current.left, data);
      } else if (data > current.data) {
        current.right = removeNode(current.right, data);
      } else {
        if (current.left === null && current.right === null) return null;
        if (current.left === null) return current.right;
        if (current.right === null) return current.left;
        let replacement = current.left;
        let replacementParent = current;

        // find best replacement
        while (replacementParent.right !== null) {
          replacementParent = replacement;
          replacement = replacement.right;
        }
        current.data = replacementParent.data;
        current.left = removeNode(current.left, replacementParent.data);
      }
      return current;
    };
    this.root = removeNode(this.root, data);
  }

  toString() {
    return JSON.stringify(this.root);
  }
}

const tree = new BinaryNode();
tree.add(13);
tree.add(3);
tree.add(37);

console.log(tree.toString());
