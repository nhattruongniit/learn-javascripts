var triple = function(x) {
  return x * 3;
}

var waffle = triple;

var result = waffle(30);

console.log(result);  

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

/* normal function */
var dogs = [];
for(var i = 0; i < animals.length; i++) {
  if(animals[i].species == 'dog') {
    dogs.push(animals[i])
  }
}
console.log('normal function: ', dogs);

/* avdance function */
var isDog = function(animal) {
  return animal.species === 'dog';
};
var isCat = function(animal) {
  return animal.species === 'cat';
};
var dogsAdvance = animals.filter(isDog);
var catAdvance = animals.filter(isCat);
console.log('advance function dogs: ', dogsAdvance);
console.log('advance function cat: ', catAdvance);
