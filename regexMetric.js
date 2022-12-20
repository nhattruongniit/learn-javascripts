const listOfMetrics = ['fullads', 'videoads', 'song_result']
const metricList = [
  { displayName: "user_count" },
  { displayName: "fullads_show_ready" },
  { displayName: "videoads_show__reward__revive" },
  { displayName: "song_result__song_play_type__replay" },
]

/*
output = [
  { displayName: "user_count" },
  { displayName: "fullads_show_ready", metric: "fullads" },
  { displayName: "videoads_show__reward__revive", metric: "videoads" },
  { displayName: "song_result__song_play_type__replay", metric: "song_result" },
]

*/

// map listOfMetrics and metricList to output
const output = metricList.map(metric => {
  const { displayName } = metric
  const metricName = listOfMetrics.find(metric => displayName.includes(metric))
  return { ...metric, metric: metricName }
})
console.log(output)

