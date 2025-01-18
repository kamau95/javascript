function sayHi() {
  console.log("hi");
}
sayHi.counter = 0;
sayHi.counter++;
console.log(sayHi.counter);
sayHi();

//using closure and function properties
function makeCounter () {
  let count = 0;
  function counter() {
    count++;//accessing the closures value
  }
  counter.set = function(value) {
    return count = value;//accessing the closures value
  }
  counter.decrease = function(){
    return count--;//accessing the closures value
  }
  return counter;
}
let counter = makeCounter();

//sum with abitrary no of brackets
function sum(a) {
  let total_sum = a;
  function calc(b){
    total_sum += b;
    return calc;
  }

  calc.toString = function() {
    return total_sum;
  }
  return calc;
}
console.dir(+sum(9)(3)(12));
console.dir(sum(9)(3)(12));
