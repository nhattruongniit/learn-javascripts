//  Ex1: Creating a new class (declaration form)
// =======================================================
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
    }
}

let polygon = new Polygon(300, 400);
console.log('I was created with a Class Declaration.');
polygon.sayName();
console.log('The width of this polygon is ' + polygon.width);

// Ex2: Creating a new class (expression-form)
// =======================================================
const MyPoly = class Poly {
    getPolyName() {
        console.log('Hi. I was created with a Class Express. My name is ' + Poly.name);
    };
};

let inst = new MyPoly();
inst.getPolyName();


// Ex3: Extend an exsting class
// =======================================================
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.area = value;
    }
}

let square = new Square(5);
square.sayName();
console.log('The area of this square is ' + square.area);


// Example 4: Subclassing methods of a parent class
// ===============================================================
class Rectangle extends  Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = 'Rectangle';
    }

    sayName() {
        console.log('Sup! My name is ', this.name + '.');
        super.sayHistory();
    }
}

let rectangle = new Rectangle(50, 60);
rectangle.sayName();

// Example 5: Defining static methods
// ===============================================================
// Classes support static members which can be accessed without an
// instance being present.

class Triple {
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends  Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}
console.log('Static method');
console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));