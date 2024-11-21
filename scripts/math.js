//prompt user for two numbers and sum them
function sum_user_data() {
  let a = parseFloat(process.argv[2]);
  let b = parseFloat(process.argv[3]);

  if (isNaN(a) || isNaN(b)) {
    console.log("enter number as arguments");
  } else {
  console.log( a + b );
  }
}
sum_user_data();

//dealing with precision loss increase or decrease
//bring the number close to an integer
let c = 6.35;
console.log(c.toFixed(1));//precison loss decreased it
console.log((Math.round(c * 10) / 10).toFixed(1));

const Big = require("big.js");
let d = new Big(6.35);
console.log(Math.round(d));
