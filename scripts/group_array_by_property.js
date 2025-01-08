function groupById(arr) {
  let groupedById = arr.reduce( (accum, item) => {
    accum[item.id] = item;
    return accum;
  }, {});
  return groupedById;
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById);
console.log(usersById['ann']);

