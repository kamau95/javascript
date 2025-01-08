//sorting an array using one of it property eg age
function sortByAge(users) {
  users.sort( (a, b) => {
   return  a.age - b.age;
  });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
