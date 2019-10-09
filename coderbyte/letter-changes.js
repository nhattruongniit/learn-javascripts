/*

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Ex:
Input:"hello*3"
Output:Ifmmp*3

Input:"fun times!"
Output:gvO Ujnft!

*/

function letterChanges(str) {
  const lowerCase = str.trim().toLowerCase();
  const length = lowerCase.length;
  let newStr = "";

  for (let i = 0; i < length; i = i + 1) {
    console.log(str[i].charCodeAt(0));
    if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
      newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97);
    } else if (/[zdhnt]/.test(str[i])) {
      newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

const result = letterChanges("fun times!");

console.log("result: ", result);
