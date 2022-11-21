const series = [
  {
    name: "Organic",
    data: [1, 1, 2, null, 2, 3, 4, null, null],
  },
  {
    name: "non-organic",
    data: [3, 4, 5, null, 62, 23, 46, null, null],
  },
];

const total = series.reduce((acc, currItem) => {
  const numbs = currItem.data.map((num, index) => {
    if (acc[index]) {
      return acc[index] + num;
    } else {
      return num;
    }
  });

  return numbs;
}, []);

const percentage = total.map((num, index) => {
  if (index === 0) {
    return 0;
  } else {
    const prevNumber = total[index - 1];
    const diff = prevNumber - num;
    const res = (diff / prevNumber) * 100;
    return `${-Math.round(res)}%`;
  }
});

console.log({ percentage });
