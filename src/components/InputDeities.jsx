

export const inputDetails = [
  {
    id: '1',
    name: 'username',
    placeholder: 'e.g.Jane Mane',
    label: 'CARDHOLDER NAME',
    require: 'true',
    type: "text",
    small: '',
  },
  {
    id: '2',
    name: 'number',
    label: 'CARD NUMBER',
    paten: "[0-9]",
    require: 'true',
    type: 'text',
    placeholder: 'e.g.1234 5678 9123 0000',
    small: 'Wrong formate numbers only',
  },
]

export const second = [
  {
    id: '3',
    require: 'true',
    type: 'number',
    small: 'Wrong formate numbers only',
    name: 'month',
    placeholder: 'MM',
     maxLength:'2'
  },
  {
    id: '4',
    require: 'true',
    type: 'number',
    small: 'Wrong formate numbers only',
    name: 'year',
    placeholder: 'YY',
     maxLength:'2'

  },
]
export const last = [
  {
    id: '5',
    require: 'true',
    type: 'number',
    name: 'csv',
    placeholder: 'e.g.123',
    label: 'CSV',
     maxLength:'3'

  },

]