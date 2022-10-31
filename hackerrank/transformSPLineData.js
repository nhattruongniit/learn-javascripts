const input = [
  {
    app_id: "id1443249551",
    clicks: 283,
    date: "2022-10-22",
    impressions: 1058,
  },
  {
    app_id: "id1443249551",
    clicks: 276,
    date: "2022-10-23",
    impressions: 1175,
  },
  {
    app_id: "id1443249551",
    clicks: 191,
    date: "2022-10-21",
    impressions: 720,
  },
  {
    app_id: "id1443249551",
    clicks: 191,
    date: "2022-10-24",
  },
];

/*
output
{
  categories: ["2022-10-21", "2022-10-22", "2022-10-23"],
  series: [
    {
      name: "clicks",
      data: [191, 283, 276],
    },
    {
      name: "impressions",
      data: [720, 1058, 1175],
    },
  ]
}
*/

// order by date
const sorted = input.sort((a, b) => new Date(a.date) - new Date(b.date));

const res = sorted.reduce(
  (acc, curr) => {
    const { app_id, clicks, date, impressions } = curr;
    if (!acc.categories.includes(date)) {
      acc.categories.push(date);
    }
    if (clicks) {
      acc.series[0].data.push(clicks);
    }
    if (impressions) {
      acc.series[1].data.push(impressions);
    }
    return acc;
  },
  {
    categories: [],
    series: [
      { name: "clicks", data: [] },
      { name: "impressions", data: [] },
    ],
  }
);

console.log("res: ", sorted);

// function transformSPLineData(data) {
//   const categories = [];
//   const series = [
//     {
//       name: "clicks",
//       data: [],
//     },
//     {
//       name: "impressions",
//       data: [],
//     },
//   ];

//   data.forEach((item) => {
//     if (!categories.includes(item.date)) {
//       categories.push(item.date);
//     }
//     if (item.clicks) {
//       series[0].data.push(item.clicks);
//     }
//     if (item.impressions) {
//       series[1].data.push(item.impressions);
//     }
//   });

//   return {
//     categories,
//     series,
//   };
// }
