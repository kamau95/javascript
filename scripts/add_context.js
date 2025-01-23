 class Calculator {
   constructor(name) {
     this.name = name;
   }

   addNumbers(number) {
     console.log(`context is: `, this);
     let ans = 0;
     for(let i = 0; i <= number; i++) {
       ans += i;
     }
     return `${this.name}  calculated beneath sum ${ans}`;
   }
 }

//decorator
function decorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      console.log("getting ans from cache");
      return cache.get(x);
    }
    const result = func.call(this, x);
    console.log("calculate and save in cache");
    cache.set(x, result);
    return result;
  }
}
let superCalc = new Calculator("super-calculator");
let decorated = decorator(superCalc.addNumbers.bind(superCalc));
console.log(decorated(5));

