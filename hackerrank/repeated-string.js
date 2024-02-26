// input = aba
// output = abaa

function repeatedString(input) {
  const memory = {};
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!memory[char]) {
      result += char;
      memory[char] = 1;
    } else {
      for (let j = 0; j < memory[char] + 1; j++) {
        result += char;
      }
      memory[char] += 1;
    }
  }
  return result;
}

const result = repeatedString("aba");

console.log("repeatedString: ", result);
