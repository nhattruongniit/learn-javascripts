const obj = {
  truong: {
    name: "book",
    type: "apply",
    status: "abc",
  },
  anh: {
    name: "pen",
    type: "ad",
    status: "abc",
  },
  huyet: {
    name: "pen",
    type: "ad",
    status: {
      dasd: "da",
    },
  },
};

const entries = Object.entries(obj);

entries.map(([value, name], _) => {
  // console.log(value[0], value[1]);
  console.log(value, name);
});
