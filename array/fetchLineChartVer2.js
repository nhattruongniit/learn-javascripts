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
  ]
];

const output = {
  '2001-01-21': {
    name: '2001-01-21',
    chartData: [
      {
        date: "2001-01-21 00:00:00",
        group: "7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !Hourly",
        value: 19
      },
      {
        date: "2001-01-21 01:00:00",
        group: "7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !Hourly",
        value: 20
      },
      {
        date: "2001-01-21 00:00:00",
        group: "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
        value: 30
      },
      {
        date: "2001-01-21 01:00:00",
        group: "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
        value: 31
      },
      
    ]
  },
  '2001-01-27': {
    name: '2001-01-27',
    chartData: [
      {
        date: "2001-01-27 00:00:00",
        group: "7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !Hourly",
        value: 20
      },
      {
        date: "2001-01-27 00:00:00",
        group: "8,1,Environment,Site Outdoor Air Humidity Ratio [kgWater/kgDryAir] !Hourly",
        value: 35
      },
      
    ]
  }
}

let newObj = {
  name: '',
  chartData: []
}

function convert(variables, variableValues) {
  const variableHasTable = variables.reduce((hash, variable) => {
    hash[variable.id] = variable.full_name;
    return hash;
  }, {});
  console.log({ variableHasTable})

  const listData = variableValues.flat();
  if (listData.length === 0) {
    return {};
  }
  const result = {};
  for (let i = 0; i < listData.length; i++) {
    const date = listData[i].datetime.split(' ')[0];
    if (!result[date]) {
      result[date] = {
        name: date,
        chartData: [],
      };
    }
    result[date].chartData.push({
      date: listData[i].datetime,
      group: variableHasTable[listData[i].output_variable_id],
      value: listData[i].value
    });
  }
  console.log({ result })
}

const res = convert(variables, variableValues);

// console.log('res: ', res)