//anonymous constructor mode of creation
let usr = new function() {
  this.name = "janty";
  this.greet = function sayHi() {
    console.log(`hello there mr ${this.name}`);
  };
}

let user1 = {};
//use optional chaining to avoid error if property not defined or is dull
user1.greet?.();//no such method in this obj
//usr.greet?.();
