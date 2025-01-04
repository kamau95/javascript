 function filterRange(arr, a, b) {
   let new_arr = arr.filter(item => item >= a && item <= b);
   return new_arr;
 }

let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
console.log(filtered);

function filterRangeInPlace(arr, a, b) {

