// Create  array
let way1 = [];
let way2 = [1, 2, 3, 4, 5];
let way3 = new Array();
let way4 = new Array(1, 2, 3, 4, 5);

// Verify that an object is an array by calling the Array.isArray();
console.log("is array: ", Array.isArray(way1));

// accessing & writing array
let numbers = [];
let total = 1;
for (let i = 0; i < 10; i = i + 1) {
  numbers[i] = i + 1;
}

for (let j = 0; j < numbers.length; j = j + 1) {
  total *= numbers[j];
}
console.log("accessing & writing array: ", numbers);
console.log("total: ", total);

// create array from strings
let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");

console.log("=== create array from strings ===");
for (let i = 0; i < words.length; i = i + 1) {
  console.log(`word ${i} ${words[i]}`);
}

/*  ==== shallow copy array

- when you assign one array to another array, you are assigning a reference to the assigned array.

- when you make a change to original array, that changes is reflected in the other array as well.

*/
let shallow1 = [];
for (let i = 0; i < 10; i = i + 1) {
  shallow1[i] = i + 1;
}
let shallow2 = shallow1;
shallow1[0] = 400;
console.log("shallow copy array: ", shallow2[0]);

/*  ==== deep copy

- Each of the original array's elements is actually copied to the new array's elements.

*/
function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; i = i + 1) {
    arr2[i] = arr1[i];
  }
}
let deep1 = [];
let deep2 = [];
for (let i = 0; i < 10; i = i + 1) {
  deep1[i] = i + 1;
}

copy(deep1, deep2);
deep1[0] = 400;
console.log("deep copy array: ", deep2[0]);

// indexOf()
let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
let position = names.indexOf("Raymond");

console.log("indexOf array: ", position);

// create new array from exist array. Use: concat(), splice()
var itDiv = ["Mike", "Clayton", "Cynthia", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3, 3);
var cisDept = itDiv;
console.log("splice array: ", dmpDept);

// adding & removing element from array
let adds = [1, 2, 3, 7, 8];
let newAdds = [4, 5, 6];
adds.splice(3, 0, ...newAdds);
console.log("add array: ", adds);
