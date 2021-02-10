const input = [
  {
    linkId: "",
    linkType: null
  },
  {
    linkId: "",
    linkType: {
      id: 1,
      name: "khanh"
    }
  },
  {
    linkId: "truong",
    linkType: null
  },
  {
    linkId: "truong",
    linkType: {
      id: 1,
      name: "minh"
    }
  }
];

const output = input.some((item) => {
  return !((item.linkId && item.linkType) || (!item.linkId && !item.linkType));
});

console.log("res: ", output);
