let user = {
  name: "kiogora",
  age: 12
}
let descriptor = Object.getOwnPropertyDescriptor(user, "age");
console.log(JSON.stringify(descriptor));
