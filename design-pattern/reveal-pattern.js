

/* MODULE PATTERN -----------------------------------------*/

var myReveal =  (function() {
  var name = "John Smith";
  var age = 40;
  function updatePerson() {
    name = "John Smith updated"
  }
  function setPerson() {
    name = "John Smith set"
  }
  function getPerson() {
    return name;
  };
  return  {
    set: setPerson,
    get: getPerson
  }
})()
console.log('Reveal pattern: ', myReveal.get());
