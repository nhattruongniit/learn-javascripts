console.log('########### Singleton Pattern #################')

var mySingleton = function () {
  // here are our private methods and variables
  var privateVariable = 'something private';
  function showPrivate() {
    console.log('privateVariable: ', privateVariable);
  }

  //public variable and methods (which can accss private variable and method)
  return {
    publicMethod: function () {
      showPrivate();
    },
    publicVar: 'the public can see this!'
  }
}
var single = mySingleton();
single.publicMethod();
console.log(single.publicVar);


var mySingleton2 = (function () {
  var instantiated;

  function init() {
    //singleton here
    return {
      publicMethod: function () {
        console.log('hello word');
      },
      publicProperty: 'test'
    }
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated
    }
  }
})();
console.log(mySingleton2.getInstance().publicProperty);
mySingleton2.getInstance().publicMethod();

var singletonTester = (function () {

  //options: a object containing configuration options for the singleton
  // e.g var options = { name: 'test', pointX: 5 };
  function Singleton(options) {
    options = options || {};
    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  //this is our instance holder
  var instance;

  // this is an emulation of static variables and methods
  var _static = {
    name: 'SingletonTester',
    // This is a method for getting an instance
    // It returns a singleton instance of a singleton object
    getInstance: function (options) {
      if (instance === undefined) {
        instance = new Singleton(options)
      }
      return instance;
    }
  };
  return _static;
})()

var singletonTest = singletonTester.getInstance({
  pointX: 5
})
console.log(singletonTest.pointX);