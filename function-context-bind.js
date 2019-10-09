var mouse = {
  name: 'Mickey',
  sayHi: function() {
    console.log('Hi,: ', this.name)
  }
}

var cat = {
  name: 'Tom'
}

// mouse.sayHi();

var say = mouse.sayHi.bind(mouse); // say = function(){ console.log ... }
say();