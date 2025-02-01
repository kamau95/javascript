class Usr {
  constructor(name, RegNo) {
    this.name = name;
    this.RegNo = RegNo;
  }
  
  greetings() {
    console.log(`hello there js enthusiast i call you ${this.name}`);
  }
}

//new obj
let admin = new Usr("kinoti", 334);
let student = new Usr("jane", 234)

//test what type is class
console.log(typeof(Usr)); //function

//if instance has a prototype property
console.log(admin.prototype); //undefined

//if parent has a prototype property
console.log(Usr.prototype); //{}

//where parent inherits from
console.log(Object.getPrototypeOf(Usr)); //[function: function]

//compare two class instances
console.log(Object.getPrototypeOf(admin) === Object.getPrototypeOf(student)); // true

console.log(Object.getPrototypeOf(Usr) === Object.getPrototypeOf(admin)); // false
