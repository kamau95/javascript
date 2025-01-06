const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];
let total_price = 0;
items.forEach( item => total_price += item.price);
console.log(total_price);

//using reduce() mthd
let total_price1 = items.reduce( (accumulator, item) => {
  return accumulator += item.price;
}, 1);
console.log(total_price1);

//group simillar items using reduce()
const groceries = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];
let grouping = groceries.reduce( (accu, currentItem) => {
  let category = currentItem.category
  if(!accu[category]) {
    accu[category] = [];
  }
  accu[category].push(currentItem.name)
  return accu;
}, {});
console.log(grouping);

//group above array of objects by age
var array = [
    {name: 'John',  age: 25},
    {name: 'Kate',  age: 21},
    {name: 'Pablo', age: 25},
    {name: 'Denis', age: 25},
    {name: 'Chris', age: 31}
];

let age_group = array.reduce( (accum, item) => {
  let age_category = item.age;
  if(!accum[age_category]) {
    accum[age_category] = [];
  }
  accum[age_category].push(item.name);
  return accum;
}, {} );
console.log(age_group);
