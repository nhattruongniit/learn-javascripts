const input = [
  {
    source: "non-organic",
    inapps: {
      af_interstitial_ads: { count: 13606 },
      af_level: { count: 2949 },
      song_result: { count: 5195 },
      imp_is: { count: 2998 },
    },
  },
  {
    source: "organic",
    inapps: {
      af_interstitial_ads: { count: 2038 },
      af_level: { count: 441 },
      song_result: { count: 770 },
      imp_is: { count: 405 },
    },
  },
];

/*
output
{
  categories: ['af_interstitial_ads', 'af_level', 'song_result', 'imp_is'],
  xAxis: [15644, 3390, 5965, 3403],
  series: [
    {
      name: 'non-organic',
      data: [13606, 2949, 5195, 2998]
    },
    {
      name: 'organic',
      data: [2038, 441, 770, 405]
    }
  ]
}
*/

const result = input.reduce(
  (acc, currItem) => {
    const { inapps, source } = currItem;
    const categories = Object.keys(inapps);
    const seriesData = Object.values(inapps).map((item) => item.count);
    acc.categories = [...new Set([...acc.categories, ...categories])];
    acc.series.push({ name: source, data: seriesData });

    return acc;
  },
  {
    categories: [],
    series: [],
    xAxis: [],
  }
);

const xAxisSorted = result.series
  .reduce((acc, currItem) => {
    return currItem.data.map((item, idx) => acc[idx] + item);
  }, new Array(result.categories.length).fill(0))
  .map((item, index) => ({ index, value: item }))
  .sort((a, b) => b.value - a.value);

result.categories = xAxisSorted.map((item) => result.categories[item.index]);
result.series = result.series.map((item) => {
  item.data = xAxisSorted.map((el) => item.data[el.index]);
  return item;
});
result.xAxis = xAxisSorted.map((xaxis) => xaxis.value);

console.log("result: ", result);
