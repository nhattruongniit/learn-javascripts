const input = ['render', 'render2', 'item3', 'item4'];

const output = [
  {
    title: "render",
    des: 'cuto',
    service: ['service1-1', 'service1-2', 'service1-3', 'service1-4', 'service1-5', 'service1-6']
  }, {
    title: "render 2",
    des: 'cuto 2',
    service: ['service2-1', 'service2-2', 'service2-3', 'service2-4']
  }
]


function convert(array, alternate) {
  let firstArray = true;
  for (const item of array) {
    const halfIndex = Math.round(item.service.length / 2) - 1;
    return item.service.reduce((res, item, index) => {
      if (firstArray) {
        res[0].push(item);
        if (alternate || index >= halfIndex) {
          firstArray = false;
        }
      } else {
        res[1].push(item);
        if (alternate) {
          firstArray = true;
        }
      }
      return res;
    }, [[], []]);
  }
}

const result = convert(output, false)

console.log(result)