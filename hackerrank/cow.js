/* 

Có một con bò đi ăn ở bãi cỏ xa chuồng, mỗi tuần đi 3 lần 2-4-6 mỗi lần mất 30 phút. 
Viết một hàm nhập vào from, to (kiểu Date) trả về tổng thời gian con bò cần để đi ăn xa, 
thời gian tính theo giờ. Ghi chú, to - from không quá một năm

*/

const getTime = (from, to) => {
  let d1 = new Date(from), d2 = new Date(to);
  let totalDays = (d2 - d1) / 1000 / 60 / 60 / 24;
  let startDay = d1.getDay();
  let time = 0;
  for(let i = 0; i < totalDays; i++) {
    startDay % 2 !== 0 ? time += 30: time;
    if(startDay >= 6) {
      startDay = 0;
    } else { startDay++ }
  }
  console.log(`Thoi gian di an co tu ${from} - ${to} >> ${time} phut`);
}

getTime('1/1/2019', '1/15/2019');