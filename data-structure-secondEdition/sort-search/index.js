const input = [5, 3, 7, 2, 9, 1, 8]

function ArrayList() {
  const array = [];

  this.insert = function(item) {
    array.push(item)
  }

  this.toString = function() {
    return array
  }
}

const array = new ArrayList();

array.insert(1);

const res = array.toString();
console.log(res);