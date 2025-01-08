function getAverageAge(users) {
  let total_age = 0, length = 0;
  for(let item of users) {
    total_age += item.age;
    length = users.length;
  }
  return total_age / length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) );

//using reduce method
function averageAge(users) {
  return users.reduce( (accumulator, item) => accumulator + item.age, 0) / users.length;
}
console.log(averageAge(arr));
