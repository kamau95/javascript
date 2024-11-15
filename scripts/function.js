/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
checkAge(23);

//same function but using ternary operator
function checkAge1(age) {
  (age < 18) ? true : confirm('Did parents allow you?');
}
checkAge1(34);
*/
//return the smallest number 
function min(a,b) {
  if (a <= b) {
    return a;
  } else if (b <= a) {
    return b;
  }
}
console.log(min(8,1));

// function is a value
function sayHi() {
  console.log( "Hello" );
}

console.log( sayHi );
