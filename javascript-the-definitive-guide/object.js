var scope = "global";
function f() {
  console.log(scope); // Prints "undefined", not "global"
  let scope = "local"; // Variable initialized here, but defined everywhere
  console.log(scope); // Prints "local"
}

f();
