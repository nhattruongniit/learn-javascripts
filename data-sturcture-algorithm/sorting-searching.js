class ArrayList {
  constructor() {
    this.array = [];
  }

  insert(item) {
    this.array.push(item);
  }

  toString() {
    return this.array.join();
  }

  createArray(size) {
    const newArray = new ArrayList();
    for (let i = 0; i < size; i++) {
      newArray.insert(i);
    }
    return newArray;
  }

  // bubble sort
  bubbleSort() {
    const length = this.array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.array[j] > this.array[i]) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
        }
      }
    }
    return this.array;
  }
}

const array = new ArrayList();

array.insert(4);
array.insert(1);
array.insert(2);
array.insert(3);
array.insert(5);

const newSortArray = array.bubbleSort();

console.log(newSortArray);
