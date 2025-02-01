let user = {
  firstname: "mwiti",
  sayHi() {
    console.log(`hello ${this.firstname}`);
  }
};
setTimeout(user.sayHi, 2000);

//add wrapper
setTimeout( function() {
  user.sayHi();
}, 2000);

//using bind
let user1 = {
  firstname: "mwendate",
  greetings(phrase) {
    console.log(`${phrase} ${this.firstname}`);
  }
};

let bounded = user1.greetings.bind(user1);
bounded("habari ya asubuhi");
