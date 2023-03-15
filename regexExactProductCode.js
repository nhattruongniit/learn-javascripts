const nameMedia = "tony-123_PCC2_800x800.png.jpg";
const productCode = "PCC2";

// write exact regex productCode
const regexProductCode = new RegExp(`(([?!_])(${productCode})([?!_]))`, "g");

const result = regexProductCode.test(nameMedia);

console.log("result: ", result);
