const plottedVariable = [
  {
    bgColor: "#c324ce",
    full_name: "7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !TimeStep",
    id: 1,
    name: "Environment,Site Outdoor Air Drybulb Temperature",
  },
  {
    bgColor: "#6875d6",
    full_name: "570,1,TRANSFORMER 1,Transformer Efficiency [] !TimeStep",
    id: 2,
    name: "TRANSFORMER 1,Transformer Efficiency",
  }
]

const arrayVariables = [
  {
    datetime: "2001-01-14 00:00:00",
    id: 1,
    output_variable_id: 1,
    value: "-12.600000000000002"
  },
  {
    datetime: "2001-01-14 00:15:00",
    id: 14,
    output_variable_id: 1,
    value: "-10.8",
  },
  {
    datetime: "2001-01-14 10:45:00",
    id: 561,
    output_variable_id: 2,
    value: "0.977742497351429"
  },
  {
    datetime: "2001-01-22 10:45:00",
    id: 412,
    output_variable_id: 2,
    value: "0.123"
  },
  {
    datetime: "2001-01-15 10:45:00",
    id: 12,
    output_variable_id: 2,
    value: "0.512"
  }
]

const output = [
  {
    bgColor: "#c324ce",
    full_name: "7,1,Environment,Site Outdoor Air Drybulb Temperature [C] !TimeStep",
    id: 1,
    name: "Environment,Site Outdoor Air Drybulb Temperature",
    variableValues: [
      {
        datetime: "2001-01-14 00:00:00",
        id: 1,
        output_variable_id: 1,
        value: "-12.600000000000002"
      },
      {
        datetime: "2001-01-14 00:15:00",
        id: 14,
        output_variable_id: 1,
        value: "-10.8",
      },
    ]
  },
  {
    bgColor: "#6875d6",
    full_name: "570,1,TRANSFORMER 1,Transformer Efficiency [] !TimeStep",
    id: 2,
    name: "TRANSFORMER 1,Transformer Efficiency",
    variableValues: [
      {
        datetime: "2001-01-14 10:45:00",
        id: 561,
        output_variable_id: 2,
        value: "0.977742497351429"
      },
      {
        datetime: "2001-01-22 10:45:00",
        id: 412,
        output_variable_id: 2,
        value: "0.123"
      },
      {
        datetime: "2001-01-15 10:45:00",
        id: 12,
        output_variable_id: 2,
        value: "0.512"
      }
    ]
  }
]

const variableHash = plottedVariable.reduce((hash, variableItem) => {
  hash[variableItem.id] = {...variableItem, variableValues: []};
  return hash
}, {})

arrayVariables.forEach(variableItem => {
  variableHash[variableItem.output_variable_id].variableValues.push(variableItem)
})

console.log('result: ', variableHash)
