// create linked list

function LinkedList() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = element => {
    const node = new Node(element);
    let current = "";

    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  this.insert = (position, element) => {};
  this.removeAt = position => {
    //check for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head;
      let previous = "";
      let index = 0;

      // removing first item
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  this.remove = element => {};
  this.indexOf = element => {};
  this.isEmpty = () => {};
  this.size = () => {};
  this.toString = () => {};
  this.print = () => {
    return head;
  };
}

const trains = new LinkedList();
trains.append(15);
trains.append(10);
trains.append(20);
console.log(trains.print());
