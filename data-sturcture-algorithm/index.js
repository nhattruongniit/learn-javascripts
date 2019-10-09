/*

undefined = false
null      = false
boolean   = true is true and false is false
Number    = false for +0, -0, or NaN. Otherwise is true
String    = false if thhe string is empty. Otherwise is true.
Object    = always true

*/


var i = 0;
do {
  console.log(i);
  i++;
} while(i < 10);


/* TODO: FUNCTION ============================================= */

function Book(title, price) {
  this.title = title;
  this.price = price;

  // cach 1: tao 1 function
  this.printTitle = function() {
    console.log('printTitle', this.title);
  }
}

// cach 2: tao 1 function
// Book.prototype.printTitle = function() {
//   console.log('printTitle', this.title);
// }

var book = new Book('Dota2', '2000');

book.printTitle();

/* TODO: spread and rest operator =============================== */
function sum(a, b, c) {
  return a + b + c;
}
var params = [3, 4, 5];
console.log('spread and rest operator', sum(...params));