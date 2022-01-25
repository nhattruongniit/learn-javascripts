const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(fakePeople[i], 1000));
    });
};

const getAllData = () => {
    Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(data => {
        console.log(data);
    });
}

getAllData();