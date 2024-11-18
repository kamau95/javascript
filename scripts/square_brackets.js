function makeUser(name, age) {
  return {
    name: name,
    age: age
  }
}
let user = makeUser("njoroge", 56);
console.log(user);

//using computed properties- avoids boilerplate code.  being dynamic
function makeUser1(key1, value1, key2, value2) {
  return {
    [key1]: value1,
    [key2]: value2,
  };
}

let user1 = makeUser1("name", "John", "age", 30);
console.log(user1); // { name: "John", age: 30 }
