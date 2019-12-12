// Create queue

// Queue and Stack class are very similar, just the principles for adding and removing the elements are different
// follow the FIFO (First In First Out)

// SHIFT & UNSHIFT  = QUEUE DATA STRUCTURE

function Queue() {
  //properties and methods go here
  let items = [];

  // create enqueue(element(s)): this adds a new item(or several items) at the back of the queue
  this.enqueue = function(element) {
    items.push(element);
  };

  // dequeue(): this removes the first item from the queue
  this.dequeue = function() {
    return items.shift();
  };

  // front(): this returns the first element from the queue. The first one added, and will be removed from the queue.
  this.front = function() {
    return items[0];
  };

  // isEmpty(); this returns true if the queue doesn't contain any elements, and false if the queue is bigger than 0.
  this.isEmpty = function() {
    return items.length == 0;
  };

  // size(): this returns the number of elements the queue contains.
  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

// let queue = new Queue();
// console.log('start queue');
// console.log('the queue empty: ', queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// queue.enqueue('Camila');
// queue.print();
// console.log('stack size: ', queue.size());
// console.log('the queue empty: ', queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// queue.print();

// make game hot potato ================
function hotPotato(nameList, num) {
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    // console.log(eliminated + " was eliminated from the Hot Potato game.");
  }
  return queue.dequeue();
}

let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
let winner = hotPotato(names, 7);
console.log("Make game hotPotato: ", winner);
