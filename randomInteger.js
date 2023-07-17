function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const res = getRandomInt(20, String(Date.now()).slice(0, 5));
console.log('random: ', res)