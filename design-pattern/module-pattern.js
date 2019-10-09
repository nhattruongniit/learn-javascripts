

/* MODULE PATTERN -----------------------------------------*/
var counterModule = (function() {
  var count = 0;
  return {
    incrementCounter: function() {
      count++;
      console.log(count);
    },
    resetCounter: function(){
      console.log('counter value prior to reset: ' + count);
      count = 0;
    }
  }
})();

console.log('counter module: ', counterModule.count);

var myNamespace = (function() {
  var myPrivateVar = 0;
  var myPrivateMethod = function(someText) {
    console.log(someText);
  };
  return {
    myPublicVar: 'foo',
    myPublicFunction: function(myPrivateVar) {
      myPrivateVar++;
      myPrivateMethod(myPrivateVar);
    }
  }
})();

myNamespace.myPublicFunction(2);

var basketModule = (function () {
  var basket = []; //private
  function doSomethingPrivate() {
    //...
  }
  function doSomethingElsePrivate() {
    //...
  }
  return { //exposed to public
    addItem: function (values) {
      basket.push(values);
    },
    getItemCount: function () {
      return basket.length;
    },
    doSomething: doSomethingPrivate(),
    getTotal: function () {
      var q = this.getItemCount(),
      p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  }
}());
basketModule.addItem({
  item: 'bread',
  price: 0.5
});
basketModule.addItem({
  item: 'butter',
  price: 0.3
})


var somModule = (function() {
  //private attribute
  var privateVar = 5;
  
  // private methods
  var privateMethods = function() {
    return 'Private Test';
  };

  return {
    publicVar: 10,
    publicMethod: function() {
      return 'Followed By Public Test'
    },
    
    // let's access the private memmbers
    getData: function() {
      return privateMethods() + this.publicMethod() + privateVar;
    }
  }
})()

console.log(somModule.getData())