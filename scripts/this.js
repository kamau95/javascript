let user = {
  "name": "kimani",
  "age": 45,
  "sayHi": function() {
    console.log(`hello ${this.name}`);
  }
};

  let admin = user;
  admin.sayHi();

//using a function defined in an object independently needs explicit binding
let user1 = {
  "name": "jane",
  greet: function() {
    console.log(`heello ${this.name}`);
  }
};
//let greetings = user1.greet;
//greetings() // wont work
let greetings = user1.greet.bind(user1);
greetings();

//Create an object calculator with three methods
//read() prompts for operands, sum() and mul()
let calculator = {
  read: function() {
    this.a = +prompt("enter value a", '0'); 
    this.b = +prompt("enter value b", '0');
  },
  sum: function() {
    return this.a + this.b
  },
  mul: function() {
    return this.a * this.b
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
