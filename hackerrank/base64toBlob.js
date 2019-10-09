const base64toNameFile = base64 => {
  const imageUrl = base64;
  const block = imageUrl.split(";");
  const nameFile = block[1].split("=")[1].toString();
  return nameFile;
};

const data = {
  expiryDate: "2019-01-07",
  id: 12,
  issuanceDate: "2019-01-04",
  issuancePlace: "12",
  passportNumber: 12,
  pic: {
    pictureIdNumber:
      "data:application/pdf;name=[Smart Contract] A-Survey-of-Attack-on-Ethereum-Smart-Contracts.pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjUgMCBvY",
    pictureOfBuyerHoldingPassport:
      "data:image/png;name=Screenshot from 2018-09-10 13-24-45.png;base64,iVBORw0KGgoAAAANSUhEUgAAAbkAAAFpCAI"
  },
  number: {
    picturePassport:
      "data:image/png;name=Screenshot from 2018-10-29 13-16-53.png;base64,iVBORw0KGgoAAAANSUhEUgAAAX",
    proofOfTemporaryAddress:
      "data:image/png;name=one-way.png;base64,iVBORw0KGgoAAAANSUhEUgAABIUA"
  }
};

const reg = new RegExp(/(data:)/g);
const newObj = {};
const loopData = data => {
  for (const key in data) {
    if (typeof data[key] !== "object") {
      const hasVal = data[key].toString().match(reg);
      if (hasVal != null && hasVal.length > 0) {
        newObj[key] = base64toNameFile(data[key]);
      }
    } else {
      loopData(data[key]);
    }
  }
  return newObj;
};

const result = loopData(data);
console.log("result: ", result);
