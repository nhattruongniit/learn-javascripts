const input = [
  {
    notification_id: 1,
    title: "good morning",
    seen_at: null
  },
  {
    notification_id: 2,
    title: "good afternoon",
    seen_at: null
  },
  {
    notification_id: 3,
    title: "good evening",
    seen_at: "2015-03-04"
  },
  {
    notification_id: 4,
    title: "good midnight",
    seen_at: null
  },
  {
    notification_id: 5,
    title: "good night",
    seen_at: null
  }
];

const getIdNoticeHead = [];
const getTenHeadSeeAtIsNull = input.filter(val => val.seen_at === null);

for (let i = 0; i < getTenHeadSeeAtIsNull.length; i++) {
  getIdNoticeHead.push(getTenHeadSeeAtIsNull[i].notification_id);
}

console.log(getIdNoticeHead);
