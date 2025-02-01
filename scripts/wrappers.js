// Wrapper in Functional Decorators
//a logging decorator might log the arguments passed to the function and its return value.
function log(func) {
  function wrapper(...args) {
    console.log(`am logging the called function ${func.name}`);
    let result = func(...args);
    wrapper.args = args;
    return result;
  }
  return wrapper;
}


function add(a, b) {
  return a + b;
}
let loggedAdd = log(add);
console.log(loggedAdd(3, 6));
console.log(`calls used these values: ${loggedAdd.args}`);
