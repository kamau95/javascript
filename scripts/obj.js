//recap on objects:create, add prop , delete prop
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//check emptiness
//isEmpty(obj) returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  for(let key in obj) {
    //if loop runs there is a property
    return false;
  }
  return true;
}

// altenative of checking emptiness
function wasEmpty(obj){
 return Object.keys(obj).length === 0;
}

//checking the sum
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);
  
//Multiplying numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
