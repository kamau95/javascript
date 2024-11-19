//anonymous which is used once created and called once
//well suited for encapsulation
let usr = new function() {
  this.name = "Bob";
  this.age = 45;
}
console.log(usr["name"]);

//another format that can be used to create more than one objects
function Create_usr(name, age) {
  this.name = name;
  this.age = age;
}
let admin = new Create_usr("jane", 48);
console.log(admin["name"]);




