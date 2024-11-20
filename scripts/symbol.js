let usr = {
  name: "james",
  age: 24,
  status: "boss"
};

//add symbol to my object
const details = Symbol("personal");
usr[details] = {loggedinAt: new Date(), title: usr.status};

//print keys - you notice symbol is not affected by iteration 
console.log(usr);
console.log(Object.keys(usr));
for (let key in usr) {
  console.log(key);
}

//Object.assign copies both string and symbol properties
let id = Symbol("id");
let usr1 = {
  [id]: 123
};

let clone = Object.assign({}, usr1);

console.log(clone);

//create a global symbol - stored in globale registry
let global_sym = Symbol.for("name6");
console.log(`global symbol: ${Symbol.keyFor(global_sym)}`);

let local_sym = Symbol("name");
console.log(`local symbol: ${Symbol.keyFor(local_sym)}`);//undefined u cant find loca;l symbol in global registry

//trying to iterate object that has a symbol
let food = {};
food.type = "fruits";
let healing = Symbol("healing foods");
food[healing] = {amount: "2 litres", name: "coconut oil"};
console.log(Reflect.ownKeys(food));
