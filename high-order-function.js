var triple = function(x) {
  return x * 3;
}

var waffle = triple;

var result = waffle(30);

console.log(result);  

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

/* hof function */
const isDog = function(animal) {
  return animal.species === 'dog';
};
const isCat = function(animal) {
  return animal.species === 'cat';
};
const dogsAdvance = animals.filter(isDog);
const catAdvance = animals.filter(isCat);
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

const isMale = (grade) => grade.sex == 'M';
const isFemale = (grade) => grade.sex == "F";
const getBoys = (dataSource = []) => dataSource.filter(isMale);
const getGirls = (dataSource = []) => dataSource.filter(isFemale);
const menGrades = grades.filter(isMale);
const womenGrades = grades.filter(isFemale);

const average = (dataSource = []) => dataSource.reduce((acc, curr) => {
  return acc + curr.grade;
}, 0) / grades.length;

const maxGradesCommon = (dataSource = []) => dataSource.reduce((acc, curr) => {
  return acc.grade > curr.grade ? acc : curr;
}, {} )

const minGradesCommon = (dataSource = []) => dataSource.reduce((acc, curr) => {
  return acc.grade < curr.grade ? acc : curr;
}, {} )

// tính trung binh
const averageGrades = average(grades)

// trung bình nam trong lớp 
const averageMenGrades = average(getBoys(grades));

// trung bình nữ trong lớp 
const averageWomenGrades = average(womenGrades);

// cao nhất lớp
const maxGrades = maxGradesCommon(grades);

// cao nhất nam trong lớp
const maxMenGrades = maxGradesCommon(menGrades)

// cao nhất nữ trong lớp
const maxWomenGrades = maxGradesCommon(womenGrades)

// thấp nhất nam trong lớp
const minMenGrades = minGradesCommon(menGrades)

 // thấp nhất nữ trong lớp
const minWomenGrades = minGradesCommon(womenGrades)

// thấp nhất lớp
const minGrade = minGradesCommon(grades);

console.log('class: ', {
  averageGrades,
  maxGrades,
  minGrade,
  averageMenGrades,
  averageWomenGrades,
  maxMenGrades,
  minWomenGrades,
  minMenGrades
})

const maxGrade = grades => Math.max(...grades.map(student => student.grade))
