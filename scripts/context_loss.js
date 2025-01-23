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

/*
//creating a decorator
function decorator(func) {
  let cache = new Map();
  return function(x) {
    if ( cache.has(x) ) {
      console.log("getting ans from cache");
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    console.log("calculating and save in cache");
    return result;
  }
}

//decorate function
let decorated_addNumbers = decorator(home_calc.addNumbers); //wrapping an object method fails
console.log(decorated_addNumbers(5)); //fails becomes undefined this loses context
*/

//fixed decorator which preserves context
function decorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      console.log("getting result from saved cache");
      return cache.get(x);
    }
    let result = func(this, x);
    console.log("calculating the result and save it");
    return result;
  }
}

let magic_calc = new Calculator("magic");
let decorated_addNumbers = decorator(magic_calc.addNumbers.bind(magic_calc));
console.log(decorated_addNumbers(5));
