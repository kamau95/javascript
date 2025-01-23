function addNumbers(number) {
  let ans = 0;
  for (let i = 0; i <= number; i++) {
    ans += i;
  }
  return ans;
}


//decorator
function decorator(func) {
  let cache = new Map();
  return function(x) {
    if(cache.has(x)) {
      console.log("getting the result from cache");
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    console.log("calculating and adding to the cache");
    return result;
  }
}

//decorate the addnumber function
let decoratedAddNumbers = decorator(addNumbers);
//call decorated function
console.log(decoratedAddNumbers(5));
console.log(decoratedAddNumbers(5));
console.log(decoratedAddNumbers(5));
console.log(decoratedAddNumbers(4));
console.log(decoratedAddNumbers(5));
