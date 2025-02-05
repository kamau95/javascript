let user = {
  name: 'kamau',
  [Symbol.toStringTag]: "watumizi"
};

console.log(Object.prototype.toString.call(user));

//without the overriding
let user2 = {
  name: "john"
}

console.log(Object.prototype.toString.call(user2)); // "[object Object]"

//using {} instead of Object.prototype
console.log(Object.prototype.toString.call(123));
// Output: "[object Number]"

console.log({}.toString.call(123));
// Output: "[object Number]" (Same result ✅)

