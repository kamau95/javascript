//Sum all numbers till the given one
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n-1);
  }
}

console.log(sumTo(100));
console.log(sumTo(4));

//use recursion to generate fibonacci
function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n-1) + fib(n - 2);
  }
}
console.log(fib(3));
console.log(fib(77)); // 5527939700884757

