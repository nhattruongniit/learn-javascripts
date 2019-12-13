/* Practice -> Interview Preparation Kit -> Sorting -> Comparator */

const prices = [3, 7, 2, 9, 4].sort((a, b) => a - b);
const budget = 15;
const toys = [];

class Checker {
  constructor() {
    this.name = "";
    this.score = 0;
  }

  comparator(p1, p2) {
    if (p1.score === p2.score) {
      if (p1.name > p2.name) {
        return 1;
      }
    }
  }
}
