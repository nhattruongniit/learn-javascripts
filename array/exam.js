/* !Test1: Find 10 number maxium in array = [1, 2, 3, 4, 5, ... , 100] ---------------- */
var arrayA = [0, 1, 2, 3, 4, 100, 40, 50, 33, 52, 13, 14, 15, 16, 17, 18, 19];

arrayA.sort(function(a, b) {
    return a - b
})
console.log('Test1: Find 10 number maxium in array');
console.log('Array ascending: ', arrayA);
console.log('Array reverse:', arrayA.reverse());
console.log('Result: ', arrayA.slice(0, 10));

/* !Test2 ---------------------
A = [1,2,3,5,6,7,8];
B = [1,3,6,4,8,9,10]
Hãy in ra 1 mảng chứa các số của 2 mảng A va B, và chi xuat hien 1 lan
---------------- */
var findA = [1, 2, 3, 5, 6, 7, 8];
var findB = [1, 3, 6, 4, 8, 9, 10];
var newConcat = findA.concat(findB);
var objConcat = {};
for (var i = 0; i < newConcat.length; i++) {
    objConcat[newConcat[i]] = null;
}
console.log('Test2: Hãy in ra 1 mảng chứa các số của 2 mảng A va B, và chi xuat hien 1 lan');
console.log(newConcat);
console.log(Object.keys(objConcat))

/* !Test3 ---------------------
A = [1,2,3,4,5,6,7,8,9,10];
Hãy in ra số / hết cho 3 or các số chia hết cho 5 
---------------- */
var filterA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Test3:  Hãy in ra số / hết cho 3 or các số chia hết cho 5 ');
filterA.forEach(function(value) {
    if (!(value % 3 && value % 5)) {
        console.log(value)
    }
});

/* !Test4 ---------------------
A = [1,2,3];
Hãy in ra các phần tử trong mảng sau mỗi giây
---------------- */
var loopA = [1, 2, 3];

console.log('Test4: Hãy in ra các phần tử trong mảng sau mỗi giây. Không dùng setInterval');

function loopFunc() {
    var item = loopA.shift();

    if (item) {
        console.log(item);
        setTimeout(() => {
            loopFunc()
        }, 1000);
    } else {
        console.log('end');
    }
}
setTimeout(() => {
    loopFunc()
}, 1000);

/* !Map and Filter ---------------------  */

const arrPerson = [{
    id: 1,
    name: 'John'
}, {
    id: 2,
    name: 'Truong'
}, {
    id: 3,
    name: 'Minh'
}];

var getPerson = arrPerson.map(ele => ele.id).filter(id => id >= 2);

console.log('Map and Filter: ', getPerson);


 /* Delete 1 phần tử trong array -------------*/
// if(this.items[index] === item) {
//     this.items.splice(index, 1)
// } else {1
//     const found = this.items.indexOf(item);
//     this.items.splice(found, 1);
// }

/* Add 1 key : value on object in array --------------*/
console.log('Add 1 key : value on object in array');
let newArrKey = [];
let arrKey = [
    { message: 'test' },
    { message: 'test' },
    { message: 'test' },
]
arrKey.map((value, key) => {
    value.type = 'New';
    newArrKey.push(value)
})
console.log(newArrKey)


/* Add 1 key : Merge 2 array to 1 array--------------*/
let name = ['thang', 'hai', 'quang'];
let age = [20, 22, 21];
let mergeArr = [];

for(let i = 0; i < name.length; i++) {
    mergeArr.push({
        name: name[i],
        age: age[i]
    })
}
console.log('Merge 2 array to 1 array', mergeArr)