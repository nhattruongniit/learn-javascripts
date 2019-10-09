// arrow function
// fat arrow

function sum(a, b) {
  console.log(a + b)
}

var sum2 = function (a, b) {
  console.log(a + b)
}

sum2(1, 2);


var sum3 = (a, b) => {
  console.log(a + b)
}

sum3(5, 8);

var arr = [1, 2, 3];

var newArr = arr.map(x => x*x);

console.log(newArr);

/* === sự khác nhau function expression and arrow function */

console.log('sự khác nhau function expression and arrow function');

var func = {
  name: 'aaa',
  run: function() {
    var run2 = function() {
      console.log(this.name)
    }
    run2.bind(this)();
  },
  runArrow: function() {
    var run2 = () => {
      console.log(this.name)
    }
    run2();
  }
}

func.run();
func.runArrow();


var demo2 = {
  foo: 'bar',
  run: function() {
    //cach 1
    setTimeout(function() {
      console.log('cach 1: ', this.foo)
    }.bind(this), 2000)

    //cach 2
    setTimeout(function() {
      console.log('cach 2: ', this.foo)
    }.bind(demo2), 2000)

    //cach 3
    var that = this;
    setTimeout(function() {
      console.log('cach 3: ', that.foo)
    }, 2000)

    //cach 4
    setTimeout(() => {
      console.log('cach 4: ', this.foo)
    }, 2000)
  }
}

demo2.run();


// Sự khác nhau giữa Function thông thường và Arrow Function
// Function thông thường
let regularObj = function() {
  this.name = 'An Vu';
  return {
    name: 'John',
    getName: function() {
      // this sẽ bị ghi đè vì this lúc này thuộc về Obj được trả về
      return this.name;
    }
  };
}
console.log('regularObj: ' + regularObj().getName());

// Arrow Function
let arrowObj = function() {
  this.name = 'An Vu';
  return {
    name: 'John',
    getName: () => {
      // this này không bị ghi đè bởi Obj mà vẫn giữ được this của hàm cha
      return this.name;
    }
  };
}
console.log('arrowObj: ' + arrowObj().getName());

// Arrow Function thường được dùng trên Class
class Person {
  constructor() {
    this.name = 'An Vu';
    this.age = 30;
    const getName = () => {
      console.log(`Name: ${this.name}`);
    }
    getName();

    const getAge = function() {
      // this ở function thường trong class sẽ là undefined
      try {
        console.log('Age: ' + this.age);
      } catch (ex) {
        console.log('This của Age: ' + typeof this);
      }
    }
    getAge();

    // Cách để sử dụng function thường bên trong
    let getAgeBinding = function() {
      // this ở function này đã bị ghi đè bởi this của class
      console.log('Age: ' + this.age);
    }
    getAgeBinding = getAgeBinding.bind(this);
    getAgeBinding();
  }

  getInfo() {
    console.log(`Info: ${this.name} (${this.age})`);
  }
}

let person = new Person().getInfo();