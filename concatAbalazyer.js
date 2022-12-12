const input = {
  activation: [],
  ads_event: [],
  revenue_ulrd: ["gm10_ad_value_from_ironsource", "gm11_is_ad_value_from_ironsource"],
  time_engagement: ["cm04__time_in_app"]
}

const output = ["gm10_ad_value_from_ironsource", "gm11_is_ad_value_from_ironsource", "cm04__time_in_app"]


const res = Object.keys(input).reduce((acc, key) => {
  return acc.concat(input[key]);
}, []);