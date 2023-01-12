const nameMedia = "Copy of 20230103_kl_PCC2eqwe_C1_T1C_1024x768.png";
const productCode = "PCC2";

// write exact regex productCode
const regexProductCode = new RegExp(`(([?!_])(${productCode})([?!_]))`, "g");

const result = regexProductCode.test(nameMedia);

console.log("result: ", result);
