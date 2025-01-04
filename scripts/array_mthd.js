let fruits = ["mango", "banana", "cherry", "strawberry"];
fruits.forEach((fruit, index, array) => {
  console.log(`vitamins are found in ${fruit} at index ${index} from the list ${array}`);
  });

let users = [
  {id: 2, name: "kimani", location: "gaiti"},
  {id: 6, name: "james", location: "kitui"},
  {id: 45, name: "mwenda", location: "ruiru"},
  {id: 40, name: "njoroge", location: "ruiru"},
  {id: 9, name: "ann", location: "ruiru"},
]
//find looks for one that makes the funtion return true
let user = users.find( item => item.id === 45);
console.log(user.location);

//filter looks for many
let ruiru_residents = users.filter( item => item.location == "ruiru")
console.log(ruiru_residents);

let scores = [23,34,6,3,45,67,1,23,67,90,12,33,44,15];
scores.sort( (a, b) => a - b);
console.log(scores);
