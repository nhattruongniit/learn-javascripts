class BTS {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }

  insert(val) {
    if (val < this.val && !this.left) {
      this.left = new BTS(val);
    } else if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val > this.val && !this.right) {
      this.right = new BTS(val);
    } else if (val > this.val && this.right) {
      this.right.insert(val);
    }
  }

  search(element) {
    if (element === this.val) return true;
    if (element < this.val && this.left) return this.left.search(element);
    if (element > this.val && this.right) return this.right.search(element);

    return false;
  }
}

const rootNode = new BTS(10);

rootNode.insert(8);

rootNode.insert(11);

console.log(rootNode);
console.log(rootNode.search(8));
