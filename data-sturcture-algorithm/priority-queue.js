function addPriorityQueue() {
  let items = [];
  this.add = function(name, priority) {
    let added = false;
    const element = {
      name,
      priority
    }
    for (let i = 0; i < items.length; i++) {
      console.log('=============element', element)
      if(element.priority < items[i].priority) {
        items.splice(i, 0, element);
        added = true;
        return;
      }
    }
    if(!added) {
      items.push(element);
    }
    this.print = function() {
      console.log(items);
    }
  }
}

let priorityQueue = new addPriorityQueue();
priorityQueue.add('David', 2);
priorityQueue.add('Obama', 1);
// priorityQueue.add('Trump', 4);
priorityQueue.print();


class A {
  constructor() {
    this.handleClick = () => {
      console.log('======handleClick===========')
    }
  }

  handleClick = () => {
    console.log('======handleClick===========')
  }
  handleLongClick() {
    console.log('======handleLongClicks===========')
  }
}

const result = new A();
result.handleClick();