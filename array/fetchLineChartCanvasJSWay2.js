const variables = [
  {
    id:1,
    name:"Environment,Site Outdoor Air Drybulb Temperature",
    full_name:"7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !Hourly",
    units:"C",
    type:"hourly",
    is_meter:0,
    simulation_id:4,
    bgColor:"#2cbd98"
  },
  {
    id:2,
    name: "Environment,Site Outdoor Air Humidity Ratio",
    full_name:"8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
    units:"CkgWater/kgDryAir",
    type:"hourly",
    is_meter:0,
    simulation_id:4,
    bgColor:"#72b7e2"
  },
];

const variableValues = [
  [
    {
      output_variable_id: 1,
      value: "19",
      datetime: "2001-01-21 00:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 1,
      value: "20",
      datetime: "2001-01-21 01:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 1,
      value: "20",
      datetime: "2001-01-27 00:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 1,
      value: "50",
      datetime: "2001-01-27 01:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
  ],
  [
    {
      output_variable_id: 2,
      value: "30",
      datetime: "2001-01-21 00:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 2,
      value: "31",
      datetime: "2001-01-21 01:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 2,
      value: "35",
      datetime: "2001-01-27 00:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
    {
      output_variable_id: 2,
      value: "20",
      datetime: "2001-01-27 01:00:00",
      min_datetime: null,
      min_value: null,
      max_datetime: null,
      max_value: null,
    },
  ]
];

const output = {
  '2001-01-21': [
    {
      type: "line",
      showInLegend: true,
      name: "7,1,Environment,Site Outdoor Air DrybulValuesVakb Temperature [C] !Hourly",
      markerType: "dash",
      xValueFormatString: "DD MMM, YYYY",
      color: "#6e8675",
      dataPoints: [
        { label: "2001-01-21 00:00:00", y: 19 },
        { label: "2001-01-21 01:00:00", y: 20 },
      ]
    },
    {
      type: "line",
      showInLegend: true,
      name: "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
      markerType: "dash",
      xValueFormatString: "DD MMM, YYYY",
      color: "#8482f1",
      dataPoints : [
        { label: "2001-01-21 00:00:00", y: 31 },
        { label: "2001-01-21 01:00:00", y: 35 },
      ]
    }
  ],
  '2001-01-27': [
    {
      type: "line",
      showInLegend: true,
      name: "7,1,Environment,Site Outdoor Air DrybulValuesVakb Temperature [C] !Hourly",
      markerType: "dash",
      xValueFormatString: "DD MMM, YYYY",
      color: "#6e8675",
      dataPoints: [
        { label: "2001-01-27 00:00:00", y: 19 },
        { label: "2001-01-27 01:00:00", y: 20 },
      ]
    },
    {
      type: "line",
      showInLegend: true,
      name: "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
      markerType: "dash",
      xValueFormatString: "DD MMM, YYYY",
      color: "#8482f1",
      dataPoints : [
        { label: "2001-01-27 00:00:00", y: 31 },
        { label: "2001-01-27 01:00:00", y: 35 },
      ]
    }
  ]
}

const lables = {
  "7,1,Environment,Site Outdoor Air DrybulValuesVakb Temperature [C] !Hourly": "#6e8675",
  "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly" :"#8482f1"
}

let newObj = {
  name: '',
  chartData: []
}


function mapDataPoint(variableValue) {
  const array = [];
  variableValue.map(item => {
    array.push({
      label: item.datetime,
      y: Number(item.value)
    })
  })
  return array;
}

function convert(variables, variableValues) {
  const gData = {};
  const gMap = variables.reduce((hashMap, variableItem) => {
    hashMap[variableItem.id] = variableItem;
    return hashMap;
  }, {});
  const data = variableValues.flat();
  for (let i = 0; i < data.length; i++) {
    const gDate = data[i].datetime.split(' ')[0];
    if (!gData[gDate]) {
      gData[gDate] = {name: gDate, chartData: {}};
    }
    if (!gData[gDate]['chartData'][data[i].output_variable_id]) {
      gData[gDate]['chartData'][data[i].output_variable_id] = {
        ...gMap[data[i].output_variable_id],
        dataPoints: []
      };
    }
    gData[gDate]['chartData'][data[i].output_variable_id].dataPoints.push({
      label: data[i].datetime, y: parseInt(data[i].value)
    })
  }
  const result = Object.keys(gData).reduce((cc, ca) => {
    cc[ca] = {
      ...gData[ca],
      chartData: Object.values(gData[ca].chartData)
    }
    return cc;
  }, {})
  return { result }
}

const { result } = convert(variables, variableValues);

console.log('res: ', result['2001-01-21'].chartData)

result['2001-01-21'].chartData.map(item => {
  console.log('===', item.dataPoints)
})