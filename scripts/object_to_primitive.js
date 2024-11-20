//the simple way using metods directly
let fruits = {
  name: "mango",
  amount: 46,
  toString() {
    return this.name;
  },
  valueOf() {
    return this.amount;
  }
};

console.log(5 + fruits); //uses number hint
console.log("want a sweet fruit " + fruits);//uses string hint

//comple and certain way using Symbol.toPrimitive() method
let values = {
  times: 7,
  phrase: "how often do you drink water in a day",
  [Symbol.toPrimitive](hint) {
   return hint === "string" ? this.phrase : this.times;
  }
};
console.log(2 + values);
console.log(values + " twice a day");
