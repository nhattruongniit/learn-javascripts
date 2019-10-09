/* ========= TRUTHY & FALSY ==============

1. The specific list of "falsy" values in Javascripts:

a. "" (empty string)
b. 0, -0, NaN (invalid number)
c. null, undefined
d. false


2. List "truthy":

a. "hello" (string)
b. 42 (number)
c. true (boolean)
d. [], [ 1, "2", 3] (arrays)
e. {}, { a: 42 } (objects)
f. function foo() { ... } (function)


3. Rules:

a. If either value (aka side) in a comparison could be the true or false, avoid == and use ===.
b. If either value in a comparison could be of these specific values (0, "", []), avoid == and use ===.
c. In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

=============== */

/* ========= INEQUALITY ==============

Operators: < , > , <= , >=

1. Typically they will be used with ordinally comparable values like number. It's easy to understand that 3 < 4.


2. JavaScript string values can also be compared for inequality, using typical alphabetic
rules ("bar" < "foo").

=============== */

/* ========= VARIABLES ==============

1. In javascript, variable names (including function names) must be valid identifiers.

=============== */
