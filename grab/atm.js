/* Viết phần mềm rút tiền cho ATM. Trong máy có những loại tiền và số lượng như sau:
[
  {
    name: 1000,
    quantity: 100,
  },
  {
    name: 5000,
    quantity: 10
  },
  {
    name: 10000,
    quantity: 2
  },
  {
    name: 50000,
    quantity: 10
  },
  {
    name: 100000,
    quantity: 10
  },
]

Viết function, param 1 là số tiền cần rút, param 2 là các mệnh giá tiền có trong máy ATM.
Function trả về các loại tiền sẽ được rút.

Chẳng hạn:
Số tiền cần rút: 187000
=> kq atm:
[
  {
    name: 100000,
    quantity: 1,
  }
  {
    name: 50000,
    quantity: 1
  },
  {
    name: 10000,
    quantity: 1
  },
  {
    name: 20000,
    quantity: 1,
  },
  {
    name: 1000,
    quantity: 7
  }
]

*/

// count of nominals in ATM
const limits = [
  {
    name: 1000,
    quantity: 100
  },
  {
    name: 5000,
    quantity: 10
  },
  {
    name: 10000,
    quantity: 2
  },
  {
    name: 50000,
    quantity: 10
  },
  {
    name: 100000,
    quantity: 10
  }
];

const money = 1000;
function withdraw(money, limits) {
  console.log(`Số tiền cần rút là: ${money}`);
  const nominals = limits.sort((a, b) => b.name - a.name);
  const result = [];
  let total = 0;
  for (const price of nominals) {
    let subQuantity = 0;
    for (let j = 0; j < price.quantity; j++) {
      if (total + price.name <= money) {
        total += price.name;
        subQuantity++;
      }
    }
    if (subQuantity > 0) {
      result.push({
        name: price.name,
        quantity: subQuantity
      });
    }

    if (total >= money) break;
  }

  return result;
}

const result = withdraw(1000, limits);

console.log("Tổng số ATM phải rút là: ", result);
