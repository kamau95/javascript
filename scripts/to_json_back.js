let user = {
  name: "John Smith",
  age: 35
};
let user_str = JSON.stringify(user);
let user_obj = JSON.parse(user_str);
//shorter
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2 == user_obj);//false objects are compared by reference in memory not value
