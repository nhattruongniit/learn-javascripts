const nameMedia = "20230106_PCC2_C1_T1C_1200x628.jpg";
const productCode = "PCC2";

// write exact regex productCode
const regexProductCode = new RegExp(`(([?!_])(${productCode})([?!_]))`, "g");

const result = regexProductCode.test(nameMedia);

console.log("result: ", result);
