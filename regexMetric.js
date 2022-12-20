const input = ['cm01__fullads_show', 'song_start__song_play_type__replay', 'bannerads']

// result = 'song_start'

// write match function input  match with 'song_start'

const abc = input.find(str => {
  const res = str.match(/song_start/g)
  return res
} )

console.log(abc)