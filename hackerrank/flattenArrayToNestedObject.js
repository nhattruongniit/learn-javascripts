const array = [
  "animal/mammal/dog",
  "animal/mammal/cat/tiger",
  "animal/mammal/cat/lion",
  "animal/mammal/elephant",
  "animal/reptile",
  "plant/sunflower",
];
const output = {
  animal: {
    mammal: {
      dog: true,
      cat: {
        tiger: true,
        lion: true,
      },
      elephant: true,
    },
    reptile: true,
  },
  plant: {
    sunflower: true,
  },
};

function calculateNested(acc, curr) {
  const [head, ...tail] = curr;
  if (!tail.length) {
    acc[head] = true;
  } else {
    acc[head] = acc[head] ? acc[head] : {};
  }
  if (tail.length > 0) {
    calculateNested(acc[head], tail);
  }
  return acc;
}

function main() {
  return array
    .map((e) => e.split("/"))
    .reduce((acc, curr) => {
      return calculateNested(acc, curr);
    }, {});
}

const result = main();

console.log("Result: ", result);
