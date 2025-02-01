function spy(func) {
  let calls = [];
  function wrapper(...args) {
    calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = calls;
  return wrapper;
}

function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

let workDecorated = spy(work);

workDecorated(1, 2); // 3
workDecorated(4, 5); // 9

for (let args of workDecorated.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

