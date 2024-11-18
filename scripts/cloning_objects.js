const _ = require("lodash");
//clone object shallowly using a loop
let obj1 = {
  "name": "James",
  "age": 34,
  "family": "east"
}

let obj2 = {};
for (let key in obj1) {
  obj2[key] = obj1[key];
}
console.log(obj2.family);

//cloning an object using object.assign mthod - still shallow
let obj3 = {};
obj3 = Object.assign(obj3, obj1);
console.log(obj3.family, obj3.age);

//trying a deep clone that supports nested objects
let obj4 = {"name": "kosovo", "fruits":{"mango": 40, "apples": 56}};
let obj5 = JSON.parse(JSON.stringify(obj4));
console.log(obj5["name"]);

//Deep Clone with Libraries (e.g., Lodash), this can clone functioned properties
let obj6 = {
  "name": "njoroge",
  "age": 57,
  "greet": function () {
    console.log(`hello there ${this.name}`);
  },
};
let obj7 = _.cloneDeep(obj6);
obj7.greet;

