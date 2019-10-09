let numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log('1', this);
    function calculate() {
      console.log('2');
      console.log('sum', this.numberA + this.numberB);
    }
    return calculate();
  }
};
numbers.sum();

var user = {
  tournament: 'The Masters',
  data: [{
      name: "Truong",
      age: 18
  }, {
      name: 'Minh',
      age: 18
  }],
  clickHandler: function() {
      var self = this;
      this.data.forEach(function(person) {
          console.log(person.name + " is playing at " + self.tournament)
      })
  }
}

user.clickHandler();

/*! bind ==================*/
var name = "Peter";
var HocSinh = {
  name: 'John',
  printName: function() {
      console.log(this.name);
  }
}

var printSv = HocSinh.printName.bind(HocSinh);
printSv();

/*! this in borrow method ==============*/
var gameController = {
  scores: [10, 15, 20],
  avgScore: null,
  players: [{
      name: 'Tommy',
      playerID: 987,
      age: 23
  }, {
      name: 'Jason',
      playerID: 412,
      age: 24
  }]
}

var appController = {
  scores: [30, 40, 50],
  avgScore: null,
  compterAvg: function() {
      var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
          return prev + cur
      });
      this.avgScore = sumOfScores / this.scores.length
  }
}

appController.compterAvg.apply(gameController);
console.log(gameController.avgScore);