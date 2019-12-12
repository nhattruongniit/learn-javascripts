function PriorityQueue() {
  let items = [];
  let added = false;
  this.enqueue = function(name, priority) {
    let person = {
      name,
      priority
    };
    for (let i = 0; i < items.length; i++) {
      if (person.priority < items[i].priority) {
        items.splice(i, 0, person);
        added = true;
        return;
      }
    }
    if (!added) {
      items.push(person);
    }
  };
  this.print = function() {
    console.log(items);
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("tony", 3);
priorityQueue.enqueue("david", 1);
priorityQueue.enqueue("anton", 0);
priorityQueue.print();
