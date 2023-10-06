const input = [
  { idd_name: "N3", value: 3 },
  { idd_name: "N4", value: 4 },
  { idd_name: "N5", value: 5 },
];

// Create an array of unique idd_names
const iddNames = [...new Set(input.map(item => item.idd_name))];

// Initialize an empty array to store the output
const output = [];

// Iterate over each item in the input array
input.forEach((item) => {
  const newItem = {};
  
  // Iterate over the unique idd_names
  iddNames.forEach((iddName) => {
    newItem[iddName] = item.value ;
  });
  
  output.push(newItem);
});

console.log(output);