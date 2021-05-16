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


/* ========== grade ======= 
Tìm thứ hạng trung bình của cả lớp 
Tìm thứ hạng trung bình của nam trong lớp 
Tìm thứ hạng trung bình của Nữ trong lớp 
Tìm thứ hạng cao nhất của Nam trong lớp 
Tìm thứ hạng cao nhất của Nữ trong lớp
 Tìm thứ hạng thấp nhất của Nam trong lớp 
Tìm thứ hạng thấp nhất của Nữ trong lớp 
Tìm thứ hạng cao nhất của cả lớp 
Tìm thứ hạng thấp nhất của cả lớp
*/
const grades = [
  {name: 'John', grade: 8, sex: 'M'},
  {name: 'Sarah', grade: 12, sex: 'F'},
  {name: 'Bob', grade: 16, sex: 'M'},
  {name: 'Johnny', grade: 2, sex: 'M'},
  {name: 'Ethan', grade: 4, sex: 'M'},
  {name: 'Paula', grade: 18, sex: 'F'},
  {name: 'Donald', grade: 5, sex: 'M'},
  {name: 'Jennifer', grade: 13, sex: 'F'},
  {name: 'Courtney', grade: 15, sex: 'F'},
  {name: 'Jane', grade: 9, sex: 'F'}
];

const isMale = student => student.sex === 'M';
const isFemale = student => student.sex = 'F';

const getMales = grades => grades.filter(isMale);
const getFemales = grades => grades.filter(isFemale);

const averageLesson = grades => {
  return grades.reduce((acc, curr) => {
    acc + curr.grade
  }, 0) / grades.length;
}

const maxGrade = grades => Math.max(...grades.map(student => student.grade))