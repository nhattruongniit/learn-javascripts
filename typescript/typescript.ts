class Greeter {
    constructor(message) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter('Typescript');
console.log(greeter.greet());

class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} moved +  ${distance}`);
    };
};

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance) {
        super.move(distance);
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name);
    }

    move(distance) {
        super.move(distance);
    };
}

const dog = new Dog('Dog');
dog.move(20);

const snake = new Snake('Snake');
snake.move(10);

/*! Variable Declaration ========================================*/
console.log('/*! Variable Declaration ========================================*/')

function f() {
    var a = 10;

    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();

console.log(g());

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, 100 * i)
}

function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    console.log(sum);
    return sum;
}
var aaraa = ['1', '2', '3'];
sumMatrix(aaraa);