/* Bai tap


input: from 1 file.txt

truong knife 90 2
truong pot 200 3
nguyen waffte 120 6
nguyen fish 150 7 


output: 
{
  "truong": [
    {
      "name": knife,
      "price": "90",
      "quanlity": "2"
    },
    {
      "name": pot,
      "price": "200",
      "quanlity": "3"
    }
  ],
  "nguyen": [
    {
      "name": waffte,
      "price": "120",
      "quanlity": "6"
    },
    {
      "name": fish,
      "price": "150",
      "quanlity": "7"
    }
  ],
}

*/

var fs = require('fs');

var output = fs.readFileSync('data/data-reduce.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output: ', JSON.stringify(output, null, 2));