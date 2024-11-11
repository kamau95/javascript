//this script prints the first argument passed to it
const args1 = process.argv;
if (args1.length > 2) {
  console.log(args1[2]);
} else {
  console.log("no argument");
}

//trying to concatenate the arguments
const args = process.argv;
console.log(`${args[2]} is ${args[3]}`);

//convert argument to a number
const arg = process.argv;
const convertedArg = Number(arg[2]);
if (!isNaN(convertedArg)) {
  console.log(`My number: ${convertedArg}`);
} else {
  console.log("Not a number");
}
