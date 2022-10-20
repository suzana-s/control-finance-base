const valuesCategory = ["Entrada", "Saída"];

let insertedValues = [
  {
    id: 1,
    value: 90.0,
    categoryID: 1,
  },
  {
    id: 2,
    value: 40.0,
    categoryID: 2,
  },
  {
    id: 3,
    value: 15.5,
    categoryID: 1,
  },
];

let insertedValuesfiltered = [
  {
    id: 1,
    value: 90.0,
    categoryID: 'Entradas',
  },
  {
    id: 2,
    value: 40.0,
    categoryID: 'Saídas',
  },
  {
    id: 3,
    value: 15.5,
    categoryID: 'Entradas',
  },
];

let input = document.querySelector('input')
let valueinput = input.value
let buttonForm = document.querySelector('.bt-add') 



