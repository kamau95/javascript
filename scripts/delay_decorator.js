//Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
function delay(f, ms) {
  function wrapper(...args) {
    console.log(`you will have a delay of: ${ms} milliseconds`);
    setTimeout( ()=> {
      let result = f.apply(this, args);
      console.log(`Result after delay: ${result}`);
    }, ms);
  }
  return wrapper;
}

function add(a, b) {
  return a+b;
}

let decoratedAdd = delay(add, 4000);
decoratedAdd(45, 12);
