console.log('########### Constructor Pattern #################')

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  // this.toString = function() {
  //   return this.model + " has done " + this.miles + " miles in " + this.year;
  // }
}
Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles in " + this.year;
}
var civic =  new Car("Honda Civic", 2009, 20000)
console.log(civic.toString())