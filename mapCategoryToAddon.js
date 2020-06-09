const _ = require("lodash");

const data = [
  {
    id: "d6e85248-031e-41ed-bbbf-a3a8fcc0d3a7",
    addOnName: "tony",
    current: {
      id: "38537db4-7f18-4f05-86bb-a5a2c055688a",
      data: {
        name: "Thang Addon",
        categories: ["electronic", "car", "bicycle", "book"],
        versionName: "0.1",
      },
    },
  },
  {
    id: "ed4d9c14-c979-467f-aa2c-bbd11d7c364b",
    addOnName: "tony-test-add-on",
    current: {
      id: "cbf90f7e-7964-4a37-9831-88a5b8fddf31",
      data: {
        name: "Thang Addon",
        categories: ["electronic", "car", "bicycle", "book", "sports"],
        versionName: "0.1",
      },
    },
  },
  {
    id: "eqergsdd-ceqet-qerq-fada-eqeq",
    addOnName: "david-test-add-on",
    current: {
      id: "cbf90f7e-7964-4a37-9831-88a5b8fddf31",
      data: {
        name: "Thang Addon",
        categories: ["car", "bicycle"],
        versionName: "0.1",
      },
    },
  },
];

const mergedCategories = [];
const listCategories = data.map((item) => item.current.data.categories);
const categories = [...new Set(mergedCategories.concat.apply([], listCategories))];
console.log('====unique categories===', categories);

// way 1
// const result = {};
// for (let item of data) {
//   item.current.data.categories.map(category => {
//     if (!result[category]) {
//       result[category] = [];
//     }
//     result[category].push(item);
//   });
// }
// const keys = Object.keys(result);
// console.log({
//   keys,
//   result
// });

// way 2
const result = {};
const keys = [];
for (let item of data) {
  item.current.data.categories.map(category => {
    if (!result[category]) {
      result[category] = [];
      keys.push(category);
    }
    result[category].push(item);
  });
}
console.log({
  keys,
  result
});

// way 3
// const result = {};
// const keys = [];
// for (let item of data) {
//   for (let i = 0; i < item.current.data.categories.length; i++) {
//     if (!result[item.current.data.categories[i]]) {
//       result[item.current.data.categories[i]] = [];
//       keys.push(item.current.data.categories[i]);
//     }
//     result[item.current.data.categories[i]].push(item);
//   }
// }
// console.log({
//   keys,
//   result
// });