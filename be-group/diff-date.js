const waiter = "truong nam";
const input = "2019-1-1 to 2019-1-3";

const generateDate = input => {
  const waiters = waiter.split(" ");
  const dates = input.split("to");
  const date1 = new Date(dates[0]);
  const date2 = new Date(dates[1]);
  const diff = (date2 - date1) / (1000 * 60 * 60 * 24);
  const dayLength = diff + 1;
  const result = [];

  waiters.forEach(waiter => {
    let dateIndex = 0;
    while (dateIndex < dayLength) {
      let currentDay = new Date(date1);
      currentDay = `${waiter} will serve on ${currentDay.getFullYear()} - ${currentDay.getMonth() +
        1} - ${currentDay.getDate() + dateIndex}`;
      result.push(currentDay);
      dateIndex++;
    }
  });
  return result;
};

const result = generateDate(input);

console.log("result: ", result);
