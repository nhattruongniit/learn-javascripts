const  hi = name => console.log(`Hi ${name}`);
const greeting = name => hi('jacky');

greeting('john');

/* Pure function  understanding -----------------------*/
const xs = [1, 2, 3, 4, 5];

// slice : pure

xs.slice(0, 3) // 1 2 3

xs.slice(0, 3) // 1 2 3

// splice: impure

xs.splice(0, 3) // 1 2 3

xs.splice(0, 3) // 4 5

xs.splice(0, 3) // []

// impure
let minimun = 21; 
const checkAge = age => age >= minimun;
console.log('impure: ', checkAge(22));


//pure
const agePure = age => {
  const minimun = 21;
  return age >= minimun
}

console.log('pure: ', agePure(22));



/* imperative: viet ra tung` buoc tung buoc ---------------------------------------------------*/
const cars = [
  { make: 'BMW' },
  { make: 'Toyota' }
]
const makes = [];
for(let i = 0; i < cars.length; i++) {
  makes.push(cars[i].make)
}
console.log('imperative: ', makes)


/* declarative: viet ra bieu thuc ---------------------------------------------------*/
const makesDec = cars.map(car => car.make);
console.log('declarative: ', makes)
