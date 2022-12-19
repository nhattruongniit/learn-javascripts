// input = ["me_start", "song_start", "gm00_user_count", "cm05_user_count"];

// number =  'user_count'

// write regex to match with text has contains number
const res = ["me_start", "song_start", "gm00_user_count", "cm05_user_count"].filter((text) => {
  return text.includes('user_count');
}
);

console.log(res)