const input = [
  {
      "date": "2025-05-18",
      "value": 0
  },
  {
      "date": "2025-05-19",
      "value": 0
  },
  {
      "date": "2025-05-20",
      "value": 0
  },
  {
      "date": "2025-05-25",
      "value": 0
  },
  {
      "date": "2025-05-26",
      "value": 0
  },
  {
      "date": "2025-05-27",
      "value": 0
  },
  {
      "date": "2025-06-01",
      "value": 0
  },
  {
    "date": "2025-06-02",
    "value": 0
},
];

const output = ['2025-05-18 00:00:00,2025-05-19 00:00:00', '2025-05-20 00:00:00,2025-05-25 00:00:00', '2025-05-26 00:00:00,2025-05-27 00:00:00', '2025-06-01 00:00:00'];

// how to convert input to output
const res = [];
let start = input[0].date;
let end = input[0].date;
for (let i = 1; i < input.length; i++) {
  if (new Date(input[i].date) - new Date(end) === 86400000) {
    end = input[i].date;
  } else {
    res.push(`${start} 00:00:00,${end} 00:00:00`);
    start = input[i].date;
    end = input[i].date;
  }
}
res.push(`${start} 00:00:00,${end} 00:00:00`);
console.log(res);