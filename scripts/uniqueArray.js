function unique(arr) {
  let unique_array = [ ...new Set(arr)];
  return unique_array;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));
