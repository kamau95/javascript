// iterating through an array using loops
const array_str = ["C is fun", "Python is cool", "Javascript is amazing"];
for (let i = 0; i < array_str.length; i++) {
  console.log(array_str[i]);
}

//using while loop
const array_str1 = ["C is fun", "Python is cool", "Javascript is amazing"];
let i = 0;
while ( i < array_str1.length) {
  console.log(array_str1[i]);
  i++;
}

// prints x times “C is fun” -> x is the first argument of the script
const x = Number(process.argv[2]);
if (!isNaN(x)) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences")
}

//printing square from the argument given
const size = Number(process.argv[2]);
if (!isNaN(size)) {
  for (let i=0; i < size; i++) {
    let square = "";
    for (let j = 0; j < size; j++) {
      square += "x";
    }
    console.log(square);
  }
} else {
  console.log("Missing size")
}

//prints the addition of 2 integers
function add(a, b) {
  return a + b;
}
const first = Number(process.argv[2]);
const second = Number(process.argv[3]);
let result = add(first, second);
console.log(result);

//computes and prints a factorial
let n = Number(process.argv[2]);
let ans = 1;
if (n >= 0) {
  while ( n > 1 ) {
    ans *= n;
    n--;
  }
  console.log(ans);
} else {
  console.log("no factorial for negative numbers");
}
