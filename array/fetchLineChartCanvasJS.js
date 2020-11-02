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
  const listData = variableValues.flat();
  if (listData.length === 0) {
    return {};
  }
  const result = {};
  const newPoint = [];
  variables.map((item, key) => {
    const newAbc = {
      type: "line",
      showInLegend: true,
      name: item.full_name,
      markerType: "dash",
      xValueFormatString: "DD MMM, YYYY",
      color: item.bgColor,
      dataPoints: mapDataPoint(variableValues[key])
    }
    newPoint.push(newAbc)
  })

  for (let i = 0; i < listData.length; i++) {
    const date = listData[i].datetime.split(' ')[0];
    if (!result[date]) {
      result[date] = {
        name: date,
        chartData: newPoint,
      };
    }
  }

  return { result }

}

const { result } = convert(variables, variableValues);

console.log('res: ', result['2001-01-21'].chartData)

result['2001-01-21'].chartData.map(item => {
  console.log('===', item.dataPoints)
})